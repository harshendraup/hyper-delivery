import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import logo from '../asset/logo.png';
import girlBag from '../asset/girlBag.png';
import girlWeb from '../asset/girlWeb.png';
import guyPhoto from '../asset/guyPhoto.png';
import Google from '../asset/icons/Google.png';
import Email from '../asset/icons/Email.png';
import Facebook from '../asset/icons/Facebook.png';
import Phone from '../asset/icons/Phone.png';
import GetstartwithFace from '../asset/icons/Face.png';
import Apple from '../asset/icons/Apple.png';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const iconMapping = {
  'Get Started with Google': Google,
  'Get Started with Email': Email,
  'Get Started with Phone': Phone,
  'Get Started with Apple': Apple,
  'Get Started with Facebook': Facebook,
  'Get Started with Face': GetstartwithFace,
};

const CustomButton = ({title, onPress}) => {
  const iconSource = iconMapping[title];

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        {iconSource && <Image source={iconSource} style={styles.icon} />}
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
      <View style={styles.topSection}>
        <View style={styles.touchable}>
          <TouchableOpacity onPress={() => navigation.navigate('ProductInfo')}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
          <View>
            <Text style={styles.boldText}>Let's Start!</Text>
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
  },
  subText: {
    fontSize: 16,
    color: 'black',
  },
  subsubText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    paddingBottom: 20,
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
    paddingLeft: 60, // Add padding to the left
  },
  icon: {
    width: 30, // Increase the icon size
    height: 30, // Increase the icon size
    marginRight: -20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
