import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Switch,
} from 'react-router-dom';

import {withRouter} from 'react-router';

import {StoryProgressBar} from '.';

export const Story = ({_id, idTimer, isActive, limit, dateStart, dateStop}) =>{
  const [currentCount, setCurCount] = useState(0);

  useEffect(()=>{
    if (!isActive) {
      const tmp = Math.trunc((new Date(dateStop) - new Date(dateStart))/1000);
      setCurCount(tmp);
    }
  }, [dateStart, dateStop, isActive]);

  return (
    !isActive&&<div className='story'>
      <div className='container-bar-story'>
        <StoryProgressBar count={currentCount} limit={limit}/>
      </div>
      <div className='container-info-story'>
        <span>{currentCount} sec</span>
        <div className='container-date-story'>
          <span>{new Date(dateStart).getDate()}</span>
          <span>.</span>
          <span>{new Date(dateStart).getMonth()}</span>
          <span>.</span>
          <span>{new Date(dateStart).getUTCFullYear()}</span>
        </div>
        <span>{limit/60} min</span>
      </div>
    </div>
  );
};
