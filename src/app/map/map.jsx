import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';

const libraries = ['places', 'geometry', 'drawing', 'visualization'];
//라이브러리들 (검색, 지리적계산, 지도위그리기, 전체화면)

export default function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_MAP_PROJECT_API_KEY,
    libraries,
  });

  const center = useMemo(() => ({ lat: 37.5665, lng: 126.978 }), []);
  //중심위치는 한국

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '500px' }}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
