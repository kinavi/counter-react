import React from 'react';
import { Button } from '../UI/Button';

type ItemPropsType = {
    leftIcon: JSX.Element;
    rightIcon: JSX.Element;
    onLeftButtonClick: () => void;
    onRightButtonClick: () => void;
    children: JSX.Element | JSX.Element[];
}
export const Item = (props: ItemPropsType): JSX.Element => {
  const {
    leftIcon,
    rightIcon,
    onLeftButtonClick,
    onRightButtonClick,
    children,
  } = props;

  return (
    <div className="item__container">
      <div className="item__body">
        {children}
      </div>
      <Button
        mix="item__left-button item__button"
        onClick={onLeftButtonClick}
      >
        {leftIcon}
      </Button>
      {!!rightIcon && (
      <Button
        mix="item__right-button item__button"
        onClick={onRightButtonClick}
      >
        {rightIcon}
      </Button>
      )}
    </div>
  );
};
