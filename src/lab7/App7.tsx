import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Bar from "./Bar";
import { HotelProps } from "./State";
import HotelContext from "./HotelContext";

function App7() {
  const urlData = "/lab7.json";
  const [hotels, setHotels] = useState<HotelProps[]>([]);

  useEffect(() => {
    fetch(urlData)
      .then((response) => response.json())
      .then((data) => setHotels(data))
      .catch((error) => console.log("error fetching data " + error));
  }, []);
  return (
    <HotelContext.Provider value={hotels}>
      <div className="container">
        <h1>LAIB7</h1>
        <Bar />
        <div>
          <Outlet />
        </div>
      </div>
    </HotelContext.Provider>
  );
}
export default App7;
