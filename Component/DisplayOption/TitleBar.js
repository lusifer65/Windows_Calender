import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { DaysInMonth, weekDays } from "../../constant";
import { DisplayCalender } from "../../redux/action";

const TitleBar = () => {
  let date = new Date();

  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.isOpen);

  return (
    <div className="currentDate">
      <p>
        {weekDays[date.getDay()]}, {date.getDate() + " "}
        {Object.keys(DaysInMonth)[date.getMonth()]}
      </p>
      <button
        onClick={() => {
          dispatch(DisplayCalender());
        }}
      >
        <i className={`arrow ${isOpen ? "down" : "up"}`}></i>
      </button>
    </div>
  );
};

export default TitleBar;
