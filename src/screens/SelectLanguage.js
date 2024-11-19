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
import {useTranslation} from 'react-i18next';
import Language from '../utils/Language';
import i18next from '../services/i18next';
const {width} = Dimensions.get('window');

const GreenButton = ({title, onPress}) => (
  <TouchableOpacity style={styles.greenButton} onPress={onPress}>
    <Text style={styles.greenButtonText}>{title}</Text>
  </TouchableOpacity>
);

const SelectLanguage = () => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();

  // State to track which language button is selected
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = language => {
    // Change the language only if it's different from the current one
    if (i18n.language !== language) {
      i18n.changeLanguage(language); // Change language using i18next
      setSelectedLanguage(language); // Update the state to reflect the selected language
    }
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
        <Text style={styles.topText}>{t('select_lang')}</Text>

        <View style={styles.uploadContainer}>
          <View style={styles.uploadRow}>
            {['ar', 'en'].map(languageCode => (
              <TouchableOpacity
                key={languageCode}
                style={[
                  styles.uploadButton,
                  selectedLanguage === languageCode && styles.selectedButton, // Highlight selected button
                ]}
                onPress={() => handleLanguageSelect(languageCode)}>
                <View style={styles.uploadButtonContent}>
                  <Text
                    style={[
                      styles.uploadButtonSubtext,
                      languageCode === 'ar' && styles.largeText,
                    ]}>
                    {languageCode === 'ar' ? 'عربي' : 'English'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.uploadRow}>
            {['ru', 'he'].map(languageCode => (
              <TouchableOpacity
                key={languageCode}
                style={[
                  styles.uploadButton,
                  selectedLanguage === languageCode && styles.selectedButton, // Highlight selected button
                ]}
                onPress={() => handleLanguageSelect(languageCode)}>
                <View style={styles.uploadButtonContent}>
                  <Text
                    style={[
                      styles.uploadButtonSubtext,
                      languageCode === 'ar' && styles.largeText,
                      languageCode === 'he' && styles.largeText, // Increase font size for Hebrew too
                    ]}>
                    {languageCode === 'ar'
                      ? 'عربي'
                      : languageCode === 'en'
                      ? 'English'
                      : languageCode === 'ru'
                      ? 'Русский'
                      : 'עברית'}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <GreenButton
            title={t('next')}
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
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10, // Add margin between rows
  },
  uploadButton: {
    height: 130,
    width: 165,
    borderColor: '#409C59',
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 30, // Increase font size for Arabic and Hebrew text
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
