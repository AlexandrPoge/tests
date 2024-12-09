import { router } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const { t } = useTranslation();

  //Начальный экран приложения
  return (
    <View className="flex-1 justify-center items-center bg-blue-50">
      <Text className="text-4xl font-bold text-blue-700 mb-4">{t('Добро пожаловать!')}</Text>
      <Text className="text-lg text-gray-600 text-center px-8 mb-8">
        {t('Мы рады видеть вас в нашем приложении. Нажмите ниже, чтобы начать.')}
      </Text>
      <TouchableOpacity
        className="bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
        onPress={() => router.push('/(button)/list')}>
        <Text className="text-white text-lg font-medium">{t('Продолжить')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
