import { RouteProp, useRoute } from '@react-navigation/core';
import { useTranslation } from 'react-i18next';
import { Linking, Alert } from 'react-native';

import database from '../../database/database.json';

type Props = {
  track: { name: string; date: string; time: string };
};

const useCallProgram = () => {
  const { t } = useTranslation();

  // Получение параметров маршрута
  const route = useRoute<RouteProp<Props, 'track'>>();
  const { name } = route.params;

  // Поиск сотрудника
  const employee = database.employees.find((e) => e.name === name);

  // Функция для звонка
  const handleCall = async () => {
    if (!employee?.phone) {
      Alert.alert(`${t('Ошибка')}`, `${t('Номер телефона сотрудника не найден')}`);
      return;
    }

    const phoneUrl = `tel:${employee.phone}`;
    try {
      const supported = await Linking.canOpenURL(phoneUrl);
      if (supported) {
        await Linking.openURL(phoneUrl);
      } else {
        Alert.alert(`${t('Ошибка')}`, `${t('Не удалось открыть приложение для звонков')}`);
      }
    } catch (error) {
      Alert.alert(`${t('Ошибка')}`, `${t('Произошла ошибка при попытке совершить звонок')}}`);
    }
  };

  // Функция для сообщения
  const handleMessage = async () => {
    if (!employee?.phone) {
      Alert.alert(`${t('Ошибка')}`, `${t('Номер телефона сотрудника не найден')}`);
      return;
    }

    const message = `${t('Добрый день, подскажите пожалуйста, какой номер обращения у вас сейчас в работе?')}`;
    const whatsappUrl = `whatsapp://send?phone=${employee.phone}&text=${encodeURIComponent(
      message
    )}`;

    try {
      const supported = await Linking.canOpenURL(whatsappUrl);
      if (supported) {
        await Linking.openURL(whatsappUrl);
      } else {
        Alert.alert(`${t('Ошибка')}`, `${t('Не удалось открыть WhatsApp')}`);
      }
    } catch (error) {
      Alert.alert(`${t('Ошибка')}`, `${t('Произошла ошибка при попытке отправить сообщение')}`);
    }
  };

  return { handleCall, handleMessage, employee };
};

export default useCallProgram;
