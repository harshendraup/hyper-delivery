import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const GreenButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.greenButton} onPress={onPress}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

const SelectLanguage = () => {
  const navigation = useNavigation();

  // State to track which language button is selected
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = language => {
    setSelectedLanguage(language); // Set the selected language
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
        <Text style={styles.topText}>Select Language</Text>

        <View style={styles.uploadContainer}>
          <View style={styles.uploadRow}>
            {['عربي', 'English'].map(language => (
              <TouchableOpacity
                key={language}
                style={[
                  styles.uploadButton,
                  selectedLanguage === language && styles.selectedButton,
                ]}
                onPress={() => handleLanguageSelect(language)}>
                <View style={styles.uploadButtonContent}>
                  <Text
                    style={[
                      styles.uploadButtonSubtext,
                      language === 'عربي' && styles.largeText,
                    ]}>
                    {language}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title="Next"
            onPress={() => navigation.navigate('Onboarding')}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SelectLanguage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  uploadContainer: {
    width: width * 0.85,
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 30,
  },
  uploadRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  uploadButton: {
    height: 130,
    width: 165,
    borderColor: '#409C59',
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#ecf6ee',
  },
  selectedButton: {
    backgroundColor: '#409C59', // Darker background when selected
  },
  uploadButtonContent: {
    alignItems: 'center',
  },
  uploadButtonSubtext: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
  },
  largeText: {
    fontSize: 30, // Increase font size for Arabic text
  },
  buttonContainer: {
    paddingTop: 10,
    width: width * 0.85,
    paddingBottom: 30,
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
  topText: {
    textAlign: 'center',
    fontSize: 24,
    width: width * 0.85,
    color: 'black',
    fontWeight: '700',
    marginBottom: 10,
    marginTop: 250,
  },
});
