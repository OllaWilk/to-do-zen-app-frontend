import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import '../../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import style from './Map.module.scss';

const Map = () => {
  return (
    <div className={style.map}>
      <MapContainer
        style={{ height: '100%' }}
        center={[51.110929, 17.0357957, 15.42]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[51.110929, 17.0357957, 15.42]}>
          <Popup>
            <h2>Wrocłąw</h2>
          </Popup>
        </Marker>
        <Marker position={[51.110929, 17.0357957, 15.42]}>
          <Popup>
            <h2>Wrocłąw</h2>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export { Map };
