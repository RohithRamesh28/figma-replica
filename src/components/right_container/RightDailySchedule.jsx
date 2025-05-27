import React from "react";
import "./RightDailySchedule.css";

const hours = [
  "6 am", "7 am", "8 am", "9 am", "10 am", "11 am",
  "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm",
  "6 pm", "7 pm", "8 pm", "9 pm", "10 pm"
];

function RightDailySchedule() {
  return (
    <div className="daily-schedule-container">
      <h2 className="daily-schedule-title">Daily Schedule</h2>
      <div className="schedule-rows">
        {hours.map((hour) => (
          <div key={hour} className="schedule-row">
            <div className="schedule-divider"></div>
            <span className="schedule-time">{hour}</span>
            <input type="text" className="schedule-input" placeholder="label" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightDailySchedule;
