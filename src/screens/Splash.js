import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import logo from '../asset/splash.png'; 

const Splash = () => {
  const navigation = useNavigation();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      if (isMounted) {
        navigation.navigate('Onboarding');
      }
    }, 1000); // Navigate after 1 second

    return () => {
      setIsMounted(false);
      clearTimeout(timer); // Clear the timer on unmount
    };
  }, [navigation, isMounted]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

export default Splash;

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
