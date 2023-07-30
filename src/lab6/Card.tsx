import React, { useEffect, useState } from "react";
import { Measure } from "./App6";

interface CardProps{
    id:string,
    label:string,
    lat:number,
    lon:number,
    onshowCard:()=>void
}
function Card(props:CardProps){
    const url = `https://environment.data.gov.uk/flood-monitoring/id/stations/${props.id}/measures`
    const [measures, setMeasures] = useState<Measure[]>([])
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data =>{
          setMeasures(data.items)
          console.log(" length after fecth click"+data.items.length)
          
        })
        .catch(error =>console.log("an error occurs "+error))
    },[url])
    
    return(
        <div className="card6">
            <h5>{props.label}</h5>
            <p>Id: {props.id}</p>
            <p>lat: {props.lat}</p>
            <p>lon: {props.lon}</p>
            <ul>
               {
                
                measures.map((el,index) =><li key={index}>
                    { el.latestReading!==undefined? <p>{el.parameter} {el.latestReading.date} 
                    {el.latestReading.dateTime} {el.latestReading.dateTime}</p>:<p>{el.parameter}</p>
                    }
                </li>)
               }
            </ul>
            
            <button type="button" onClick={props.onshowCard}>X</button>
        </div>
    )
}
export default Card