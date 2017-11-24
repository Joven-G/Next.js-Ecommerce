/* eslint no-underscore-dangle: 0*/
/* eslint global-require: 0*/

const sprintf = require('sprintf-js').sprintf;

const i18n = {};

i18n.locale = 'en';

i18n.translations = {
  en: require('./locales/en'),
  pt: require('./locales/pt')
};

i18n.languages = [
  { text: 'Português', value: 'pt' },
  { text: 'English', value: 'en' },
  //{ text: 'Português [PT]', value: 'pt_PT' }
];

i18n.__ = function (str, ...other) {
  const currentLocale = i18n.currentLocale();

  if (i18n.translations[currentLocale][str]) {
    return sprintf(i18n.translations[currentLocale][str], ...other);
  }
  return sprintf(str, ...other);
};

i18n.currentLocale = function () {
  let locale = i18n.locale;
  const locales = Object.keys(i18n.translations);
  if (!locale || typeof locale !== 'string') return locales[0];

  if (locale.length > 2) {
    locale = locale.substring(0, 2);
  }

  if (locales.indexOf(locale) === -1) {
    return locales[0];
  }

  return locale;
};


i18n.toISO6392 = (l) => {
  const langs = {
    de: 'deu',
    fi: 'fin',
    fr: 'fra',
    hr: 'hrv',
    it: 'ita',
    ja: 'jpn',
    nl: 'nld',
    pt: 'por',
    ru: 'rus',
    es: 'spa'
  };
  return langs[l];
};

module.exports = i18n;
