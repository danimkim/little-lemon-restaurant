import Button from "@components/Button";
import styled from "@emotion/styled";
import { useCallback, useState } from "react";

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

export default function BookingForm({
  availableTimes,
  onDateChange,

  onSubmit,
}: IProps) {
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
    occasion: "not-selected",
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState<IFormData>(initFormData);

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    },
    [formData]
  );

  return (
    <Form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(formData);
      }}
    >
      <Label htmlFor="res-date">Choose date</Label>
      <input
        type="date"
        id="res-date"
        value={formData["res-date"]}
        onChange={(e) => {
          onDateChange(e.target.value);
          handleFormChange(e);
        }}
      />
      <Label htmlFor="res-time">Choose time</Label>
      <select
        id="res-time"
        value={formData["res-time"]}
        onChange={handleFormChange}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <Label htmlFor="guests">Number of guests</Label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formData.guests}
        onChange={handleFormChange}
      />
      <Label htmlFor="occasion">Occasion</Label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleFormChange}
      >
        <option disabled value="not-selected">
          Please select an option
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <Label htmlFor="name">Your Name</Label>
      <input
        type="text"
        id="name"
        placeholder="Please write your name"
        value={formData.name}
        onChange={handleFormChange}
      />
      <Label htmlFor="email">Your Email</Label>
      <input
        type="email"
        id="email"
        placeholder="Please write your email"
        value={formData.email}
        onChange={handleFormChange}
      />
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

  label + input,
  label + select {
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
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.highlight.secondary};
`;

const SubmitButton = styled(Button)``;
