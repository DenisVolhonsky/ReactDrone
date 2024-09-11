import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import planeSVG from "../assets/plane.svg";

const FlightMap = () => {
  const [dronePosition, setDronePosition] = useState({
    lat: 48.8566,
    lng: 2.3522,
  });

  const planeIcon = new L.DivIcon({
    html: `<img src="${planeSVG}" style="width: 40px; height: 40px;" alt="Plane Icon" />`,
    className: "", // Убираем стандартные стили Leaflet для иконок
  });

  // Обновляем координаты дрона каждые 3 секунды (симуляция полета)
  useEffect(() => {
    const interval = setInterval(() => {
      setDronePosition((prevPosition) => ({
        lat: prevPosition.lat + 0.001, // Добавляем небольшое смещение по широте
        lng: prevPosition.lng + 0.001, // Добавляем небольшое смещение по долготе
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer
      center={[dronePosition.lat, dronePosition.lng]}
      zoom={13}
      style={{ height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <Marker
        position={[dronePosition.lat, dronePosition.lng]}
        icon={planeIcon}
      />
    </MapContainer>
  );
};

export default FlightMap;
