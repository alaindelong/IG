import { latLng } from "leaflet";
import React, { useReducer } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import Card from "./Card";
import { initialState, reducer } from "./State";

function Map() {
  const url = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  const lat = 54.5445;
  const lon = -4.0649;
  const center = latLng(lat, lon);
  const zoom = 6;
  
  const [state,dispatch] = useReducer(reducer,initialState)
  const onshowCard = (
    id: string,
    label: string,
    latt: number,
    long: number
  ) => {
   dispatch({type:'ON_SHOW_CARD',id,label,latt,long})
   console.log("state "+state.id+" "+state.label+" "+state.latt+" "+state.long+" "+state.show)
  };

  const onCloseCard = () => {
    dispatch({type:'ON_CLOSE_CARD'})
    console.log(state.show)
  };

  return (
    <div className="mapdiv">
      <div className="leaflet-container">
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer url={url} />
          <LocationMarker lat={state.latt} lon={state.long} onshowCard={onshowCard} />
        </MapContainer>
      </div>
      <div>
        {state.show && (
          <Card
            id={state.id}
            label={state.label}
            lat={state.latt}
            lon={state.long}
            onshowCard={onCloseCard}
          />
        )}
      </div>
    </div>
  );
}
export default Map;
