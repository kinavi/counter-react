import React, {useState, useEffect} from 'react';

import {Сounter} from './UI';
import {ClockContext} from '../context';
import {LevelController} from '../libs/LevelController';

export const ProgressBarCount = ({count}) =>{
  const [level, setLevel] = useState(0);
  const [nextLevel, setNextLevel] = useState(0);
  const [leftCount, setRestCount] = useState(0);
  const [percentBar, setPercentBar] = useState(0);

  useEffect(()=>{
    const levelController = new LevelController(count);

    setLevel(levelController.level);
    setNextLevel(levelController.nextLevel);
    setRestCount(levelController.rest);
    setPercentBar(levelController.percent);
  }, [count]);

  return (
    <div className='container-progress-bar'>
      <div className="current-count">
        <ClockContext.Provider value={count}>
          <Сounter/>
        </ClockContext.Provider>
      </div>

      <div className='bar-bg'>
        <div className='bar' style={{width: `${percentBar}%`}}/>
      </div>
      <div className='level-panel'>
        <span className='level'>{level}</span>
        <div className="left-count">
          <ClockContext.Provider value={leftCount}>
            <Сounter/>
          </ClockContext.Provider>
        </div>
        <span className='level'>{nextLevel}</span>
      </div>
    </div>
  );
};
