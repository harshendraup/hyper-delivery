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
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import Calender from './path/to/your/calendar-icon'; // Path to your calendar icon// Import FontAwesome icons

import FloatingLabelInput from '../component/TextInput'; // Import the FloatingLabelInput component
import backbutton from '../asset/backbutton.png';
import Ellipse12 from '../asset/faces/Ellipse3.png';
import CommonButton from '../component/button';
import Calender from '../asset/icons/calender.png'
const {width, height} = Dimensions.get('window');

const EditUserProfile = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
const [isDatePickerVisible, setDatePickerVisible] = useState(false);
const [selectedDate, setSelectedDate] = useState(null); // Store selected date

// Show Date Picker
const showDatePicker = () => {
  setDatePickerVisible(true);
};

// Hide Date Picker
const hideDatePicker = () => {
  setDatePickerVisible(false);
};

// Handle Date Picked
const handleConfirm = date => {
  setSelectedDate(date); // Set the selected date
  hideDatePicker(); // Close the picker
};
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}>
        {/* <View style={styles.semiCircle}>
          
          <Text style={styles.profileLabel}>Edit Profile</Text>
          <Image source={Ellipse12} style={styles.profileImage} />
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View> */}
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
              value={selectedDate ? selectedDate.toDateString() : ''} // Show the selected date in the input
              editable={false} // Make the input uneditable directly, only change through date picker
            />
            <TouchableOpacity
              style={styles.calendarIcon}
              onPress={showDatePicker} // Open the date picker on press
            >
              <Image
                source={Calender} // Path to your calendar icon
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>

            {/* DatePicker Modal */}
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm} // Handle selected date
              onCancel={hideDatePicker} // Handle cancel
              date={selectedDate || new Date()} // Default to current date if no date selected
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CommonButton
            title="Update Profile"
            // onPress={() => navigation.navigate('UploadDoc')}
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
    height: height * 0.35, // Adjusting semi-circle height to 35% of screen height
    backgroundColor: '#409C59',
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    marginTop: -40, // Reduced margin to prevent overflow on smaller screens
  },

  profileLabel: {
    position: 'absolute',
    top: 20,
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
  },
  profileImage: {
    width: width * 0.2, // Dynamically setting image width (20% of screen width)
    height: width * 0.2, // Dynamically setting image height (20% of screen width)
    borderRadius: width * 0.1, // Dynamically setting border radius to keep the image round
    marginBottom: 10,
    borderWidth: 2,
    // borderColor: 'white',
    marginTop: 5,
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
    marginTop: 30,
    width: width * 0.85,
    paddingBottom: 30,
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
