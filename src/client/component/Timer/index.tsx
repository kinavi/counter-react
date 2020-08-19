import React, { useContext } from 'react';
import TimerContext from '../../context';

const Timer = (): JSX.Element => {
  const { value } = useContext(TimerContext);

  const renderDay = () => (
    <span>
      {Math.trunc(value / 60 / 60 / 24)}
      d
    </span>
  );

  const renderHour = () => (
    <span>
      {Math.trunc(value / 60 / 60)}
      h
    </span>
  );

  const renderMinut = () => (
    <span>
      {Math.trunc(value / 60) % 60}
      m
    </span>
  );

  const renderSecond = () => (
    <span>
      {value % 60}
      s
    </span>
  );

  return (
    <div className="timer">
      {renderDay()}
      {renderHour()}
      {renderMinut()}
      {renderSecond()}
    </div>
  );
};

export default Timer;
