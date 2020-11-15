import React from 'react';
import { Button } from '../Button';
import './style/index.sass';
import classnames from 'classnames';

type TaskFieldPropsType = {
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    value: string;
    onChange(value: string): void;
    onSave(): void;
    onRemove?(): void;
}

export const TaskField = (props: TaskFieldPropsType): JSX.Element => {
  const {
    onChange,
    value,
    onCancel,
    onSave,
    onRemove,
    iconRight,
    iconLeft,
  } = props;

  return (
    <div className="task-field__container">
      {/* {iconLeft && ( */}
      <Button
        onClick={onRemove}
        mix={classnames(
          'task-field__left-button',
          { 'task-field__left-button_hidden': !iconLeft },
        )}
      >
        {iconLeft || ''}
      </Button>
      {/* )} */}
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
