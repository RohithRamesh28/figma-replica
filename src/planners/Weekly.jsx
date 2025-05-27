import Content_Date from "../components/common/Content_Date";
import Left_top_priority from "../components/left_container/Left_top_priority";
import ListCheckBox from "../components/common/listCheckBox";
import HabitTracker from "../components/left_container/HabitTracker";
import Notes from "../components/common/Notes";

import "./Weekly.css";

function Weekly() {

  return (
    <div className="left-container">
      <h1>Weekly Planner</h1>
      <button></button>

      <div className="left-grid">
        <div className="week-header">
          <Content_Date />
        </div>

        <div className="top-priorities">
          <Left_top_priority />
        </div>

        <div className="left-extra">
          <div className="left-checkbox">
            <ListCheckBox
              title="Shopping List"
              itemCount={6}
              className="left-shopping"
            />
          </div>

          <div className="left-habit">
            <HabitTracker />
          </div>

          <div className="left-note">
            <Notes title="Notes" className="left-note" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weekly;
