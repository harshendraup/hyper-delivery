import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import connect from '../asset/connect.png';
import {useNavigation} from '@react-navigation/native';

const ApprovalWaiting = () => {
  const navigation = useNavigation();
  const handleWhatsAppPress = () => {
    Linking.openURL('https://wa.me/your-number'); // Replace with your WhatsApp number
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:your-email@example.com'); // Replace with your email
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TabNavigator')}>
        <Image source={connect} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Nice to meet you at get weed.</Text>
        <Text style={styles.subtext}>
          Please wait for approval. Your registration is completed, and
          our{'\n'}
          representative will contact you soon.
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'light',
            textAlign: 'center',
            color: 'rgba(51, 51, 51, 1)',
          }}>
          Contact Us
        </Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={handleWhatsAppPress}>
            <Text style={styles.contact}>WhatsApp</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'light',
              textAlign: 'center',
              color: 'rgba(51, 51, 51, 1)',
            }}>
            {'\t'}or
          </Text>
          <TouchableOpacity onPress={handleEmailPress}>
            <Text style={styles.contact}>{'\t'}Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center', // Center aligns items horizontally
    justifyContent: 'center', // Center aligns items vertically
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // or 'space-between' based on your layout preference
  },
  image: {
    width: 200,
    height: 160,
    marginBottom: 50,
  },
  textContainer: {
    padding: 20,
    alignItems: 'center', // Center align text within this container
  },
  heading: {
    fontSize: 25,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center', // Center align heading text
  },
  subtext: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: 'rgba(125, 125, 125, 1)',
    fontFamily: 'Inter',
    // Center align subtext
  },
  contact: {
    fontSize: 16,
    color: '#409C59', //background: #409C59;

    textDecorationLine: 'underline',
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold', // Center align contact text
  },
});

export default ApprovalWaiting;
