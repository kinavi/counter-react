import { useState, useEffect, useRef } from 'react';
import moment, { Moment } from 'moment';

export const useClock = (currentDate: Moment): string => {
  const [date, setDate] = useState(currentDate);

  const tick = () => {
    setDate(moment(date).add(1, 's'));
  };

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  return moment(date).format('HH:mm');
};

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      (savedCallback.current as () => void)();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
