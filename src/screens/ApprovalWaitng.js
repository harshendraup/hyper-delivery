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

const ApprovalWaiting = () => {
  const handleWhatsAppPress = () => {
    Linking.openURL('https://wa.me/your-number'); // Replace with your WhatsApp number
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:your-email@example.com'); // Replace with your email
  };

  return (
    <View style={styles.container}>
      <Image
        source={connect} // Replace with your image URL
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Nice to Meet You at get weed.</Text>
        <Text style={styles.subtext}>
          Please wait for approval. Your {'\n'}registration is completed, and
          our{'\n'}
          representative will contact you soon.
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'light',
            textAlign: 'center',
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
    width: '70%',
    height: '50%',
    resizeMode: 'contain',
    marginBottom:-100,
  },
  textContainer: {
    padding: 20,
    alignItems: 'center', // Center align text within this container
  },
  heading: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Center align heading text
  },
  subtext: {
    fontSize: 16,
    fontWeight: 'light',
    marginBottom: 20,
    textAlign: 'center', 
    // Center align subtext
  },
  contact: {
    fontSize: 16,
    color: 'green',
    textDecorationLine: 'underline',
    marginVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold' // Center align contact text
  },
});

export default ApprovalWaiting;
