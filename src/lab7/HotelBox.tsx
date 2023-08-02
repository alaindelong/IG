import React, { useContext } from "react";
import Hotel from "./Hotel";
import HotelContext from "./HotelContext";
import { useNavigate } from "react-router-dom";
import {StateContext, useStateContext} from "./StateContext";

function HotelBox() {
  let [state,dispatch ]= useStateContext()
  return (
    <div className="hotelbox">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <h6>Ostelli Sul Cammino Di Santiago di Galizia</h6>
      </div>
      <div className="row">
        {state.hotels.map((el) => (
          <Hotel
            key={el.id}
            label={el.label}
            id={el.id}
            indirizzo={el.indirizzo}
            lat={el.lat}
            lng={el.lng}
            descrizione={el.descrizione}
            beds={el.beds}
            prezzo={el.prezzo}
            img={el.img}
            km={el.km}
          />
        ))}
      </div>
    </div>
  );
}
export default HotelBox;
