import BookingForm from "@components/Bookings/BookingForm";
import { availableTimes } from "@constants";
import { useReducer } from "react";

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
    return { ...state };
  }
  return state;
};

export default function BookingPage() {
  const initData = {
    availableTimes,
  };

  const initializeTimes = () => ({ availableTimes });

  const handleDateChange = (selectedDate: string) =>
    dispatch({ type: "UPDATE", payload: selectedDate });

  const [state, dispatch] = useReducer(updateTimes, initData, initializeTimes);

  return (
    <div>
      <h2>Reservation</h2>
      <BookingForm
        onDateChange={handleDateChange}
        availableTimes={state.availableTimes}
      />
    </div>
  );
}
