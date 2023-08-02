import React from "react";
import { HotelProps } from "./State";
import { useNavigate } from "react-router-dom";

function Hotel(props: HotelProps) {
  const navigate = useNavigate()
  const onHotelDetails = (hotelId:number) =>{
    navigate(`${hotelId}`)
    console.log("go to hotel details")
  }
  return (
    
      <div className="card7" onClick={() =>onHotelDetails(props.id)}>
        <img src={props.img} alt="" className="card7-img"/>
        <div style={{justifyContent:"center",margin:"1em"}}>
          <h6 style={{textAlign:"center"}}><strong>{props.label}</strong></h6>
         <p> <span><i className="bi bi-geo-alt"></i>{props.lat}</span> <span> {props.lng}</span> </p>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
            <button type="button" onClick={() =>onHotelDetails(props.id)}>mostra dettagli</button>
        </div>
      </div>
    
  );
}
export default Hotel;
