import React from "react";
import { HotelProps } from "./State";

function Hotel(props: HotelProps) {
  return (
    
      <div className="card7">
        <img src={props.img} alt="" height={"150px"}/>
        <div style={{justifyContent:"center",margin:"1em"}}>
          <h6 style={{textAlign:"center"}}><strong>{props.label}</strong></h6>
         <p> <span><i className="bi bi-geo-alt"></i>{props.lat}</span> <span> {props.lng}</span> </p>
        </div>
        <div>
            <p>mostra dettagli</p>
        </div>
      </div>
    
  );
}
export default Hotel;
