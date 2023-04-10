import React, { useEffect, useState } from "react";

import { DaysInMonth, weekDays } from "../../constant";
import "./CardStyle.css";

const Month = ({ isOpen }) => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(0);
  const [startDay, setStartDay] = useState(0);

  useEffect(() => {
    const date = new Date();
    setCurrentMonth(date.getMonth());
    setCurrentYear(date.getFullYear());
  }, []);

  useEffect(() => {
    setStartDay(
      new Date(`${parseInt(currentMonth) + 1}/01/${currentYear}`).getDay()
    );
  }, [currentYear, currentMonth]);

  const months = Object.keys(DaysInMonth);

  //for month change by arrow
  const changeMonth = (value) => {
    if (currentMonth == 0 && value == -1) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else if (currentMonth == 11 && value == 1) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + value);
    }
  };

  // for checking date
  const isToday = (date) => {
    let currentDate = new Date();
    return (
      currentDate.getDate() === date &&
      currentDate.getMonth() === currentMonth &&
      currentDate.getFullYear() === currentYear
    );
  };

  //use to display week
  const WeekDays = () => (
    <div className="weeks">
      {weekDays.map((day, index) => (
        <p key={index}>{day.substring(0, 3)}</p>
      ))}
    </div>
  );

  //use to display the date
  const MonthDate = () => (
    <div className="date">
      {Array.from(
        Array(DaysInMonth[months[currentMonth]] + startDay).keys()
      ).map((element, index) => {
        if (startDay > index) {
          return <span key={index}></span>;
        }
        return (
          <p
            id={`${isToday(element - startDay + 1) ? "circle" : ""}`}
            key={index}
          >
            {element - startDay + 1}
          </p>
        );
      })}
    </div>
  );

  if (!isOpen) {
    return <React.Fragment></React.Fragment>;
  }
  return (
    <div className="current">
      <div className="month">
        <p>
          {months[currentMonth]}, {currentYear}
        </p>
        <div className="btn">
          <button
            onClick={() => {
              changeMonth(-1);
            }}
          >
            <i class="arrow up"></i>
          </button>
          <button
            onClick={() => {
              changeMonth(1);
            }}
          >
            <i class="arrow down"></i>
          </button>
        </div>
      </div>
      <div className="dateBox">
        <WeekDays />
        <MonthDate />
      </div>
    </div>
  );
};

export default Month;
