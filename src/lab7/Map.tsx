import { latLng } from "leaflet";
import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import { HotelProps } from "./State";
import HotelContext from "./HotelContext";

function Map() {
  const url = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  const lat = 42.2821;
  const lon = -8.6085;
  const center = latLng(lat, lon);
  const zoom = 8;
  
  return (
    <div className="leaflet-container7">
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer url={url} />
        <LocationMarker lat={lat} lon={lon}/>
      </MapContainer>
    </div>
  );
}
export default Map;
