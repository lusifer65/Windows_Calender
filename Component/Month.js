import React, { useEffect, useState } from "react";
import { DaysInMonth, weekDays } from "../constant";

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

  // console.log(
  //   weekDays[
  //     new Date(`${parseInt(currentMonth) + 1}/01/${currentYear}`).getDay()
  //   ]
  // );
  // console.log(`1/${parseInt(currentMonth) + 1}/${currentYear}`);
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
        <div className="weeks">
          {weekDays.map((day, index) => (
            <p key={index}>{day.substring(0, 3)}</p>
          ))}
        </div>
        <div className="date">
          {Array.from(
            Array(DaysInMonth[months[currentMonth]] + startDay).keys()
          ).map((element, index) => {
            if (startDay > index) {
              return <span key={index}></span>;
            }
            return <p key={index}>{element - startDay + 1}</p>;
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="field">
        <select
          name="month"
          value={currentMonth}
          onChange={(e) => {
            setCurrentMonth(e.target.value);
          }}
        >
          {months.map((month, index) => (
            <option value={index} key={index}>
              {month}
            </option>
          ))}
        </select>
        <select
          name="year"
          value={currentYear}
          onChange={(e) => {
            setCurrentYear(e.target.value);
          }}
        >
          {Array.from(Array(100)).map((i, index) => {
            return (
              <option value={2023 - 50 + index} key={index}>
                {2023 - 50 + index}
              </option>
            );
          })}
        </select>
      </div>
      <div className="box">
        <div className="weeks date">
          {weekDays.map((day, index) => (
            <p key={index}>{day}</p>
          ))}
        </div>
        <div className="date">
          {Array.from(
            Array(DaysInMonth[months[currentMonth]] + startDay).keys()
          ).map((element, index) => {
            if (startDay > index) {
              return <span key={index}></span>;
            }
            return <button key={index}>{element - startDay + 1}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Month;
