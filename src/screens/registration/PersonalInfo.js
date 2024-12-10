import React, { useEffect, useState } from 'react';
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
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Cloud from '../../asset/SVG/Cloud.png';
import { useTranslation } from 'react-i18next';
import DocumentPicker from 'react-native-document-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import LoadingButton from '../../component/LoadingButton';

const { width } = Dimensions.get('window');

const GreenButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.greenButton} onPress={onPress}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

const FloatingLabelInput = ({ label, value, onChangeText, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, { top: isFocused || value ? -2 : 19 }]}>
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
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [address, setAddress] = useState('');
  const [frontFile, setFrontFile] = useState(null); // Store the front file data
  const [backFile, setBackFile] = useState(null); // Store the back file data
  const [emailError, setEmailError] = useState(''); // For email error message
  const route = useRoute(); // Access route parameters
  const { user_id } = route.params; // Get the user_id passed from the previous screen
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [documentError, setDocumentError] = useState('');
   const [isLoading, setIsLoading] = useState(false); 
   const [isFormValid, setIsFormValid] = useState(false);
const [userIdError, setUserIdError] = useState('');


  useEffect(() => {
    console.log('Received person user_id:', user_id); // Log or use the user_id as needed
  }, [user_id]);
  
 const validateName = name => {
   const regex = /^[a-zA-Z]+$/; // Only letters allowed
   return regex.test(name);
 };

const handleFirstNameChange = text => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  setFirstName(capitalizedText);

  if (!capitalizedText) {
    setFirstNameError(t('Please enter first name'));
  } else if (!validateName(capitalizedText)) {
    setFirstNameError(t('First name must contain only letters'));
  } else {
    setFirstNameError('');
  }
  validateForm(); // Call the validateForm function after each change
};

const handleLastNameChange = text => {
  const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
  setLastName(capitalizedText);

  if (!capitalizedText) {
    setLastNameError(t('Please enter last name'));
  } else if (!validateName(capitalizedText)) {
    setLastNameError(t('Last name must contain only letters'));
  } else {
    setLastNameError('');
  }
  validateForm(); // Call the validateForm function after each change
};


 // Email Validation Regex
 const validateEmail = email => {
   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   return regex.test(email);
 };

const handleEmailChange = text => {
  setEmail(text);

  if (text && !validateEmail(text)) {
    setEmailError(t('Please enter valid email'));
  } else {
    setEmailError('');
  }
  validateForm(); // Call the validateForm function after each change
};

const handleSubmit = () => {
  // Check if any of the required fields are missing
  if (
    !frontFile ||
    !backFile ||
    !firstName ||
    !lastName ||
    !email ||
    !dob ||
    !address ||
    !user_id
  ) {
    // Construct an error message based on the missing fields
    let errorMessage = 'Fill all fields';

    setDocumentError(errorMessage.trim()); // Show all errors at once
    return; // Prevent further processing if fields are missing
  }

  setDocumentError(''); // Clear any previous error messages
  setUserIdError(''); // Clear the userId error message
  setIsLoading(true); // Show loader

  const formdata = new FormData();
  formdata.append('first_name', firstName);
  formdata.append('last_name', lastName);
  formdata.append('email', email);
  formdata.append('dob', dob);
  formdata.append('address', address);
  formdata.append('user_id', user_id);
  formdata.append('document_front', {
    uri: frontFile.uri,
    name: frontFile.name,
    type: frontFile.type,
  });
  formdata.append('document_back', {
    uri: backFile.uri,
    name: backFile.name,
    type: backFile.type,
  });

  fetch('https://getweed.stgserver.site/api/v1/shop/update-shop', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data', // Change to multipart/form-data for file uploads
    },
    body: formdata,
  })
    .then(response => response.json())
    .then(responseData => {
      setIsLoading(false); // Hide loader
      console.log('Response Data:', JSON.stringify(responseData));
      const userId = responseData.data ? responseData.data.id : null;
      if (userId) {
        navigation.navigate('BusinessDetails', {user_id: userId});
      } else {
        // If the userId is missing or the email is already used, set the userIdError state
        setUserIdError(
          'Enter correct information',
        );
      }
    })
    .catch(error => {
      Alert.alert('Error Response Data:', JSON.stringify(error));
      setIsLoading(false); // Hide loader on error
      console.error('Error:', error);
    });
};


const validateForm = () => {
  if (
    firstName &&
    !firstNameError &&
    lastName &&
    !lastNameError &&
    email &&
    !emailError &&
    frontFile &&
    backFile &&
    dob &&
    address &&
    user_id
  ) {
    setIsFormValid(true); // Enable the submit button if everything is valid
  } else {
    setIsFormValid(false); // Disable the submit button if any field is invalid or missing
  }
};


