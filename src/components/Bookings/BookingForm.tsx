import { useCallback, useState } from "react";

interface IFormData {
  "res-date": string;
  "res-time": string;
  guests: number;
  occasion: string;
}

export default function BookingForm() {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const initFormData = {
    "res-date": "",
    "res-time": "",
    guests: 1,
    occasion: "Birthday",
  };

  const [formData, setFormData] = useState<IFormData>(initFormData);
  const [times, setTimes] = useState(availableTimes);

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      console.log(formData);
    },
    [formData]
  );

  return (
    <form action="">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={formData["res-date"]}
        onChange={handleFormChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={formData["res-time"]}
        onChange={handleFormChange}
      >
        {times.map((time) => (
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
