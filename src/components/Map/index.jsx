import { useCallback, useMemo, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const center = {
	lat: 41.3302784,
	lng: 69.2453376,
};

const successCallback = (position) => {
	if (position.coords) {
		center.lat = position.coords.latitude;
		center.lng = position.coords.longitude;
	}
};

const errorCallback = (error) => {
	console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

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
		[],
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
		<MapContainer
			style={{ height: "400px", width: "100%" }}
			center={center}
			zoom={12}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<DraggableMarker />
		</MapContainer>
	);
}

export default MapWrapper;
