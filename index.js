import { NativeModules } from 'react-native'
import i18n from 'i18n-js'
import { uniqueId } from 'lodash'

const { I18nStrings } = NativeModules

const getLocales = async () => {
    return await I18nStrings.getAllLocales()
}

const locales = getLocales()

console.log('All Locales', locales)

const getPrefixMap = (strings, prefix) => {
    const languageKeys = Object.keys(strings)

    return languageKeys.reduce((langAcc, langKey) => {
        const stringKeys = Object.keys(strings[langKey])

        const prefixes = stringKeys.reduce(
            (keyAcc, stringKey) => ({
                ...keyAcc,
                [stringKey]: `${prefix}.${stringKey}`,
            }),
            {}
        )

        return {
            ...langAcc,
            [langKey]: prefixes,
        }
    }, {})
}

export const setStrings = (strings) => {
    const id = uniqueId('strings-')
    const languageKeys = Object.keys(strings)
    const locale = i18n.locale.substr(0, 2)

    languageKeys.forEach((langKey) => {
        i18n.translations = {
            ...i18n.translations,
            [langKey]: {
                ...i18n.translations[langKey],
                [id]: strings[langKey],
            },
        }
    })

    return getPrefixMap(strings, id)[locale || 'en']
}

export * from 'i18n-js'
export { setStrings }
export default i18n