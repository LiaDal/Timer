import React, { useEffect } from "react";import { useState } from "react";
import BoxSx from "./Box.tsx";
import Buttons from "./Buttons.tsx";

function Timer() {
  const [counter, setCounter] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h1>Timer</h1>
      <BoxSx>
        <h2>
          <span>{("0" + Math.floor((counter / 60000) % 60)).slice(-2)} : </span>
          <span>{("0" + Math.floor((counter / 1000) % 60)).slice(-2)} : </span>
          <span>{("0" + ((counter / 10) % 100)).slice(-2)}</span>
        </h2>
      </BoxSx>
      <div>
        {running ? (
          <Buttons onClick={() => setRunning(false)}>Stop</Buttons>
        ) : (
          <Buttons onClick={() => setRunning(true)}>Start</Buttons>
        )}
        <Buttons
          onClick={() => {
            setCounter(0);
            setRunning(false);
          }}
        >
          Reset
        </Buttons>
      </div>
    </div>
  );
}

export default Timer;
