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
import Language from '../../utils/Language';
import i18next from '../../services/i18next';
import {useTranslation} from 'react-i18next';

// Import icons
import chat from '../../asset/icons/chat.png';
import dashboard from '../../asset/icons/dashboard.png';
import editIcon from '../../asset/SVG/Editicon.png';
import storeIcon from '../../asset/SVG/Editstoreicon.png';
import earningsIcon from '../../asset/SVG/Earningicon.png';
import privacyIcon from '../../asset/SVG/Privacyicon.png';
import supportIcon from '../../asset/SVG/Customersupport.png';
import greenArrow from '../../asset/SVG/Greenarrow.png';
import logoutIcon from '../../asset/SVG/Logout.png';
import Ellipse12 from '../../asset/faces/Ellipse3.png';

const {width, height} = Dimensions.get('window');

const Profile = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const menuItems = [
    {label: t('EditProfile'), icon: editIcon, route: 'EditUserProfile'},
    {label: t('EditStoreDetails'), icon: storeIcon, route: 'StoreDetails'},
    {
      label: t('Earnings'),
      icon: earningsIcon,
      route: 'Earnings',
      iconStyle: styles.earningsIcon,
    },
    {
      label: t('PrivacyPolicy'),
      icon: privacyIcon,
      route: 'PrivacyPolicy',
      iconStyle: styles.privacyIcon,
    },
    {label: t('CustomerSupport'), icon: supportIcon, route: 'CustomerSupport'},
    {label: t('Logout'), icon: logoutIcon, route: 'TabNavigator'},
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
          <Text style={styles.profileLabel}>{t('Profile')}</Text>
          <Image source={Ellipse12} style={styles.profileImage} />
          <Text style={styles.profileName}>{t('profileName')}</Text>
          <Text style={styles.profileEmail}>{t('profileEmail')}</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => handlePress(item.route)}>
              <Image
                source={item.icon}
                style={[styles.menuIcon, item.iconStyle]} // Apply conditional styling
              />
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
    width: 20,
    height: 20,
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Lato',
    flex: 1,
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',
  },
  arrowIcon: {
    width: 10,
    height: 17,
  },
  earningsIcon: {
    width: 25, // Custom size for earnings icon
    height: 25,
    marginRight: 10,
  },
  privacyIcon: {
    width: 19, // Custom size for privacy icon
    height: 24,
  },
});

export default Profile;
