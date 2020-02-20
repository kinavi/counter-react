import React, {useState} from 'react';
import {IconContext} from 'react-icons';
import {FaPlay, FaStop} from 'react-icons/fa';
import {connect} from 'react-redux';

import {ProgressBar} from './ProgressBar';

import {useInterval} from '../hooks/useInterval';

import {stopTimer, startTimer} from '../redux/actions';

const Count = ({id, name, count, onStop, onStart}) =>{
  const [_count, setCount] = useState(count);
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  // Math.trunc((y-x)/1000)
  useInterval(() => {
    // Your custom logic here
    setCount(_count + 1);
  }, isRunning ? delay : null);

  const handlerStartBtn = () =>{
    setIsRunning(true);
    onStart(id, new Date());
  };
  const handlerStopBtn = () =>{
    setIsRunning(false);
    onStop(id, _count, new Date());
  };

  return (
    <div className='container flex-container '>
      <span className='title'>
        {name}
      </span>
      <ProgressBar count={_count}/>
      {(isRunning)?
        <IconContext.Provider value={{color: '#6F4D46'}}>
          <FaStop onClick={handlerStopBtn} className='btn-timer'/>
        </IconContext.Provider> :
         <IconContext.Provider value={{color: '#6F4D46'}}>
           <FaPlay onClick={handlerStartBtn} className='btn-timer'/>
         </IconContext.Provider>
      }
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
});

export default connect(
    null,
    mapDispatchToProps,
)(Count);
