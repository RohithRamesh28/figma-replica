import React from "react";

import {useState } from "react";
function HabitTracker() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const [habits, setHabits] = useState([
    { label: "label", checks: [false, false, false, false, false, false, false] },
    { label: "label", checks: [false, false, false, false, false, false, false] },
    { label: "label", checks: [false, false, false, false, false, false, false] },
    { label: "label", checks: [false, false, false, false, false, false, false] }
  ]);

  function toggleCheck(habitIndex, dayIndex) {
    const updated = [...habits];
    updated[habitIndex].checks[dayIndex] = !updated[habitIndex].checks[dayIndex];
    setHabits(updated);
  }

  return (
    <div className="habit-container">
      <div className="habit-header">
        <span className="habit-title">Habit Tracker</span>
        <div className="habit-days">
          {days.map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
      </div>

      {habits.map((habit, habitIndex) => (
        <div key={habitIndex} className="habit-row">
          <span className="habit-label">{habit.label}</span>
          <div className="habit-circles">
            {habit.checks.map((checked, dayIndex) => (
              <span
                key={dayIndex}
                className={`circle ${checked ? "checked" : ""}`}
                onClick={() => toggleCheck(habitIndex, dayIndex)}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitTracker;
