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
import image1 from '../asset/orderPics/image1.png';
import image4 from '../asset/orderPics/image4.png';
import image5 from '../asset/orderPics/image5.png';
import image6 from '../asset/orderPics/image6.png';
import image7 from '../asset/orderPics/image7.png';
import image8 from '../asset/orderPics/image8.png';
import image9 from '../asset/orderPics/image9.png';
import image10 from '../asset/orderPics/image10.png';

const {width} = Dimensions.get('window');

// Array of images
const orderImages = [
  image1,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

// Function to get a random image
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * orderImages.length);
  return orderImages[randomIndex];
};

const Orders = () => {
  const navigation = useNavigation();
  const recentOrders = [
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      price: '$50.00',
      status: 'New Orders',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      price: '$75.00',
      status: 'Cancelled',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      price: '$100.00',
      status: 'Completed',
      image: getRandomImage(), // Assign a random image
    },

    // Add more orders as needed...
  ];

  // Function to determine badge color
  const getBadgeStyle = status => {
    switch (status) {
      case 'Cancelled':
        return {backgroundColor: '#AA1A1A'};

      case 'Completed':
        return {backgroundColor: '#409C59'};

      case 'New Orders':
        return {backgroundColor: '#2039B7'};
      default:
        return {backgroundColor: '#e0e0e0'};
    }
  };

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
            onPress={() => navigation.navigate('Chat')}
            style={[styles.backButton, styles.shadow]}>
            <Image source={chat} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {recentOrders.map(order => (
            <View key={order.id} style={styles.listItem}>
              <Image source={order.image} style={styles.listIcon} />
              <View style={styles.orderInfo}>
                <View style={styles.orderIdContainer}>
                  <Text style={styles.orderId}>Order ID: {order.id}</Text>
                  <View style={[styles.newBadge, getBadgeStyle(order.status)]}>
                    <Text style={styles.badgeText}>{order.status}</Text>
                  </View>
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
  listIcon: {width: 50, height: 50, marginRight: 10}, // Increased size for better visibility
  orderInfo: {flex: 1},
  orderIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderId: {fontSize: 16, fontWeight: '500', color: '#333333'},
  newBadge: {
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
