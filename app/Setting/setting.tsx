import i18n from 'i18next';
import { View, Button, SafeAreaView } from 'react-native';

const Setting = () => {
  const changeLanguage = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      console.log(`Язык изменён на ${lng}`);
    } catch (error) {
      console.error('Ошибка смены языка:', error);
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="English lang" onPress={() => changeLanguage('en')} />
        <Button title="Русский язык" onPress={() => changeLanguage('ru')} />
      </View>
    </SafeAreaView>
  );
};

export default Setting;
