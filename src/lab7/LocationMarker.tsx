import React, { useContext, useEffect } from "react";
import { HotelProps } from "./State";
import { Marker, Popup } from "react-leaflet";
import { latLng } from "leaflet";
import HotelContext from "./HotelContext";

interface LocationMarkerProps {
  lat: number;
  lon: number;
}
function LocationMarker(props: LocationMarkerProps) {
    const markers = useContext(HotelContext)
  return (
    <div>
      {markers.map((el) => (
        <Marker
          key={el.id}
          position={latLng(el.lat, el.lng)}
          eventHandlers={{ mouseover: (event) => event.target.openPopup(),
        mouseout:(event) =>event.target.closePopup() }}
        >
          <Popup>{el.label}</Popup>
        </Marker>
      ))}
    </div>
  );
}
export default LocationMarker;
