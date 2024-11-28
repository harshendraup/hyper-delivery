import React, {useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import Scanface from '../../asset/SVG/Scan.png';
import CommonButton from '../../component/button';
import {launchCamera} from 'react-native-image-picker';
import {useTranslation} from 'react-i18next';

const {width} = Dimensions.get('window');

const ScanFace = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [photoUri, setPhotoUri] = useState(null);

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

  // Function to launch the camera when the image is clicked
  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'front',
        quality: 0.8, 
        saveToPhotos: true, 
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          setPhotoUri(response.assets[0].uri); // Save the image URI
        }
      },
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{t('scanface')}</Text>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={openCamera}>
            <Image
              source={photoUri ? {uri: photoUri} : Scanface} // Display the selected image or default one
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <CommonButton
            title={t('next')}
            onPress={() => navigation.navigate('UploadDoc')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ScanFace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
  },
  buttonContainer: {
    marginTop: 100,
    width: width * 0.85,
    paddingBottom: 30,
  },
  imageContainer: {
    width: 296,
    height: 296,
    padding: 48,
    marginTop: 90,
    borderRadius: 62,
    borderColor: 'white',
    borderWidth: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.85)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 8,
  },
  logo: {
    width: 200,
    height: 200,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 22,
    color: 'rgba(51, 51, 51, 1)',
    fontWeight: '600',
    lineHeight: 26.63,
    textAlign: 'center',
    paddingTop: 70,
  },
});
