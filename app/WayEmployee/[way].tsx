import { RouteProp, useRoute } from '@react-navigation/core';
import database from 'database/database.json';
import { View, Text, SafeAreaView } from 'react-native';

type Props = {
  way: { way: string };
};

const Way = () => {
  const route = useRoute<RouteProp<Props, 'way'>>();

  // Извлекаем name из параметров
  const { way } = route.params;

  // Находим сотрудника по name
  const employee = database.employees.find((e) => String(e.name) === String(way));

  if (!employee) {
    return (
      <SafeAreaView className="h-full flex justify-center items-center">
        <Text className="text-lg font-bold">Сотрудник не найден</Text>
      </SafeAreaView>
    );
  }

  // рендер данных связанных с передвижениями (время, дата)
  return (
    <>
      <SafeAreaView className="h-full bg-[#FFFFFF] ">
        <View>
          {employee.tracks.map((item) => (
            <View key={item.date}>
              <View className="h-[50px] justify-center pl-4">
                <Text className="text-lg font-medium">{item.date}</Text>
              </View>
              <View className="h-[68px] justify-center pl-4 bg-[#E2E2E2] gap-y-3">
                <View className="flex-row justify-between font-medium">
                  <Text className="text-[#306FE3]">{item.time}</Text>
                  <Text className="text-[#828282]  mr-3">{item.distance}</Text>
                </View>
                <View className="flex-row justify-between font-medium">
                  <Text className="text-[#306FE3]">{item.time2}</Text>
                  <Text className="text-[#828282]  mr-3">{item.distance}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Way;
