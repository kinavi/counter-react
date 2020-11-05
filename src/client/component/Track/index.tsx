import React, { useState } from 'react';
import { TrackPropsType } from '../types';
import { Button } from '../UI/Button';
import { Icons } from '../UI/Icons';

const Track = (props: TrackPropsType): JSX.Element => {
  const {
    value,
    id,
    label,
    left,
    leftIcon,
    rightIcon,
    onLeftButtonClick,
    onRightButtonClick,
  } = props;

  const [showDisplayTime, switchShowDisplayTime] = useState(false);

  return (
    <div className="track">
      <div className="track__container">
        <div className="track__label">
          {label}
        </div>
        <Button
          mix="track__count-container"
          onClick={() => switchShowDisplayTime(!showDisplayTime)}
        >
          {
            showDisplayTime
              ? value
              : left
            }
        </Button>
      </div>
      <div className="track__progress-bar" />
      <Button
        mix="track__left-button track__button"
        onClick={onLeftButtonClick}
      >
        {leftIcon}
      </Button>
      <Button
        mix="track__right-button track__button"
        onClick={onRightButtonClick}
      >

        {rightIcon}
      </Button>
    </div>
  );
};

export default Track;
