import { createContext } from "react";
import { initialState } from "./State";

const StateContext = createContext(initialState)

export default StateContext