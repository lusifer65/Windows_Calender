import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CardStyle.css";

import { DaysInMonth, weekDays } from "../../constant";
import { changeDate, DisplayType } from "../../redux/action";
import Display from "../DisplayBlock/Display";
import MonthDate from "../DisplayOption/MonthsDate";

const Card = () => {
  const [startDay, setStartDay] = useState(0);

  const months = Object.keys(DaysInMonth);

  const {
    isOpen,
    pageType,
    month: currentMonth,
    year: currentYear,
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    setStartDay(
      new Date(
        `${parseInt(currentMonth) + 1}/01/${parseInt(currentYear)}`
      ).getDay()
    );
  }, [currentYear, currentMonth]);

  //for month change by arrow
  const changeMonth = (value) => {
    if (currentMonth == 0 && value == -1) {
      dispatch(changeDate(11, currentYear - 1));
    } else if (currentMonth == 11 && value == 1) {
      dispatch(changeDate(0, currentYear + 1));
    } else {
      dispatch(changeDate(currentMonth + value, currentYear));
    }
  };

  //use to display week
  const Weeks = () => (
    <div className="weeks">
      {weekDays.map((day, index) => (
        <p key={index}>{day.substring(0, 3)}</p>
      ))}
    </div>
  );

  if (!isOpen) {
    return <React.Fragment></React.Fragment>;
  }

  if (pageType === "month") {
    return <Display />;
  }
  if (pageType === "year") {
    return <h1>year</h1>;
  }

  return (
    <div className="current">
      <div className="month">
        <p
          className="paraWithCursor"
          onClick={() => {
            dispatch(DisplayType("month"));
          }}
        >
          {months[currentMonth]}, {currentYear}
        </p>
        <div className="btn">
          <button
            onClick={() => {
              changeMonth(-1);
            }}
          >
            <i className="arrow up"></i>
          </button>
          <button
            onClick={() => {
              changeMonth(1);
            }}
          >
            <i className="arrow down"></i>
          </button>
        </div>
      </div>
      <div className="dateBox">
        <Weeks />
        <MonthDate
          startDay={startDay}
          month={currentMonth}
          year={currentYear}
        />
      </div>
    </div>
  );
};

export default Card;
