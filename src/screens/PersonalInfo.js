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
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
  const [frontID, setFrontID] = useState(null);
  const [backID, setBackID] = useState(null);

  const handleUpload = side => {
    alert(`Upload ${side} ID`);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
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
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleUpload('Front')}>
              <Text style={styles.uploadButtonText}>
                Front{'\n'}
                {'\n'}Upload & Scan passport / drivers licence
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => handleUpload('Back')}>
              <Text style={styles.uploadButtonText}>
                Back{'\n'}
                {'\n'}Upload & Scan passport / drivers licence
              </Text>
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
    justifyContent: 'space-between',
  },
  uploadButton: {
    height: 130,
    width: 165,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginBottom: 30,
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 10,
    width: width * 0.85,
    paddingBottom: 30,
  },
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: 'green',
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
