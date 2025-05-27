import React from "react";
import Content_Date from "../components/common/Content_Date";
import RightWeekdaysCheckBox from "../components/right_container/RightWeekdaysCheckBox";
import RightDailySchedule from "../components/right_container/RightDailySchedule";
import RighSmiley from "../components/right_container/RightSmiley";
import RightWaterTracker from "../components/right_container/RightWaterTracker";
import ListCheckBox from "../components/common/listCheckBox";
import Notes from "../components/common/Notes";
import "./Daily.css";
import "./Weekly.css";
function Daily() {
  return (
    <div className="right-container">
      <h1>Daily Planner</h1>

      <div className="right-grid">
 
        <div className="date-right">
          <Content_Date />
        </div>

        <div className="RightWeekdaysCheckBox">
          <RightWeekdaysCheckBox />
        </div>

        <div className="smiley">
          <RighSmiley />
        </div>

 
        <div className="right-daily-schedule">
          <RightDailySchedule />
        </div>

        <div className="water-tracker">
          <RightWaterTracker />
        </div>

        <div className="most-important">
          <ListCheckBox title="Most Important" itemCount={3} className="right-important" />
        </div>

        <div className="Todos">
          <ListCheckBox title="Todos" itemCount={3} className="right-todos" />
        </div>

        <div className="note-right">
          <Notes title="Notes" className="right-note" />
        </div>
      </div>
    </div>
  );
}

export default Daily;
