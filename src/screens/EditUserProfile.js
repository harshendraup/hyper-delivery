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
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

import FloatingLabelInput from '../component/TextInput'; // Import the FloatingLabelInput component
import backbutton from '../asset/backbutton.png';
import Ellipse12 from '../asset/faces/Ellipse3.png';
import CommonButton from '../component/button';

const {width, height} = Dimensions.get('window');

const EditUserProfile = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.semiCircle}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image source={backbutton} style={styles.backButtonImage} />
          </TouchableOpacity>
          <Text style={styles.profileLabel}>Edit Profile</Text>
          <Image source={Ellipse12} style={styles.profileImage} />
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>

        {/* Floating label inputs */}
        <View style={styles.inputContainer}>
          <FloatingLabelInput
            label="Name"
            value={name}
            onChangeText={setName}
          />
          <FloatingLabelInput label="ID" value={id} onChangeText={setId} />
          <FloatingLabelInput
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <FloatingLabelInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          {/* Custom input for Date of Birth with Calendar Icon inside */}
          <View style={styles.inputWithIcon}>
            <FloatingLabelInput
              label="Date of Birth"
              // value={email}
              // onChangeText={setEmail}
              // keyboardType="email-address"
            />
            <TouchableOpacity
              style={styles.calendarIcon}
              onPress={() => {
                /* Open date picker logic here */
              }}>
              <FontAwesome name="calendar" size={20} color="#409C59" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CommonButton
            title="Update Profile"
            onPress={() => navigation.navigate('UploadDoc')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {alignItems: 'center', paddingTop: 25},
  semiCircle: {
    width: '100%',
    height: height * 0.3,
    backgroundColor: '#409C59',
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop: -30,
  },
  profileLabel: {
    position: 'absolute',
    top: 20,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
  },
  profileName: {
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  profileEmail: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  buttonContainer: {
    marginTop: 100,
    width: width * 0.85,
    paddingBottom: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  backButton: {
    position: 'absolute',
    left: 15,
    top: 15,
    padding: 10,
  },
  backButtonImage: {
    width: 45,
    height: 45,
  },

  // Styling for the Date of Birth input and calendar icon
  inputWithIcon: {
    position: 'relative',
    marginVertical: 10,
  },
  input: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: 'transparent',
    color: 'black', // Add space for the icon inside the input
  },
  calendarIcon: {
    position: 'absolute',
    right: 15,
    top: '35%',
  },
});

export default EditUserProfile;
