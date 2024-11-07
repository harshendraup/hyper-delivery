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
import backArrow from '../asset/icons/backArrow.png';
import f1 from '../asset/faces/Ellipse1.png'; // Example icon
import f2 from '../asset/faces/Ellipse2.png'; // Additional example icon
import f3 from '../asset/faces/Ellipse3.png';
import f4 from '../asset/faces/Ellipse4.png';
import f5 from '../asset/faces/Ellipse5.png';
import f6 from '../asset/faces/Ellipse6.png';
import f7 from '../asset/faces/Ellipse7.png';
import f8 from '../asset/faces/Ellipse8.png';
import f9 from '../asset/faces/Ellipse9.png';
import f10 from '../asset/faces/Ellipse10.png';
import f11 from '../asset/faces/Ellipse11.png';
import f12 from '../asset/faces/Ellipse12.png';
import WhiteArrowSVG from '../asset/SVG/WhiteArrow';
// Additional example icon

const {width} = Dimensions.get('window');

// Array of random images
const orderImages = [f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12];
// Add your imported images here

// Function to get a random image
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * orderImages.length);
  return orderImages[randomIndex];
};

const Chat = () => {
  const navigation = useNavigation();

  // Updated recentOrders with random images
  const recentOrders = [
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12345',
      date: '2024-10-01',
      time: '10:30 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },

    {
      id: '12346',
      date: '2024-10-02',
      time: '11:00 AM',
      image: getRandomImage(), // Assign a random image
    },
    {
      id: '12347',
      date: '2024-10-03',
      time: '01:00 PM',
      image: getRandomImage(), // Assign a random image
    },
    // Add more orders as needed...
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
            style={styles.backButton}
            activeOpacity={0.7} // Slight feedback on press
          >
            <Image
              source={backArrow}
              style={{width: 16, height: 16}}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Chats</Text>
          {recentOrders.map((order, index) => (
            <View key={`${order.id}-${index}`} style={styles.listItem}>
              <Image source={order.image} style={styles.buttonImage} />
              <View style={styles.orderInfo}>
                <View style={styles.orderIdContainer}>
                  <Text style={styles.orderId}>Order ID: {order.id}</Text>
                  <Text style={styles.orderDate}>{order.time}</Text>
                </View>
                <Text
                  style={{
                    color: 'rgba(151, 151, 151, 1)',
                    fontFamily: 'Inter',
                    fontWeight: '400',
                    fontSize: 11,
                  }}>
                  Where are you?
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
    marginBottom: -20,
  },
  backButton: {
    padding: 10, // Adjust padding for larger clickable area
    backgroundColor: '#409C59',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 6,
    width: 45, // Set a fixed width
    height: 45, // Set a fixed height
    justifyContent: 'center', // Ensure image is centered
    alignItems: 'center', // Center the image
  },
  // backButtonImage: {width: 24, height: 24},
  buttonImage: {width: 45, height: 45, marginRight: 10},
  listContainer: {width: '100%', paddingHorizontal: 10},
  listTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
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
  orderDate: {
    fontSize: 11,
    color: 'rgba(151, 151, 151, 1)',
    textAlign: 'right',
    fontFamily: 'Inter',
    fontWeight: '600',
    flex: 1,
    marginRight: 20,
  },
  orderId: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Inter',
  },
});

export default Chat;
