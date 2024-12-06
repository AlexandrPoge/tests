import { View, SafeAreaView, Image } from 'react-native';

import CustomButton from '../../components/CustomButton';
import { icons } from '../../constants';

const EmployeeListScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View className="bg-[#FFFFFF] shadow">
          <View className="pt-2 flex-row gap-4">
            <CustomButton
              title="Список"
              handlePress={() => {}}
              containerStyles="w-[142px] mt-5 bg-[#306FE3]"
              textStyles="text-white"
            />

            <CustomButton
              title="Карта"
              handlePress={() => {}}
              containerStyles="w-[142px] mt-5 bg-[#306FE3]"
              textStyles="text-white"
            />

            <Image source={icons.settings} width={352} height={352} />
          </View>
          <View className="pt-5">
            <CustomButton
              title="Фильтр"
              handlePress={() => {}}
              containerStyles="w-full bg-[#306FE3]"
              textStyles="text-white"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default EmployeeListScreen;
