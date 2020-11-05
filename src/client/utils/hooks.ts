import { useEffect, useRef } from 'react';

/** TODO: Надо поправить типизацию */
const useInterval = (callback: () => void, delay: number): void => {
  const savedCallback: () => void = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
export default useInterval;
