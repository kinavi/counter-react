import React, { useState, useRef, useEffect } from 'react';
import { TrackPropsType } from '../types';
import { Button } from '../UI/Button';
import { useClock, useInterval } from '../../hooks';

// const useCounter = (isStart: boolean, delay: number, count: number) => {
//   const [value, setValue] = useState(count);
// };

export const Track = (props: TrackPropsType): JSX.Element => {
  const {
    onStop,
    taskId,
    id,
    dateStart,
    dateStop,
  } = props;
  const delay = 1000;
  const isStart = !dateStop;
  const [count, setCount] = useState(0);

  useInterval(
    () => setCount(count + 1),
    isStart ? delay : null,
  );

  return (
    <div className="track">
      <div className="track__container">
        <div className="track__label">
          {count}
        </div>
        <div>
          {}
        </div>
      </div>
      <div className="track__progress-bar" />
    </div>
  );
};
