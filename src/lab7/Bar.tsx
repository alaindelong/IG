import React from "react";
import { useNavigate } from "react-router-dom";

function Bar(){

    const navigate = useNavigate()
    const onHome = () =>{
      console.log("go to home page")
      navigate("home")
   }
   const onHotel = () =>{
    console.log("go to hotels")
    navigate("hotels")
   }
   const onBooking = () =>{
    console.log("go to booking page")
    navigate("booking")
   }
    return(
        <div className="mynavbar">
            <div>
                <span className="clickable" onClick={onHome}>
                <img src="/Cds.JPG" alt="" width="30" height="24"/>
                    Il Cammino di Santiago
                </span>
            </div>
            <div >
                <span className="clickable" onClick={onHotel}>Ostelli</span>
            </div>
            <div>
                <button className="bttn" type="button" onClick={onBooking}>
                    Prenotazioni<i className="bi bi-cart2"></i></button>
            </div>
            
        </div>
        
    )
}
export default Bar