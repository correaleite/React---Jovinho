import { useJsApiLoader, GoogleMap, MarkerF } from "@react-google-maps/api";

const centro = {
  lat: -23.573994757238165,
  lng: -46.62314373574974,
};

export default function MapaEmpresa() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    return <p>Não foi possível carregar o mapa.</p>;
  }

  if (!isLoaded) {
    return <p>Carregando mapa...</p>;
  }

  return (
   <>
      <div></div>

      <GoogleMap
        mapContainerClassName="w-4/5 mt-s10 mb-s50 h-80 rounded-2xl overflow-hidden"
        center={centro}
        zoom={15}
      >
        <MarkerF position={centro} />
      </GoogleMap>
   </>

  );
}
