import React from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App4 from "./lab4/App4";
import App5 from "./lab5/App5";
import App6 from "./lab6/App6";
import App7 from "./lab7/App7";
import Main from "./Main";
import Home from "./lab7/Home";
import HotelBox from "./lab7/HotelBox";
import HotelDetails from "./lab7/HotelDetails";
import Booking from "./lab7/Booking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {" "}
          {/**ici je met le component navlink */}
          <Route path="lab4" element={<App4 />} />
          <Route path="lab5" element={<App5 />} />
          <Route path="lab6" element={<App6 />} />
          <Route path="lab7" element={<App7 />}>
            <Route path="home" element={<Home />} />
            <Route path="hotels" element={<HotelBox />}/>
            <Route path="hotels/:hotelId" element={<HotelDetails />} />
            <Route path="booking" element={<Booking/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//{<div className="container">
//{/*<App4/>*/}
//{/*<App5/>*/}
//{/*<App6/>*/}
//{/*<App7/>*/}
//</div> }
