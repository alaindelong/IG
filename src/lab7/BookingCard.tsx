import React, { useContext, useEffect, useReducer, useState } from "react";
import { BookingCardProps, reducer } from "./State";
import { StateContext, useStateContext } from "./StateContext";

function BookingCard(props: BookingCardProps) {
  const [state, dispatch] = useStateContext();
  const [dist, setDist] = useState(0);
  const [color, setColor] = useState("#037ffc") //rouge
  const onRemove = () => {
    console.log("hotel with id removed " + props.hotel.id);
    dispatch({ type: "REMOVE_FROM_BOOKING", hotelId: props.hotel.id });
  };
  const calculateDistance = () => {
    if (state.bookings.length === 0) setDist(props.hotel.km);
    setDist(
      Math.abs(
        state.bookings[state.bookings.length - 1].hotel.km - props.hotel.km
      )
    );
  };
  useEffect(() => {
    calculateDistance();
  }, []);
  return (
    <div className="booking-card"
      style={{borderColor:state.borderColors[props.hotel.id]?state.borderColors[props.hotel.id]:color}}
      onMouseEnter={()=>{
        dispatch({type:'SET_BORDER_COLOR',hotelId:props.hotel.id,color:"#fc0335"})
        }}
      onMouseLeave={()=>{
        dispatch({type:'SET_BORDER_COLOR',hotelId:props.hotel.id,color:"#037ffc"})
        }}
    >
      <h6>{props.hotel.label}</h6>
      <p>
        Data prenotazione: <span>{props.bookingDate}</span>
      </p>
      <p>Distanza dalla prossima tappa: {dist}</p>
      <p>
        Prezzo: {props.hotel.prezzo}{" "}
        <button onClick={onRemove}>
          <i className="bi bi-trash3"></i>
        </button>
      </p>
    </div>
  );
}
export default BookingCard;
