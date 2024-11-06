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
import uploadcloud from '../asset/uploadcloud.png';
import Calender from '../asset/icons/Location.png'; // Import the calendar icon

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
  const [shopName, setShopName] = useState('');
  const [shopAddress, setShopAddress] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
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
          <Text style={styles.title}>Store Details</Text>
        </View>

        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label="Shop Name"
            value={shopName}
            onChangeText={setShopName}
            keyboardType="default"
          />

          {/* Shop Address input with calendar icon */}
          <View style={styles.inputWithIcon}>
            <FloatingLabelInput
              label="Shop Address"
              value={shopAddress}
              onChangeText={setShopAddress}
              keyboardType="default"
            />
            <TouchableOpacity
              style={styles.calendarIcon}
              onPress={() => {
                /* Open date picker logic here */
              }}>
              <Image source={Calender} style={{width: 20, height: 20}} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.uploadContainer}>
          <Text style={styles.topText}>Shop Documents</Text>
          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadButton}>
              <Image source={uploadcloud} />
              <Text style={styles.uploadButtonText}>Upload Documents</Text>
            </TouchableOpacity>
            <Text style={styles.topText}>Product image</Text>
            <TouchableOpacity style={styles.uploadButton}>
              <Image source={uploadcloud} />
              <Text style={styles.uploadButtonText}>Upload Product Image</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CommonButton
            title="Save Shop"
            onPress={() => navigation.navigate('')} // Add the proper navigation here
          />
        </View>
      </ScrollView>
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
  title: {
    fontSize: 18,
    fontWeight: '600',
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
});

export default StoreDetails;
