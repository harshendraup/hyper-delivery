import React, {useState} from 'react';
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
import uploadcloud from '../../asset/uploadcloud.png';
import backbutton from '../../asset/backbutton.png';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const FloatingLabelInput = ({label, value, onChangeText}) => {
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
      />
    </View>
  );
};

const BusinessDetails = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [day, setDay] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [HolderName, setHolderName] = useState('');
  const [sortCode, setSortCode] = useState('');
  const [isBankDetails, setIsBankDetails] = useState(false);

  const handleUpload = side => {
    alert(`Upload ${side} ID`);
  };

  const GreenButton = ({title, onPress}) => (
    <TouchableOpacity style={styles.greenButton} onPress={onPress}>
      <Text style={styles.greenButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={backbutton} style={styles.backButtonImage} />
          </TouchableOpacity>
        </View>

        <Text style={styles.topText}>Register</Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, !isBankDetails && styles.activeToggle]}
            onPress={() => setIsBankDetails(false)}>
            <Text
              style={[
                styles.toggleButtonText,
                !isBankDetails ? styles.activeText : styles.inactiveText,
              ]}>
              Business Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, isBankDetails && styles.activeToggle]}
            onPress={() => setIsBankDetails(true)}>
            <Text
              style={[
                styles.toggleButtonText,
                isBankDetails ? styles.activeText : styles.inactiveText,
              ]}>
              Bank Details
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          {isBankDetails ? (
            <>
              <FloatingLabelInput
                label="Account Number"
                value={accountNumber}
                onChangeText={setAccountNumber}
              />
              <FloatingLabelInput
                label="Account holder Name"
                value={HolderName}
                onChangeText={setHolderName}
              />
              <FloatingLabelInput
                label="Bank Name"
                value={bankName}
                onChangeText={setBankName}
              />
              <FloatingLabelInput
                label="Ifsc Code"
                value={sortCode}
                onChangeText={setSortCode}
              />
              <View style={styles.uploadContainer}>
                <Text style={styles.uploadText}>Account Approval From</Text>
                <View style={styles.uploadRow}>
                  <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={() => handleUpload('Front')}>
                    <Text style={styles.uploadButtonText}>
                      <Image source={uploadcloud} />
                      {'\n'}
                      {'\n'}
                      Upload Form
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <GreenButton
                  title="Next"
                  onPress={() => navigation.navigate('ApprovalWaitng')}
                />
              </View>
            </>
          ) : (
            <>
              <FloatingLabelInput
                label="Business Name"
                value={firstName}
                onChangeText={setFirstName}
              />
              <FloatingLabelInput
                label="Phone number"
                value={lastName}
                onChangeText={setLastName}
              />
              <FloatingLabelInput
                label="About"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <FloatingLabelInput
                label="Timing"
                value={dob}
                onChangeText={setDob}
              />
              <FloatingLabelInput
                label="Open days at shop"
                value={day}
                onChangeText={setDay}
              />
              <View style={styles.uploadContainer}>
                <Text style={styles.uploadText}>Store Logo</Text>
                <View style={styles.uploadRow}>
                  <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={() => handleUpload('Front')}>
                    <Text style={styles.uploadButtonText}>
                      <Image source={uploadcloud} />
                      {'\n'}
                      {'\n'}
                      Upload Logo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.uploadContainer}>
                <Text style={styles.uploadText}>Business Images</Text>
                <View style={styles.uploadRow}>
                  <TouchableOpacity
                    style={styles.uploadButtonThree}
                    onPress={() => handleUpload('Front')}>
                    <Text style={styles.uploadButtonText}>
                      <Image source={uploadcloud} />
                      {'\n'}
                      {'\n'}
                      Outside
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.uploadButtonThree}
                    onPress={() => handleUpload('Back')}>
                    <Text style={styles.uploadButtonText}>
                      <Image source={uploadcloud} />
                      {'\n'}
                      {'\n'}
                      Inside
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.uploadButtonThree}
                    onPress={() => handleUpload('Back')}>
                    <Text style={styles.uploadButtonText}>
                      <Image source={uploadcloud} />
                      {'\n'}
                      {'\n'}Menu
                    </Text>
                  </TouchableOpacity>
                </View>
                <GreenButton
                  title="Next"
                  onPress={() => setIsBankDetails(true)}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  backButtonContainer: {
    position: 'absolute', // Set position to absolute
    top: 10, // Adjust this value as needed
    left: 10, // Adjust this value as needed
    zIndex: 1, // Ensure it's above other elements
  },

  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    marginBottom: 15,
    backgroundColor: '#409C59',
    borderRadius: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 5,
  },
  activeToggle: {backgroundColor: '#409C59'},
  toggleButtonText: {fontWeight: 'bold'},
  activeText: {
    textAlign: 'center',
    color: '#409C59',
    backgroundColor: 'white',
    width: width * 0.37,
    borderRadius: 30,
    padding: 4,
  },
  inactiveText: {
    textAlign: 'center',
    width: width * 0.35,
    color: 'white',
    borderRadius: 30,
    padding: 5,
  },
  inputContainer: {width: width * 0.85},
  floatingLabelContainer: {position: 'relative', marginVertical: 5},
  floatingLabel: {position: 'absolute', left: 10, color: 'gray', fontSize: 12},
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  uploadContainer: {width: width * 0.85, marginTop: 20},
  uploadText: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  uploadRow: {flexDirection: 'row', justifyContent: 'space-between'},
  uploadButton: {
    height: 120,
    width: 350,
    borderColor: '#409C59',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonThree: {
    height: 90,
    width: 100,
    borderColor: '#409C59',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
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
  buttonContainer: {paddingTop: 5, width: width * 0.85, paddingBottom: 30},
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#409C59',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 170,
    marginBottom: 30,
  },
  greenButtonText: {fontSize: 16, fontWeight: '600', color: 'white'},
  topText: {
    textAlign: 'center',
    fontSize: 24,
    width: width * 0.85,
    color: 'black',
    marginBottom: 40,
    fontWeight: '700',
  },
});
