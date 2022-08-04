import React, { useState, useEffect } from 'react';
import { format, addMilliseconds } from 'date-fns';

const StopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const handlerBtnStart = () => {
    setIsRunning(!isRunning);
  }
  const handlerBtnReset = () => {
    setTime((time) => new Date(0, 0, 0, 0, 0, 0));
    setIsRunning(false);
  }

  useEffect(() => {
    console.log("useEffect");
    if (isRunning) {
      const idInterval = setInterval(() => {
        setTime((time) => addMilliseconds(time, 1000));
      }, 1000);
      return () => clearInterval(idInterval);
    }
  }, [isRunning]);

  return (
    <div>
      <h2>Stop Watch</h2>
      <h3>{format(time, 'HH:mm:ss')}</h3>
      <button onClick={handlerBtnStart}>{isRunning ? 'stop' : 'start'}</button>
      <button onClick={handlerBtnReset}>{'reset'}</button>

    </div>
  );
}

export default StopWatch;
