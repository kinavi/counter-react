import React from 'react';
import { Button } from '../../UI/Button';
import { ViewModePropsType } from '../types';
import {
  convertCountToHour,
  convertCountToMinutes,
  convertCountToSeconds,
} from '../../../utils';

export const ViewMode = (props: ViewModePropsType) => {
  const {
    onChange,
    onPlay,
    leftIcon,
    rightIcon,
    onClick,
    ...task
  } = props;

  const {
    label,
    timeTotal,
    hasActiveTrack,
  } = task;

  const handleEditClick = () => {
    onChange({ ...task, isReadonly: false });
  };

  const totalSeconds = convertCountToSeconds(timeTotal);
  const totalMinutes = convertCountToMinutes(timeTotal);
  const totalHours = convertCountToHour(timeTotal);
  return (
    <>
      <Button
        mix="task__left-button task__button"
        onClick={handleEditClick}
      >
        {leftIcon}
      </Button>
      <div
        className="task__body task__body_view"
      >
        <Button
          mix="task__item-container"
          onClick={onClick}
        >
          <>
            <span className="task__label">
              {label}
            </span>
            <span className="task__time">
              {totalHours}
              {' '}
              h
              {' '}
              {totalMinutes}
              {' '}
              m
              {' '}
              {totalSeconds}
              {' '}
              s
            </span>
          </>
        </Button>

      </div>
      <Button
        mix="task__button task__right-button"
        isHidden={hasActiveTrack}
        onClick={onPlay}
      >
        {rightIcon}
      </Button>
    </>
  );
};
