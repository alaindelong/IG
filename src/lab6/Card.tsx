import React from "react";

interface CardProps{
    id:number,
    label:string,
    lat:number,
    lon:number
    onshowCard:()=>void
}
function Card(props:CardProps){
    return(
        <div className="card6">
            <h5>{props.label}</h5>
            <p>Id: {props.id}</p>
            <p>lat: {props.lat}</p>
            <p>lon: {props.lon}</p>
            <button type="submit" onClick={props.onshowCard}>X</button>
        </div>
    )
}
export default Card