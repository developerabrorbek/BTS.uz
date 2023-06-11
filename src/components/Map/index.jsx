import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
// import "leaflet/dist/leaflet/leaflet.css";
// import 'leaflet/dist/leaflet.css';

// console.log(L)
const center = {
  lat: 51.505,
  lng: -0.09,
};


const markerIcon = new L.Icon({
  iconUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function DraggableMarker() {
  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(center);
  const [map, setMap] = useState({});
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
          setMap((map.lat = marker.getLatLng().lat));
          setMap((map.lng = marker.getLatLng().lng));
          console.log(map);
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
    icon={markerIcon}
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
}

function MapWrapper() {
  return (
    <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker />
    </MapContainer>
  );
}



// const center = {
//   lat: 51.505,
//   lng: -0.09,
// };

// function DraggableMarker() {
//   const [draggable, setDraggable] = useState(true);
//   const [position, setPosition] = useState(center);
//   const markerRef = useRef(null);
//   const eventHandlers = useMemo(
//     () => ({
//       dragend() {
//         const marker = markerRef.current;
//         if (marker != null) {
//           setPosition(marker.getBounds().getCenter());
//         }
//       },
//     }),
//     []
//   );
//   const toggleDraggable = useCallback(() => {
//     setDraggable((d) => !d);
//   }, []);

//   useEffect(() => {
//     console.log("Position:", position);
//   }, [position]);

//   return (
//     <Marker
//     icon={markerIcon}
//       draggable={draggable}
//       eventHandlers={eventHandlers}
//       position={position}
//       ref={markerRef}
//     >
//       <Popup minWidth={90}>
//         <span onClick={toggleDraggable}>
//           {draggable
//             ? "Marker is draggable"
//             : "Click here to make marker draggable"}
//         </span>
//       </Popup>
//     </Marker>
//   );
// }

// const MapWrapper = () => {
//   return (
//     <div className="mapview" style={{ width: "100%", height: "450px" }}>
//       <MapContainer center={center} zoom={6} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <DraggableMarker />
//       </MapContainer>
//     </div>
//   );
// };

export default MapWrapper;
