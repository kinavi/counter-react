import React, {useState} from 'react';
import {IconContext} from 'react-icons';
import {FaPlay, FaStop} from 'react-icons/fa';
import {connect} from 'react-redux';

import {ProgressBar} from './ProgressBar';

import {useInterval} from '../hooks/useInterval';

const Count = ({name, count}) =>{
  const [_count, setCount] = useState(count);
  const [delay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);

  useInterval(() => {
    // Your custom logic here
    setCount(_count + 1);
  }, isRunning ? delay : null);

  const onStart = () =>{
    console.log('Click')
    setIsRunning(true);
  };
  const onStop = () =>{
    setIsRunning(false);
  };

  return (
    <div className='container flex-container '>
      <span className='title'>
        {name}
      </span>
      <ProgressBar count={_count}/>
      {(isRunning)?
        <IconContext.Provider value={{color: '#6F4D46'}}>
          <FaStop onClick={onStop} className='btn'/>
        </IconContext.Provider> :
         <IconContext.Provider value={{color: '#6F4D46'}}>
           <FaPlay onClick={onStart} className='btn'/>
         </IconContext.Provider>
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) =>({

});

export default connect(
    null,
    mapDispatchToProps,
)(Count);
