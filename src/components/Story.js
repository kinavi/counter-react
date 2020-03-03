import React, {useState, useEffect} from 'react';

import {ProgressBarStory} from '.';
import {Second, Minut} from './UI';
import {ClockContext} from '../context';

export const Story = ({isActive, limit, dateStart, dateStop}) =>{
  const [currentCount, setCurCount] = useState(0);

  const calculateCount = () =>
    Math.trunc((new Date(dateStop) - new Date(dateStart))/1000);

  useEffect(()=>{
    if (!isActive) {
      setCurCount(calculateCount());
    }
  }, [dateStart, dateStop, isActive]);

  return (
    !isActive&&<div className='story'>
      <div className='container-bar-story'>
        <ProgressBarStory count={currentCount} limit={limit}/>
      </div>
      <div className='container-info-story'>
        <ClockContext.Provider value={currentCount}>
          <Minut/>
          <Second/>
        </ClockContext.Provider>
        <div className='container-date-story'>
          <span>{new Date(dateStart).getDate()}</span>
          <span>.</span>
          <span>{new Date(dateStart).getMonth()}</span>
          <span>.</span>
          <span>{new Date(dateStart).getUTCFullYear()}</span>
        </div>
        <ClockContext.Provider value={limit}>
          <Minut/>
        </ClockContext.Provider>
      </div>
    </div>
  );
};
