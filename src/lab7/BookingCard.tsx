import React, { useContext, useEffect, useReducer, useState } from "react";
import { BookingCardProps, reducer } from "./State";
import { StateContext, useStateContext } from "./StateContext";

function BookingCard(props: BookingCardProps) {
  const [state, dispatch] = useStateContext();
  const [dist, setDist] = useState(0);
  const [color, setColor] = useState("#037ffc"); //rouge
  const onRemove = () => {
    console.log("hotel with id removed " + props.hotel.id);
    dispatch({
      type: "SET_BORDER_COLOR",
      hotelId: props.hotel.id,
      color: "#037ffc",
    });
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
    <div
      className="row booking-card"
      style={{
        borderColor: state.borderColors[props.hotel.id]
          ? state.borderColors[props.hotel.id]
          : color,
      }}
      onMouseEnter={() => {
        dispatch({
          type: "SET_BORDER_COLOR",
          hotelId: props.hotel.id,
          color: "#fc0335",
        });
      }}
      onMouseLeave={() => {
        dispatch({
          type: "SET_BORDER_COLOR",
          hotelId: props.hotel.id,
          color: "#037ffc",
        });
      }}
    >
      <div className="col">
        <h6 className="border fw-bold p-1">{props.hotel.label}</h6>
        <div className="border p-1">
          <p>
            <span className="fw-bold">Data prenotazione:</span>{" "}
            <span>{props.bookingDate}</span>
          </p>
          <p>
            <span className="fw-bold">Distanza dalla prossima tappa:</span>{" "}
            {dist} km
          </p>
        </div>
        <p className="d-flex justify-content-between border p-1">
          <span>
            {" "}
            <span className="fw-bold">Prezzo:€</span> {props.hotel.prezzo}{" "}
          </span>
          <button onClick={onRemove}>
            <i className="bi bi-trash3"></i>
          </button>
        </p>
      </div>
    </div>
  );
}
export default BookingCard;
