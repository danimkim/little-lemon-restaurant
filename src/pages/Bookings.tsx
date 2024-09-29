import BookingForm, { IFormData } from "@components/Bookings/BookingForm";
import { useCallback, useReducer } from "react";
import { fetchAPI, submitAPI } from "./../utils/api";
import { useNavigate } from "react-router-dom";
import Wrapper from "@components/Wrapper";
import styled from "@emotion/styled";

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
    <Container>
      <h2>Reserve a table</h2>
      <BookingForm
        onDateChange={handleDateChange}
        availableTimes={state.availableTimes}
        onSubmit={submitForm}
      />
    </Container>
  );
}

const Container = styled(Wrapper)`
  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    max-width: 400px;
  }
`;
