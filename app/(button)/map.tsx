import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { EMPLOYEE } from '../../types/types';

type Props = {
  employees: EMPLOYEE[];
};

const Map = ({ employees }: Props) => {
  const { t } = useTranslation();

  // Генерация сотрудников(их точки): только последняя точка маршрута последнего трека
  const markers = employees.map((employee) => {
    const lastTrack = employee.tracks[employee.tracks.length - 1];
    const lastPoint = lastTrack.route[lastTrack.route.length - 1];

    return {
      id: employee.id,
      lat: lastPoint.lat,
      lon: lastPoint.lon,
      name: employee.name,
      date: lastTrack.date,
    };
  });

  // вывожу карту и маркера на карте
  return (
    <View className="flex-1">
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 55.751244,
          longitude: 37.618423,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.lat, longitude: marker.lon }}
            title={t(marker.name)}
            description={`${t(marker.date)}`}
          />
        ))}
      </MapView>
    </View>
  );
};
//стилизую так как карта только через styles

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
