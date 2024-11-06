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
import earningsIcon from '../asset/icons/earnings.png';
import orderIcon from '../asset/icons/order.png';
import ordersIcon from '../asset/icons/orders.png';
import productsIcon from '../asset/icons/products.png';
import salesIcon from '../asset/icons/sales.png';

const {width} = Dimensions.get('window');

const Dashboard = () => {
  const navigation = useNavigation();

  const tilesData = [
    {icon: earningsIcon, title: 'Total Earnings', data: '$5000'},
    {icon: orderIcon, title: 'Total Orders', data: '150'},
    {icon: productsIcon, title: 'Total Products', data: '300'},
    {icon: salesIcon, title: 'Total Sales', data: '200'},
  ];

const recentOrders = [
  {
    id: '12345',
    date: '2024-10-01',
    time: '10:30 AM',
    isNew: true,
    price: 29.99, // example price
  },
  {
    id: '12346',
    date: '2024-10-02',
    time: '11:00 AM',
    isNew: false,
    price: 19,
  },
  {
    id: '12347',
    date: '2024-10-03',
    time: '01:00 PM',
    isNew: true,
    price: 34,
  },
  {
    id: '1235',
    date: '2024-10-01',
    time: '10:30 AM',
    isNew: true,
    price: 22,
  },
  {
    id: '1236',
    date: '2024-10-02',
    time: '11:00 AM',
    isNew: false,
    price: 18,
  },
  {
    id: '1237',
    date: '2024-10-03',
    time: '01:00 PM',
    isNew: true,
    price: 39,
  },
  {
    id: '123',
    date: '2024-10-01',
    time: '10:30 AM',
    isNew: true,
    price: 25,
  },
  {
    id: '12w3',
    date: '2024-10-02',
    time: '11:00 AM',
    isNew: false,
    price: 15,
  },
  {
    id: '12573',
    date: '2024-10-03',
    time: '01:00 PM',
    isNew: true,
    price: 28,
  },
  {
    id: '12384',
    date: '2024-10-01',
    time: '10:30 AM',
    isNew: true,
    price: 32,
  },
  {
    id: '12304',
    date: '2024-10-02',
    time: '11:00 AM',
    isNew: false,
    price: 20,
  },
  {
    id: '1234',
    date: '2024-10-03',
    time: '01:00 PM',
    isNew: true,
    price: 27,
  },
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
            <Image source={dashboard} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.topText}>Dashboard</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat')}
            style={[styles.backButton, styles.shadow]}>
            <Image source={chat} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.tileContainer}>
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
          <Text style={styles.listTitle}>Recent Orders</Text>
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
                <Text style={styles.orderDate}>
                  {order.date} {order.time}
                </Text>
              </View>
              <Text style={styles.orderPrice}>${order.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;

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
  justifyContent: 'space-between', // Distribute tiles evenly
  width: '100%',
  paddingHorizontal: 10,
  paddingVertical: 10,
  marginBottom: 20,
},

tile: {
  backgroundColor: 'white',
  borderRadius: 10,
  width: width * 0.45,
  height: 120,
  alignItems: 'center',  // Center content horizontally
  justifyContent: 'center',  // Center content vertically
  paddingVertical: 10,
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
  width: 25,
  height: 25,
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
  textAlign: 'center',  // Horizontal text centering
  justifyContent: 'center',  // Ensure vertical centering if needed
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
    // Remove shadow from list items
  },
  orderIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  newBadge: {
    backgroundColor: '#2039B7',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginLeft: 8,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end',
    flex: 1, // Ensure it takes remaining space to align right
    textAlign: 'right', // Align text to the right
    paddingBottom: 10,
    color: '#333333',
  },
});
