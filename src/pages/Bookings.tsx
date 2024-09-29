import BookingForm from "@components/Bookings/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./../utils/api";

export type TAvailableTimes =
  | "17:00"
  | "18:00"
  | "19:00"
  | "20:00"
  | "21:00"
  | "22:00";

export type TAction = {
  type: "UPDATE";
  payload: string;
};

type TState = {
  availableTimes: string[];
};

// declare reducer
const updateTimes = (state: TState, action: TAction) => {
  if (action.type === "UPDATE") {
    const date = new Date(action.payload);
    const availableTimes = fetchAPI(date);
    return { availableTimes };
  }
  return state;
};

export default function BookingPage() {
  const initializeTimes = () => {
    const date = new Date();
    const availableTimes = fetchAPI(date);
    return { availableTimes };
  };

  const handleDateChange = (selectedDate: string) =>
    dispatch({ type: "UPDATE", payload: selectedDate });

  const [state, dispatch] = useReducer(
    updateTimes,
    { availableTimes: [] },
    initializeTimes
  );

  return (
    <>
      <h2>Reservation</h2>
      <BookingForm
        onDateChange={handleDateChange}
        availableTimes={state.availableTimes}
      />
    </>
  );
}
