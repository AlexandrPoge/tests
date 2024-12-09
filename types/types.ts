export interface EMPLOYEE {
  id: number;
  name: string;
  position: string;
  phone: string;
  tracks: {
    date: string;
    route: { lat: number; lon: number }[];
    route2: { lat: number; lon: number }[];
    duration: string;
    distance: string;
    avgSpeed: string;
  }[];
}
