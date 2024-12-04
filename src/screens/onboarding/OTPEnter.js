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
  SafeAreaView,
  Alert,
} from 'react-native';
import React, { useEffect, useState, createRef } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import Getweed from '../../asset/SVG/Getweed.png';
import Language from '../../utils/Language';
import i18next from '../../services/i18next';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

const GreenButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.greenButton, { opacity: disabled ? 0.5 : 1 }]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

const OTPEnter = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user_id } = route.params;
  const { t } = useTranslation();

  if (!user_id) {
    console.log("User ID is missing");
    return;
  }

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);  // Disable button initially
  const inputRefs = Array.from({ length: 6 }, () => createRef());

  useEffect(() => {
    // Check if OTP is complete and valid
    const isOtpValid = otp.every(digit => digit !== '');
    setIsButtonDisabled(!isOtpValid); // Enable button if OTP is valid
  }, [otp]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, ''); // Allow only numbers
    setOtp(newOtp);

    // Move to the next input if the input is filled
    if (text && index < 5) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      // Move focus to the previous input if the current input is empty and Backspace is pressed
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleSubmit = () => {
    if (isButtonDisabled) {
      return;
    }
    
    if (!otp) {
      console.log("Please enter OTP");
      return;
    }
    fetch("https://getweed.stgserver.site/api/v1/shop/otp-verification", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp.join(''),
        user_id: user_id, // Pass the user_id received from the previous screen
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Response Data: ", JSON.stringify(responseData));
        if (responseData.status === "success") { // Assuming 'status' is returned
          const userId = responseData.data.user_id;
          navigation.navigate("PersonalInfo", { user_id: userId });
        } else {
          Alert.alert("Invalid OTP", "The OTP you entered is incorrect.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <Image source={Getweed} style={styles.logo} />
          <Text style={styles.title}>{t('enter_otp')}</Text>
          <Text style={styles.subTitle}>
            {t('otp_sent_message')}{'\n'}+123456789
          </Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                value={digit}
                onChangeText={text => handleInputChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                ref={inputRefs[index]}
              />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <GreenButton
              title={t('next')}
              onPress={handleSubmit}
              disabled={isButtonDisabled}
            />
          </View>
          <View style={styles.containerText}>
            <Text style={styles.bottomText}>{t('send_otp_whatsapp')}</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.bottomText}>{t('otp_left')}</Text>
          </View>
          <Text style={styles.subsubText}>{t('auto_verifying_otp')}</Text>
        </ScrollView>
      </SafeAreaView>
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
    color: 'rgb(143, 145, 149, 1)',
    textAlign: 'center',
    paddingBottom: 20,
    marginTop: 20,
    fontFamily: 'Roboto',
  },
});
