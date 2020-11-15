import React, { useState } from 'react';
import classnames from 'classnames';
import { Button } from '../../UI/Button';
import { ViewModePropsType } from '../types';

export const ViewMode = (props: ViewModePropsType) => {
  const {
    onChange,
    onPlay,
    leftIcon,
    rightIcon,
    mix,
    ...task
  } = props;

  const {
    id,
    label,
    timeTotal,
    tracks,
  } = task;
  const [isShowTracks, setIsShowTracks] = useState(false);

  const handleEditClick = () => {
    onChange({ ...task, isReadonly: false });
  };

  return (
    <>
      <div
        className={classnames(mix, 'task__container')}
        onClick={() => setIsShowTracks(!isShowTracks)}
      >
        <div className="task__body">
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
        </div>
        {/* {!!leftIcon && ( */}
        {/*  <Button */}
        {/*    mix="task__left-button task__button" */}
        {/*    onClick={onEdit} */}
        {/*  > */}
        {/*    {leftIcon} */}
        {/*  </Button> */}
        {/* )} */}
        {/* {!!rightIcon && ( */}
        {/*  <Button */}
        {/*    mix="task__right-button task__button" */}
        {/*    onClick={onPlay} */}
        {/*  > */}
        {/*    {rightIcon} */}
        {/*  </Button> */}
        {/* )} */}
      </div>
      {isShowTracks && (
        tracks.map((item, index) => <div key={index}>item</div>)
      )}
    </>
  );
};
