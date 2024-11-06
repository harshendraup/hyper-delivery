import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useEffect} from 'react';
import logo from '../asset/logo.png';
import Apple from '../asset/SVG/Apple'; // Import SVG components
import Phone from '../asset/SVG/Call';
import Email from '../asset/SVG/Email';
import Facebook from '../asset/SVG/Facebook';
import Google from '../asset/SVG/Google';
import GetstartwithFace from '../asset/SVG/ScanFace';
import tri from '../asset/tri.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const CustomButton = ({title, onPress}) => {
  // Render the correct SVG component based on the title
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        {/* Conditionally render the correct SVG icon */}
        {title === 'Get Started with Google' && <Google />}
        {title === 'Get Started with Email' && <Email />}
        {title === 'Get Started with Apple' && <Apple />}
        {title === 'Get Started with Facebook' && <Facebook />}
        {title === 'Get Started with Face' && <GetstartwithFace />}
        <View style={styles.textContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const GreenButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.greenButton} onPress={onPress}>
      <Text style={styles.greenButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const ConnectWithPhone = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // Handle the keyboard showing, if needed
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // Handle the keyboard hiding, if needed
      },
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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.topSection}>
          <View style={styles.touchable}>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
              <Text style={styles.boldText}>Let's Start!</Text>
              <Text style={styles.subText}>
                Welcome, Please Enter Your Details!
              </Text>
            </View>
          </View>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.inputContainer}>
          <Image source={tri} style={styles.triangleIcon} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>

        <View style={styles.containerText}>
          <Text
            style={[
              styles.bottomText,
              {flex: 1, textAlign: 'left', paddingLeft: 12},
            ]}>
            Recovery account?
          </Text>
          <Text
            style={[
              styles.bottomTextHelp,
              {flex: 1, textAlign: 'right', paddingRight: 12},
            ]}>
            Need Help?
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title="Next"
            onPress={() => navigation.navigate('OtpSplash')}
          />
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.separator} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title="Get Started with Email" onPress={() => {}} />
          <CustomButton title="Get Started with Google" onPress={() => {}} />
          <CustomButton title="Get Started with Apple" onPress={() => {}} />
          <CustomButton title="Get Started with Facebook" onPress={() => {}} />
          <CustomButton title="Get Started with Face" onPress={() => {}} />
        </View>

        <Text style={styles.subsubText}>
          By continuing you agree to our{'\n'}Terms of use and privacy
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ConnectWithPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bottomText: {
    fontSize: 10,
    color: 'rgba(64, 156, 89, 1)',
    paddingBottom: 5,
    fontFamily: 'Inter',
  },
  bottomTextHelp: {
    fontSize: 10,
    color: 'rgba(64, 156, 89, 1)',
    paddingBottom: 5,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  touchable: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%', // Ensures it takes full width
    alignItems: 'flex-start', // Aligns the items at the start
    marginLeft: 60,
  },

  logo: {
    width: 70,
    height: 70,
    marginRight: 10,
    marginTop: 40,
  },
  boldText: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Inter',
  },
  subText: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  subsubText: {
    fontSize: 12,
    color: 'black',
    paddingBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.85,
    height: 60,
    borderWidth: 1,
    borderColor: '#409C59',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  triangleIcon: {
    width: 80,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    paddingTop: 5,
    width: width * 0.85,
    paddingBottom: 30,
  },
  button: {
    width: '100%',
    height: 45,
    borderRadius: 10,
    borderWidth: 0.5,
    justifyContent: 'center',
    borderColor: 'lightgrey',
    alignItems: 'center',
    marginVertical: 8,
  },
  greenButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#409C59',
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 60,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: -20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  orText: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'gray',
  },
});
