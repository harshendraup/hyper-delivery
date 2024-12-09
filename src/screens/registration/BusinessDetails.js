import React, { useState, useEffect } from 'react';
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
  SafeAreaView,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Cloud from '../../asset/SVG/Cloud.png';
import Backbutton from '../../asset/SVG/Backbutton.png';
import Accordion from '../../component/Accordion';
import Clock from '../../asset/SVG/Clock.png';
import Language from '../../utils/Language';
import i18next from '../../services/i18next';
import { useTranslation } from 'react-i18next';
import DocumentPicker from 'react-native-document-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';


const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const FloatingLabelInput = ({
  label,
  value,
  onChangeText,
  icon,
  onIconPress,
  editable = true,
  keyboardType = 'default', // Default keyboard type
  maxlength, // New prop to define the maximum length
}) => {
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
          editable={editable} // Conditionally disable editing (keyboard)
          keyboardType={keyboardType} // Apply the keyboard type here
          maxLength={maxlength} // Set the maxlength here
        />
        {icon && (
          <TouchableOpacity onPress={onIconPress} style={styles.iconContainer}>
            <Image source={icon} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};



const BusinessDetails = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
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
  const [selectedFileName, setSelectedFileName] = useState('');
  const [menu, setmenu] = useState('');
  const [uploadLogo, setuploadLogo] = useState('');
  const [outside, setoutside] = useState('');
  const [inside, setinside] = useState('');
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [accountHolderError, setaccountHolderError] = useState('');
  const [BanknameError, setBanknameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [accountNumberError, setAccountNumberError] = useState('');
  const [ifscCodeError, setIfscCodeError] = useState('');
  const [isTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const [documentError, setDocumentError] = useState('');
  const route = useRoute();
  const { user_id } = route.params;

  const handleTimeIconPress = () => {
    setIsTimePickerVisible(true); // Open the time picker when the clock icon is pressed
  };

  const handleTimePickerConfirm = (time) => {
    setDob(moment(time).format('HH:mm')); // Format the selected time and update `dob`
    setIsTimePickerVisible(false); // Close the time picker
  };

  const handleTimePickerCancel = () => {
    setIsTimePickerVisible(false); // Close the time picker without updating the `dob`
  };

  useEffect(() => {
    console.log('Received business details:', user_id);  // Log or use the user_id as needed
  }, [user_id]);


  const validatePhoneNumber = (phone) => {
    const regex = /^[0-9]{10}$/; // Phone number should be exactly 10 digits
    return regex.test(phone);
  };

const validateAccountNumber = accountNumber => {
  // Regex to match both 10-15 digit account numbers and IBANs
  const regex = /^(?:[0-9]{10,15}|[A-Z]{2}\d{2}[A-Z0-9]{4,30})$/;
  return regex.test(accountNumber);
};



  const validateIFSCCode = (ifscCode) => {
    const regex = /^[A-Z0-9]{6}$/; // IFSC format like "ABCD0123456"
    return regex.test(ifscCode);
  };

  const handlePhoneChange = text => {
    // Filter out non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');
  
    setLastName(numericText); // Update state with the numeric-only input
  
    // Validation logic
    if (!numericText) {
      setPhoneError(t('Please enter phone number'));
    } if (numericText.length >= 6 && numericText.length <= 9) {
      setPhoneError(t('Phone number must be 10 digits long'));
    } else {
      setPhoneError(''); // Clear error if the phone number is valid
    }
  };


  const handleAccountNumberChange = (text) => {
    // Automatically convert to digits only
    const numericText = text.replace(/[^0-9]/g, '');
  
    setAccountNumber(numericText);
  
    // Length validation for Account Number (10 to 15 digits)
    if (!numericText) {
      setAccountNumberError(t('Please enter account number'));
    } else if (numericText.length < 10 || numericText.length > 15) {
      setAccountNumberError(t('Account number must be between 10 and 15 digits'));
    } else {
      setAccountNumberError('');
    }
  };
  

  const handleIFSCCodeChange = (text) => {
    // Automatically convert text to uppercase and remove special characters
    const upperCaseText = text.toUpperCase();
    const sanitizedText = upperCaseText.replace(/[^A-Z0-9]/g, '');
    
    setSortCode(sanitizedText);
  
    // IFSC code validation: must be exactly 11 characters long
    if (!sanitizedText) {
      setIfscCodeError(t('Please enter IFSC code'));
    } else if (sanitizedText.length !== 11) {
      // Only validate length first, as the code is not complete yet
      setIfscCodeError(t('IFSC code must be exactly 11 characters long'));
    } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(sanitizedText)) {
      // Check if the code is in the correct format once the length is valid
      setIfscCodeError(t('IFSC code must be in the format: XXXX0YYYYYY, where X is a letter or Y is a number'));
    } else {
      setIfscCodeError('');  // Clear error if all checks pass
    }
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z]+$/; // Only letters allowed
    return regex.test(name);
  };
const validateBusinessName = name => {
  const regex = /^[a-zA-Z\s]+$/; // Allow letters and spaces
  return regex.test(name);
};

  const handleBusinessNameChange = (text) => {
    setFirstName(text);
    if (!text) {
      setFirstNameError(t('Please enter Business name'));
    } else if (!validateBusinessName(text)) {
      setFirstNameError(t('Business name must contain only letters'));
    } else {
      setFirstNameError('');
    }
  };

  const handleAccountNumChange = (text) => {
    const upperCaseText = text.toUpperCase(); // Automatically convert to uppercase
    setHolderName(upperCaseText);

    if (!upperCaseText) {
      setaccountHolderError(t('Please enter account holder name'));
    } else {
      setaccountHolderError('');
    }
  };

  const handleBankNameChange = (text) => {
    const upperCaseText = text.toUpperCase(); // Automatically convert to uppercase
    setBankName(upperCaseText);

    if (!upperCaseText) {
      setBanknameError(t('Please enter Bank name'));
    } else {
      setBanknameError('');
    }
  };

  const handleSubmit = () => {
    if (
      !selectedFileName &&
      !selectedFileName.uri &&
      !selectedFileName.name &&
      !selectedFileName.type
    ) {
      
      return;
    }
    const formdata = new FormData();
    formdata.append('account_approval_form', {
      uri: selectedFileName.uri,
      name: selectedFileName.name,
      type: selectedFileName.type,
    });
    fetch('https://getweed.stgserver.site/api/v1/shop/update-bank-detail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: JSON.stringify({
        user_id: user_id,
        account_number: accountNumber,
        bank_name: bankName,
        account_holder_name: HolderName,
        ifsc_code: sortCode,
        account_approval_form: formdata,
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('Response Data: ', JSON.stringify(responseData));
        navigation.navigate('ApprovalWaitng')
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

 


const handleFileSelection = async type => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images, DocumentPicker.types.pdf], // You can add more types if needed
    });

    // Extract the URI (for images) and the file name
    const fileName = res[0].name;
    const fileUri = res[0].uri;

    // Update the respective state based on the selected type
    if (type === 'upload_logo') {
      setuploadLogo({name: fileName, uri: fileUri});
    } else if (type === 'outside') {
      setoutside({name: fileName, uri: fileUri});
    } else if (type === 'inside') {
      setinside({name: fileName, uri: fileUri});
    } else if (type === 'menu') {
      setmenu({name: fileName, uri: fileUri});
    } else {
      setSelectedFileName(fileName);
    }
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      console.log('User cancelled the file picker');
    } else {
      console.error('File picker error: ', err);
      // Optionally, display an error message to the user
      setDocumentError(
        'An error occurred while selecting the file. Please try again.',
      );
    }
  }
};


  const GreenButton = ({ title, onPress }) => (
    <TouchableOpacity style={styles.greenButton} onPress={onPress}>
      <Text style={styles.greenButtonText}>{title}</Text>
    </TouchableOpacity>
  );

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
          <View style={styles.backButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Image source={Backbutton} style={styles.backButtonImage} />
            </TouchableOpacity>
          </View>

          <Text style={styles.topText}>{t('registration')}</Text>
          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                !isBankDetails && styles.activeToggle,
              ]}
              onPress={() => setIsBankDetails(false)}>
              <Text
                style={[
                  styles.toggleButtonText,
                  !isBankDetails ? styles.activeText : styles.inactiveText,
                ]}>
                {t('business_details')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                isBankDetails && styles.activeToggle,
              ]}
              onPress={() => setIsBankDetails(true)}>
              <Text
                style={[
                  styles.toggleButtonText,
                  isBankDetails ? styles.activeText : styles.inactiveText,
                ]}>
                {t('bank_details')}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            {isBankDetails ? (
              <>
                <FloatingLabelInput
                  label={t('account_number')}
                  value={accountNumber}
                  onChangeText={handleAccountNumberChange}
                />
                {accountNumberError ? (
                  <Text style={styles.errorText}>{accountNumberError}</Text>
                ) : null}
                <FloatingLabelInput
                  label={t('account_holder_name')}
                  value={HolderName}
                  onChangeText={handleAccountNumChange}
                />
                {accountHolderError ? (
                  <Text style={styles.errorText}>{accountHolderError}</Text>
                ) : null}
                <FloatingLabelInput
                  label={t('bank_name')}
                  value={bankName}
                  onChangeText={handleBankNameChange}
                />
                {BanknameError ? (
                  <Text style={styles.errorText}>{BanknameError}</Text>
                ) : null}
                <FloatingLabelInput
                  label={t('ifsc_code')}
                  value={sortCode}
                  onChangeText={handleIFSCCodeChange}
                />
                {ifscCodeError ? (
                  <Text style={styles.errorText}>{ifscCodeError}</Text>
                ) : null}
                <View style={styles.uploadContainer}>
                  <Text style={styles.uploadText}>
                    {t('account_approval_form')}
                  </Text>
                  <View style={styles.uploadRow}>
                    <TouchableOpacity
                      style={[
                        styles.uploadButton,
                        {
                          alignItems: 'center', // Ensure buttons are vertically centered
                          width: '100%',
                        },
                      ]}
                      onPress={() => handleFileSelection('upload_form')}>
                      <Text style={styles.uploadButtonText}>
                        <Image source={Cloud} style={styles.CloudIcon} />
                        {'\n'}
                        {'\n'}
                        {t('upload_form')}
                      </Text>
                      {selectedFileName ? (
                        <Text style={styles.selectedFileName}>
                          {selectedFileName}
                        </Text>
                      ) : null}
                    </TouchableOpacity>
                  </View>
                  {documentError ? (
                    <Text style={styles.errorText}>{documentError}</Text>
                  ) : null}
                </View>
                <View style={styles.buttonContainer}>
                  <GreenButton
                    title={t('next')}
                    onPress={handleSubmit}
                    // onPress={() => navigation.navigate('ApprovalWaitng')}
                  />
                </View>
              </>
            ) : (
              <>
                <FloatingLabelInput
                  label={t('business_name')}
                  value={firstName}
                  onChangeText={handleBusinessNameChange}
                />
                {firstNameError ? (
                  <Text style={styles.errorText}>{firstNameError}</Text>
                ) : null}
                <FloatingLabelInput
                  label={t('phone_number')}
                  value={lastName}
                  onChangeText={handlePhoneChange}
                  keyboardType="numeric"
                  maxlength={10}
                />
                {phoneError ? (
                  <Text style={styles.errorText}>{phoneError}</Text>
                ) : null}
                <FloatingLabelInput
                  label={t('about')}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                />
                <FloatingLabelInput
                  label={t('shop_timing')}
                  value={dob}
                  editable={false}
                  onChangeText={setDob}
                  icon={Clock} // Pass the Clock icon as a prop
                  onIconPress={handleTimeIconPress} // Trigger the time picker when the icon is pressed
                />
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimePickerConfirm}
                  onCancel={handleTimePickerCancel}
                  date={dob ? moment(dob, 'HH:mm').toDate() : new Date()} // Ensure date format is correct for DateTimePicker
                />
                <Accordion
                  title={t('Weekly')}
                  items={[
                    {item: t('Daily')},
                    {item: t('Weekly')},
                    {item: t('Yearly')},
                  ]}
                  isOpen={accordionOpen}
                  toggle={() => setAccordionOpen(!accordionOpen)}
                  onSelect={item => console.log(item)}
                  noShift={true}
                  borderColor="#409C59"
                  width="100%"
                  style={{
                    zIndex: 2,
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                />
                <View style={styles.uploadContainer}>
                  {/* Store Logo Upload */}
                  <Text style={styles.uploadText}>{t('store_logo')}</Text>
                  <View style={styles.uploadRow}>
                    <TouchableOpacity
                      style={[
                        styles.uploadButton,
                        {alignItems: 'center', width: '100%'},
                      ]}
                      onPress={() => handleFileSelection('upload_logo')}>
                      {/* Conditionally render cloud icon and text if image is not uploaded */}
                      {!uploadLogo ? (
                        <>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          <Text style={styles.uploadButtonText}>
                            {t('upload_logo')}
                          </Text>
                        </>
                      ) : null}

                      {/* Show image preview if uploaded */}
                      {uploadLogo && uploadLogo.uri && (
                        <Image
                          source={{uri: uploadLogo.uri}}
                          style={styles.previewImage}
                        />
                      )}

                      {/* Show selected file name */}
                      {uploadLogo && (
                        <Text style={styles.selectedFileName}>
                          {uploadLogo.name}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>

                {documentError ? (
                  <Text style={styles.errorText}>{documentError}</Text>
                ) : null}

                {/* Business Images Section */}
                <View style={styles.uploadContainer}>
                  <Text style={styles.uploadText}>{t('business_images')}</Text>
                  <View style={styles.uploadRow}>
                    {/* Outside Image Upload */}
                    <TouchableOpacity
                      style={styles.uploadButtonThree}
                      onPress={() => handleFileSelection('outside')}>
                      {!outside ? (
                        <>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          <Text style={styles.uploadButtonText}>
                            {t('outside')}
                          </Text>
                        </>
                      ) : null}

                      {outside && outside.uri && (
                        <Image
                          source={{uri: outside.uri}}
                          style={styles.previewImage}
                        />
                      )}

                      {outside && (
                        <Text style={styles.selectedFileName}>
                          {outside.name}
                        </Text>
                      )}
                    </TouchableOpacity>

                    {/* Inside Image Upload */}
                    <TouchableOpacity
                      style={styles.uploadButtonThree}
                      onPress={() => handleFileSelection('inside')}>
                      {!inside ? (
                        <>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          <Text style={styles.uploadButtonText}>
                            {t('inside')}
                          </Text>
                        </>
                      ) : null}

                      {inside && inside.uri && (
                        <Image
                          source={{uri: inside.uri}}
                          style={styles.previewImage}
                        />
                      )}

                      {inside && (
                        <Text style={styles.selectedFileName}>
                          {inside.name}
                        </Text>
                      )}
                    </TouchableOpacity>

                    {/* Menu Image Upload */}
                    <TouchableOpacity
                      style={styles.uploadButtonThree}
                      onPress={() => handleFileSelection('menu')}>
                      {!menu ? (
                        <>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          <Text style={styles.uploadButtonText}>
                            {t('menu')}
                          </Text>
                        </>
                      ) : null}

                      {menu && menu.uri && (
                        <Image
                          source={{uri: menu.uri}}
                          style={styles.previewImage}
                        />
                      )}

                      {menu && (
                        <Text style={styles.selectedFileName}>{menu.name}</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({
  previewImage: {
    width: width * 0.4, // 40% of screen width
    height: width * 0.15, // 20% of screen width
    resizeMode: 'contain',
    marginTop: 10,
  },

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
    marginTopS: 30, // Add space between icon and text
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
    alignItems: 'center', // Ensures vertical centering of children (like the button)
    width: width * 0.85,
    marginBottom: 15,
    backgroundColor: '#409C59',
    borderRadius: 30,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center', // Centers content inside the button
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
    color: 'black',
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
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',
  },
  uploadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Ensure buttons are vertically centered
    width: '100%',
    gap: 5,
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
    height: 120,
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
  selectedFileName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333', // Choose a color that fits your design
    marginTop: 5, // Adds space between the upload and the file name
    textAlign: 'center', // Centers the file name text
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  iconContainer: {
    padding: 10, // Add padding to increase touchable area
    justifyContent: 'center',
    alignItems: 'center',
  },
});
