import React from 'react';
import classnames from 'classnames';
import { EditModePropsType } from '../types';
import { Button } from '../../UI/Button';
import { Field } from '../../UI/Field';
import { TaskField } from '../../UI/TaskField';
import { Icons } from '../../UI/Icons';

export const EditMode = (props: EditModePropsType) => {
  const {
    leftIcon,
    rightIcon,
    onSave,
    onChange,
    onRemove,
    mix,
    ...task
  } = props;
  const {
    id,
    label,
    timeTotal,
    tracks,
  } = task;

  const handleChange = (value: string) => {
    onChange({ ...task, label: value });
  };

  const handleCancel = () => {
    onChange({ ...task, isReadonly: true });
  };

  return (
    <div className={classnames(mix, 'task__container')}>
      <div className="task__body">
        <Button
          mix="task__left-button task__button"
          onClick={handleCancel}
        >
          {leftIcon}
        </Button>
        <TaskField
          iconLeft={Icons.trash}
          iconRight={Icons.check}
          value={label}
          onChange={handleChange}
          onSave={onSave}
          onRemove={onRemove}
        />
      </div>
    </div>
  );
};
