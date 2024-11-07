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
import messageIcon from '../asset/icons/messangeIcon.png';
import phoneIcon from '../asset/icons/callIcon.png';
import star from '../asset/icons/star.png';
import pickupIcon from '../asset/icons/pickuploc.png';
import deliveryIcon from '../asset/icons/deliveryloc.png';
import orderIcon from '../asset/icons/orderId.png';

const {width, height} = Dimensions.get('window');

const Update = () => {
  const navigation = useNavigation();
  const orderId = '#123456';

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
          <Text style={styles.title}>Update</Text>
        </View>

        <Image source={map} style={styles.mapImage} />

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
          <View style={styles.rectangleImage} />

          <View style={styles.locationRow}>
            <Image source={deliveryIcon} style={styles.locationIcon} />
            <Text style={styles.locationText}>Delivery Location:</Text>
          </View>
          <Text style={styles.addressText}>456 Elm St.</Text>
        </View>

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
    marginHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    // marginRight: 40,
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
    width: width*0.85,
    height: height*0.65,
    borderRadius: 30,
marginBottom: 10,
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
    marginLeft: 30,
    marginBottom: 10,
  },
  rectangleImage: {
    width: 3,
    height: 32,
    backgroundColor: 'rgba(217, 217, 217, 1)',
    marginHorizontal: 7,
    marginBottom: 10,
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

  orderIdContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  orderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  orderIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  orderIdHeading: {
    fontSize: 10,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  orderIdText: {
    fontSize: 14,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '500',
    fontFamily: 'Inter',
    marginTop: 5,
    marginLeft: 30,
  },
  profileRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap:-20,
  },
  iconButton: {
    // marginLeft: 1,
    width: 50,
    height: 50,
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
    backgroundColor: 'white', // Optional: to ensure icons stand out against background
  },
  icon: {
    width: 60, // Adjusted width to fit the icons properly
    height: 60, // Adjusted height for proper aspect ratio
    resizeMode: 'contain',
    marginTop: 10, // Ensures the icons scale appropriately
  },
});
