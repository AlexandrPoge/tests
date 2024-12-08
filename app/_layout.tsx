import { Stack } from 'expo-router';
import '../global.css';

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(button)" options={{ headerShown: false }} />
        <Stack.Screen
          name="WayEmployee"
          options={({ route }) => ({
            headerTitle: `Передвижения ${route.params?.name || 'Сотрудник'}`,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#306FE3' },
            headerTitleAlign: 'center',
          })}
        />
      </Stack>
    </>
  );
};
export default RootLayout;
