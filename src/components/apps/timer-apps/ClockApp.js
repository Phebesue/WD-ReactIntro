import React, { useState, useEffect } from "react";
import "./ClockApp.css"

const getTimeString = (loc) => {
  const options1 = { timeZone: loc, timeZoneName: "short" };
  const date = new Date(Date.now()).toLocaleTimeString("en-US", options1);

  const arr = [date, options1.timeZone];
  return arr;
};


const ClockApp = () => {
  const [time, setTime] = useState(getTimeString("America/Indianapolis"));
  const [time2, setTime2] = useState(getTimeString("UTC"));

  useEffect(() => {
    const interval = setInterval(() => {
      let date = getTimeString("America/Indianapolis");
      let date2 = getTimeString("UTC");
      setTime(date);
      setTime2(date2);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1 className="section-title">React Clock</h1>
      <hr className="explanation" />
      <div className="times">
          <div className="time1">
            <h4>{time[1]}</h4>
            <p>{time[0]}</p>
          </div>
          <div className="time2">
          <h4>{time2[1]}</h4>
            <p>{time2[0]}</p>
          </div>
      </div>
    </div>
  );
};

export default ClockApp;
