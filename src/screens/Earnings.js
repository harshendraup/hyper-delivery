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
import earningsIcon from '../asset/icons/earnings.png';
import ordersIcon from '../asset/icons/earn.png';
// import backbutton from '../asset/backbutton.png';
import Backbutton from '../asset/SVG/Back';
// import backbutton from '../asset/icons/Group.svg';

const {width} = Dimensions.get('window');

const Earnings = () => {
  const navigation = useNavigation();

  const tilesData = [
    {icon: earningsIcon, title: 'Total Earning', data: '$5000'},
  ];

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
    // Additional unique orders can be added here
  ];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButton, styles.shadow]}>
              <Backbutton/>
            
          </TouchableOpacity>
          <Text style={styles.topText}>Earning</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={[styles.backButton, styles.shadow]}>
            <Image source={chat} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>

        <View style={[styles.tileContainer]}>
          {tilesData.map((tile, index) => (
            <View key={index} style={styles.tile}>
              <View style={styles.tileHeader}>
                <Image source={tile.icon} style={styles.tileIcon} />
                <Text style={styles.tileTitle}>{tile.title}</Text>
              </View>
              <Text style={styles.tileData}>{tile.data}</Text>
            </View>
          ))}
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Payment History</Text>
          {recentOrders.map(order => (
            <View key={order.id} style={styles.listItem}>
              <Image source={ordersIcon} style={styles.listIcon} />
              <View style={styles.orderInfo}>
                <Text style={styles.orderId}>Order ID: {order.id}</Text>
                <Text style={styles.orderDate}>
                  {order.date} {order.time}
                </Text>
              </View>
              <Text style={styles.orderPrice}>{order.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Earnings;

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
  backButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },
  topText: {
    textAlign: 'center',
    fontSize: 24,
    width: width * 0.5,
    color: 'black',
    fontWeight: '700',
  },
  tileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centers the tiles horizontally
    alignItems: 'center', // Ensures that the tiles are vertically centered
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },

  tile: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.9,
    height: 120,
    alignItems: 'center',
    paddingVertical: 10,
    // marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  tileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  tileIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  tileTitle: {
    fontFamily: 'Mulish',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333333',
  },
  tileData: {
    fontFamily: 'Mulish',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
    letterSpacing: 1,
    color: '#333333',
    textAlign: 'center',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333333',
    paddingHorizontal: 10,
  },
  listIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  orderId: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderPrice: {
    fontSize: 20,
    fontWeight: '500',
    alignSelf: 'flex-end',
    flex: 1,
    textAlign: 'right',
    paddingBottom: 10,
    color: '#000000',
    fontFamily: 'Mulish',
  },
});