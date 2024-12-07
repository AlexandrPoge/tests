import { router, useRouter } from 'expo-router';
import { push } from 'expo-router/build/global-state/routing';
import { View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

import { EMPLOYEE } from '../../types/types';

type Props = {
  data: EMPLOYEE[];
};

const EmployeeListRender = ({ data }: Props) => {
  const router = useRouter();

  const renderEmployee = ({ item }: { item: EMPLOYEE }) => (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/WayEmployee/WayEmployee',
          params: { id: item.id, name: item.name },
        })
      }
      className="p-4 border-b border-gray-300">
      <Text className="text-lg font-medium text-[#333333]">{item.name}</Text>
      <Text className="text-[#828282]">{item.position}</Text>
      <Text className="text-[#306FE3]">{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="h-full mt-3">
      <View className=" bg-white">
        <Text className="text-center text-xl font-bold text-blue-600 py-4">Список сотрудников</Text>
        <FlatList
          data={data}
          renderItem={renderEmployee}
          keyExtractor={(item: EMPLOYEE) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default EmployeeListRender;
