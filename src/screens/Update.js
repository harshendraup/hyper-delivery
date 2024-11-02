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
import CommonButton from '../component/button';
import map from '../asset/map.png';
import profilePic from '../asset/faces/Ellipse1.png';
import profilePic1 from '../asset/faces/Ellipse12.png';
import messageIcon from '../asset/messangeIcon.png';
import phoneIcon from '../asset/callIcon.png';
import star from '../asset/icons/star.png';
import pickupIcon from '../asset/icons/pickuploc.png'; // Import pickup icon
import deliveryIcon from '../asset/icons/deliveryloc.png';
import ractangle from '../asset/icons/rectangle.png';
import orderIcon from '../asset/icons/orderId.png'; // Import the order icon
// Import delivery icon

const {width} = Dimensions.get('window');

const Update = () => {
  const navigation = useNavigation();
  const rating = 4.5;
  const orderId = 'ORD123456';

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Update</Text>
        </View>

        <Image source={map} style={styles.mapImage} />
        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <View style={styles.profileLeft}>
            <Image source={profilePic} style={styles.profilePic} />
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>Amit Patel</Text>
              <Text style={styles.profileIdentity}>Courier</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <Image source={star} style={styles.starIcon} key={index} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.profileRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={messageIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={phoneIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.profileContainer}>
          <View style={styles.profileLeft}>
            <Image source={profilePic1} style={styles.profilePic} />
            <View style={styles.profileTextContainer}>
              <Text style={styles.profileName}>Richa Kushwa</Text>
              <Text style={styles.profileIdentity}>Customer</Text>
              <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                  <Image source={star} style={styles.starIcon} key={index} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.profileRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={messageIcon} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={phoneIcon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Image source={pickupIcon} style={styles.locationIcon} />
            <Text style={styles.locationText}>Pickup Location:</Text>
          </View>
          <Text style={styles.addressText}>123 Main St.</Text>
          <Image source={ractangle} style={styles.rectangleimage} />

          <View style={styles.locationRow}>
            <Image source={deliveryIcon} style={styles.locationIcon} />
            <Text style={styles.locationText}>Delivery Location:</Text>
          </View>
          <Text style={styles.addressText}>456 Elm St.</Text>
        </View>
        {/* Order ID Section */}
        <View style={styles.orderIdContainer}>
          <View style={styles.orderRow}>
            <Image source={orderIcon} style={styles.orderIcon} />
            <Text style={styles.orderIdHeading}>Order ID</Text>
          </View>
          <Text style={styles.orderIdText}>{orderId}</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <CommonButton
          title="Next"
          onPress={() => navigation.navigate('UpdateOrderDetails')}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 25,
    flexGrow: 1,
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
  buttonContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  mapImage: {
    width: 350,
    height: 397,
    borderRadius: 30,
  },
  locationContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
    marginTop: 1,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  locationText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 10,
    color: 'rgba(51, 51, 51, 1)',
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '500',
    marginLeft: 30, // Align the address text with the icon
    marginBottom: 10,
  },
  separator: {
    height: 1,
  },
  rectangleimage: {
    width: 3, // Set width to fill the container
    height: 32, // Adjust height as necessary
    backgroundColor: 'rgba(217, 217, 217, 1)', // Optional: If you want to see a background color
    marginHorizontal: 7,
    marginBottom: 10,
    marginTop: 1, // Space above and below the rectangle
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    width: '100%',
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileIdentity: {
    fontSize: 10,
    color: 'rgba(79, 79, 79, 1)',
    fontWeight: '500',
    lineHeight: 12,
    fontFamily: 'Inter',
  },
  profileName: {
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Inter',
    lineHeight: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starIcon: {
    width: 10,
    height: 10,
  },
  profileRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  icon: {
    marginTop: 10,
    width: 40,
    height: 40,
  },
  orderIdContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  orderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, // Space below the row
  },
  orderIcon: {
    width: 20,
    height: 20,
    marginRight: 10, // Space between icon and heading
  },
  orderIdHeading: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600', // Bold for emphasis
  },
  orderIdText: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '500',
    marginTop: 5,
    marginLeft: 30, // Space above the order ID
  },
});
