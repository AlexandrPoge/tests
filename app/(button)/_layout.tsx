import database from 'database/database.json';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, Image, TouchableOpacity } from 'react-native';

import EmployeeListRender from './list';
import Map from './map';
import CustomButton from '../../components/CustomButton';
import { icons } from '../../constants';

const ButtonLayout = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [filteredEmployees, setFilteredEmployees] = useState(database.employees);

  const applyFilter = () => {
    const sortedEmployees = [...filteredEmployees].sort((a, b) =>
      a.position.localeCompare(b.position)
    );
    setFilteredEmployees(sortedEmployees);
  };

  const router = useRouter();
  const { t } = useTranslation();

  return (
    <>
      <SafeAreaView className="h-full">
        <View className="flex-1 bg-[#FFFFFF]">
          <View className="h-[110px] w-full px-4 bg-[#FFFFFF] shadow">
            <View className="flex-row w-full justify-between mt-3">
              {/*Рендер кнопок*/}

              <CustomButton
                title={t('Список')}
                handlePress={() => setActiveTab('list')}
                containerStyles={
                  activeTab === 'list'
                    ? 'bg-[#306FE3] w-[142px]'
                    : 'bg-white border border-[#306FE3] w-[142px]'
                }
                textStyles={activeTab === 'list' ? 'text-white' : 'text-[#306FE3]'}
              />

              <CustomButton
                title={t('Карта')}
                handlePress={() => setActiveTab('map')}
                containerStyles={
                  activeTab === 'map'
                    ? 'bg-[#306FE3] w-[142px]'
                    : 'bg-white border border-[#306FE3] w-[142px]'
                }
                textStyles={activeTab === 'map' ? 'text-white' : 'text-[#306FE3]'}
              />

              <TouchableOpacity onPress={() => router.push('/Setting/setting')}>
                <Image
                  className="justify-center items-center mt-1"
                  source={icons.settings}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            <CustomButton
              title={t('Фильтр')}
              containerStyles={
                activeTab === 'map' ? 'bg-[#E2E2E2] w-full mt-3' : 'bg-[#306FE3] w-full mt-3'
              }
              textStyles={activeTab === 'map' ? 'text-white' : 'text-white'}
              handlePress={applyFilter}
              disabled={activeTab === 'map'}
            />
          </View>

          {/*В зависимости какая кнопка активна*/}
          <View>
            {activeTab === 'list' ? (
              <View>
                <EmployeeListRender data={filteredEmployees} />
              </View>
            ) : (
              <View>
                <Map employees={filteredEmployees} />
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ButtonLayout;
