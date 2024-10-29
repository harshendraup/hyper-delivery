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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        keyboardShouldPersistTaps="handled">
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="black" />
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
                label="Account Holder Name"
                value={HolderName}
                onChangeText={setHolderName}
              />
              <FloatingLabelInput
                label="Bank Name"
                value={bankName}
                onChangeText={setBankName}
              />
              <FloatingLabelInput
                label="Ifc Code"
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
                      <Icon name="upload" size={20} color="green" />
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
                      <Icon name="upload" size={20} color="green" />
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
                      <Icon name="upload" size={20} color="green" />
                      {'\n'}
                      {'\n'}
                      Outside
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.uploadButtonThree}
                    onPress={() => handleUpload('Back')}>
                    <Text style={styles.uploadButtonText}>
                      <Icon name="upload" size={20} color="green" />
                      {'\n'}
                      {'\n'}
                      Inside
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.uploadButtonThree}
                    onPress={() => handleUpload('Back')}>
                    <Text style={styles.uploadButtonText}>
                      <Icon name="upload" size={20} color="green" />
                      {'\n'}
                      {'\n'}Menu
                    </Text>
                  </TouchableOpacity>
                </View>
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    marginBottom: 15,
    backgroundColor: 'green',
    borderRadius: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 30,
    marginHorizontal: 5,
  },
  activeToggle: {backgroundColor: 'green'},
  toggleButtonText: {fontWeight: 'bold'},
  activeText: {
    textAlign: 'center',
    color: 'green',
    backgroundColor: 'white',
    width: width * 0.35,
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
    borderColor: 'green',
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
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonText: {fontSize: 16, color: 'gray', textAlign: 'center'},
  buttonContainer: {paddingTop: 5, width: width * 0.85, paddingBottom: 30},
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
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
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    borderWidth: 1,
    borderColor: 'gray', // Change color as needed
    borderRadius: 10,
    padding: 10, // Adjust padding for better click area
    backgroundColor: 'white', // Optional: background color for visibility
    shadowColor: '#000', // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow
  },
});
