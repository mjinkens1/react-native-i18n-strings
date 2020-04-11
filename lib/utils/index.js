const utils = {
  getPrefixMap: (strings, prefix) => {
    const languageKeys = Object.keys(strings);

    return languageKeys.reduce((langAcc, langKey) => {
      const stringKeys = Object.keys(strings[langKey]);

      const prefixes = stringKeys.reduce(
        (keyAcc, stringKey) => ({
          ...keyAcc,
          [stringKey]: `${prefix}.${stringKey}`,
        }),
        {}
      );

      return {
        ...langAcc,
        [langKey]: prefixes,
      };
    }, {});
  },
};

export default utils;
