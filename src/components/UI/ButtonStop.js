import React from 'react';
import {IconContext} from 'react-icons';
import {FaStop} from 'react-icons/fa';

export const ButtonStop = ({onClick}) =>
  <IconContext.Provider value={{color: '#6F4D46'}}>
    <FaStop onClick={onClick} className='btn-timer'/>
  </IconContext.Provider>;
