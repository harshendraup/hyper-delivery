import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Image,
} from 'react-native';
import React, {useEffect, useState, createRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import uploadcloud from '../asset/uploadcloud.png';
import backbutton from '../asset/backbutton.png';
import CommonButton from '../component/button';

const {width} = Dimensions.get('window');

const UploadDoc = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {},
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {},
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

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
          <Text style={styles.title}>Upload Document</Text>
        </View>
        <View style={styles.uploadContainer}>
          <View style={styles.uploadRow}>
            <TouchableOpacity style={styles.uploadButton}>
              <Image source={uploadcloud} />
              <Text style={styles.uploadButtonText}>
                Front{'\n'}
                {'\n'}Upload & Scan passport / driver's license
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.uploadButton}>
              <Image source={uploadcloud} />
              <Text style={styles.uploadButtonText}>
                Back{'\n'}
                {'\n'}Upload & Scan passport / driver's license
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            title="Next"
            // onPress={() => navigation.navigate('TabNavigator')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UploadDoc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
    // paddingHorizontal: 10, // Optional: for some spacing
  },
  backButton: {
    padding: 10,
    marginTop: 10, // Add padding around the button
  },
  backButtonImage: {
    width: 45, // Set width as needed
    height: 45, // Set height as needed
  },
  bottomText: {
    fontSize: 14,
    color: '#409C59',
    marginBottom: 20,
    fontWeight: 'heavy',
  },
  scrollContainer: {
    alignItems: 'center',
    // paddingTop: 25,
    justifyContent: 'space-between',
    // marginTop: 30,
  },
  uploadContainer: {
    width: width*85,
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal:54,
  },
  uploadText: {
    fontSize: 20,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
    marginTop: -30,
  },
  uploadRow: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width:width*0.85
    // marginTop: 40,
    // marginHorizontal: 50,
  },
  uploadButton: {
    height: 180,
    width: width*0.85,
    borderColor: '#409C59',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginBottom: 10,
    backgroundColor: '#ecf6ee',
    borderStyle: 'dashed',
  },
  uploadButtonText: {
    fontSize: 12,
    color: 'rgba(51, 51, 51, 1)',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Mulish',
  },
  buttonContainer: {
    paddingTop: 30,
    width: width * 0.85,
    paddingBottom: 30,
  },
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: 'rgba(64, 156, 89, 1)',
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
  logo: {
    width: 270,
    height: 270,
    marginRight: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'Inter',
    color: '#333333', //
    marginRight: 40,
    flex: 1, // Allow the title to take remaining space
    textAlign: 'center', // Center the title if needed
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#409C59',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: '#409C59',
  },
  subsubText: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    paddingBottom: 20,
    marginTop: 20,
  },
});
