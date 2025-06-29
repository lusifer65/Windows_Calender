//use to display the date

import React from "react";
import { DaysInMonth } from "../../constant";

const isToday = (date, month, year) => {
  let currentDate = new Date();
  return (
    currentDate.getDate() === date &&
    currentDate.getMonth() === month &&
    currentDate.getFullYear() === year
  );
};

const MonthDate = ({ startDay, month, year }) => {
  const months = Object.keys(DaysInMonth);
  return (
    <div className="date">
      {Array.from(Array(DaysInMonth[months[month]] + startDay).keys()).map(
        (element, index) => {
          if (startDay > index) {
            return <span key={index}></span>;
          }
          return (
            <p
              id={`${
                isToday(element - startDay + 1, month, year) ? "circle" : ""
              }`}
              key={index}
            >
              {element - startDay + 1}
            </p>
          );
        }
      )}
    </div>
  );
};

export default MonthDate;
