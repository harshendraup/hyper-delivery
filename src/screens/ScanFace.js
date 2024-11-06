import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState, createRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import Scanface from '../asset/ScanFace.png';
import CommonButton from '../component/button';

const {width} = Dimensions.get('window');

const ScanFace = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {},
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {},
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Scan Face</Text>
        <View style={styles.imageContainer}>
          <Image source={Scanface} style={styles.logo} />
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            title="Next"
            onPress={() => navigation.navigate('UploadDoc')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ScanFace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  bottomText: {
    fontSize: 14,
    color: '#409C59',
    marginBottom: 20,
    fontWeight: 'heavy',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
  },
  buttonContainer: {
    marginTop: 100,
    width: width * 0.85,
    paddingBottom: 30,
  },
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(64, 156, 89, 1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  greenButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },

  imageContainer: {
    width: 296,
    height: 296,
    padding: 48,
    marginTop: 90,
    borderRadius: 62,
    borderColor: 'white', // Replace with desired border color
    borderWidth: 2,
    backgroundColor: 'background: rgba(255, 255, 255, 1)',
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '0px 4px 4px 0px rgba(0, 0, 0, 0.85)', // Shadow color
    shadowOffset: {width: 0, height: 4}, // Offset for the shadow
    shadowOpacity: 1, // Full opacity
    shadowRadius: 6, // Increased blur radius for a more diffused shadow
    elevation: 8, // Higher elevation for Android to enhance shadow effect
  },

  logo: {
    width: 270,
    height: 270,
    marginRight: 10,
    marginTop: 20,
  },
  title: {
    fontFamily: 'Inter', // Specify the font family
    fontSize: 22, // Font size
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    lineHeight: 26.63, // Line height
    textAlign: 'center', // Center alignment
    paddingTop: 70,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#409C59',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#409C59',
  },
  subsubText: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    paddingBottom: 20,
    marginTop: 20,
  },
});
