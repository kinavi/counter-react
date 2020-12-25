import React, { useState } from 'react';
import { Button } from '../../UI/Button';
import { ViewModePropsType } from '../types';

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
  } = task;

  const handleEditClick = () => {
    onChange({ ...task, isReadonly: false });
  };

  return (
    <div className="task__body task__body_view">
      <Button
        mix="task__left-button task__button"
        onClick={handleEditClick}
      >
        {leftIcon}
      </Button>
      <Button
        mix="task__item-container"
        onClick={onClick}
      >
        <>
          <span className="task__label">
            {label}
          </span>
          <span className="task__time">
            {timeTotal}
          </span>
        </>
      </Button>
      <Button
        mix="task__right-button task__button"
        onClick={onPlay}
      >
        {rightIcon}
      </Button>
    </div>
  );
};
