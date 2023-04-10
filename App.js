import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Month from "./Component/card/Card";
import { DaysInMonth, weekDays } from "./constant";

import "./style.css";
import Display from "./Component/DisplayBlock/Display";

const App = () => {
  let date = new Date();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container">
      <div className="currentDate">
        <p>
          {weekDays[date.getDay()]}, {date.getDate() + " "}
          {Object.keys(DaysInMonth)[date.getMonth()]}
        </p>
        <button
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <i className={`arrow ${isOpen ? "down" : "up"}`}></i>
        </button>
      </div>
      {/* <Month isOpen={isOpen} /> */}
      <Display isOpen={isOpen}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
