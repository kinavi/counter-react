import React from 'react';
import { Button } from '../../UI/Button';
import { ViewModePropsType } from '../types';

export const ViewMode = (props: ViewModePropsType) => {
  const {
    onChange,
    onPlay,
    leftIcon,
    rightIcon,
    ...task
  } = props;

  const {
    label,
    timeTotal,
  } = task;

  const handleEditClick = () => {
    onChange({ ...task, isReadonly: false });
  };

  return (
    <>
      <Button
        mix="task__left-button task__button"
        onClick={handleEditClick}
      >
        {leftIcon}
      </Button>
      <div className="task__item-container">
        <div className="task__label">
          {label}
        </div>
        <div className="task__time">
          {timeTotal}
        </div>
      </div>
      <Button
        mix="task__right-button task__button"
        onClick={onPlay}
      >
        {rightIcon}
      </Button>
    </>
  );
};
