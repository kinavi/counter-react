import React from 'react';
import { EditModePropsType } from '../types';
import { Button } from '../../UI/Button';
import { TaskField } from '../../UI/TaskField';
import { Icons } from '../../UI/Icons';

export const EditMode = (props: EditModePropsType) => {
  const {
    leftIcon,
    rightIcon,
    onSave,
    onChange,
    onRemove,
    ...task
  } = props;

  const {
    label,
  } = task;

  const handleChange = (value: string) => {
    onChange({ ...task, label: value });
  };

  const handleCancel = () => {
    onChange({ ...task, isReadonly: true });
  };

  return (
    <div className="task__body task__body_edit">
      <Button
        mix="task__button task__left-button task__left-button_edit"
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
  );
};
