import React, {useState} from 'react';
import {ClockContext} from '../context';
import {Сounter} from './Сounter';
import {useInterval} from '../hooks/useInterval';

export const TestApp = () => {
  const [count, setCount] = useState(0);
  const [delay] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, isRunning ? delay : null);

  const onStart = () =>{
    setIsRunning(true);
  };

  const onStop = () =>{
    setIsRunning(false);
  };

  const onClear = () =>{
    setCount(0);
  };

  return (
    <div>
      <ClockContext.Provider value={count}>
        <Сounter/>
      </ClockContext.Provider>
      <button onClick={onStart}>start</button>
      <button onClick={onStop}>stop</button>
      <button onClick={onClear}>clear</button>
    </div>
  );
};
