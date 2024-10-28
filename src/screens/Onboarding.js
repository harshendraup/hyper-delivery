import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import logo from '../asset/logo.png';
import girlBag from '../asset/girlBag.png';
import girlWeb from '../asset/girlWeb.png';
import guyPhoto from '../asset/guyPhoto.png';

const images = [girlBag, girlWeb, guyPhoto];

const Onboarding = () => {
  // const navigation = useNavigation();
  // onPress={() => navigation.navigate('Onboarding')}
  return (
    <View style={styles.container}>
      <View
        style={styles.touchable}
        >
        <Image source={logo} style={styles.logo} />
        <View>
          <Text style={styles.boldText}>Let's Start!</Text>
          <Text style={styles.subText}>
            Welcome, Please Enter Your Details!
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 25,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
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
  paginationBox: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
