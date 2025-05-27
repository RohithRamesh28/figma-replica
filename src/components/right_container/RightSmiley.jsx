import React, { useState } from "react";
import "./RightSmiley.css";

const moods = [
  { id: "very-happy", svg: "src/public/very_happy.svg" },
  { id: "happy", svg: "src/public/mild_happy.svg" },
  { id: "neutral", svg: "src/public/neutral.svg" },
  { id: "sad", svg: "src/public/sad.svg" },
  { id: "very-sad", svg: "src/public/very_sad.svg" }
];

function RightSmiley() {
  const [selected, setSelected] = useState("very-happy");

  return (
    <div className="smiley-container">
      {moods.map((mood) => (
        <label
          key={mood.id}
          className={`smiley-option ${selected === mood.id ? "active" : ""}`}
        >
          <input
            type="radio"
            name="mood"
            value={mood.id}
            checked={selected === mood.id}
            onChange={() => setSelected(mood.id)}
          />
          <img src={mood.svg} alt={mood.id} className="svg-emoji" />
        </label>
      ))}
    </div>
  );
}

export default RightSmiley;
