import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, DisplayType } from "../../redux/action";

const Year = () => {
  const year = useSelector((state) => state.year);

  const dispatch = useDispatch();

  const startYear = (year) => {
    return parseInt(year / 10) * 10;
  };

  return (
    <div className="box">
      <div className="month">
        <p className="yearPara">
          {startYear(year)}-{startYear(year) + 10}
        </p>
      </div>
      <div className="allMonth">
        {Array.from(Array(12).keys()).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(changeDate(0, startYear(year) + item - 1));
              dispatch(DisplayType("month"));
            }}
          >
            <p className={item == 0 ? "yearPara" : ""}>
              {startYear(year) + item - 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Year;
