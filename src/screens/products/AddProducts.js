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
import Language from '../../utils/Language';
import i18next from '../../services/i18next';
import {useTranslation} from 'react-i18next';
import CommonButton from '../../component/button';
import backbutton from '../../asset/SVG/Backbutton.png';
import ProductImage from '../../asset/ProductImage.png';
import Cloud from '../../asset/SVG/Cloud.png';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox
import Accordion from '../../component/Accordion'; // Import Accordion component
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
        keyboardType="numeric"
        {...props}
      />
    </View>
  );
};

const AddProducts = () => {
  const navigation = useNavigation();
   const {t} = useTranslation();
  const [ProductName, setProductName] = useState('');
  const [pricePerGram, setPricePerGram] = useState('');
  const [ProductDetails, setProductDetails] = useState('');
  const [Cbd, setCbd] = useState('');
  const [Stock, setStock] = useState('');
  const [lanzer, setLanzer] = useState('');
  const [isPrescriptionRequired, setIsPrescriptionRequired] = useState(false);
  const [Cannabistype, setCannabistype] = useState(false); // State for Cannabis type accordion
  const [Cannabisform, setCannabisform] = useState(false); // State for Cannabis form accordion
  const [projectCategoryOpen, setProjectCategoryOpen] = useState(false); // State for Project Category accordion
  const [selectedFileName, setSelectedFileName] = useState(''); // New state for the file name
  const [accordionOpen, setAccordionOpen] = useState(false);
const items = [
  {item: t('medical')},
  {item: t('oil')},
  {item: t('power') },
  {
    item: t('ancillary'),
   
  },
];

  const handleFileSelection = async () => {
    try {
      // Open the file picker
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // You can customize the file types here
      });
      
      // Handle the selected file
      console.log(res);
      setSelectedFileName(res[0].name);
      // You can process the file here, for example, uploading it or saving the file path.
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

  const handleLanzerChange = Number => {
    const numericValue = parseInt(Number, 10);
    if (
      Number === '' ||
      (!isNaN(numericValue) && numericValue >= 10 && numericValue <= 28)
    ) {
      setLanzer(Number);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}>
              <Image source={backbutton} style={styles.backButtonImage} />
            </TouchableOpacity>
            <Text
              style={styles.title}
              // onPress={() => navigation.navigate('AncillaryAddProducts')}
              >
              {t('addProduct')}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Accordion
              title={t('medical')}
              items={items} // pass the structured array of items
              isOpen={accordionOpen}
              toggle={() => setAccordionOpen(!accordionOpen)}
              onSelect={item => console.log(item)}
              noShift={true}
              borderColor="#409C59"
              width="100%"
            />

            <FloatingLabelInput
              label={t('product1')}
              value={ProductName}
              onChangeText={setProductName}
              keyboardType="email-address"
            />
            <FloatingLabelInput
              label={t('price_per_gram')}
              value={pricePerGram}
              onChangeText={setPricePerGram}
              keyboardType="email-address"
            />
            <FloatingLabelInput
              label={t('product_details')}
              value={ProductDetails}
              onChangeText={setProductDetails}
              keyboardType="email-address"
            />

            {/* Accordion for Cannabis Type */}
            <Accordion
              title={t('projectCategory')}
              items={[t('1'), t('2'), t('3')]}
              isOpen={projectCategoryOpen}
              toggle={() => setProjectCategoryOpen(!projectCategoryOpen)}
              onSelect={() => {}}
            />

            <FloatingLabelInput
              label={t('enter_lanzer_range')}
              value={lanzer}
              onChangeText={handleLanzerChange}
            />
            <FloatingLabelInput
              label={t('cbd')}
              value={Cbd}
              onChangeText={setCbd}
              keyboardType="email-address"
            />
            <Accordion
              title={t('cannabisForm')}
              items={[t('1'), t('2'), t('3')]} // Replace with actual items
              isOpen={Cannabisform}
              toggle={() => setCannabisform(!Cannabisform)}
              onSelect={() => {}}
            />
            <FloatingLabelInput
              label={t('stock')}
              value={Stock}
              onChangeText={setStock}
              keyboardType="email-address"
            />

            {/* Checkbox for prescription requirement */}
            <View style={styles.checkboxContainer}>
              <View style={styles.checkboxWrapper}>
                <CheckBox
                  value={isPrescriptionRequired}
                  onValueChange={setIsPrescriptionRequired}
                  style={styles.checkbox} // Optional: Apply some other styles to checkbox itself
                />
              </View>
              <Text style={styles.checkboxLabel}>
                {t('requires_prescription_and_license')}
              </Text>
            </View>
          </View>

          <View style={styles.uploadContainer}>
            <Text style={styles.uploadText}>{t('product_images')}</Text>
            <View style={styles.uploadRow}>
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleFileSelection}>
                <Image source={Cloud} style={styles.CloudIcon} />
                <Text style={styles.uploadButtonText}>{t('upload_image')}</Text>
                {selectedFileName ? (
                  <Text style={styles.selectedFileName}>
                    {selectedFileName}
                  </Text>
                ) : null}
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[
              styles.buttonContainer,
              {width: '85%', alignItems: 'center'},
            ]}>
            <CommonButton title={t('next')} onPress={() => {}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddProducts;

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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
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
  CloudIcon: {
    width: 20, // Set the width of the icon
    height: 20, // Set the height of the icon
    resizeMode: 'contain', // Ensures the icon maintains its aspect ratio
    marginTop: 5, // Add space between icon and text
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
    marginTop: 1,
  },
  uploadText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'rgba(51, 51, 51, 1)',
    textAlign: Platform.OS === 'ios' ? 'left' : 'left',
  },
  uploadRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  uploadButton: {
    height: 120,
    width: '100%',
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
    fontSize: 15,
    fontWeight: '600',
    color: 'rgba(51, 51, 51, 1)',
    textAlign: 'center',
    fontFamily: 'Mulish',
    marginTop: 4,
    marginBottom: 6,
  },
  buttonContainer: {
    paddingTop: 10,
    width: 358,
    paddingBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: '90%',
    marginVertical: 10,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 1,
    marginRight: 1,
    width: '11%',
    height: '85%',
  },
  checkbox: {
    marginBottom: 10,
    // transform: [{scaleX: 1.5}, {scaleY: 1.5}],
  },
  checkboxLabel: {
    fontSize: 15,
    color: 'rgba(51, 51, 51, 1)',
    marginLeft: 10,
    fontWeight: '600',
    fontFamily: 'Mulish',
  },
  selectedFileName: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333', // Choose a color that fits your design
    marginTop: 5, // Adds space between the upload and the file name
    textAlign: 'center', // Centers the file name text
  },
});
