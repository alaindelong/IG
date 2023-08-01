import { createContext } from "react";
import { HotelProps } from "./State";

const HotelContext = createContext<HotelProps[]>([])
export default HotelContext