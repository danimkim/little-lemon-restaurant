import Button from "@components/Button";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import { useCallback } from "react";

interface IProps {
  availableTimes: string[];
  onDateChange: (date: string) => void;
  onSubmit: (formData: IFormData) => void;
}

export interface IFormData {
  "res-date": string;
  "res-time": string;
  guests: number;
  occasion: string;
  name: string;
  email: string;
}

interface IErrorMessage extends Omit<IFormData, "guests"> {
  guests: string;
}

export default function BookingForm({
  availableTimes,
  onDateChange,
  onSubmit,
}: IProps) {
  const NOT_SELECTED = "not-selected";

  const formatDate = useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  const initFormData = {
    "res-date": formatDate(new Date()),
    "res-time": NOT_SELECTED,
    guests: 1,
    occasion: "",
    name: "",
    email: "",
  };

  const formik = useFormik({
    initialValues: initFormData,
    validate: (values: IFormData) => {
      const errors: IErrorMessage = {} as IErrorMessage;

      if (!values["res-date"]) {
        errors["res-date"] = "Required";
      }

      if (values["res-time"] === NOT_SELECTED) {
        errors["res-time"] = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.name) {
        errors.name = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      }

      if (values.guests < 1) {
        errors.guests = "There must be more than 1 guest.";
      }

      return errors;
    },
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="res-date">Choose date</Label>
      <input
        type="date"
        id="res-date"
        value={formik.values["res-date"]}
        onChange={(e) => {
          onDateChange(e.target.value);
          formik.handleChange(e);
        }}
        className={formik.errors["res-date"] ? "error" : ""}
      />
      {<ErrorMsg>{formik.errors["res-date"] || ""}</ErrorMsg>}

      <Label htmlFor="res-time">Choose time</Label>
      <select
        id="res-time"
        value={formik.values["res-time"]}
        onChange={formik.handleChange}
        className={formik.errors["res-time"] ? "error" : ""}
      >
        <option disabled value={NOT_SELECTED}>
          Please select a time
        </option>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      {<ErrorMsg>{formik.errors["res-time"] || ""}</ErrorMsg>}
      <Label htmlFor="guests">Number of guests</Label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formik.values.guests}
        onChange={formik.handleChange}
        className={formik.errors.guests ? "error" : ""}
      />
      {<ErrorMsg>{formik.errors.guests || ""}</ErrorMsg>}
      <Label htmlFor="occasion">Occasion</Label>
      <select
        id="occasion"
        value={formik.values.occasion}
        onChange={formik.handleChange}
        className={formik.errors.occasion ? "error" : ""}
      >
        <option value={``}>Please select an option</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      {<ErrorMsg>{formik.errors.occasion || ""}</ErrorMsg>}
      <Label htmlFor="name">Your Name</Label>
      <input
        type="text"
        name="name"
        placeholder="Please write your name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className={formik.errors.name ? "error" : ""}
      />
      {<ErrorMsg>{formik.errors.name || ""}</ErrorMsg>}
      <Label htmlFor="email">Your Email</Label>
      <input
        type="email"
        name="email"
        placeholder="Please write your email"
        value={formik.values.email}
        onChange={formik.handleChange}
        className={formik.errors.email ? "error" : ""}
      />
      {<ErrorMsg>{formik.errors.email || ""}</ErrorMsg>}
      <SubmitButton type="submit" width="100%" fontWeight="600">
        Submit
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin: 20px auto 100px;

  label + input + p,
  label + select + p {
    margin-bottom: 30px;
  }

  & input,
  & select {
    margin-top: 10px;
  }

  & input,
  & select {
    height: 40px;
  }

  & input,
  & select {
    padding: 0 10px;
  }

  & input.error,
  & select.error {
    border: solid 1px ${({ theme }) => theme.colors.warning.primary};
  }
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.highlight.secondary};
`;

const SubmitButton = styled(Button)``;

const ErrorMsg = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.warning.primary};
`;
