//use to display the date

import { DaysInMonth } from "../../constant";

import { isToday } from "../Utils";

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
