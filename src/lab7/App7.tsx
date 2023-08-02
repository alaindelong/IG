import React, { Reducer, useEffect, useReducer, useState } from "react";
import { Outlet } from "react-router-dom";
import Bar from "./Bar";
import { Action, HotelProps, State, initialState, reducer } from "./State";
import HotelContext from "./HotelContext";
import { StateContext } from "./StateContext";

function App7() {
  const urlData = "/lab7.json";

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(urlData)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "LOAD_HOTELS", hotels: data });
      })
      .catch((error) => console.log("error fetching data " + error));
  }, []);
  return (
    <StateContext.Provider value={[state,dispatch]}>
      <div className="container">
        <h1>LAIB7</h1>
        <Bar />
        <div>
          <Outlet />
        </div>
      </div>
    </StateContext.Provider>
  );
}
export default App7;
