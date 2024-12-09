import { View, StyleSheet, Dimensions, Text, SafeAreaView } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

import CustomButton from '../../components/CustomButton';
import useCallProgram from '../hooks/CallProgramButton';
import useGenerateLineMap from '../hooks/GenerateLineMap';

const Track = () => {
  const { handleCall, handleMessage, employee } = useCallProgram();
  const { line, selectedRoute, markers, track } = useGenerateLineMap();

  //Проверка
  if (!employee) {
    return (
      <SafeAreaView className="h-full flex justify-center items-center">
        <Text className="text-lg font-bold">Сотрудник не найден</Text>
      </SafeAreaView>
    );
  }
  //Проверка
  if (!track) {
    return (
      <SafeAreaView className="h-full flex justify-center items-center">
        <Text className="text-lg font-bold">Маршрут не найден</Text>
      </SafeAreaView>
    );
  }

  //Проверка
  if (!selectedRoute) {
    return (
      <SafeAreaView className="h-full flex justify-center items-center">
        <Text className="text-lg font-bold">Маршрут для выбранного времени отсутствует</Text>
      </SafeAreaView>
    );
  }

  // Рендер карты
  return (
    <View className="flex-1">
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: selectedRoute[0].lat,
          longitude: selectedRoute[0].lon,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.lat, longitude: marker.lon }}
            title={marker.label}
          />
        ))}
        <Polyline coordinates={line} strokeColor="#0000FF" strokeWidth={4} />
      </MapView>

      {/*Контейнер для информации*/}
      <View className="w-full h-[300px] bg-white absolute bottom-0 rounded-t-[40px]">
        <View className="px-4 pt-5">
          <View className="border-b mb-3">
            <View className="flex-row mb-3">
              <Text className="font-bold text-[18px]">{track.date},</Text>
              <Text className="font-bold text-[18px]">{track.time}</Text>
            </View>
          </View>
        </View>
        <View className="flex-row justify-between px-4">
          <Text className="text-[16px] font-medium mb-3">Продолжительность</Text>
          <Text className="text-[#828282]">{track.time}</Text>
        </View>
        <View className="flex-row justify-between px-4 mb-3">
          <Text className="text-[16px] font-medium">Расстояние</Text>
          <Text className="text-[#828282]">{track.distance}</Text>
        </View>
        <View className="flex-row justify-between px-4">
          <Text className="text-[16px] font-medium">Средняя скорость</Text>
          <Text className="text-[#828282]">{track.avgSpeed}</Text>
        </View>

        <View className="flex-row mx-4 mt-5 justify-between">
          <CustomButton
            handlePress={handleMessage}
            title="Написать"
            containerStyles="bg-white border border-[#306FE3] max-w-[160px] w-full"
            textStyles="text-[#306FE3]"
          />
          <CustomButton
            handlePress={handleCall}
            title="Позвонить"
            containerStyles="bg-[#306FE3] max-w-[160px] w-full"
            textStyles="text-white"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Track;
