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
import uploadcloud from '../asset/uploadcloud.png';

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

const PersonalInfo = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.topText}>
          Fill your personal information or register {'\n'}with your social
          account
        </Text>

        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <FloatingLabelInput
            label="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
          <FloatingLabelInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label="Date of Birth (YYYY-MM-DD)"
            value={dob}
            onChangeText={setDob}
          />
          <FloatingLabelInput
            label="Address"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
            style={styles.addressInput}
          />
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>Upload Documents</Text>
          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadButton}>
              <View style={styles.uploadButtonContent}>
                <Image source={uploadcloud} />
                <Text style={styles.uploadButtonText}>Front</Text>
                <Text style={styles.uploadButtonSubtext}>
                  Upload & Scan passport / driver's license
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadButton}>
              <View style={styles.uploadButtonContent}>
                <Image source={uploadcloud} />
                <Text style={styles.uploadButtonText}>Back</Text>
                <Text style={styles.uploadButtonSubtext}>
                  Upload & Scan passport / driver's license
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title="Next"
            onPress={() => navigation.navigate('BusinessDetails')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PersonalInfo;

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
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
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
    color: '#333333',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
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
    fontSize: 17,
    width: width * 0.85,
    color: 'black',
    marginBottom: 40,
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
