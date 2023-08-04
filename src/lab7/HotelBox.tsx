import React, { useContext } from "react";
import Hotel from "./Hotel";
import HotelContext from "./HotelContext";
import { useNavigate } from "react-router-dom";
import { StateContext, useStateContext } from "./StateContext";

function HotelBox() {
  let [state, dispatch] = useStateContext();
  return (
    <div className="col">
      <div
        className="row p-3 align-item-center"
        style={{ backgroundColor: "white", color: "grey", height: "4em" }}
      >
        <h6 className="text-center">
          Ostelli Sul Cammino Di Santiago di Galizia
        </h6>
      </div>
      <div className="row g-2 pt-3 pb-3 pl-5 pr-5">
        
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
