import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import '../../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import { useEventsContext } from '../../../utils/hooks';
import style from './Map.module.scss';

const Map = () => {
  const {
    state: { events },
  } = useEventsContext();

  return (
    <div className={style.map}>
      <MapContainer
        style={{ height: '100%' }}
        center={[51.110929, 17.0357957, 15.42]}
        zoom={13}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {events?.map((event) => (
          <Marker
            key={event.id}
            position={[Number(event.lat), Number(event.lon), 5]}
          >
            <Popup>
              <h2 className={style.title}>{event.title}</h2>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export { Map };
