import React from "react";

interface CardProps{
    hue:number,
    saturation:number,
    lightness:number,
    rgbToHex:(r:number,g:number,b:number) => string
}
function Card(props:CardProps){
    return(
        <div className="card" style={{backgroundColor:`hsl(${props.hue},${props.saturation}%,${props.lightness}%)`}}>
         <div style={{textAlign:"center", padding:"1em", fontSize:"2em"}}>
           {props.rgbToHex(props.hue, props.saturation,props.lightness)}
        </div> 
        </div>
    )
}
export default Card;