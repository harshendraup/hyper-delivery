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

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

const FloatingLabelInput = ({ label, value, onChangeText, icon }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.floatingLabelContainer}>
      <Text style={[styles.floatingLabel, { top: isFocused || value ? -2 : 19 }]}>
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
  const route = useRoute();
  const { user_id } = route.params;

  useEffect(() => {
    console.log('Received business details:', user_id);  // Log or use the user_id as needed
  }, [user_id]);

  // const handleSubmit = async () => {
  //   const formdata = new FormData();
  //   formdata.append("business_name", firstName);
  //   formdata.append("phone", lastName);
  //   formdata.append("about", email);
  //   formdata.append("shop_timing", dob);
  //   formdata.append("open_days", selectDayOpen);
  //   formdata.append("user_id", user_id);
  //   formdata.append("store_logo", {
  //     uri: uploadLogo.uri,
  //     name: uploadLogo.name,
  //     type: uploadLogo.type,
  //   });
  //   formdata.append("business_outside_image", {
  //     uri: outside.uri,
  //     name: outside.name,
  //     type: outside.type,
  //   });
  //   formdata.append("business_inside_image", {
  //     uri: inside.uri,
  //     name: inside.name,
  //     type: inside.type,
  //   });
  //   formdata.append("menu_image", {
  //     uri: menu.uri,
  //     name: menu.name,
  //     type: menu.type,
  //   });

  //    // Debugging line to log the FormData

  //   try {
  //     const requestOptions = {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "multipart/form-data",
  //       },
  //       body: formdata,
  //     };
  //     console.log('Form Data:', formdata);
  //     const response = await fetch(
  //       "https://getweed.stgserver.site/api/v1/shop/update-shop-detail",
  //       requestOptions
  //     );
  //     console.log("dataaaa---->");

  //     const result = await response.text();
  //     console.log('Response:', result); // Log the response

  //     if (response.ok) {
  //       console.log('Request successful');
  //       setIsBankDetails(true);
  //     } else {
  //       console.error('Failed request with status:', response.status);
  //     }
  //   } catch (error) {
  //     console.error('Network request failed:', error); // More descriptive error logging
  //   }
  // };

  const handleSubmit = () => {
     if (
       !selectedFileName &&
       !selectedFileName.uri &&
       !selectedFileName.name &&
       !selectedFileName.type
     ) {
       alert('Please select a valid account approval file!');
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

  const handleNext = () => {
     if (!firstName && !lastName && !email && !dob && !selectDayOpen) {
    alert('Please fill in all the required details!');
    return;
  }

  if (!uploadLogo && !uploadLogo.uri && !uploadLogo.name && !uploadLogo.type) {
    alert('Please select a valid logo image!');
    return;
  }

  if (!outside && !outside.uri && !outside.name && !outside.type) {
    alert('Please select a valid outside image!');
    return;
  }

  if (!inside && !inside.uri && !inside.name && !inside.type) {
    alert('Please select a valid inside image!');
    return;
  }

  if (!menu && !menu.uri && !menu.name && !menu.type) {
    alert('Please select a valid menu image!');
    return;
  }
    const formdata = new FormData();
    formdata.append('business_name', firstName);
    formdata.append('phone', lastName);
    formdata.append('about', email);
    formdata.append("shop_timing", dob);
    formdata.append('open_days', selectDayOpen);
    formdata.append('user_id', user_id);
    formdata.append('store_logo', {
      uri: uploadLogo.uri,
      name: uploadLogo.name,
      type: uploadLogo.type,
    });
    formdata.append('business_outside_image', {
      uri: outside.uri,
      name: outside.name,
      type: outside.type,
    });
    formdata.append('business_inside_image', {
      uri: inside.uri,
      name: inside.name,
      type: inside.type,
    });
    formdata.append('menu_image', {
      uri: menu.uri,
      name: menu.name,
      type: menu.type,
    });
    fetch('https://getweed.stgserver.site/api/v1/shop/update-shop-detail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data', // Change to multipart/form-data for file uploads
      },
      body:formdata,
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Response Data: ', JSON.stringify(responseData));
        setIsBankDetails(true);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      setIsBankDetails(true);
  };


  const handleFileSelection = async (type) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // You can customize the file types here
      });

      if (type === 'upload_form') {
        setSelectedFileName(res[0].name); // Store the selected front document name
      }else if (type === 'upload_logo'){
        setuploadLogo(res[0].name);
      }else if (type === 'outside'){
        setoutside(res[0].name);
      }else if (type === 'inside'){
        setinside(res[0].name);
      }else{
        setmenu(res[0].name);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the file picker');
      } else {
        console.error('File picker error: ', err);
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
                    onChangeText={setAccountNumber}
                  />
                  <FloatingLabelInput
                    label={t('account_holder_name')}
                    value={HolderName}
                    onChangeText={setHolderName}
                  />
                  <FloatingLabelInput
                    label={t('bank_name')}
                    value={bankName}
                    onChangeText={setBankName}
                  />
                  <FloatingLabelInput
                    label={t('ifsc_code')}
                    value={sortCode}
                    onChangeText={setSortCode}
                  />
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
                    onChangeText={setFirstName}
                  />
                  <FloatingLabelInput
                    label={t('phone_number')}
                    value={lastName}
                    onChangeText={setLastName}
                  />
                  <FloatingLabelInput
                    label={t('about')}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />
                  <FloatingLabelInput
                    label={t('shop_timing')}
                    value={dob}
                    onChangeText={setDob}
                    icon={Clock} // Pass the Clock icon as a prop
                  />

                  <Accordion
                    title={t('weekly')}
                    items={[
                      {item: t('daily')},
                      {item: t('weekly')},
                      {item: t('yearly')},
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
                    <Text style={styles.uploadText}>{t('store_logo')}</Text>
                    <View style={styles.uploadRow}>
                      <TouchableOpacity
                        style={[
                          styles.uploadButton,
                          {
                            alignItems: 'center', // Ensure buttons are vertically centered
                            width: '100%',
                          },
                        ]}
                        onPress={() => handleFileSelection('upload_logo')}>
                        <Text style={styles.uploadButtonText}>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          {'\n'}
                          {'\n'}
                          {t('upload_logo')}
                        </Text>
                        {uploadLogo ? (
                          <Text style={styles.selectedFileName}>
                            {uploadLogo}
                          </Text>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.uploadContainer}>
                    <Text style={styles.uploadText}>
                      {t('business_images')}
                    </Text>
                    <View style={styles.uploadRow}>
                      <TouchableOpacity
                        style={styles.uploadButtonThree}
                        onPress={() => handleFileSelection('outside')}>
                        <Text style={styles.uploadButtonText}>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          {'\n'}
                          {'\n'}
                          {t('outside')}
                        </Text>
                        {outside ? (
                          <Text style={styles.selectedFileName}>{outside}</Text>
                        ) : null}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.uploadButtonThree}
                        onPress={() => handleFileSelection('inside')}>
                        <Text style={styles.uploadButtonText}>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          {'\n'}
                          {'\n'}
                          {t('inside')}
                        </Text>
                        {inside ? (
                          <Text style={styles.selectedFileName}>{inside}</Text>
                        ) : null}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.uploadButtonThree}
                        onPress={() => handleFileSelection('menu')}>
                        <Text style={styles.uploadButtonText}>
                          <Image source={Cloud} style={styles.CloudIcon} />
                          {'\n'}
                          {'\n'}
                          {t('menu')}
                        </Text>
                        {menu ? (
                          <Text style={styles.selectedFileName}>{menu}</Text>
                        ) : null}
                      </TouchableOpacity>
                    </View>
                    <GreenButton title={t('next')} onPress={handleNext} />
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
      color:'black',
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
  });
