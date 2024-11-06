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

// Import icons
import chat from '../asset/icons/chat.png';
import dashboard from '../asset/icons/dashboard.png';
import editIcon from '../asset/icons/person.png';
import storeIcon from '../asset/icons/store.png';
import earningsIcon from '../asset/icons/EarnIcon.png';
import privacyIcon from '../asset/icons/privacy.png';
import supportIcon from '../asset/icons/support.png';
import greenArrow from '../asset/icons/greenArrow.png';
import logoutIcon from '../asset/icons/logout.png';
import Ellipse12 from '../asset/faces/Ellipse3.png';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();

  const menuItems = [
    {label: 'Edit Profile', icon: editIcon, route: 'EditUserProfile'},
    {label: 'Edit Store Details', icon: storeIcon, route: 'StoreDetails'},
    {label: 'Earnings', icon: earningsIcon, route: 'Earnings'},
    {label: 'Privacy Policy', icon: privacyIcon, route: 'PrivacyPolicy'},
    {label: 'Customer Support', icon: supportIcon, route: 'CustomerSupport'},
    {label: 'Logout', icon: logoutIcon, route: 'TabNavigator'},
  ];

  const handlePress = route => {
    if (route === 'Logout') {
      console.log('Logging out...');
    } else {
      navigation.navigate(route);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.semiCircle}>
          <Text style={styles.profileLabel}>Profile</Text>
          <Image source={Ellipse12} style={styles.profileImage} />
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handlePress(item.route)}>
              <Image source={item.icon} style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.label}</Text>
              <Image source={greenArrow} style={styles.arrowIcon} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {alignItems: 'center', paddingTop: 25},
  semiCircle: {
    width: '100%',
    height: height * 0.35, // Adjusting semi-circle height to 35% of screen height
    backgroundColor: '#409C59',
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop: -40, // Reduced margin to prevent overflow on smaller screens
  },

  profileLabel: {
    position: 'absolute',
    top: 20,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
  },
  profileImage: {
    width: width * 0.2, // Dynamically setting image width (20% of screen width)
    height: width * 0.2, // Dynamically setting image height (20% of screen width)
    borderRadius: width * 0.1, // Dynamically setting border radius to keep the image round
    marginBottom: 10,
    // borderWidth: 2,
    // borderColor: 'white',
  },
  profileName: {
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  profileEmail: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  menuContainer: {
    width: '85%', // Adjusting container width to ensure it looks good on all screens
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18, // Reduced padding to ensure better spacing on smaller screens
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Lato',
    flex: 1,
  },
  arrowIcon: {
    width: 10,
    height: 16,
  },
});

export default Profile;
