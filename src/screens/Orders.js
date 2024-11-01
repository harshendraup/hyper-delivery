import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import chat from '../asset/icons/chat.png';
import dashboard from '../asset/icons/dashboard.png';
import ordersIcon from '../asset/icons/orders.png';

const {width} = Dimensions.get('window');

const Orders = () => {
  const navigation = useNavigation();
  const recentOrders = [
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      isNew: true,
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      isNew: false,
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      isNew: true,
    },
    {
      id: '12348',
      date: '2024-10-04',
      time: '09:00 AM',
      price: '$120.00',
      isNew: false,
    },
    {
      id: '12349',
      date: '2024-10-05',
      time: '03:00 PM',
      price: '$45.00',
      isNew: true,
    },
    {
      id: '12350',
      date: '2024-10-06',
      time: '12:15 PM',
      price: '$200.00',
      isNew: false,
    },
    {
      id: '12351',
      date: '2024-10-07',
      time: '04:30 PM',
      price: '$60.00',
      isNew: true,
    },
    {
      id: '12352',
      date: '2024-10-08',
      time: '08:45 AM',
      price: '$90.00',
      isNew: false,
    },
    {
      id: '12353',
      date: '2024-10-09',
      time: '02:00 PM',
      price: '$110.00',
      isNew: true,
    },
    {
      id: '12354',
      date: '2024-10-10',
      time: '05:15 PM',
      price: '$30.00',
      isNew: false,
    },
    {
      id: '12355',
      date: '2024-10-11',
      time: '07:00 PM',
      price: '$80.00',
      isNew: true,
    },
    {
      id: '12356',
      date: '2024-10-12',
      time: '10:00 AM',
      price: '$150.00',
      isNew: false,
    },
    {
      id: '12357',
      date: '2024-10-13',
      time: '11:30 AM',
      price: '$70.00',
      isNew: true,
    },
    {
      id: '12358',
      date: '2024-10-14',
      time: '01:45 PM',
      price: '$65.00',
      isNew: false,
    },
    {
      id: '12359',
      date: '2024-10-15',
      time: '03:30 PM',
      price: '$140.00',
      isNew: true,
    },
  ];


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButton, styles.shadow]}>
            <Image source={dashboard} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.topText}>Orders</Text>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButton, styles.shadow]}>
            <Image source={chat} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {recentOrders.map(order => (
            <View key={order.id} style={styles.listItem}>
              <Image source={ordersIcon} style={styles.listIcon} />
              <View style={styles.orderInfo}>
                <View style={styles.orderIdContainer}>
                  <Text style={styles.orderId}>Order ID: {order.id}</Text>
                  {order.isNew && (
                    <View style={styles.newBadge}>
                      <Text style={styles.badgeText}>New Order</Text>
                    </View>
                  )}
                </View>
                <Text
                  style={
                    styles.orderDate
                  }>{`${order.date} ${order.time}`}</Text>
              </View>
              <Text style={styles.orderPrice}>{order.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  backButton: {padding: 10, backgroundColor: 'white', borderRadius: 5},
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  backButtonImage: {width: 24, height: 24},
  topText: {
    textAlign: 'center',
    fontSize: 24,
    width: width * 0.5,
    color: 'black',
    fontWeight: '700',
  },
  listContainer: {width: '100%', paddingHorizontal: 10},
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  listIcon: {width: 24, height: 24, marginRight: 10},
  orderInfo: {flex: 1},
  orderIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderId: {fontSize: 16, fontWeight: '500', color: '#333333'},
  newBadge: {
    backgroundColor: '#2039B7',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {color: 'white', fontSize: 12},
  orderDate: {fontSize: 14, color: '#666'},
  orderPrice: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end',
    textAlign: 'right',
    paddingBottom: 10,
    color: '#333333',
  },
});
