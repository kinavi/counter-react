import React from 'react';
import classnames from 'classnames';
import { Button } from '../Button';
import { TaskFieldPropsType } from './types';

import './index.sass';

export const TaskField = (props: TaskFieldPropsType): JSX.Element => {
  const {
    onChange,
    value,
    onSave,
    onRemove = () => {},
    iconRight,
    iconLeft = '',
  } = props;

  return (
    <div className="task-field__container">
      <Button
        onClick={onRemove}
        mix={classnames(
          'task-field__left-button',
          { 'task-field__left-button_hidden': !iconLeft },
        )}
      >
        {iconLeft}
      </Button>
      <input
        value={value}
        onChange={(
          event,
        ) => onChange(event.target.value)}
        className="task-field__input"
      />
      {iconRight && (
      <Button
        onClick={onSave}
        mix="task-field__right-button"
      >
        {iconRight}
      </Button>
      )}
    </div>
  );
};
