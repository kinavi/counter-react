import React, {useState} from 'react';
import {IconContext} from 'react-icons';
import {FaPlay, FaStop} from 'react-icons/fa';
import {connect} from 'react-redux';

import {ProgressBar} from './ProgressBar';

import {useInterval} from '../hooks/useInterval';

import {stopTimer, startTimer, setShowOnlyThis} from '../redux/actions';

const Count = ({_id, name, count, onStop, onStart, isHide, printOnlyThis}) =>{
  const [_count, setCount] = useState(count);
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  // console.log('isHidde - ', isHide)
  // const [Hidde, setHidde] = useState(false);
  // Math.trunc((y-x)/1000)
  useInterval(() => {
    // Your custom logic here
    setCount(_count + 1);
  }, isRunning ? delay : null);

  const handlerStartBtn = (e) =>{
    setIsRunning(true);
    onStart(_id, new Date());
    e.stopPropagation();
  };
  const handlerStopBtn = (e) =>{
    setIsRunning(false);
    onStop(_id, _count, new Date());
    e.stopPropagation();
  };

  const handlerClickCount = (e) =>{
    printOnlyThis(_id);
    e.stopPropagation();
    // e.preventDefault();
  };


  // container flex-container
  return (
    isHide||
    <div className='timer ' hidden={isHide} onClick={handlerClickCount}>
      <span className='title'>
        {name}
      </span>
      <ProgressBar count={_count}/>
      <div className='btn-start-timer'>
        {(isRunning)?
        <IconContext.Provider value={{color: '#6F4D46'}}>
          <FaStop onClick={handlerStopBtn} className='btn-timer'/>
        </IconContext.Provider> :
         <IconContext.Provider value={{color: '#6F4D46'}}>
           <FaPlay onClick={handlerStartBtn} className='btn-timer'/>
         </IconContext.Provider>
        }
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>({
  onStop: (id, count, dateStop) =>{
    dispatch(stopTimer(id, count, dateStop));
  },
  onStart: (id, dateStart) =>{
    dispatch(startTimer(id, dateStart));
  },
  printOnlyThis: (id)=>{
    dispatch(setShowOnlyThis(id));
  }
});

export default connect(
    null,
    mapDispatchToProps,
)(Count);
