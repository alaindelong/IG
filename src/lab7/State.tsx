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
}

export const initialState: State = {
  hotels: [],
  bookings: []
};

export type Action =
  | { type: "LOAD_HOTELS"; hotels: HotelProps[] }
  | { type: "ADD_TO_BOOKING"; hotelId: number; date: string }
  | { type: "REMOVE_FROM_BOOKING"; hotelId: number };

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
    default:
      return state;
  }
};
