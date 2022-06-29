import React from "react";
import { useState } from "react";
import Button from "./components/Button";

const CounterApp = () => {
  const [intervalId, setIntervalId] = useState(0);
  const [counter, setCounter] = useState(0);
  const handleStart = () => {
    clearInterval(intervalId);
    let intervalOneId = setInterval(() => {
      setCounter((prevValue) => prevValue + 1);
      console.log("counter :", counter);
    }, 1000);
    setIntervalId(intervalOneId);
  };
  const handleStop = () => {
    clearInterval(intervalId);
  };
  return (
    <div className="display1">
      <h3>=====Counter Application=====</h3>
      <Button btnText="Start" btnHandler={handleStart} />
      <p className="display">{counter}</p>
      <Button btnText="Stop" btnHandler={handleStop} />
    </div>
  );
};

export default CounterApp;
