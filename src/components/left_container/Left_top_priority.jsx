import React, { useState } from "react";

function Left_top_priority() {
  const [priorities, setPriorities] = useState(["", "", ""]);

  const handleChange = (index, value) => {
    const updated = [...priorities];
    updated[index] = value;
    setPriorities(updated);
  };


  return (
    <div className="left-priority-container">
      <h3 className="priority-header">Top Priorities</h3>
      <div className="priority-list">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`priority-box ${index !== 0 ? "with-border" : ""}`}
          >
            <p className="priority-number">{index + 1}.</p>
            <textarea
              placeholder="Type here"
              value={priorities[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              className="priority-textarea"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Left_top_priority;
