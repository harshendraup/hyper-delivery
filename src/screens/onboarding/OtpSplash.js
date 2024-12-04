import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import logo from '../../asset/OTPsend.png';
import OtpSplashSVG from '../../asset/SVG/OtpSplash';

const OtpSplash = () => {
  const navigation = useNavigation();
  const [isMounted, setIsMounted] = useState(false);
  const route = useRoute(); // Access route parameters
  const { user_id } = route.params; // Get the user_id passed from the previous screen

  useEffect(() => {
    console.log("Received user_id:", user_id);  // Log or use the user_id as needed
  }, [user_id]);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      if (isMounted) {
        navigation.navigate('OTPEnter', { user_id }); // Pass user_id to OTPEnter screen
      }
    }, 1000);

    return () => {
      setIsMounted(false);
      clearTimeout(timer); // Clear the timer on unmount
    };
  }, [navigation, isMounted, user_id]); // Add user_id as dependency

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('OTPEnter', { user_id })}>
        <OtpSplashSVG />
      </TouchableOpacity>
    </View>
  );
};

export default OtpSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change to your desired background color
  },
  logo: {
    width: 400, // Adjust the width as necessary
    height: 400, // Adjust the height as necessary
    marginBottom: 20, // Spacing between image and text
  },
});
