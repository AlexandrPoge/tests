import { RouteProp, useRoute } from '@react-navigation/core';
import database from 'database/database.json';
import { View, Text, SafeAreaView } from 'react-native';

type Props = {
  WayEmployee: { id: string };
};

const WayEmployee = () => {
  const route = useRoute<RouteProp<Props, 'WayEmployee'>>();

  // Извлекаем id из параметров
  const { id } = route.params;

  // Находим сотрудника по id
  const employee = database.employees.find((e) => String(e.id) === String(id));

  if (!employee) {
    return (
      <SafeAreaView className="h-full flex justify-center items-center">
        <Text className="text-lg font-bold">Сотрудник не найден</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <SafeAreaView className="h-full">
        <View>
          {employee.tracks.map((item) => (
            <View key={item.date} className="text-red-400">
              <View className="bg-[#FFFFFF] h-[50px] justify-center pl-4">
                <Text className="text-lg font-medium">{item.date}</Text>
              </View>
              <View className="h-[50px] justify-center pl-4">
                <Text>{item.time}</Text>
                <Text>{item.time2}</Text>
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

export default WayEmployee;
