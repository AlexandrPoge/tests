import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';

import en from './../languages/en.json'; // Английский перевод
import ru from './../languages/ru.json'; // Русский перевод

const LANGUAGE_STORAGE_KEY = 'app_language';

// Функция для загрузки сохранённого языка или языка устройства
const getInitialLanguage = async () => {
  const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage) {
    return savedLanguage;
  }

  const locales = Localization.getLocales();
  return locales?.[0]?.languageCode || 'ru'; // Язык устройства или "ru" по умолчанию
};

// Асинхронная инициализация i18n
const initI18n = async () => {
  const lng = await getInitialLanguage();
  i18n
    .use(initReactI18next) // Подключение react-i18next
    .init({
      compatibilityJSON: 'v4', // Для совместимости с JSON
      fallbackLng: 'ru', // Язык по умолчанию
      lng, // Начальный язык
      resources: {
        en: { translation: en },
        ru: { translation: ru },
      },
      interpolation: {
        escapeValue: false, // Для работы с React
      },
    })
    .then(() => console.log('i18n успешно инициализирован'))
    .catch((error) => console.error('Ошибка инициализации i18n:', error));
};

initI18n(); // Запускаем инициализацию

export const setLanguage = async (lng: string) => {
  await i18n.changeLanguage(lng);
  await AsyncStorage.setItem(LANGUAGE_STORAGE_KEY, lng); // Сохраняем язык
};

export default i18n;
