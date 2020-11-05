import React from 'react';
import classnames from 'classnames';

type NavigationPanelProps = {
    mix?: string;
    children: JSX.Element | JSX.Element[]
}

export const NavigationPanel = (props: NavigationPanelProps): JSX.Element => {
  const {
    children, mix,
  } = props;
  return (
    <div className={classnames('navigation-panel', mix)}>
      {children}
    </div>
  );
};
