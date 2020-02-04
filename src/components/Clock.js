import React, {useContext} from 'react';
import {ClockContext} from '../context';

const Day = () =>{
  const value = useContext(ClockContext);
  return (
    <div>{Math.trunc(value/60/60/24)} Day</div>
  );
};
const Hour = () =>{
  const value = useContext(ClockContext);
  return (
    <div>{Math.trunc(value/60/60)%24} Hour</div>
  );
};
const Minut = () =>{
  const value = useContext(ClockContext);
  return (
    <div>{Math.trunc(value/60)%60} Minut</div>
  );
};

const Second = () =>{
  const value = useContext(ClockContext);
  return (
    <div>{value%60} Second</div>
  );
};

export const Clock = () => {
  return (
    <div>
      <Day/>
      <Hour/>
      <Minut/>
      <Second/>
    </div>
  );
};
