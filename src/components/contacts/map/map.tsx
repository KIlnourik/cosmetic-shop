import { useEffect, useRef } from 'react';
import useMap from '../../../hooks/useMap';
import { MAP_CITY } from '../../../const';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';


const defaultCustomIcon = new Icon({
  iconUrl: '/img/mark.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, MAP_CITY);

  useEffect(() => {
    if (map) {
        const marker = new Marker({
          lat: MAP_CITY.lat,
          lng: MAP_CITY.lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
    }
  }, [map]);

  return (
    <div className='contacts__map-wrapper map' id='map' ref={mapRef}></div>
  );
}

export default Map;
