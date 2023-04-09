import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect,useState } from "react/cjs/react.development";
import Month from "./Component/Month";
import { DaysInMonth, weekDays } from "./constant";

import './style.css';
const App = () => {
let date=new Date();
const [isOpen,setOpen]=useState(true)
  return (
  <div className="container">
  <div className="currentDate">
  <p>{weekDays[date.getDay()]}, {date.getDate()} {Object.keys(DaysInMonth)[date.getMonth()]}</p>
  <button onClick={()=>{setOpen(!isOpen)}}><i class={`arrow ${isOpen?'down':'up'}`}></i></button>
  </div>
  <Month isOpen={isOpen}/>
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