const handleFileSelection = async type => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.images, DocumentPicker.types.pdf], // Allow image and PDF files
    });

    const selectedFile = res[0]; // Get the selected file

    // Get the file extension
    const fileExtension = selectedFile.name.split('.').pop().toLowerCase();

    // Check if the file extension is PNG, JPG, JPEG, or PDF
    if (
      fileExtension !== 'png' &&
      fileExtension !== 'jpg' &&
      fileExtension !== 'jpeg' &&
      fileExtension !== 'pdf'
    ) {
      setDocumentError(t('Please upload only PNG, JPG, or PDF files.'));
      return;
    }

    // Check if the file size is less than 1 MB (1 MB = 1,048,576 bytes)
    if (selectedFile.size > 1048576) {
      setDocumentError(t('Please upload a file smaller than 1 MB.'));
      return;
    }

    // Clear any previous error messages
    setDocumentError('');

    // Set the file based on type (front or back)
    if (type === 'front') {
      setFrontFile(selectedFile);
    } else {
      setBackFile(selectedFile);
    }
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      console.log('User cancelled the file picker');
    } else {
      console.error('File picker error: ', err);
    }
  }
};


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setDob(formattedDate);
    hideDatePicker();
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
          <Text style={styles.topText}>{t('personal_info_title')}</Text>

          <View style={styles.inputContainer}>
            <FloatingLabelInput
              label={t('first_name')}
              value={firstName}
              onChangeText={handleFirstNameChange}
            />
            {firstNameError ? (
              <Text style={styles.errorText}>{firstNameError}</Text>
            ) : null}
            <FloatingLabelInput
              label={t('last_name')}
              value={lastName}
              onChangeText={handleLastNameChange}
            />
            {lastNameError ? (
              <Text style={styles.errorText}>{lastNameError}</Text>
            ) : null}
            <FloatingLabelInput
              label={t('email')}
              value={email}
              onChangeText={handleEmailChange}
              keyboardType="email-address"
            />
            {emailError ? (
              <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
            <View style={styles.containerrr}>
              <Text style={styles.labelll}>{t('dob')}</Text>
              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.inputContainerrr}>
                <TextInput
                  style={styles.inputtt}
                  value={dob}
                  editable={false}
                />
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={new Date()}
                maximumDate={new Date()}
              />
            </View>
            <FloatingLabelInput
              label={t('address')}
              value={address}
              onChangeText={setAddress}
              multiline
              numberOfLines={3}
              style={styles.addressInput}
            />
          </View>

          <Text style={styles.uploadText}>{t('upload_documents')}</Text>
          <View style={styles.uploadContainer}>
            <View style={styles.uploadRow}>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => handleFileSelection('front')}>
                <View style={styles.uploadButtonContent}>
                  {frontFile && frontFile.type.startsWith('image') ? (
                    <Image
                      source={{uri: frontFile.uri}}
                      style={styles.imagePreview} // You can add your custom styles for the image
                    />
                  ) : (
                    <>
                      <Image source={Cloud} style={styles.CloudIcon} />
                      <Text style={styles.uploadButtonText}>{t('front')}</Text>
                      <Text style={styles.uploadButtonSubtext}>
                        {t('upload_and_scan')}
                      </Text>
                    </>
                  )}
                  {/* Only hide the file name text */}
                  {frontFile ? null : null}
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={() => handleFileSelection('back')}>
                <View style={styles.uploadButtonContent}>
                  {backFile && backFile.type.startsWith('image') ? (
                    <Image
                      source={{uri: backFile.uri}}
                      style={styles.imagePreview} // Same styling for the image preview
                    />
                  ) : (
                    <>
                      <Image source={Cloud} style={styles.CloudIcon} />
                      <Text style={styles.uploadButtonText}>{t('back')}</Text>
                      <Text style={styles.uploadButtonSubtext}>
                        {t('upload_and_scan')}
                      </Text>
                    </>
                  )}
                  {/* Only hide the file name text */}
                  {backFile ? null : null}
                </View>
              </TouchableOpacity>
            </View>
            {documentError ? (
              <Text style={styles.errorText}>{documentError}</Text>
            ) : null}
          </View>

          <View style={styles.buttonContainer}>
            {userIdError ? (
              <Text style={{color: 'red', marginBottom: 10}}>
                {userIdError}
              </Text>
            ) : null}

            <LoadingButton
              title={t('next')}
              onPress={handleSubmit}
              disabled={!isFormValid}
              isLoading={isLoading} // Pass isLoading to show spinner when submitting
            />
          </View>
        </ScrollView>
      </SafeAreaView>
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
    color: 'black',
    backgroundColor: 'transparent',
  },
  CloudIcon: {
    width: 20, // Set the width of the icon
    height: 20, // Set the height of the icon
    resizeMode: 'contain', // Ensures the icon maintains its aspect ratio
    marginTop: 30, // Add space between icon and text
  },
  uploadContainer: {
    width: width * 0.7,
    marginTop: 20,
    // marginRight: 20,
    alignItems: 'center',
  },
  uploadText: {
    fontSize: 20,
    alignItems: 'left', // Align items to the left
    textAlign: 'left',
    marginLeft: 50,
    color: 'black',
    justifyContent: 'flex-start', // Align buttons to the left
    width: '100%', //
    fontWeight: 'bold',
    // marginTop: ,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    marginVertical: 8,
    alignItems: 'center',
  },
  uploadButtonContent: {
    alignItems: 'center', // Centers content horizontally
  },
  uploadButton: {
    height: 150,
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
    color: 'rgba(51, 51, 51, 1)',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(51, 51, 51, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    marginTop: 4,
    marginBottom: 6,
  },
  buttonContainer: {
    paddingTop: 14,
    width: width * 0.97,
    paddingBottom: 14,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: 'rgbs(64, 156, 89, 1)',
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
    fontSize: 16,
    fontWeight: '400',
    width: width * 0.8,
    height: '22px',
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: 20,
    fontFamily: 'Mulish',
  },
  addressInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'transparent',
  },
  selectedFileName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333', // Choose a color that fits your design
    marginTop: 5, // Adds space between the upload and the file name
    textAlign: 'center', // Centers the file name text
  },

  containerrr: {
    position: 'relative',
    marginVertical: 10,
  },
  labelll: {
    position: 'absolute',
    left: 10,
    color: 'gray',
    fontSize: 12,
    transition: 'top 0.2s ease',
    marginTop: 3,
  },
  inputContainerrr: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    color: 'black',
    backgroundColor: 'transparent',
  },
  inputtt: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  imagePreview: {
    width: 150, // Set a suitable width
    height: 100, // Set a suitable height
    resizeMode: 'cover', // Maintain the aspect ratio
  },
});
