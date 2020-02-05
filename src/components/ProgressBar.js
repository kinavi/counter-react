import React, {useState, useEffect} from 'react';

import {Clock} from './Clock';
import {SimpleClock} from './SimpleClock';
import {ClockContext} from '../context';
import {SizeLevel} from '../SizeLevel';

export const ProgressBar = ({count}) =>{
  const [level, setLevel] = useState();
  const [nextLevel, setNextLevel] = useState();
  const [leftCount, setLeftCount] = useState();
  const [percentBar, setPercentBar] = useState();

  useEffect(()=>{
    let curLevel;
    for (const key in SizeLevel) {
      if (count>SizeLevel[key]) {
        curLevel=key;
      }
    }
    setLevel(curLevel);
    if (curLevel<10) {
      const nextLevel = +curLevel+1;
      const percent = Math.trunc(
          (count - SizeLevel[curLevel])/(SizeLevel[nextLevel] - SizeLevel[curLevel])*100,
      );
      setNextLevel(nextLevel);
      setLeftCount((SizeLevel[nextLevel]) - count);
      setPercentBar(percent);
    } else {
      setNextLevel('Max');
      setLeftCount(0);
      setPercentBar(100);
    }
  }, [count]);

  return (
    <div className='progress-bar-block'>
      <ClockContext.Provider value={count}>
        <Clock/>
      </ClockContext.Provider>
      <div className='progress-bar'>
        <div className='bar' style={{width: `${percentBar}%`}}>

        </div>
      </div>
      <div className='level-panel'>
        <span className='level'>{level}</span>
        <ClockContext.Provider value={leftCount}>
          <SimpleClock/>
        </ClockContext.Provider>
        <span className='level'>{nextLevel}</span>
      </div>
    </div>
  );
};
