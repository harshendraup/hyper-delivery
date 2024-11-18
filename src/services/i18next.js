import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locals/en.json';
import ar from '../locals/ar.json';
import ru from '../locals/ru.json';
import hw from '../locals/hw.json';

export const languageResources = {
  en: {translation: en},
  ar: {translation: ar},
  ru: {translation: ru},
  he: {translation: hw},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
