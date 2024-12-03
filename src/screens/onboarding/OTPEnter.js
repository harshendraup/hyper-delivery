import React, { useState, useEffect, createRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Keyboard, Image, TextInput, SafeAreaView } from 'react-native';
import { fetchOtp } from "../../Redux/Slice/Otpslice"; // Assuming it's in otpSlice.js
import { fetchMobile } from "../../Redux/Slice/Mobileslice"; // Assuming it's in mobileSlice.js
import Getweed from '../../asset/SVG/Getweed.png';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

const GreenButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity style={[styles.greenButton, disabled && { backgroundColor: '#d3d3d3' }]} onPress={onPress} disabled={disabled}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

const OTPEnter = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data } = useSelector((state) => state.mobile);
  const inputRefs = Array.from({ length: 6 }, () => createRef());

  const { isLoading, isError, errorMessage } = useSelector(state => state.otp);
  
  const mobileData = JSON.stringify(data)
  useEffect(() => {
    console.log("Mobile Data:", mobileData); // Log mobileData to verify user_id is present
  }, [mobileData]);

  const handleInputChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text.replace(/[^0-9]/g, ''); // Allow only numbers
    setOtp(newOtp);

    // Move to the next input if the input is filled
    if (text && index < 5) {
      inputRefs[index + 1].current.focus();
    }
    // Focus the previous input if text is cleared
    if (!text && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleOtpVerification = async () => {
    // dispatch(fetchMobile(JSON.stringify(data)));
    const otpString = otp.join(''); // Join OTP digits to form a string
    
    // Ensure user_id and mobileData OTP are available
    if (!mobileData.otp || !mobileData.user_id) {
      console.log("User ID not available or mobile verification failed.");
      return;
    }

    // Compare entered OTP with the OTP from mobileData
    if (otpString !== mobileData.otp) {
      console.log("OTP does not match the one sent.");
      // You can add an error message here to inform the user
      return;
    }

    try {
      setIsSubmitting(true);
      dispatch(fetchOtp({ otp: otpString, user_id: mobileData.user_id }));
      navigation.navigate('PersonalInfo'); // Navigate to the next screen after successful OTP verification
    } catch (error) {
      console.log("OTP verification failed:", error);
      setIsSubmitting(false); // Reset submitting state on failure
    }
  };

  const isOtpValid = otp.every(digit => digit !== ''); // Check if all OTP digits are filled
  const isButtonDisabled = isSubmitting || !isOtpValid || !mobileData?.user_id;

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
                keyboardType="numeric"
                maxLength={1}
                ref={inputRefs[index]}
              />
            ))}
          </View>
          {isError && <Text style={styles.errorText}>{errorMessage}</Text>}
          <View style={styles.buttonContainer}>
            <GreenButton
              title={t('next')}
              onPress={handleOtpVerification}
              value={isButtonDisabled}
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
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});
