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
import getStuff from '../asset/getStuff.png';

const {width} = Dimensions.get('window');

const GreenButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.greenButton} onPress={onPress}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

const OTPEnter = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = Array.from({length: 6}, () => createRef());

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

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, ''); // Allow only numbers
    setOtp(newOtp);

    // Move to the next input if the input is filled
    if (text && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Image source={getStuff} style={styles.logo} />
        <Text style={styles.title}>Enter OTP</Text>
        <Text style={styles.subTitle}>
          A 6 Digit Code Has Been Sent To{'\n'}+123456789
        </Text>
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={digit}
              onChangeText={text => handleInputChange(text, index)}
              keyboardType="numeric"
              maxLength={1}
              ref={inputRefs[index]}
            />
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <GreenButton
            title="Next"
            onPress={() => navigation.navigate('PersonalInfo')}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.bottomText}>Send me code on Whatsapp!</Text>
        </View>
        <View style={styles.containerText}>
          <Text style={styles.bottomText}>4 OTP is left!</Text>
        </View>
        <Text style={styles.subsubText}>Auto verifying you OTP in (00:13)</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default OTPEnter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bottomText: {
    fontSize: 14,
    color: 'rgba(64, 156, 89, 1)',
    marginBottom: 20,
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  buttonContainer: {
    paddingTop: 10,
    width: width * 0.85,
    paddingBottom: 30,
  },
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#409C59',
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
  logo: {
    width: 227,
    height: 227,
    marginRight: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'rgba(51, 51, 51, 1)',
    marginTop: 20,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    color: 'rgba(51, 51, 51, 1)',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Inter',
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
    fontSize: 14,
    color: 'rgbs(143, 145, 149, 1)',
    textAlign: 'center',
    paddingBottom: 20,
    marginTop: 20,
    fontFamily: 'Roboto',
  },
});
