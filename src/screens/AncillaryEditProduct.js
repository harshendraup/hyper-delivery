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
import Accordion from '../component/Accordion';
import {useNavigation} from '@react-navigation/native';
import CommonButton from '../component/button';
import {Picker} from '@react-native-picker/picker';
import backbutton from '../asset/backbutton.png';
import ProductImage from '../asset/ProductImage.png';
import uploadcloud from '../asset/uploadcloud.png';
import CheckBox from '@react-native-community/checkbox'; // Import CheckBox

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

const AncillaryEditProduct = () => {
  const [projectCategoryOpen, setProjectCategoryOpen] = useState(false);
  const [Cannabistype, setCannabistype] = useState(false); // State for Boats and Animals accordion
  const [Cannabisform, setCannabisform] = useState(false);
  const [Status, setStatus] = useState(false); // State for Boats and Animals accordion
  const navigation = useNavigation();
  const [ProductName, setProductName] = useState('');
  const [pricePerGram, setPricePerGram] = useState('');
  const [ProductDetails, setProductDetails] = useState('');
  const [Cbd, setCbd] = useState('');
  const [Stock, setStock] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [lanzer, setLanzer] = useState('');
  const [isPrescriptionRequired, setIsPrescriptionRequired] = useState(false); // State for checkbox

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
          <Text style={styles.title}>Edit Products</Text>
        </View>

        <View style={styles.inputContainer}>
          <Accordion
            title="Cannabis Type"
            items={['Category 1', 'Category 2', 'Category 3']} // Replace with actual items
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
            label="Price"
            value={pricePerGram}
            onChangeText={setPricePerGram}
            keyboardType="email-address"
          />

          <FloatingLabelInput
            label="Enter Stock"
            value={Stock}
            onChangeText={setStock}
            keyboardType="email-address"
          />
          {/* <FloatingLabelInput
            label="Status"
            // value={ProductName}
            // onChangeText={setProductName}
            keyboardType="email-address"
          /> */}
          <Accordion
            title="Status"
            items={['Category 1', 'Category 2', 'Category 3']} // Replace with actual items
            isOpen={Status}
            toggle={() => setStatus(!Status)}
            onSelect={() => {}}
          />
          {/* Checkbox for prescription requirement */}
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isPrescriptionRequired}
              onValueChange={setIsPrescriptionRequired}
            />
            <Text style={styles.checkboxLabel}>
              Does this product require a prescription & License?
            </Text>
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.uploadText}>Product Image</Text>

          <View style={styles.uploadRow}>
            <TouchableOpacity
              style={[styles.uploadButton]}
              onPress={() => handleUpload('Front')}>
              <Image source={uploadcloud} />
              <Text style={styles.uploadButtonText}>Upload Image</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={
            ([styles.buttonContainer], {width: '85%', alignItems: 'center'})
          }>
          <CommonButton
            title="Next"
            // onPress={() => navigation.navigate('BusinessDetails')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AncillaryEditProduct;

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
    fontSize: 24,
    fontWeight: 'bold',
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
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'rgba(51, 51, 51, 1)',
  },
  uploadRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  uploadButton: {
    height: 120,
    width: '100%',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  buttonContainer: {
    paddingTop: 10,
    width: 358,
    paddingBottom: 30,
  },
  addressInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '90%',
  },
  checkboxLabel: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10, // Spacing between checkbox and text
  },
});
