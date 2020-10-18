import React from 'react';
import { IconContext } from 'react-icons';
import {
  FaRegArrowAltCircleLeft,
  FaRegCircle,
  FaPlay,
  FaTimesCircle,
  FaStop,
} from 'react-icons/fa';
import { RiErrorWarningLine } from 'react-icons/ri';
import {
  CgProfile, CgMail, CgLock, CgClose,
} from 'react-icons/cg';

const IconWithContext = (Icon: JSX.Element): JSX.Element => (
  <IconContext.Provider value={{ style: { width: '20px', height: '20px' } }}>
    {Icon}
  </IconContext.Provider>
);

export const Icons = {
  arrowCircleLeft: IconWithContext(<FaRegArrowAltCircleLeft />),
  circle: IconWithContext(<FaRegCircle />),
  play: IconWithContext(<FaPlay />),
  timesCircle: IconWithContext(<FaTimesCircle />),
  stop: IconWithContext(<FaStop />),
  profile: IconWithContext(<CgProfile />),
  mail: IconWithContext(<CgMail />),
  password: IconWithContext(<CgLock />),
  close: IconWithContext(<CgClose />),
  warning: IconWithContext(<RiErrorWarningLine />),
};
