import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import backbutton from '../asset/backbutton.png';
import ratingImage from '../asset/rating.png';
import edit from '../asset/icons/edit.png';

const {width} = Dimensions.get('window');

const OrderDetails = ({route}) => {
  const navigation = useNavigation();
  const {order} = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={backbutton} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.title}>Order Details</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Image source={order.image} style={styles.orderImage} />
          <View style={styles.textContainer}>
            <Text style={styles.orderTitle}>HYBRID</Text>
            <Text style={styles.orderText}>
              Walker Kush {'                                           '}50g
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.orderPrice}>{order.price}</Text>
              <Text style={styles.strikethroughPrice}>₹ 10,499.00</Text>
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Image source={ratingImage} style={styles.ratingImage} />
            <Text style={styles.ratingText}>{order.rating}</Text>
          </View>
        </View>
        <View style={styles.deliveryContainer}>
          <View style={styles.deliveryTitleContainer}>
            <Text style={styles.deliveryTitle}>Delivery Address:</Text>
            <TouchableOpacity
              style={styles.editButton}
              onPress={() => {
                /* Navigate to edit screen */
              }} // Replace with your navigation logic
            >
              <Image source={edit} style={styles.editButtonImage} />
            </TouchableOpacity>
          </View>

          <View style={styles.deliveryInfoContainer}>
            <Text style={styles.deliveryDateText}>
              {order.customerName} - #ID{order.id}
            </Text>
            <Text style={styles.deliveryDateText}>{order.deliveryDate}</Text>
          </View>
          <Text style={styles.deliveryText}>{order.contactNumber}</Text>
          <Text style={styles.deliveryText}>{order.deliveryAddress}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  ratingContainer: {
    position: 'absolute', // Positioning the rating container
    right: 10,
    top: 10,
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center',
  },
  ratingImage: {
    width: 42.27, // Width as per your requirement
    height: 44, // Height as per your requirement
    padding: 5, // Set padding
    borderRadius: 5, // Rounded corners
    opacity: 1, // Set opacity (0 for invisible, 1 for fully visible)
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Shadow color
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow radius
    elevation: 3, // For Android shadow effect
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)',
    marginRight: 40,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
  },
  backButtonImage: {
    width: 45,
    height: 45,
  },
  orderImage: {
    width: 78,
    height: 78,
    borderRadius: 5.2,
    borderWidth: 0.65,
    borderColor: 'transparent',
    opacity: 1,
    marginBottom: 3,
  },
  detailsContainer: {
    flexDirection: 'row', // Changed to row to align image and text horizontally
    alignItems: 'center', // Center vertically
    borderWidth: 1,
    borderColor: 'rgba(240, 240, 240, 1)',
    borderRadius: 8,
    padding: 10,
    width: '100%',
    marginTop: 10,
  },
  orderTitle: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Mulish',
    color: 'rgba(79, 79, 79, 1)',
    marginBottom: 5, // Adjusted margin
    textAlign: 'left',
    lineHeight: 15,
  },
  orderText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Mulish',
    color: 'rgba(0, 0, 0, 1)',
    marginBottom: 5, // Adjusted margin
    textAlign: 'left',
    lineHeight: 17,
  },
  priceContainer: {
    flexDirection: 'row', // Aligns price and strikethrough price horizontally
    alignItems: 'center', // Vertically center the text
  },
  orderPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(41, 73, 8, 1)',
    marginBottom: 10,
    fontFamily: 'Poppins',
    lineHeight: 23,
    marginRight: 10, // Space between the order price and the strikethrough price
  },
  strikethroughPrice: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 17.6,
    textAlign: 'left',
    marginBottom: 8,
    textDecorationLine: 'line-through', // Apply strikethrough
    color: 'rgba(155, 155, 155, 1)', // Adjust color for visibility
  },
  deliveryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  deliveryContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(240, 240, 240, 1)',
    borderStyle: 'solid',
    borderRadius: 8,
    width: '100%',
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
    fontFamily: 'Inter',
    lineHeight: 19,
    color: 'rgba(0, 0, 0, 1)',
  },
  deliveryText: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'inter',
    marginLeft: 3,
    marginTop: 3,
    color: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    textAlign: 'left',
  },
  deliveryInfoContainer: {
    flexDirection: 'row', // Aligns name/id and delivery date horizontally
    justifyContent: 'space-between', // Distributes space between items
    width: '100%', // Ensures it takes full width
    marginBottom: 10, // Space below this row
  },
  deliveryDateText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',
    marginTop: 4,
    textAlign: 'right', // Aligns text to the right
    flex: 1, // Allows the text to grow to fill space
  },
  editButton: {
    borderRadius: 5,
  },
  editButtonImage: {
    width: 16,
    height: 18,
  },
});
