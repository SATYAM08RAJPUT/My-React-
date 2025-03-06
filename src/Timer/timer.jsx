import React, { useState, useEffect } from "react";

const Timer = () => {
  // State to hold the timer value
  const [time, setTime] = useState(0);
  // State to track if the timer is running
  const [isRunning, setIsRunning] = useState(false);

  // Start the timer when 'Start' button is clicked
  const startTimer = () => {
    setIsRunning(true);
  };

  // Stop the timer when 'Stop' button is clicked
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset the timer when 'Reset' button is clicked
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  // useEffect hook to start and stop the timer based on the state
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval); // Clear the interval when timer stops
    }

    // Cleanup function to clear the interval if the component unmounts
    return () => clearInterval(interval);
  }, [isRunning]); // This effect will run when the `isRunning` state changes

  return (
    <div>
      <h1>Timer: {time} seconds</h1>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
