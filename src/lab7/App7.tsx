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
        for(var i=0;i<data.length;i++){
          dispatch({type:'SET_BORDER_COLOR',hotelId:data[i].id,color:"#037ffc"})
        }
      })
      .catch((error) => console.log("error fetching data " + error));
  }, []);
  return (
    <StateContext.Provider value={[state,dispatch]}>
      <div className="col">
        <div className="row">
           <h1>LAIB7</h1>
        </div>
        <div className="row" style={{backgroundColor:"#e99171",height:"5em"}}>
           <Bar />
        </div>
        
        <div className="row">
          <Outlet />
        </div>
      </div>
    </StateContext.Provider>
  );
}
export default App7;
