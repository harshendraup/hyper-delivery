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
  Image,
  Alert,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FloatingLabelInput from '../../component/TextInput';
import backbutton from '../../asset/SVG/Backbutton.png';
import Ellipse12 from '../../asset/faces/Ellipse3.png';
import CommonButton from '../../component/button';
import Calender from '../../asset/SVG/Calender.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, resetProfileState } from '../../Redux/Slice/Profileupdateslice';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');

const EditUserProfile = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();

  // Initialize profile data state
  const [profileData, setProfileData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
  });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const dispatch = useDispatch();
  const { profile, loading, error, success } = useSelector((state) => state.profileUpdate);

  useEffect(() => {
    console.log('Updated Profile:', profile);
  }, [profile]);  // This will run whenever profile changes
  
  // Handle date picker visibility
  const showDatePicker = () => setDatePickerVisible(true);
  const hideDatePicker = () => setDatePickerVisible(false);

  // Handle date selection
  const handleConfirm = (date) => {
    setSelectedDate(date);
    setProfileData({ ...profileData, dob: date.toISOString().split('T')[0] }); // Format to YYYY-MM-DD
    hideDatePicker();
  };

  const handleSubmit = () => {
    dispatch(updateProfile(profileData))
      .then(() => {
        // Show success message using alert
        Alert.alert(
          "Success",
          t('Profile updated successfully!'),
          [{ text: "OK", onPress: () => {
            // Optionally navigate or reset states here
            navigation.goBack(); // To go back to the previous screen after update
          }}]
        );
      })
      .catch((error) => {
        // Handle error if needed
        Alert.alert("Error", t('Failed to update profile.'));
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.semiCircle}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Image source={backbutton} style={styles.backButtonImage} />
            </TouchableOpacity>
            <Text style={styles.profileLabel}>{t('edit_profile')}</Text>
            <Image source={Ellipse12} style={styles.profileImage} />
            {/* Display updated name and email from Redux */}
            <Text style={styles.profileName}>{profile ? profileData.name : t('profileName')}</Text>
            <Text style={styles.profileEmail}>{profile ? profileData.email : t('profileEmail')}</Text>
          </View>

          {/* Floating label inputs */}
          <View style={styles.inputContainer}>
            <FloatingLabelInput
              label={t('name')}
              value={profileData.name}
              onChangeText={(text) => setProfileData({ ...profileData, name: text })}
            />
            <FloatingLabelInput
              label={t('phone_number')}
              value={profileData.phone}
              onChangeText={(text) => setProfileData({ ...profileData, phone: text })}
              keyboardType="phone-pad"
            />
            <FloatingLabelInput
              label={t('Email')}
              value={profileData.email}
              onChangeText={(text) => setProfileData({ ...profileData, email: text })}
              keyboardType="email-address"
            />

            {/* Custom input for Date of Birth with Calendar Icon inside */}
            <View style={styles.inputWithIcon}>
              <FloatingLabelInput
                label={t('dob')}
                value={selectedDate ? selectedDate.toDateString() : ''}
                editable={false} // Make the input uneditable directly, only change through date picker
              />
              <TouchableOpacity
                style={styles.calendarIcon}
                onPress={showDatePicker}>
                <Image source={Calender} style={{ width: 30, height: 30 }} />
              </TouchableOpacity>

              {/* DatePicker Modal */}
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={selectedDate || new Date()}
              />
            </View>
          </View>

          {/* Submit Button */}
          <View style={styles.buttonContainer}>
            <CommonButton
              title={t('Updateprofile')}
              onPress={handleSubmit}
              disabled={loading}
            />
          </View>

          {/* Feedback Messages */}
          {loading && <Text>Loading...</Text>}
          {success && <Text style={{ color: 'green' }}>Profile updated successfully!</Text>}
          {error && <Text style={{ color: 'red' }}>{error}</Text>}
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  scrollContainer: { alignItems: 'center', paddingTop: 25 },

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
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.1,
    marginBottom: 10,
    marginTop: 5,
  },
  profileName: {
    fontSize: 22,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '700',
  },
  profileEmail: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '500',
  },
  buttonContainer: {
    marginTop: 30,
    width: width * 0.83,
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
    height: 50,
  },
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

export default EditUserProfile;
