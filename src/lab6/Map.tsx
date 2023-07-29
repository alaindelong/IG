import { LeafletMouseEvent, latLng } from "leaflet";
import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import Card from "./Card";
import { Measure } from "./App6";

function Map() {
  const url = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
  const lat = 54.5445;
  const lon = -4.0649;
  const center = latLng(lat, lon);
  const zoom = 6;
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [latt, setLatt] = useState(lat);
  const [long, setLong] = useState(lon);
  const [label, setLabel] = useState("");
  const [measures, setMeasures] = useState<Measure[]>([])
  const onshowCard = (
    id: number,
    label: string,
    latt: number,
    long: number,
    measures: Measure[]
  ) => {
    setShow(true);
    setId(id);
    setLabel(label);
    setLatt(latt);
    setLong(long);
    setMeasures(measures)
    console.log("measure "+measures.length)
  };

  const onCloseCard = () => {
    setShow(false);
  };

  return (
    <div className="mapdiv">
      <div className="leaflet-container">
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={false}>
          <TileLayer url={url} />
          <LocationMarker lat={lat} lon={lon} onshowCard={onshowCard} />
        </MapContainer>
      </div>
      <div>
        {show && (
          <Card
            id={id}
            label={label}
            lat={latt}
            lon={long}
            measures={measures}
            onshowCard={onCloseCard}
          />
        )}
      </div>
    </div>
  );
}
export default Map;
