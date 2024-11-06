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

// Sample recent orders data
const recentOrders = [
  {
    id: '12345',
    date: '01-10-2024',
    time: '10:30 AM',
    price: '$50',
    status: 'New Orders',
    image: getRandomImage(),
    customerName: 'Aarav Sharma',
    contactNumber: '98765 43210',
    deliveryAddress: '12, MG Road, Bengaluru, Karnataka, 560001',
  },
  {
    id: '12346',
    date: '02-10-2024',
    time: '11:00 AM',
    price: '$75',
    status: 'Cancelled',
    image: getRandomImage(),
    customerName: 'Sneha Reddy',
    contactNumber: '98765 12345',
    deliveryAddress: '45, Brigade Road, Bengaluru, Karnataka, 560025',
  },
  {
    id: '12347',
    date: '03-10-2024',
    time: '01:00 PM',
    price: '$100',
    status: 'Completed',
    image: getRandomImage(),
    customerName: 'Rajesh Kumar',
    contactNumber: '98765 67890',
    deliveryAddress: '78, Marine Drive, Mumbai, Maharashtra, 400002',
  },
  {
    id: '12348',
    date: '04-10-2024',
    time: '03:00 PM',
    price: '$60',
    status: 'New Orders',
    image: getRandomImage(),
    customerName: 'Pooja Singh',
    contactNumber: '98765 34567',
    deliveryAddress: '34, Connaught Place, New Delhi, 110001',
  },
  {
    id: '12349',
    date: '05-10-2024',
    time: '04:30 PM',
    price: '$80',
    status: 'Completed',
    image: getRandomImage(),
    customerName: 'Vikram Mehta',
    contactNumber: '98765 76543',
    deliveryAddress: '56, Juhu Beach, Mumbai, Maharashtra, 400049',
  },
  {
    id: '12350',
    date: '06-10-2024',
    time: '09:15 AM',
    price: '$90',
    status: 'New Orders',
    image: getRandomImage(),
    customerName: 'Neha Gupta',
    contactNumber: '98765 98765',
    deliveryAddress: '23, Khandala, Pune, Maharashtra, 411001',
  },
  {
    id: '12351',
    date: '07-10-2024',
    time: '02:00 PM',
    price: '$120',
    status: 'Completed',
    image: getRandomImage(),
    customerName: 'Rohit Verma',
    contactNumber: '98765 43212',
    deliveryAddress: '89, Nungambakkam, Chennai, Tamil Nadu, 600034',
  },
  {
    id: '12352',
    date: '08-10-2024',
    time: '05:00 PM',
    price: '$45',
    status: 'Cancelled',
    image: getRandomImage(),
    customerName: 'Anjali Desai',
    contactNumber: '98765 65432',
    deliveryAddress: '101, Banjara Hills, Hyderabad, Telangana, 500034',
  },
  {
    id: '12353',
    date: '09-10-2024',
    time: '11:45 AM',
    price: '$70',
    status: 'Completed',
    image: getRandomImage(),
    customerName: 'Karan Singh',
    contactNumber: '98765 54321',
    deliveryAddress: '15, Sector 17, Chandigarh, 160017',
  },
  {
    id: '12354',
    date: '10-10-2024',
    time: '01:30 PM',
    price: '$85',
    status: 'New Orders',
    image: getRandomImage(),
    customerName: 'Simran Kaur',
    contactNumber: '98765 67812',
    deliveryAddress: '22, Shanti Nagar, Jaipur, Rajasthan, 302001',
  },
  {
    id: '12355',
    date: '11-10-2024',
    time: '04:00 PM',
    price: '$55',
    status: 'Cancelled',
    image: getRandomImage(),
    customerName: 'Tarun Bansal',
    contactNumber: '98765 98712',
    deliveryAddress: '38, MG Road, Surat, Gujarat, 395003',
  },
];


const Orders = () => {
  const navigation = useNavigation();

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
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.backButton, styles.shadow]}>
            <Image source={dashboard} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.topText}> My Orders</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={[styles.backButton, styles.shadow]}>
            <Image source={chat} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          {recentOrders.map(order => (
            <TouchableOpacity
              key={order.id}
              onPress={() =>
                navigation.navigate('OrderDetails', {
                  order,
                })
              }
              style={styles.listItem}>
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
            </TouchableOpacity>
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
    fontSize: 18,
    width: width * 0.5,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
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
  listIcon: {width: 50, height: 50, marginRight: 10},
  orderInfo: {flex: 1},
  orderIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderId: {
    fontSize: 12,
    fontWeight: '400',
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
  orderDate: {
    fontSize: 12,
    color: 'rgba(79, 79,79, 1)',
    fontFamily: 'Mulish',
    fontWeight: '400',
  },
  orderPrice: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'flex-end',
    textAlign: 'right',
    paddingBottom: 10,
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontWeight: '500',
  },
});
