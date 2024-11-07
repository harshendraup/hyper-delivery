import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import logo from '../asset/logo.png';
import girlBag from '../asset/girlBag.png';
import girlWeb from '../asset/girlWeb.png';
import guyPhoto from '../asset/guyPhoto.png';
import Apple from '../asset/SVG/Apple'; // Import SVG components
import Phone from '../asset/SVG/Call';
import Email from '../asset/SVG/Email';
import Facebook from '../asset/SVG/Facebook';
import Google from '../asset/SVG/Google';
import GetstartwithFace from '../asset/SVG/ScanFace';
import {useNavigation} from '@react-navigation/native';
import Language from '../utils/Language';

const {width, height} = Dimensions.get('window');

const CustomButton = ({title, onPress}) => {
  // Directly render the SVG components as JSX
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        {/* Conditionally render the correct SVG icon */}
        {title === 'Get Started with Phone' && <Phone />}
        {title === 'Get Started with Email' && <Email />}
        {title === 'Get Started with Google' && <Google />}
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

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    
    <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          // keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
        <View style={styles.topSection}>
          <View style={styles.touchable}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TabNavigator')}
              >
              <Image source={logo} style={styles.logo} />
            </TouchableOpacity>
            <View>
              <Text style={styles.boldText}>
                {Language.english.onboarding.letsstart}
              </Text>
              <Text style={styles.subText}>
                Welcome, Please Enter Your Details!
              </Text>
            </View>
          </View>

          <View style={styles.swiperContainer}>
            <Swiper
              style={styles.wrapper}
              autoplay
              autoplayTimeout={3}
              showsButtons={false}
              showsPagination={false}
              loop={true}>
              <View style={styles.slide}>
                <Image source={girlBag} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={guyPhoto} style={styles.image} />
              </View>
              <View style={styles.slide}>
                <Image source={girlWeb} style={styles.image} />
              </View>
            </Swiper>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Get Started with Phone"
            onPress={() => navigation.navigate('ConnectWithPhone')}
          />
          <CustomButton
            title="Get Started with Email"
            onPress={() => navigation.navigate('ConnectWithEmail')}
          />
          <CustomButton title="Get Started with Google" onPress={() => {}} />
          <CustomButton title="Get Started with Apple" onPress={() => {}} />
          <CustomButton title="Get Started with Facebook" onPress={() => {}} />
          <CustomButton title="Get Started with Face" onPress={() => {}} />
        </View>
        <Text style={styles.subsubText}>
          By continuing you agree to our{'\n'}Terms of use and privacy
        </Text>
    </ScrollView>
      </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '31.37px',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
  },
  topSection: {
    flex: 1,
    alignItems: 'center',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 65,
    height: 65,
    marginRight: 10,
  },
  boldText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
  subText: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Inter',
  },
  subsubText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Inter',
  },
  swiperContainer: {
    height: height * 0.3,
    width: width,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.35,
    resizeMode: 'contain',
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
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 60,
  },
  icon: {
    width: 30, // Adjust size for SVG icon
    height: 30, // Adjust size for SVG icon
    // marginRight: 10, // Adjust margin to fit your design
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
    fontFamily: 'Inter',
  },
});
