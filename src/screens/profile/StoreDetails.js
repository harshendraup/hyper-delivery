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
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../../component/button';
import backbutton from '../../asset/backbutton.png';
import Cloud from '../../asset/SVG/Cloud.png';
import Location from '../../asset/SVG/Loc.png'; // Import the calendar icon
import {useTranslation} from 'react-i18next';
import DocumentPicker from 'react-native-document-picker';

const {width} = Dimensions.get('window');

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

const StoreDetails = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [shopName, setShopName] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [upload_documents, setupload_documents] = useState('');
  const [Uploadproduct, setUploadproduct] = useState('');

  const handleFileSelection = async (type) => {
    try {
      // Open the file picker
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // You can customize the file types here
      });
      
      if (type === 'upload_documents') {
        setupload_documents(res[0].name); // Store the selected front document name
      } else {
        setUploadproduct(res[0].name); // Store the selected back document name
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // If the user cancels the picker
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
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={backbutton} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.title}>{t('store_details')}</Text>
        </View>

        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label={t('shopname')}
            value={shopName}
            onChangeText={setShopName}
            keyboardType="default"
          />

          {/* Shop Address input with calendar icon */}
          <View style={styles.inputWithIcon}>
            <FloatingLabelInput
              label={t('shop_address')}
              value={shopAddress}
              onChangeText={setShopAddress}
              keyboardType="default"
            />
            <TouchableOpacity
              style={styles.calendarIcon}
              onPress={() => {
                /* Open date picker logic here */
              }}>
              <Image source={Location} style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.topText}>{t('shop_documents')}</Text>
          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadButton}  onPress={() => handleFileSelection('upload_documents')}>
              <Image source={Cloud} style={styles.CloudIcon} />
              <Text style={styles.uploadButtonText}>{t('upload_documents')}</Text>
              {upload_documents ? (
                    <Text style={styles.selectedFileName}>{upload_documents}</Text>
                  ) : null}
            </TouchableOpacity>
            <Text style={styles.topText}>{t('Productimage')}</Text>
            <TouchableOpacity style={styles.uploadButton}  onPress={() => handleFileSelection('Uploadproduct')}>
              <Image source={Cloud} style={styles.CloudIcon} />
              <Text style={styles.uploadButtonText}>{t('Uploadproduct')}</Text>
              {Uploadproduct ? (
                    <Text style={styles.selectedFileName}>{Uploadproduct}</Text>
                  ) : null}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CommonButton
            title={t('Save')}
            onPress={() => navigation.navigate('')} // Add the proper navigation here
          />
        </View>
      </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topText: {
    textAlign: 'left',
    fontSize: 16,
    width: width * 0.85,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    fontFamily: 'Inter',
    marginBottom: 5,
    marginTop: 5,
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  CloudIcon: {
    width: 20, // Set the width of the icon
    height: 20, // Set the height of the icon
    resizeMode: 'contain', // Ensures the icon maintains its aspect ratio
    marginTop: 30, // Add space between icon and text
  },
  title: {
    fontSize: 18,
    fontWeight:Platform.OS ==='ios' ?'600':'700',
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Inter',
    marginRight: 40,
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 10,
  },
  backButtonImage: {
    width: 45,
    height: 45,
  },
  floatingLabelContainer: {
    position: 'relative',
    marginVertical: 10,
  },
  floatingLabel: {
    position: 'absolute',
    marginTop: 5,
    left: 10,
    color: 'gray',
    fontSize: 12,
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
    marginTop: -10,
  },
  uploadRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  uploadButton: {
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#409C59',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Mulish',
    marginTop: 4,
    marginBottom: 6,
  },
  buttonContainer: {
    paddingTop: 50,
    width: width * 0.85,
  },

  // Added styles for the Shop Address input with calendar icon
  inputWithIcon: {
    position: 'relative',
    marginVertical: 10,
  },
  calendarIcon: {
    position: 'absolute',
    right: 15,
    top: '35%',
  },
  selectedFileName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333', // Choose a color that fits your design
    marginTop: 5, // Adds space between the upload and the file name
    textAlign: 'center', // Centers the file name text
  },
});

export default StoreDetails;
