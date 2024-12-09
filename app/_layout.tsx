import { Stack } from 'expo-router';
import '../global.css';

type Props = {
  name: string;
};

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(button)" options={{ headerShown: false }} />
        <Stack.Screen
          name="WayEmployee"
          options={({ route }) => ({
            headerTitle: `Передвижения  ${(route.params as Props)?.name || ''}`,
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#2351A7' },
            headerTitleAlign: 'center',
          })}
        />
      </Stack>
    </>
  );
};
export default RootLayout;
