import React, { useState } from "react";

function Notes({ title = "Notes", className = "" }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className={`notes-container ${className}`}>
      <h3 className="notes-title">{title}</h3>
      <textarea
        className="notes-textarea"
        placeholder="Type here"
        value={text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default Notes;
