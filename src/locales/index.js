import { NativeModules } from 'react-native';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
};

const getLanguageByDevice = () => {
  return NativeModules.I18nManager.localeIdentifier;
};
I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

const setLanguageToI18n = () => {
  I18n.defaultLocale = 'en_US';
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];
  const iHaveThisLanguage = I18n.translations.hasOwnProperty(
    translateNormalize
  );
  if (iHaveThisLanguage) {
    I18n.locale = translateNormalize;
  } else {
    I18n.locale = 'en_US';
  }
};

setLanguageToI18n();

const translate = key => I18n.t(key);

export const locale = getLanguageByDevice();

export default translate;
