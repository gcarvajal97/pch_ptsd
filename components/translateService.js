import i18n from 'i18n-js';
import en from '../languages/en.json';
import es from '../languages/es.json';

i18n.fallbacks = true;

i18n.translations = {
  en,
  es
};

export function translate(text, params = {}) {
  return i18n.t(text, params);
};

export const getVideo = (locale, videos) => {
  return videos[locale.slice(0, 2)];
};

export default translate;