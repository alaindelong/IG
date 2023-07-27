import useAxios from "axios-hooks";
import { error } from "console";
import { LeafletMouseEvent, latLng } from "leaflet";
import React, { useEffect, useState } from "react";
import { Marker, useMap, useMapEvents } from "react-leaflet";
import Card from "./Card";
import { click } from "@testing-library/user-event/dist/click";

interface LocationMarkerProps{
    lat:number,
    lon:number,
    onshowCard: (id:number,label:string,latt:number,long:number) =>void
}

function LocationMarker(props:LocationMarkerProps){
    
    const [position, setPosition] = useState(latLng(props.lat,props.lon))
    const map = useMap()
    useMapEvents({
      click: (e:LeafletMouseEvent) =>{
        setPosition(e.latlng)
        map.flyTo(e.latlng,9)
        console.log("clicked event "+e.latlng)
      },
      
    })   
    const [items, setItems] = useState([])
 
    const url = `https://environment.data.gov.uk/flood-monitoring/id/stations?parameter=rainfall&lat=${position.lat}&long=${position.lng}&dist=20`

   // const [{data,loading, error},refetch] = useAxios(url)

   // if(loading) return<p>loading.....</p>
   // if(error) return<p>error!!!!!</p>
   useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setItems(data.items))
    .catch(error => console.log(error))
   },[url,position])
    return(
        <div>
             {
                items.map((el:any,index:number) =>
                <Marker key={index} position={latLng(el.lat,el.long)} 
                eventHandlers={{
                    click: (e:LeafletMouseEvent) =>{
                      console.log("dati label "+el.label+" dati id "+el.stationReference)
                      props.onshowCard(parseInt(el.stationReference),el.label,el.lat,el.long)
                    }
                }}/>
                   
                )
               //<Marker position={position}></Marker>
             }
        </div>
    )
}
export default LocationMarker