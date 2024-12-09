import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import OtpSplashSVG from '../../asset/SVG/OtpSplash'; // Import SVG component

const OtpSplash = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {user_id, phone_number} = route.params; // Retrieve user_id and phone_number passed from previous screen
  const [isMounted, setIsMounted] = useState(true); // Track if component is mounted

  useEffect(() => {
    console.log('Received user_id:', user_id); // Log or use the user_id as needed

    const timer = setTimeout(() => {
      if (isMounted) {
        navigation.navigate('OTPEnter', {user_id, phone_number}); // Pass user_id and phone_number to OTPEnter screen
      }
    }, 1000); // 1-second delay before navigating

    // Cleanup function to clear timeout and avoid potential memory leaks
    return () => {
      setIsMounted(false); // Mark component as unmounted
      clearTimeout(timer); // Clear the timer
    };
  }, [isMounted, navigation, user_id, phone_number]); // Dependency on isMounted, navigation, user_id, and phone_number

  return (
    <View style={styles.container}>
      {/* Clickable SVG to navigate to OTPEnter screen */}
      <View
        onPress={() =>
          navigation.navigate('OTPEnter', {user_id, phone_number})
        }>
        <OtpSplashSVG />
      </View>
    </View>
  );
};

export default OtpSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color of the screen
  },
  phoneNumberText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
