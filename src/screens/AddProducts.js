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
import CommonButton from '../component/button';
import backbutton from '../asset/backbutton.png';
import ProductImage from '../asset/ProductImage.png';
import uploadcloud from '../asset/uploadcloud.png';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox
import Accordion from '../component/Accordion'; // Import Accordion component

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
            onPress={() => navigation.navigate('AncillaryAddProducts')}>
            Add Products
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Accordion
            title="Cannabis Type"
            items={['Medical', 'Oil', 'Power', 'Ancillary']}
            isOpen={Cannabistype}
            toggle={() => setCannabistype(!Cannabistype)}
            onSelect={() => {}}
          />

          <FloatingLabelInput
            label="Product Name"
            value={ProductName}
            onChangeText={setProductName}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label="Price Per Gram"
            value={pricePerGram}
            onChangeText={setPricePerGram}
            keyboardType="email-address"
          />
          <FloatingLabelInput
            label="Product Details"
            value={ProductDetails}
            onChangeText={setProductDetails}
            keyboardType="email-address"
          />

          {/* Accordion for Cannabis Type */}
          <Accordion
            title="Project Category"
            items={['Category 1', 'Category 2', 'Category 3']}
            isOpen={projectCategoryOpen}
            toggle={() => setProjectCategoryOpen(!projectCategoryOpen)}
            onSelect={() => {}}
          />

          <FloatingLabelInput
            label="Enter Lanzer (Range 10 to 28)"
            value={lanzer}
            onChangeText={handleLanzerChange}
          />
          <FloatingLabelInput
            label="Enter CBD"
            value={Cbd}
            onChangeText={setCbd}
            keyboardType="email-address"
          />
          <Accordion
            title="Cannabis Form"
            items={['Form 1', 'Form 2', 'Form 3']} // Replace with actual items
            isOpen={Cannabisform}
            toggle={() => setCannabisform(!Cannabisform)}
            onSelect={() => {}}
          />
          <FloatingLabelInput
            label="Enter Stock"
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
              Does this product require a prescription{'\n'} & License?
            </Text>
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>Product Image</Text>
          <Image
            source={ProductImage}
            style={{width: '100%', alignItems: 'center', borderRadius: 10}}
          />
          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadButton}>
              <Image source={uploadcloud} />
              <Text style={styles.uploadButtonText}>Upload Image</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            styles.buttonContainer,
            {width: '85%', alignItems: 'center'},
          ]}>
          <CommonButton title="Next" onPress={() => {}} />
        </View>
      </ScrollView>
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
    width: '100%',
    marginVertical: 10,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 1,
    marginRight: 1,
    width: '11%',
    height: '85%',
  },
  checkbox: {
    transform: [{scaleX: 1.5}, {scaleY: 1.5}],
  },
  checkboxLabel: {
    fontSize: 15,
    color: 'rgba(51, 51, 51, 1)',
    marginLeft: 10,
    fontWeight: '600',
    fontFamily: 'Mulish',
  },
});
