import React, { useState } from "react";
import "./RightWeekdaysCheckBox.css";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

function RightWeekdaysCheckBox() {
  const [selectedDay, setSelectedDay] = useState("mon");

  return (
    <div className="weekday-container">
      {weekdays.map((day) => (
        <div className="weekday-item" key={day}>
          <label className="weekday-label">{day}</label>
          <input
            type="radio"
            name="weekday"
            value={day}
            checked={selectedDay === day}
            onChange={() => setSelectedDay(day)}
          />
        </div>
      ))}
    </div>
  );
}

export default RightWeekdaysCheckBox;
