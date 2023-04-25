import React, { useState } from "react";
import "./displayStyle.css";
import { DaysInMonth } from "../../constant";
import { useDispatch, useSelector } from "react-redux";

const Display = () => {
  const year = useSelector((state) => state.year);
  const dispatch = useDispatch();
  let months = Object.keys(DaysInMonth);

  const DisplayMonth = () => (
    <>
      <div className="month">
        <p className="paraWithCursor">{year}</p>
        <div className="btn">
          <button
            onClick={() => {
              changeYear(-1);
            }}
          >
            <i className="arrow up"></i>
          </button>
          <button
            onClick={() => {
              changeYear(1);
            }}
          >
            <i className="arrow down"></i>
          </button>
        </div>
      </div>
      <div className="allMonth">
        {months.map((item, index) => (
          <div onClick={() => {}}>
            <p>{item.substring(0, 3)}</p>
          </div>
        ))}
      </div>
    </>
  );

  const DisplayYear = () => (
    <>
      <div className="month">
        <p>{year}</p>
        <div className="btn">
          <button
            onClick={() => {
              changeYear(-1);
            }}
          >
            <i className="arrow up"></i>
          </button>
          <button
            onClick={() => {
              changeYear(1);
            }}
          >
            <i className="arrow down"></i>
          </button>
        </div>
      </div>
      <div className="allMonth"></div>
    </>
  );

  return (
    <div className="box">
      <DisplayMonth />
    </div>
  );
};

export default Display;
