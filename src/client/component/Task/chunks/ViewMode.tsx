import React from 'react';
import { Button } from '../../UI/Button';
import { ViewModePropsType } from '../types';

export const ViewMode = (props: ViewModePropsType) => {
  const {
    id,
    label,
    time,
    tracks,
    onRightButtonClick,
    onLeftButtonClick,
    leftIcon,
    rightIcon,
    // switchMode,
  } = props;

  return (
    <div className="task__container">
      <div className="task__body">
        <div className="task__label">
          {label}
        </div>
        <div className="task__time">
          {time}
        </div>
        {/* {children} */}
      </div>
      {!!leftIcon && (
        <Button
          mix="task__left-button task__button"
          onClick={onLeftButtonClick}
        >
          {leftIcon}
        </Button>
      )}
      {!!rightIcon && (
        <Button
          mix="task__right-button task__button"
          onClick={onRightButtonClick}
        >
          {rightIcon}
        </Button>
      )}
    </div>
  );
};
