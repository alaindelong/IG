import React, { useContext, useEffect, useReducer } from "react";
import Map from "./Map"
import { initialState, reducer } from "./State";
import BookingCard from "./BookingCard";
import {StateContext, useStateContext} from "./StateContext";

function Booking(){
    const [state,dispatch] = useStateContext()
    return(
        <div className="row mt-3 p-2" style={{minHeight:"55em"}}>
            <div className="col-xs-12 col-sm-4 mx-5">
                {
                    state.bookings.map((el) =>{
                    return <BookingCard key={el.hotel.id}
                     hotel={el.hotel} bookingDate={el.bookingDate}/>})
                }
            </div>
            <div className="col-xs-12 col-sm-6 pt-3">
               {<Map/>} 
            </div>

        </div>
    )
}
export default Booking