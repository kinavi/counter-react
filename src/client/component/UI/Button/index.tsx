import React, { useState, MouseEvent } from 'react';
import classnames from 'classnames';
import './index.sass';
import { ButtonPropsType } from './types';

export const Button = (props: ButtonPropsType): JSX.Element => {
  const {
    mix,
    onClick,
    children,
  } = props;

  const [hover, setHover] = useState(false);

  const handleMouseEnter = (event: MouseEvent) => {
    setHover(true);
    event.stopPropagation();
  };

  const handleMouseLeave = (event: MouseEvent) => {
    setHover(false);
    event.stopPropagation();
  };

  return (
    <button
      type="submit"
      onClick={onClick}
      className={classnames('native-button', { 'native-button_hover': hover }, mix)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};
