import { Stack } from 'expo-router';
import '../global.css';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next, useTranslation } from 'react-i18next';

import en from '../languages/en.json';
import ru from '../languages/ru.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: 'ru',
  fallbackLng: 'ru',
});

type Props = {
  name: string;
};

const RootLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(button)" options={{ headerShown: false }} />
          <Stack.Screen
            name="WayEmployee"
            options={({ route }) => ({
              headerTitle: `${t('Передвижения')} ${t(`${(route.params as Props)?.name}`)}`,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#2351A7' },
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="Setting"
            options={{ headerTitle: 'Settings', headerBackTitle: 'Back' }}
          />
        </Stack>
      </I18nextProvider>
    </>
  );
};
export default RootLayout;
