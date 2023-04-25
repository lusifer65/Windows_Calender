//display month

import React from "react";
import "./DisplayOption_Style.css";
import { DaysInMonth } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { changeDate, DisplayType } from "../../redux/action";

const Months = () => {
  const { year } = useSelector((state) => state);
  const dispatch = useDispatch();
  let months = Object.keys(DaysInMonth);

  return (
    <div className="box">
      <div className="month">
        <p className="paraWithCursor"
        onClick={()=>{
          dispatch(DisplayType('year'))
        }}
        >{year}</p>
        <div className="btn">
          <button
            onClick={() => {
              dispatch(changeDate(0,year-1));
            }}
          >
            <i className="arrow up"></i>
          </button>
          <button
            onClick={() => {
                dispatch(changeDate(0,year+1));

            }}
          >
            <i className="arrow down"></i>
          </button>
        </div>
      </div>
      <div className="allMonth">
        {months.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              dispatch(changeDate(index, year));
              dispatch(DisplayType('date'))
            }}
          >
            <p>{item.substring(0, 3)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Months;
