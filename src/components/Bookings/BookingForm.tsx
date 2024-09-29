import { IFormData } from "@pages/Bookings";
import { useCallback } from "react";

interface IProps {
  availableTimes: string[];
  onDateChange: (date: string) => void;
  onFormChange: React.Dispatch<React.SetStateAction<IFormData>>;
  onSubmit: (formData: IFormData) => void;
  formData: IFormData;
}

export default function BookingForm({
  availableTimes,
  onDateChange,
  onFormChange,
  onSubmit,
  formData,
}: IProps) {
  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      onFormChange((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    },
    [formData]
  );

  return (
    <form onSubmit={() => onSubmit(formData)}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData["res-date"]}
        onChange={(e) => {
          onDateChange(e.target.value);
          handleFormChange(e);
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={formData["res-time"]}
        onChange={handleFormChange}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={formData.guests}
        onChange={handleFormChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={handleFormChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
