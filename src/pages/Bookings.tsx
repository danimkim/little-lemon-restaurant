import BookingForm from "@components/Bookings/BookingForm";
import { useCallback, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./../utils/api";
import { useNavigate } from "react-router-dom";

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

export interface IFormData {
  "res-date": string;
  "res-time": string;
  guests: number;
  occasion: string;
}

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

  const formatDate = useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  const initFormData = {
    "res-date": formatDate(new Date()),
    "res-time": "",
    guests: 1,
    occasion: "Birthday",
  };

  const [formData, setFormData] = useState<IFormData>(initFormData);
  const navigate = useNavigate();

  const submitForm = useCallback((data: IFormData) => {
    if (confirm("Do you confirm this booking?")) {
      const res = submitAPI(data);

      if (res) {
        navigate("/booking/confirmed");
      } else {
        alert("Something went wrong! Please try again.");
      }
    }
  }, []);

  return (
    <>
      <h2>Reservation</h2>
      <BookingForm
        onDateChange={handleDateChange}
        onFormChange={setFormData}
        availableTimes={state.availableTimes}
        onSubmit={submitForm}
        formData={formData}
      />
    </>
  );
}
