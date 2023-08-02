import React, { useContext, useEffect, useReducer } from "react";
import Map from "./Map"
import { initialState, reducer } from "./State";
import BookingCard from "./BookingCard";
import {StateContext, useStateContext} from "./StateContext";

function Booking(){
    const [state,dispatch] = useStateContext()
    return(
        <div style={{display:"flex", flexDirection:"row",marginTop:"2em"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                {
                    state.bookings.map((el) =>{
                    return <BookingCard key={el.hotel.id}
                     hotel={el.hotel} bookingDate={el.bookingDate}/>})
                }
            </div>
            <div style={{display:"flex",marginLeft:"5em"}}>
               {<Map/>} 
            </div>

        </div>
    )
}
export default Booking