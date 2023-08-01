import React, { useContext } from "react";
import Hotel from "./Hotel";
import HotelContext from "./HotelContext";
import { wrap } from "module";

function HotelBox() {
  const hotels = useContext(HotelContext);
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
      <div
       className="row" 
      >
        {hotels.map((el) => (
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
