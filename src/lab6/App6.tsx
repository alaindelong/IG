import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Map from "./Map"

export interface Measure{
  id:string,
  label:string,
  latestReading:{
    id:string,
    date:string,
    dateTime:string,
    measure:string,
    value:number
  },
  parameter:string,
  stationReference:string
}

function App6() {
  const attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  return (
    <div className="container">
      <h1>LAIB 6</h1>
      
      <Map/>
     
    </div>
  );
}
export default App6;
