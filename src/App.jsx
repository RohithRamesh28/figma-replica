import React from "react";
import Weekly from "./planners/Weekly";
import Daily from "./planners/Daily";
import "./App.css";
function App() {
  return (
    <div className="Main">
      <div className="weekly">
        <Weekly/>
      </div>
      <div className="daily">
        <Daily />
      </div>
    </div>
  );
}

export default App;
