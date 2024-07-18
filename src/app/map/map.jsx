'use client'
import Script from "next/script";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import './mappage.css'

// npm install react-kakao-maps-sdk
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=2832c4ac7b4b2d80ad011eb167dee282&autoload=false`;

export default function KakaoMap() {
  const [position, setPosition] = useState({
    // 초기 위치 설정: 인천 부평
    lat: 37.50802,
    lng: 126.72185
  });

  const [loaded, setLoaded] = useState(false);

  const moveToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // 현재 위치를 가져와서 상태 업데이트
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = KAKAO_SDK_URL;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, []);

  return (
    <div>
      <button onClick={moveToCurrentLocation} className="my-current-location">현재 내 위치</button>
      <div className="map-container">
        {loaded && (
          <div className="map-wrapper">
            <Map center={position} className="map" draggable={true}>
              <MapMarker position={position} />
            </Map>
          </div>
        )}
      </div>
    </div>
  );
}  
