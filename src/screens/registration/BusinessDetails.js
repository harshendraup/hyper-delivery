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
import Accordion from '../../component/Accordion';
import Clock from '../../asset/icons/clock.png';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const FloatingLabelInput = ({label, value, onChangeText, icon}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, {top: isFocused || value ? -2 : 19}]}>
        {label}
      </Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, icon && styles.inputWithIcon]} // Adjust input style when icon is present
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {icon && <Image source={Clock} style={styles.icon} />}
      </View>
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
  const [selectDayOpen, setselectDayOpen] = useState(false);

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

        <Text style={styles.topText}>Registration</Text>
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
                    style={[
                      styles.uploadButton,
                      {
                        alignItems: 'center', // Ensure buttons are vertically centered
                        width: '100%',
                      },
                    ]}>
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
                label="Timing of shop"
                value={dob}
                onChangeText={setDob}
                icon={Clock} // Pass the Clock icon as a prop
              />

              <Accordion
                title="Open days at shop"
                items={['day 1', 'day 2', 'day 3']}
                isOpen={selectDayOpen}
                toggle={() => setselectDayOpen(!selectDayOpen)}
                onSelect={() => {}}
              />
              {/* <FloatingLabelInput
                label="Open days at shop"
                value={day}
                onChangeText={setDay}
              /> */}
              <View style={styles.uploadContainer}>
                <Text style={styles.uploadText}>Store Logo</Text>
                <View style={styles.uploadRow}>
                  <TouchableOpacity
                    style={[
                      styles.uploadButton,
                      {
                        alignItems: 'center', // Ensure buttons are vertically centered
                        width: '100%',
                      },
                    ]}>
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
                  <TouchableOpacity style={styles.uploadButtonThree}>
                    <Text style={styles.uploadButtonText}>
                      <Image source={uploadcloud} />
                      {'\n'}
                      {'\n'}
                      Outside
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.uploadButtonThree}>
                    <Text style={styles.uploadButtonText}>
                      <Image source={uploadcloud} />
                      {'\n'}
                      {'\n'}
                      Inside
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.uploadButtonThree}>
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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  backButton: {
    padding: 10,
  },
  backButtonImage: {
    width: 40,
    height: 40,
  },
  topText: {
    textAlign: 'center',
    fontSize: 18,
    width: width * 0.85,
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: 40,
    fontWeight: '600',
    fontFamily: 'Inter',
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
  activeToggle: {
    backgroundColor: '#409C59',
  },
  toggleButtonText: {
    fontWeight: '600',
    fontFamily: 'Inter',
    fontSize: 14,
  },
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
  inputContainer: {
    width: width * 0.85,
  },
  floatingLabelContainer: {
    position: 'relative',
    marginVertical: 5,
  },
  floatingLabel: {
    position: 'absolute',
    left: 10,
    color: 'gray',
    fontSize: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 60,
    justifyContent: 'space-between', // Ensure the icon is on the right
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingRight: 30, // Make room for the icon on the right
  },
  inputWithIcon: {
    paddingRight: 40, // Adjust padding to ensure space for the icon
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10, // Space between the icon and the text input
  },
  uploadContainer: {
    width: width * 0.85,
    marginTop: 20,
  },
  uploadText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure buttons are vertically centered
    width: '100%',
    gap:5
  },
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
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(51, 51, 51, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    marginTop: 4,
    marginBottom: 6,
  },
  buttonContainer: {
    paddingTop: 5,
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
    marginTop: 70,
    marginBottom: 30,
  },
  greenButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  greenButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});


