import React from 'react';
import {IconContext} from 'react-icons';
import {FaPlay} from 'react-icons/fa';

export const ButtonPlay = ({onClick}) =>
  <IconContext.Provider value={{color: '#6F4D46'}}>
    <FaPlay onClick={onClick} className='btn-timer'/>
  </IconContext.Provider>;
