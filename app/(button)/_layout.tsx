import database from 'database/database.json';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, View, Image, Text, TouchableOpacity, Button } from 'react-native';

import EmployeeListRender from './list';
import Map from './map';
import CustomButton from '../../components/CustomButton';
import { icons } from '../../constants';

type SortKey = 'name' | 'position' | 'phone';

const ButtonLayout = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [filteredEmployees, setFilteredEmployees] = useState(database.employees);
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [activeFilter, setActiveFilter] = useState();

  const sortEmployees = (key: SortKey): void => {
    const sortedEmployees = [...filteredEmployees].sort((a, b) => a[key].localeCompare(b[key]));
    setFilteredEmployees(sortedEmployees);
    setIsDropDown(false);
    setActiveFilter(activeFilter);
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
              handlePress={() => setIsDropDown(!isDropDown)}
              disabled={activeTab === 'map'}
            />
          </View>

          {/*Дропдаун*/}
          {isDropDown && (
            <View className="bg-white w-full mt-4 rounded-lg shadow-lg p-4 z-10">
              <Text className="text-lg text-center font-semibold mb-4">{t('Фильтровать по:')}</Text>
              {/* Кнопки */}
              <TouchableOpacity
                className="bg-gray-100 py-2 px-4 rounded-md mb-2 border border-gray-300 "
                onPress={() => sortEmployees('position')}>
                <Text className="text-center font-medium text-gray-700">{t('Должность')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-gray-100 py-2 px-4 rounded-md mb-2 border border-gray-300 "
                onPress={() => sortEmployees('name')}>
                <Text className="text-center font-medium text-gray-700">{t('ФИО')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="bg-gray-100 py-2 px-4 rounded-md border border-gray-300 "
                onPress={() => sortEmployees('phone')}>
                <Text className="text-center font-medium text-gray-700">{t('Номер телефона')}</Text>
              </TouchableOpacity>
            </View>
          )}

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
