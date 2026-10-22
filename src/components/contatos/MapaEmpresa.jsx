import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const icone = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const centro = {
  lat: -23.573994757238165,
  lng: -46.62314373574974,
};

export default function MapaEmpresa() {
  return (
    <>
    
      <MapContainer
        center={[centro.lat, centro.lng]}
        zoom={15}
        scrollWheelZoom={false}
        className="w-4/5 mt-s10 mb-s50 h-80 rounded-2xl overflow-hidden"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[centro.lat, centro.lng]} icon={icone}>
          <Popup>Estamos aqui!</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}