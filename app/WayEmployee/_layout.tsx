import { Stack } from 'expo-router';

const WayLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="[way]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};
export default WayLayout;
