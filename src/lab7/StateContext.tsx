import { createContext, useContext } from "react";
import { Action, State, initialState } from "./State";

export const StateContext = createContext<[State,(action:Action)=>void]>([
    initialState,
     (action:Action) =>{ }])
export const useStateContext = () => useContext(StateContext)
