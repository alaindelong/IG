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
          <div className="row p-3">
            <div className="col-xs-12 col-sm-4">
                <span className="clickable" onClick={onHome}>
                <img src="/Cds.JPG" alt="" width="30" height="24"/>
                    Il Cammino di Santiago
                </span>
            </div>
            <div className="col-xs-12 col-sm-4" >
                <span className="clickable" onClick={onHotel}>Ostelli</span>
            </div>
            <div className="col-xs-12 col-sm-4 d-flex flex-column align-self-end">
                <button className="bttn" type="button" onClick={onBooking}>
                    Prenotazioni<i className="bi bi-cart2"></i></button>
            </div>
            
        </div>
        
    )
}
export default Bar