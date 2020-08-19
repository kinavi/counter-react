import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaRegArrowAltCircleLeft,
  FaRegCircle,
  FaPlay,
  FaTimesCircle,
  FaStop,
} from 'react-icons/fa';

const IconWithContext = (Icon: JSX.Element): JSX.Element => (
  <IconContext.Provider value={{ style: { width: '20px', height: '20px', color: 'white' } }}>
    {Icon}
  </IconContext.Provider>
);

const Icons = {
  arrowCircleLeft: IconWithContext(<FaRegArrowAltCircleLeft />),
  circle: IconWithContext(<FaRegCircle />),
  play: IconWithContext(<FaPlay />),
  timesCircle: IconWithContext(<FaTimesCircle />),
  stop: IconWithContext(<FaStop />),
};

export default Icons;
