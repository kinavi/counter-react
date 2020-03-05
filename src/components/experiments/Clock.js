import React from 'react';
import {useClock} from '../../hooks/useClock';

export const Clock = () =>{
  const timer = useClock(new Date());

  const getMinutes = () =>{
    if (timer.getMinutes()<10) {
      return `0${timer.getMinutes()}`;
    } else {
      return timer.getMinutes().toLocaleString();
    }
  };
  const getHours = () =>{
    if (timer.getHours()<10) {
      return `0${timer.getHours()}`;
    } else {
      return timer.getHours().toLocaleString();
    }
  };
  return (
    <div className="container-clock">
      <div>{getHours()}</div>
      <div>:</div>
      <div>{getMinutes()}</div>
    </div>
  );
};