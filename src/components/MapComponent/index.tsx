// components/MapComponent.tsx
'use client';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapPin } from 'lucide-react'; // Importando o ícone do lucide-react

// Configurar o ícone do marcador
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent: React.FC = () => {
  const position: [number, number] = [51.505, -0.09]; // Coordenadas do centro do mapa

  return (
    <div className="flex flex-col items-center justify-center bg-pink-100 p-6">
      <h2 className="text-3xl font-bold mb-4 text-center text-pink-500">Localização</h2>
      <div className="w-full max-w-3xl rounded-lg shadow-lg overflow-hidden border-t-4 mt-4"> {/* Borda e margem superior */}
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '60vh', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={markerIcon}>
            <Popup>
              <div className="flex items-center">
                <MapPin className="mr-2 text-pink-500" /> {/* Ícone do lucide-react */}
                Você está aqui!
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;