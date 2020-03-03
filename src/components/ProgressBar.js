import React, {useState, useEffect} from 'react';

import {Сounter} from './Сounter';
import {SmallCounter} from './SmallCounter';
import {ClockContext} from '../context';
import {SizeLevel} from '../SizeLevel';

export const ProgressBar = ({count}) =>{
  const [level, setLevel] = useState(0);
  const [nextLevel, setNextLevel] = useState(0);
  const [leftCount, setLeftCount] = useState(0);
  const [percentBar, setPercentBar] = useState(0);

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
    } else if (count==0) {
      setLevel(1);
      setNextLevel(2);
      setLeftCount((SizeLevel[2]));
    } else {
      setNextLevel('Max');
      setLeftCount(0);
      setPercentBar(100);
    }
  }, [count]);

  return (
    <div className='container-progress-bar'>
      <ClockContext.Provider value={count}>
        <Сounter/>
      </ClockContext.Provider>
      <div className='bar-bg'>
        <div className='bar' style={{width: `${percentBar}%`}}/>
      </div>
      <div className='level-panel'>
        <span className='level'>{level}</span>
        <ClockContext.Provider value={leftCount}>
          <SmallCounter/>
        </ClockContext.Provider>
        <span className='level'>{nextLevel}</span>
      </div>
    </div>
  );
};
