import React from 'react';

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
    <div className={`button ${mix}`}>
      <button type="submit" onClick={onClick} className="btn">{children}</button>
    </div>
  );
};
