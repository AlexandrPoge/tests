import React, { useState } from 'react';
import { SafeAreaView, View, Image } from 'react-native';

import List from './list';
import Map from './map';
import CustomButton from '../../components/CustomButton';
import { icons } from '../../constants';

const ButtonLayout = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <>
      <SafeAreaView className="h-full">
        <View className="flex-1">
          <View className="h-[110px] w-full px-4 bg-[#FFFFFF]">
            <View className="flex-row w-full justify-between mt-3">
              <CustomButton
                title="Список"
                handlePress={() => setActiveTab('list')}
                containerStyles={
                  activeTab === 'list'
                    ? 'bg-[#306FE3] w-[142px]'
                    : 'bg-white border border-[#306FE3] w-[142px]'
                }
                textStyles={activeTab === 'list' ? 'text-white' : 'text-[#306FE3]'}
              />

              <CustomButton
                title="Карта"
                handlePress={() => setActiveTab('map')}
                containerStyles={
                  activeTab === 'map'
                    ? 'bg-[#306FE3] w-[142px]'
                    : 'bg-white border border-[#306FE3] w-[142px]'
                }
                textStyles={activeTab === 'map' ? 'text-white' : 'text-[#306FE3]'}
              />

              <Image
                className="justify-center items-center mt-1"
                source={icons.settings}
                resizeMode="contain"
              />
            </View>

            <CustomButton
              title="Фильтр"
              containerStyles="bg-[#306FE3] w-full mt-3"
              textStyles="text-white"
            />
          </View>

          <View>
            {activeTab === 'list' ? (
              <View>
                <List />
              </View>
            ) : (
              <View>
                <Map />
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ButtonLayout;
