import { uniqueId } from 'lodash';

// i18n
import i18n from '../../i18n';

// Functions
import getAvailableLocales from '../getAvailableLocales';

// Utils
import utils from '../../utils';

const setStrings = strings => {
  const id = uniqueId('i18n-strings-');
  const localeKeys = Object.keys(strings);
  const availableLocales = getAvailableLocales();

  localeKeys.forEach(localeKey => {
    if (!availableLocales.includes(localeKey)) {
      throw new Error('Invalid locale passed to setStrings function');
    }

    i18n.translations = {
      ...i18n.translations,
      [localeKey]: {
        ...i18n.translations[localeKey],
        [id]: strings[localeKey],
      },
    };
  });

  return utils.getPrefixMap(strings, id)[i18n.defaultLocale];
};

export default setStrings;
