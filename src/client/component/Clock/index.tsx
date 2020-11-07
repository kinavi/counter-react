import React from 'react';
import { useClock } from '../../hooks';

export const Clock = () => {
  const timer = useClock(new Date());

  const getMinutes = () => {
    if (timer.getMinutes() < 10) {
      return `0${timer.getMinutes()}`;
    }
    return timer.getMinutes().toLocaleString();
  };
  const getHours = () => {
    if (timer.getHours() < 10) {
      return `0${timer.getHours()}`;
    }
    return timer.getHours().toLocaleString();
  };
  return (
    <div className="clock__container">
      <div>{getHours()}</div>
      <div>:</div>
      <div>{getMinutes()}</div>
    </div>
  );
};
