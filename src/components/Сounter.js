import React, {useContext} from 'react';
import {ClockContext} from '../context';

// const Day = () =>{
//   const value = useContext(ClockContext);
//   return (
//     <span>{Math.trunc(value/60/60/24)}d</span>
//   );
// };
const Hour = () =>{
  const value = useContext(ClockContext);
  return (
    <span>{Math.trunc(value/60/60)}h</span>
  );
};
const Minut = () =>{
  const value = useContext(ClockContext);
  return (
    <span>{Math.trunc(value/60)%60}m</span>
  );
};

const Second = () =>{
  const value = useContext(ClockContext);
  return (
    <span>{value%60}s</span>
  );
};

export const Сounter = () => {
  return (
    <div className="current-count">
      {/* <Day/> */}
      <Hour/>
      <Minut/>
      <Second/>
    </div>
  );
};
