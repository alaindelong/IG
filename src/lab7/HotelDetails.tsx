import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HotelProps } from "./State";
import DatePicker from "react-datepicker";
import {  useStateContext } from "./StateContext";
import { compareDate, convertDate } from "./Utils";
function HotelDetails() {
  const { hotelId } = useParams();
  
  const [hotel, setHotel] = useState<HotelProps>();
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const [state, dispatch] = useStateContext();
  const [booked, setBooked] = useState(true);

  const onBooking = () => {
    //1 notte per tappa -> se booking vide, alors aggiungi
    // se booking non vide check si current date - prev date is 1
    if (hotelId) {
      if (state.bookings.length === 0)
        dispatch({
          type: "ADD_TO_BOOKING",
          hotelId: parseInt(hotelId),
          date: dateToStr,
        });
      else if (
        compareDate(
          state.bookings[state.bookings.length - 1].bookingDate,
          dateToStr
        ) === 1 &&
        state.bookings[state.bookings.length - 1].hotel.id !== parseInt(hotelId)
      )
        dispatch({
          type: "ADD_TO_BOOKING",
          hotelId: parseInt(hotelId),
          date: dateToStr,
        });
      else setBooked(false);
    }

    if (!booked) alert("prenotazione non valida");

    navigate("../booking");
  };

  const [dateToStr, setDateToStr] = useState(convertDate(new Date()));
  useEffect(() => {
    if (hotelId !== undefined)
      setHotel(state.hotels.filter((el) => el.id === parseInt(hotelId))[0]);
  }, [hotelId, state]);
  return (
    <div>
      {hotel && (
        <div className="hotel-details">
          <div className="hotel-details-d1">
            <div className="hotel-details-card">
              <h5>PRENOTA LA TAPPA</h5>
              <p>data del soggiorno</p>
              <p>
                {" "}
                <DatePicker
                  onChange={(date: Date) => {
                    if (date !== undefined) {
                      setStartDate(date);
                      setDateToStr(convertDate(date));
                    } else console.log("date is null");
                  }}
                  selected={startDate}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="gg/mm/yyyy"
                  minDate={new Date()}
                />
              </p>
              <button
                className="hotel-details-bttn"
                type="button"
                onClick={() => {
                  if (!booked) alert("prenotazione non valida");
                  else onBooking();
                }}
              >
                Aggiungi al cammino
              </button>
            </div>
          </div>
          <div className="hotel-details-d2">
            <h6>{hotel.label}</h6>
            <p>
              <i className="bi bi-geo-alt"></i> {hotel.indirizzo}
            </p>
            <p>{hotel.descrizione}</p>
            <p>Prezzo per notte: {hotel.prezzo}</p>
            <img src={hotel.img} alt="" width={"100%"} />
          </div>
        </div>
      )}
    </div>
  );
}
export default HotelDetails;
