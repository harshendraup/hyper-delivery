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
  SafeAreaView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import Cloud from '../../asset/SVG/Cloud.png';
import {useTranslation} from 'react-i18next';
import DocumentPicker from 'react-native-document-picker';

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
  const {t} = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [frontFile, setFrontFile] = useState(null); // Store the front file data
  const [backFile, setBackFile] = useState(null);   // Store the back file data
  const route = useRoute(); // Access route parameters
  const { user_id } = route.params; // Get the user_id passed from the previous screen

  useEffect(() => {
    console.log("Received person user_id:", user_id);  // Log or use the user_id as needed
  }, [user_id]);

  const handleSubmit = async () => {
    if (!frontFile || !backFile) {
      alert("Please upload both documents.");
      return;
    }

    const formdata = new FormData();
    formdata.append("first_name", firstName);
    formdata.append("last_name", lastName);
    formdata.append("email", email);
    formdata.append("dob", dob);
    formdata.append("address", address);
    formdata.append("user_id", user_id);  
    formdata.append("document_front", {
      uri: frontFile.uri,
      name: frontFile.name,
      type: frontFile.type,
    });
    formdata.append("document_back", {
      uri: backFile.uri,
      name: backFile.name,
      type: backFile.type,
    });

    try {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data", // Change to multipart/form-data for file uploads
        },
        body: formdata,
      };
      const response = await fetch(
        "https://getweed.stgserver.site/api/v1/shop/update-shop",
        requestOptions
      );
      const result = await response.text();
      navigation.navigate("BusinessDetails");
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelection = async (type) => {
    try {
      // Open the file picker
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // You can customize the file types here
      });
      
      // Handle the selected file and update the state based on type
      if (type === 'front') {
        setFrontFile(res[0]); // Store the selected front document
      } else {
        setBackFile(res[0]); // Store the selected back document
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // If the user cancels the file picker
        console.log('User cancelled the file picker');
      } else {
        // Handle other errors
        console.error('File picker error: ', err);
      }
    }
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
          <Text style={styles.topText}>
            {t('personal_info_title')}
          </Text>

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
              label={t('email')}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <FloatingLabelInput
              label={t('dob')}
              value={dob}
              onChangeText={setDob}
            />
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
              <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileSelection('front')}>
                <View style={styles.uploadButtonContent}>
                  <Image source={Cloud} style={styles.CloudIcon} />
                  <Text style={styles.uploadButtonText}>{t('front')}</Text>
                  <Text style={styles.uploadButtonSubtext}>
                    {t('upload_and_scan')}
                  </Text>
                  {frontFile ? (
                    <Text style={styles.selectedFileName}>{frontFile.name}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.uploadButton} onPress={() => handleFileSelection('back')}>
                <View style={styles.uploadButtonContent}>
                  <Image source={Cloud} style={styles.CloudIcon} />
                  <Text style={styles.uploadButtonText}>{t('back')}</Text>
                  <Text style={styles.uploadButtonSubtext}>
                    {t('upload_and_scan')}
                  </Text>
                  {backFile ? (
                    <Text style={styles.selectedFileName}>{backFile.name}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <GreenButton
              title={t('next')}
              onPress={handleSubmit}
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
    color:'black',
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
    color:"black",
    backgroundColor: 'transparent',
  },
  selectedFileName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333', // Choose a color that fits your design
    marginTop: 5, // Adds space between the upload and the file name
    textAlign: 'center', // Centers the file name text
  },
});
