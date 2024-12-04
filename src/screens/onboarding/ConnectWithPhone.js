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
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import logo from '../../asset/SVG/Logo.png';
import Apple from '../../asset/SVG/Apple'; // Import SVG components
import Phone from '../../asset/SVG/Call';
import Email from '../../asset/SVG/Email';
import Facebook from '../../asset/SVG/Facebook';
import Google from '../../asset/SVG/Google';
import GetstartwithFace from '../../asset/SVG/ScanFace';
import Flag from '../../asset/SVG/Flag.png';
import Dropdown from '../../asset/SVG/Dropdown.png';
import {useNavigation} from '@react-navigation/native';
import Language from '../../utils/Language';
import i18next from '../../services/i18next';
import {useTranslation} from 'react-i18next';

const {width, height} = Dimensions.get('window');

const CustomButton = ({icon: Icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        {/* Render the passed SVG icon as a component */}
        {Icon && <Icon />}
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
  const {t} = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handleSubmit =() =>{
    if(!phoneNumber){
      console.log("please enter a phone number ")
      return;
    }
    fetch("https://getweed.stgserver.site/api/v1/shop/start-phone-verification",{
      method: "POST",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        phone: phoneNumber
      }),
    })
    .then((response) => response.json())
    .then((responeData) =>{
      console.log("Response Data: ", JSON.stringify(responeData))
    })
    .catch((error) =>{
      console.error("Error:", error)
    })
  }

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
        <View style={styles.topSection}>
          <View style={styles.touchable}>
            <View style={{width: '100%', alignItems: 'flex-start'}}>
              <View style={{width: '100%', alignItems: 'flex-start'}}>
                <Text style={styles.boldText}>{t('start')}</Text>
                <Text style={styles.subText}>{t('welcome')}</Text>
              </View>
            </View>
          </View>
          <Image source={logo} style={styles.logo} />
        </View>

        <View style={styles.inputContainer}>
          <Image source={Flag} style={styles.triangleIcon} />
          <Image source={Dropdown} style={styles.dropdownIcon} />
          <View style={styles.divider} />
          <TextInput
            style={styles.input}
            placeholder={t('mobile_no')}
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={(text) => {
              console.log("Updating phone number to: ", text); 
              setPhoneNumber(text);
            }}
          />
        </View>

        <View style={styles.containerText}>
          <Text
            style={[
              styles.bottomText,
              {flex: 1, textAlign: 'left', paddingLeft: 12},
            ]}>
            {t('recover')}
          </Text>
          <Text
            style={[
              styles.bottomTextHelp,
              {flex: 1, textAlign: 'right', paddingRight: 12},
            ]}>
            {t('need')}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title={t('next')}
            // onPress={() => navigation.navigate('OtpSplash')}
            // onPress={()=>{console.log("phone number" ,phoneNumber)}}
            onPress={handleSubmit}
          />
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>{t('or')}</Text>
            <View style={styles.separator} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            icon={Phone}
            title={t('phone')}
            onPress={() => navigation.navigate('ConnectWithPhone')}
          />
          <CustomButton icon={Google} title={t('google')} onPress={() => {}} />
          <CustomButton
            icon={Facebook}
            title={t('facebook')}
            onPress={() => {}}
          />
          <CustomButton icon={Apple} title={t('apple')} onPress={() => {}} />
          <CustomButton
            icon={Email}
            title={t('Get_email')}
            onPress={() => navigation.navigate('ConnectWithEmail')}
          />
          <CustomButton
            icon={GetstartwithFace}
            title={t('face')}
            onPress={() => navigation.navigate('ScanFace')}
          />
        </View>

        <Text style={styles.subsubText}>
          {t('terms_and_conditions')} {'\n'}
          {t('terms_and_conditions1')}
        </Text>
      </ScrollView>
      </SafeAreaView>
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
    width: '90%', // Ensures it takes full width
    alignItems: 'flex-start', // Aligns the items at the start
    marginLeft: 60,
  },

  logo: {
    width: 50,
    height: 50,
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
    width: 40,
    height: 30,
    marginRight: 10,
  },
  dropdownIcon: {
    width: 20,
    height: 12,
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
  divider: {
    width: 1.2, // Divider width
    height: '100%', // Divider height to match the input container
    backgroundColor: '#409C59', // Divider color, adjust as needed
    marginLeft:5, 
    marginRight:5// Space between the icon and divider
  },
});
