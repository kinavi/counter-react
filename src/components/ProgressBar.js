import React, {useState, useEffect} from 'react';
import {Clock} from './Clock';
import {SimpleClock} from './SimpleClock';
import {ClockContext} from '../context';
import {SizeLevel} from '../SizeLevel';

export const ProgressBar = ({count}) =>{
  const [level, setLevel] = useState(0);
  const [nextLevel, setNextLevel] = useState();
  const [leftCount, setLeftCount] = useState();
  const [percentBar, setPercentBar] = useState();

  useEffect(()=>{
    const countToHour = Math.trunc(count/60/60);
    console.log(countToHour);
    let newLevel=level;

    for (const key in SizeLevel) {
      if (countToHour>SizeLevel[key]) {
        newLevel=key;
      }
    }
    setLevel(newLevel);
    if (newLevel<10) {
      const nextLevel = ++newLevel;
      setNextLevel(nextLevel);
      setLeftCount((SizeLevel[nextLevel]-countToHour)*60*60);
      setPercentBar(Math.trunc(countToHour/SizeLevel[nextLevel]*100));
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
