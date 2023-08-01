import useAxios from "axios-hooks";
import { error } from "console";
import { LeafletMouseEvent, latLng } from "leaflet";
import React, { useEffect, useReducer } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";

import { initialState, reducer } from "./State";

interface LocationMarkerProps {
  lat: number;
  lon: number;
  onshowCard: (id: string, label: string, latt: number, long: number) => void;
}

function LocationMarker(props: LocationMarkerProps) {
 
  const [state,dispatch] = useReducer(reducer,initialState)
  const map = useMap();
  useMapEvents({
    click: (e: LeafletMouseEvent) => {
      //setPosition(e.latlng);
      const {lat,lng} = e.latlng
      dispatch({type:'SET_POSITION',latt:lat,long:lng})
      map.flyTo(e.latlng, 9);
      console.log("clicked event " + e.latlng);
    },
  });
  

  const url = `https://environment.data.gov.uk/flood-monitoring/id/stations?parameter=rainfall&lat=${state.latt}&long=${state.long}&dist=20`;
  
  
   /*const [{data,loading, error},refetch] = useAxios(url)

   if(loading) return<p>loading.....</p>
   if(error) return<p>error!!!!!</p>*/
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({type:'SET_ITEMS',items:data.items})
        //setItems(data.items)
      })
      .catch((error) => console.log(error));
  }, [url, state.latt,state.long]);
  
  return (
    <div>
      {
        state.items.map((el: any, index: number) => (
          <Marker 
            key={index}
            position={latLng(el.lat, el.long)}
            eventHandlers={{
              click: (e: LeafletMouseEvent) => {
                console.log(
                  "dati label " + el.label + " dati id " + el.stationReference
                );
                props.onshowCard(
                  el.stationReference,
                  el.label,
                  el.lat,
                  el.long
                );
              },
            }} 
          />
        ))
        //<Marker position={position}></Marker>
      }
    </div>
  );
}
export default LocationMarker;
