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
import chatIcon from '../asset/icons/chat.png';
import dashboardIcon from '../asset/icons/dashboard.png';
import ordersIcon from '../asset/icons/orders.png';

const {width} = Dimensions.get('window');

const Notification = () => {
  const navigation = useNavigation();

  // Updated recentOrders with status instead of isNew
const recentOrders = [
  {
    id: '12345',
    date: '01-10-2024',
    time: '10:30 AM',
    price: '$50',
    status: 'New Orders',
  },
  {
    id: '12346',
    date: '02-10-2024',
    time: '11:00 AM',
    price: '$75',
    status: 'Cancelled',
  },
  {
    id: '12347',
    date: '03-10-2024',
    time: '01:00 PM',
    price: '$100',
    status: 'Completed',
  },
  {
    id: '12348',
    date: '04-10-2024',
    time: '02:00 PM',
    price: '$60',
    status: 'New Orders',
  },
  {
    id: '12345',
    date: '01-10-2024',
    time: '10:30 AM',
    price: '$50',
    status: 'New Orders',
  },
  {
    id: '12346',
    date: '02-10-2024',
    time: '11:00 AM',
    price: '$75',
    status: 'Cancelled',
  },
  {
    id: '12347',
    date: '03-10-2024',
    time: '01:00 PM',
    price: '$100',
    status: 'Completed',
  },
  {
    id: '12348',
    date: '04-10-2024',
    time: '02:00 PM',
    price: '$60',
    status: 'New Orders',
  },
  {
    id: '12345',
    date: '01-10-2024',
    time: '10:30 AM',
    price: '$50',
    status: 'New Orders',
  },
  {
    id: '12346',
    date: '02-10-2024',
    time: '11:00 AM',
    price: '$75',
    status: 'Cancelled',
  },
  {
    id: '12347',
    date: '03-10-2024',
    time: '01:00 PM',
    price: '$100',
    status: 'Completed',
  },
  {
    id: '12348',
    date: '04-10-2024',
    time: '02:00 PM',
    price: '$60',
    status: 'New Orders',
  },
  {
    id: '12345',
    date: '01-10-2024',
    time: '10:30 AM',
    price: '$50',
    status: 'New Orders',
  },
  {
    id: '12346',
    date: '02-10-2024',
    time: '11:00 AM',
    price: '$75',
    status: 'Cancelled',
  },
  {
    id: '12347',
    date: '03-10-2024',
    time: '01:00 PM',
    price: '$100',
    status: 'Completed',
  },
  {
    id: '12348',
    date: '04-10-2024',
    time: '02:00 PM',
    price: '$60',
    status: 'New Orders',
  },
  {
    id: '12345',
    date: '01-10-2024',
    time: '10:30 AM',
    price: '$50',
    status: 'New Orders',
  },
  {
    id: '12346',
    date: '02-10-2024',
    time: '11:00 AM',
    price: '$75',
    status: 'Cancelled',
  },
  {
    id: '12347',
    date: '03-10-2024',
    time: '01:00 PM',
    price: '$100',
    status: 'Completed',
  },
  {
    id: '12348',
    date: '04-10-2024',
    time: '02:00 PM',
    price: '$60',
    status: 'New Orders',
  },
  // Add more orders as needed...
];


  // Function to determine badge color (same as in Orders component)
  const getBadgeStyle = status => {
    switch (status) {
      case 'Cancelled':
        return {backgroundColor: '#AA1A1A'};
      case 'Completed':
        return {backgroundColor: '#409C59'};
      case 'New Orders':
        return {backgroundColor: '#2039B7'};
      default:
        return {backgroundColor: '#2039B7'};
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {/* <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={dashboardIcon} style={styles.backButtonImage} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={styles.backButton}>
            <Image source={chatIcon} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View> */}

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Notification</Text>
          {recentOrders.map((order, index) => (
            <View key={`${order.id}-${index}`} style={styles.listItem}>
              <Image source={ordersIcon} style={styles.listIcon} />
              <View style={styles.orderInfo}>
                <View style={styles.orderIdContainer}>
                  <View style={styles.orderIdBadgeContainer}>
                    <Text style={styles.orderId}>Order ID: {order.id}</Text>
                    <View
                      style={[styles.newBadge, getBadgeStyle(order.status)]}>
                      <Text style={styles.badgeText}>{order.status}</Text>
                    </View>
                  </View>
                  <Text style={styles.orderDate}>
                    {order.date} {order.time}
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'rgba(79, 79, 79, 1)',
                    fontWeight: '400',
                    fontFamily: 'Inter',
                    fontSize: 12,
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  backButtonImage: {width: 24, height: 24},
  listContainer: {width: '100%', paddingHorizontal: 10},
  listTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  listIcon: {width: 24, height: 24, marginRight: 10},
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  orderInfo: {flex: 1},
  orderIdContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
    width: '100%',
  },
  orderIdBadgeContainer: {flexDirection: 'row', alignItems: 'center'},
  orderDate: {
    fontSize: 10,
    color: '#666',
    textAlign: 'right',
    fontFamily: 'Mulish',
    fontWeight: '400',
    flex: 1,
    // marginRight: 20,
  },
  orderId: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
  },
  newBadge: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    fontFamily: 'Mulish',
    fontWeight: '600',
  },
});

export default Notification;
