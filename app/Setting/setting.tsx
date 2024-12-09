import i18n from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const Setting = () => {
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);

  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      setActiveLanguage(lng);
      console.log(`Язык изменён на ${lng}`);
    } catch (error) {
      console.error('Ошибка смены языка:', error);
    }
  };
  const { t } = useTranslation();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="pt-10 pb-6 px-4 border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800 text-center">{t('Настройки языка')}</Text>
      </View>

      <View className="flex-row justify-around mt-6 px-4">
        <TouchableOpacity
          className={`px-6 py-3 rounded-md shadow-md ${
            activeLanguage === 'en' ? 'bg-blue-500' : 'bg-gray-200'
          }`}
          onPress={() => changeLanguage('en')}>
          <Text
            className={`text-lg font-medium ${
              activeLanguage === 'en' ? 'text-white' : 'text-gray-800'
            }`}>
            English
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-6 py-3 rounded-md shadow-md ${
            activeLanguage === 'ru' ? 'bg-blue-500' : 'bg-gray-200'
          }`}
          onPress={() => changeLanguage('ru')}>
          <Text
            className={`text-lg font-medium ${
              activeLanguage === 'ru' ? 'text-white' : 'text-gray-800'
            }`}>
            Русский
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
