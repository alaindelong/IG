import React from "react";
import { Measure } from "./App6";

interface CardProps{
    id:number,
    label:string,
    lat:number,
    lon:number,
    measures:Measure[]
    onshowCard:()=>void
}
function Card(props:CardProps){
    return(
        <div className="card6">
            <h5>{props.label}</h5>
            <p>Id: {props.id}</p>
            <p>lat: {props.lat}</p>
            <p>lon: {props.lon}</p>
            <ul>
               {
                
                props.measures.map((el,index) =><li key={index}>
                    <p>{el.parameter} {el.latestReading.date} {el.latestReading.dateTime} {el.latestReading.dateTime}</p>
                </li>)
               }
            </ul>
            
            <button type="button" onClick={props.onshowCard}>X</button>
        </div>
    )
}
export default Card