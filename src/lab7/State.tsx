import { Reducer } from "react";

export interface HotelProps {
  label: string;
  id: number;
  indirizzo: string;
  lat: number;
  lng: number;
  descrizione: string;
  beds: number;
  prezzo: number;
  img: string;
  km: number;
}

export interface BookingCardProps {
  hotel: HotelProps;
  bookingDate: string;
}

export interface State {
  hotels: HotelProps[];
  bookings: BookingCardProps[];
  borderColors:string[]
}

export const initialState: State = {
  hotels: [],
  bookings: [],
  borderColors:[]
};

export type Action =
  | { type: "LOAD_HOTELS"; hotels: HotelProps[] }
  | { type: "ADD_TO_BOOKING"; hotelId: number; date: string }
  | { type: "REMOVE_FROM_BOOKING"; hotelId: number }
  | { type: 'SET_BORDER_COLOR',hotelId:number,color:string};

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "LOAD_HOTELS":
      return { ...state, hotels: action.hotels };
    case "ADD_TO_BOOKING":
      return {
        ...state,
        bookings: [
          ...state.bookings,
          {
            hotel: state.hotels.filter((h) => h.id === action.hotelId)[0],
            bookingDate: action.date,
          },
        ],
      };
    case "REMOVE_FROM_BOOKING":
      return {
        ...state,
        bookings: [...state.bookings.filter((b) => b.hotel.id !== action.hotelId)],
      };
    case 'SET_BORDER_COLOR':
        let tmp = state.borderColors
        tmp[action.hotelId]=action.color
        return{...state,borderColors:tmp}  
    default:
      return state;
  }
};
