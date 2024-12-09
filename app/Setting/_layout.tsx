import { Stack } from 'expo-router';

const SettingLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="setting" options={{ headerShown: false }} />
    </Stack>
  );
};

export default SettingLayout;
