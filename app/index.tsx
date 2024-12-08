import { router } from 'expo-router';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>Hello</Text>
      <Text onPress={() => router.push('/(button)/list')}>Continue our app</Text>
    </View>
  );
};

export default App;
