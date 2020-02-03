
import React, {useState, useEffect, useRef, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

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

const Clock = () => {
  return (
    <div>
      <Day/>
      <Hour/>
      <Minut/>
      <Second/>
    </div>
  );
};

const ClockContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // const value = useContext(ClockContext);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, isRunning ? delay : null);

  const onStart = () =>{
    setIsRunning(true);
  };

  const onStop = () =>{
    setIsRunning(false);
  };

  const onClear = () =>{
    setCount(0);
  };

  return (
    <div>
      {/* <div>{count}</div> */}
      <ClockContext.Provider value={count}>
        <Clock/>
      </ClockContext.Provider>
      <button onClick={onStart}>start</button>
      <button onClick={onStop}>stop</button>
      <button onClick={onClear}>clear</button>
    </div>
  );
};

ReactDOM.render(
    <App/>
    ,
    document.getElementById('root'),
);
