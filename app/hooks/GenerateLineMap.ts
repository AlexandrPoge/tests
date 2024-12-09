import { RouteProp, useRoute } from '@react-navigation/core';

import database from '../../database/database.json';

type Props = {
  track: { name: string; date: string; time: string };
};

const useGenerateLineMap = () => {
  // Получение параметров маршрута
  const route = useRoute<RouteProp<Props, 'track'>>();
  const { name, date, time } = route.params;

  // Поиск сотрудника
  const employee = database.employees.find((e) => e.name === name);

  if (!employee) {
    return { selectedRoute: null, markers: [], line: [], track: null, employee: null };
  }

  // Поиск маршрута
  const track = employee.tracks.find(
    (t) => t.date === date && (t.time === time || t.time2 === time)
  );

  if (!track) {
    return { selectedRoute: null, markers: [], line: [], track: null, employee };
  }

  // Выбор маршрута
  const selectedRoute = time === track.time ? track.route : track.route2;

  if (!selectedRoute || selectedRoute.length === 0) {
    return { selectedRoute: [], markers: [], line: [], track: null, employee };
  }

  // Генерация маркеров
  const markers = [
    {
      id: 'start',
      lat: selectedRoute[0].lat,
      lon: selectedRoute[0].lon,
      label: 'Начало маршрута',
    },
    {
      id: 'end',
      lat: selectedRoute[selectedRoute.length - 1].lat,
      lon: selectedRoute[selectedRoute.length - 1].lon,
      label: 'Конец маршрута',
    },
  ];

  // Генерация линии маршрута
  const line = selectedRoute.map((point) => ({
    latitude: point.lat,
    longitude: point.lon,
  }));

  return { selectedRoute, markers, line, track, employee };
};

export default useGenerateLineMap;
