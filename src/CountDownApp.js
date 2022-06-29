import React from "react";
import { useState } from "react";
import Button from "./components/Button";

const CountDownApp = () => {
  const [intervalId, setIntervalId] = useState(0);
  const [counter, setCounter] = useState(0);

  const [counterInputValue, setCounterInputValue] = useState(0);

  const handleStart = () => {
    clearInterval(intervalId);
    let intervalOneId = setInterval(() => {
      setCounter((prevValue) => {
        if (prevValue === 0) {
          clearInterval(intervalId);
          return 0;
        } else return prevValue - 1;
      });
    }, 1000);
    setIntervalId(intervalOneId);
  };
  const handleStop = () => {
    clearInterval(intervalId);
  };

  const handleChange = (e) => {
    setCounterInputValue(e.target.value);
    setCounter(e.target.value);
  };

  return (
    <div className="display1">
      <h3>====CountDown Application====</h3>
      <h4>Enter a Value in the box and hit start to start the countdown : </h4>
      <input value={counterInputValue} onChange={(e) => handleChange(e)} />
      <Button btnText="Start" btnHandler={handleStart} />
      <p className="display">{counter}</p>
      <Button btnText="Stop" btnHandler={handleStop} />
    </div>
  );
};

export default CountDownApp;
