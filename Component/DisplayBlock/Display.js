import React, { useState } from "react";
import "./displayStyle.css";
import { DaysInMonth } from "../../constant";

const Display = () => {
  const [year, setYear] = useState(2023);
  let months = Object.keys(DaysInMonth);
  const changeYear = (value) => {
    setYear(year + value);
  };

  const DisplayMonth = () => (
    <>
      <div className="month">
        <p>{year}</p>
        <div className="btn">
          <button
            onClick={() => {
              changeYear(-1);
            }}
          >
            <i class="arrow up"></i>
          </button>
          <button
            onClick={() => {
              changeYear(1);
            }}
          >
            <i class="arrow down"></i>
          </button>
        </div>
      </div>
      <div className="allMonth">
        {months.map((item) => (
          <div>
            <p>{item.substring(0, 3)}</p>
          </div>
        ))}
      </div>
    </>
  );
  
  const DisplayYear=()=>(
    <><div className="month">
    <p>{year}</p>
    <div className="btn">
      <button
        onClick={() => {
          changeYear(-1);
        }}
      >
        <i class="arrow up"></i>
      </button>
      <button
        onClick={() => {
          changeYear(1);
        }}
      >
        <i class="arrow down"></i>
      </button>
    </div>
  </div>
  <div className="allMonth">
   
  </div>
</>
  )

  return (
    <div className="box">
      <DisplayYear/>
    </div>
  );
};

export default Display;
