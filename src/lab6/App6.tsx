import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Map from "./Map"


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
