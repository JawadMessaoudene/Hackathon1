import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet"
import { Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css";

import styles from "./Map.module.css";

const Map = () => {
  
  const markers = [
    {
      geocode: [40.74879639879833, -73.98566945542815],
      popUp: "Empire State Building",
      img: "https://images.pexels.com/photos/2404949/pexels-photo-2404949.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      geocode: [40.7417561416227, -73.98980025025385],
      popUp: "Flatiron Building",
      img: "https://images.pexels.com/photos/1210101/pexels-photo-1210101.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      geocode: [40.70844451874121, -73.98735050789642],
      popUp: "Manhattan Bridge",
      img: "https://images.pexels.com/photos/12373196/pexels-photo-12373196.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      geocode: [40.78003857595861, -73.96650061684542],
      popUp: "The Metropolitan Museum of Art",
      img: "https://images.pexels.com/photos/5825377/pexels-photo-5825377.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      geocode: [40.75805913576607, -73.98527122995213],
      popUp: "Times Square",
      img: "https://images.pexels.com/photos/3030647/pexels-photo-3030647.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      geocode: [40.7589851559734, -73.97858914910437],
      popUp: "Rockefeller Center",
      img: "https://images.pexels.com/photos/695694/pexels-photo-695694.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <MapContainer
      className={styles.map}
      center={[40.74644784487042, -73.98809933718042]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker, index) => (
        <Marker position={marker.geocode} key={index}>
          <Popup>
            <div className={styles.popUp}>
              <img
                className={styles.image}
                src={marker.img}
                alt={marker.popUp}
              />
              {marker.popUp}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
export default Map;
