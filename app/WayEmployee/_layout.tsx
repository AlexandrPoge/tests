import { Stack } from 'expo-router';

const WayLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="WayEmployee" options={{ title: 'Передвижения', headerShown: false }} />
      </Stack>
    </>
  );
};
export default WayLayout;
