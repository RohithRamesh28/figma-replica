import React, { useState } from "react";
import "./RightWaterTracker.css";

function RightWaterTracker() {
  const [count, setCount] = useState(1);

  const handleClick = (index) => {
    setCount(index + 1);
  };

  return (
    <div className="water-tracker-box">
      <strong className="water-label">Water</strong>
      <div className="droplets">
        {[...Array(8)].map((_, i) => (
          <img
            key={i}
            src={i < count ? "src/public/water-drop_2.svg" : "src/public/water-drop_1.svg"}
            alt={`drop-${i}`}
            className="drop-svg"
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default RightWaterTracker;
