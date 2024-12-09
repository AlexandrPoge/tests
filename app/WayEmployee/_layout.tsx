import { Stack } from 'expo-router';

const WayLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="[name]" options={{ headerShown: false }} />
        <Stack.Screen name="track" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};
export default WayLayout;
