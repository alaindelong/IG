import React, { useContext, useEffect, useState } from "react";
import { HotelProps } from "./State";
import { Marker, Popup } from "react-leaflet";
import L, { latLng } from "leaflet";
import HotelContext from "./HotelContext";
import { useNavigate } from "react-router-dom";
import {StateContext, useStateContext} from "./StateContext";

interface LocationMarkerProps {
  lat: number;
  lon: number;
}
function LocationMarker(props: LocationMarkerProps) {
    const [markers,dispatch ]= useStateContext()
    const [fill,setFill] = useState("#037ffc")  // #1866B4
    const navigate = useNavigate()
    const onHotelDetails = (hotelId:number) =>{
      navigate(`../hotels/${hotelId}`)
      console.log("go to hotel details")
    }
   
    
  return (
    <div>
      {markers.hotels.map((el) => {
         let Icon = L.divIcon({
          html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="35"
          fill=${markers.borderColors[el.id]}
          className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1
          0-6 3 3 0 0 1 0 6z"/>
          </svg>`
          });
       return <Marker
          key={el.id}
          position={latLng(el.lat, el.lng)}
          icon={Icon}
          eventHandlers={{ mouseover: (event) => event.target.openPopup(),
        mouseout:(event) =>event.target.closePopup(),
        click:(event) =>{
          onHotelDetails(el.id)
        }
       }}
        >
          <Popup>{el.label}</Popup>
        </Marker>
      })}
    </div>
  );
}
export default LocationMarker;
