import React, { useContext } from 'react';
import { ClockContext } from '../../context';

// const Day = () =>{
//   const value = useContext(ClockContext);
//   return (
//     <span>{Math.trunc(value/60/60/24)}d</span>
//   );
// };
export const Hour = () => {
  const value = useContext(ClockContext);
  return (
    <span>
      {Math.trunc(value / 60 / 60)}
      h
    </span>
  );
};
export const Minut = () => {
  const value = useContext(ClockContext);
  return (
    <span>
      {Math.trunc(value / 60) % 60}
      m
    </span>
  );
};

export const Second = () => {
  const value = useContext(ClockContext);
  return (
    <span>
      {value % 60}
      s
    </span>
  );
};

export const Сounter = () => (
  <div>
    {/* <Day/> */}
    <Hour />
    <Minut />
    <Second />
  </div>
);
