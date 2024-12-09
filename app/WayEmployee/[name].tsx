import { RouteProp, useRoute } from '@react-navigation/core';
import database from 'database/database.json';
import { router } from 'expo-router';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

type Props = {
  name: { name: string };
};

const Name = () => {
  const route = useRoute<RouteProp<Props, 'name'>>();

  // Извлекаем name из параметров
  const { name } = route.params;

  // Находим сотрудника по name
  const employee = database.employees.find((e) => String(e.name) === String(name));

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
                  <TouchableOpacity
                    key={item.date}
                    onPress={() =>
                      router.push({
                        pathname: '/WayEmployee/track',
                        params: { name, date: item.date, time: item.time },
                      })
                    }>
                    <Text className="text-[#306FE3]">{item.time}</Text>
                  </TouchableOpacity>
                  <Text className="text-[#828282]  mr-3">{item.distance}</Text>
                </View>
                <View className="flex-row justify-between font-medium">
                  <TouchableOpacity
                    key={item.date}
                    onPress={() =>
                      router.push({
                        pathname: '/WayEmployee/track',
                        params: { name, date: item.date, time: item.time2 },
                      })
                    }>
                    <Text className="text-[#306FE3]">{item.time2}</Text>
                  </TouchableOpacity>
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

export default Name;
