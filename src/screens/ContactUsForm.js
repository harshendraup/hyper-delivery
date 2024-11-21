import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Cloud from '../asset/SVG/Cloud.png';
import Accordion from '../component/Accordion';
import Language from '../utils/Language';
import i18next from '../services/i18next';
import {useTranslation} from 'react-i18next';

const {width} = Dimensions.get('window');

const GreenButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.greenButton} onPress={onPress}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

const FloatingLabelInput = ({label, value, onChangeText, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, {top: isFocused || value ? -2 : 19}]}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
    </View>
  );
};

const ContactUsForm = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dob, setDob] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [userType, setUserType] = useState(false); // State for Boats and Animals accordion

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <Text style={styles.topText}>{t('contact')}</Text>

        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label={t('first_name')}
            value={firstName}
            onChangeText={setFirstName}
          />
          <FloatingLabelInput
            label={t('last_name')}
            value={lastName}
            onChangeText={setLastName}
          />
          <FloatingLabelInput
            label={t('Email')}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label={t('phone_number')}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label={t('dob')}
            value={dob}
            onChangeText={setDob}
          />
          <Accordion
            title={t('User Type')}
            items={['Type 1', 'Type 2', 'Type 3']} // Replace with actual items
            isOpen={userType}
            toggle={() => setUserType(!userType)}
            onSelect={() => {}}
          />
          <FloatingLabelInput
            label={t('Idno')}
            value={idNumber}
            onChangeText={setIdNumber}
          />
          <FloatingLabelInput
            label={t('description1')}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={3}
            style={styles.addressInput}
          />
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>{t('upload_documents')}</Text>
          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadButton}>
              <View style={styles.uploadButtonContent}>
                <Image source={Cloud} style={styles.CloudIcon} />
                <Text style={styles.uploadButtonText}>{t('front')}</Text>
                <Text style={styles.uploadButtonSubtext}>
                  {t('upload_and_scan')}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadButton}>
              <View style={styles.uploadButtonContent}>
                <Image source={Cloud} style={styles.CloudIcon} />
                <Text style={styles.uploadButtonText}>{t('back')}</Text>
                <Text style={styles.uploadButtonSubtext}>
                {t('upload_and_scan')}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title={t('next')}
            // onPress={() => navigation.navigate('TabNavigator')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ContactUsForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  CloudIcon: {
    width: 20, // Set the width of the icon
    height: 20, // Set the height of the icon
    resizeMode: 'contain', // Ensures the icon maintains its aspect ratio
    marginTop: 5, // Add space between icon and text
  },
  inputContainer: {
    width: width * 0.85,
    paddingBottom: 20,
  },
  floatingLabelContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  floatingLabel: {
    position: 'absolute',
    left: 10,
    color: 'gray',
    fontSize: 12,
    transition: 'top 0.2s ease',
    marginTop: 3,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  uploadContainer: {
    width: width * 0.85,
    marginTop: 20,
    marginRight: 20,
  },
  uploadText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
    marginTop: -30,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  uploadButtonContent: {
    alignItems: 'center', // Centers content horizontally
  },
  uploadButton: {
    height: 130,
    width: 165,
    borderColor: '#409C59',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonSubtext: {
    fontFamily: 'Mulish', // Set font-family to Mulish
    fontSize: 12, // Set font size to 12px
    fontWeight: '600', // Set font weight to 600
    lineHeight: 15.06, // Set line height to 15.06px
    textAlign: 'center', // Center-align text
    color: 'rgba(51,51, 51, 1)',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(51,51, 51, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    marginTop: 4,
    marginBottom: 6,
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
  topText: {
    textAlign: 'left',
    fontSize: 24,
    width: width * 0.85,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Mulish',
    marginBottom: 10,
  },
  addressInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
});
