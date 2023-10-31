import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [previousState, setPreviousState] = useState(null);
  const [isBreak, setIsBreak] = useState(false);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
    if (isBreak) {
      setIsBreak(false);
      if (previousState) {
        setMinutes(previousState.minutes);
        setSeconds(previousState.seconds);
        setIsRunning(previousState.isRunning);
      }
    }
  };

  const startBreak = () => {
    setIsBreak(true);
    setPreviousState({ minutes, seconds, isRunning });
    setMinutes(5);
    setSeconds(0);
    setIsRunning(true);
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(interval);
          setIsRunning(false);

          if (isBreak) {
            setIsBreak(false);
            setMinutes(25);
            setSeconds(0);
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds, isBreak]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold mb-4">Pomodoro Timer</h1>
      <div className="text-6xl mb-4">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className={`${
            isBreak ? 'bg-green-500' : isRunning ? 'bg-red-500' : 'bg-blue-500'
          } text-white px-6 py-3 rounded-lg hover:bg-blue-600`}
          onClick={isBreak ? resetTimer : toggleTimer}
        >
          {isBreak ? 'End Break' : isRunning ? 'Pause' : 'Start/Resume'}
        </button>
        {isRunning || isBreak ? null : (
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            onClick={startBreak}
          >
            Take a Break
          </button>
        )}
        <button
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
