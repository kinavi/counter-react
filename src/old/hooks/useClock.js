import { useState, useEffect } from 'react';

export const useClock = (currentDate) => {
  const [date, setDate] = useState(currentDate);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setDate(new Date());
  };

  return date;
};
