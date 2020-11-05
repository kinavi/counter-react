import React from 'react';
import classnames from 'classnames';
import './index.sass';

type ButtonPropsType = {
    onClick?: () => void;
    children: JSX.Element | JSX.Element[] | string;
    mix?: string;
}

export const Button = (props: ButtonPropsType): JSX.Element => {
  const {
    mix, onClick, children,
  } = props;

  return (
    <button
      type="submit"
      onClick={onClick}
      className={classnames('stash-button', mix)}
    >
      {children}
    </button>
  );
};
