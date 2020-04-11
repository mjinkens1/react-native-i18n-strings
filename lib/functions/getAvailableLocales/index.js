import { NativeModules } from 'react-native';

const { I18nStrings } = NativeModules;

const getAvailableLocales = async () => {
  const locales = await I18nStrings.getAvailableLocales();
  return locales;
};

export default getAvailableLocales;
