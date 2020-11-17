import React from 'react';
import moment from 'moment';
import { useClock } from '../../hooks';

export const Clock = () => {
  const timer = useClock(moment());

  return (
    <div className="clock__container">
      {timer}
    </div>
  );
};
