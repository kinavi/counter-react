import React, { useCallback, useState } from 'react';
import { Button } from '../UI/Button';
import { Icons } from '../UI/Icons';
import { Item } from '../Item';
import { Field } from '../UI/Field';

type CreateTaskPropsType = {
    onCreateTask: (task: string) => void
}

export const CreateTask = (props: CreateTaskPropsType): JSX.Element => {
  const {
    onCreateTask,
  } = props;

  const [isShowCreateForm, setShowCreateForm] = useState(false);
  const [value, setValue] = useState('');

  const switchFormState = useCallback(
    () => setShowCreateForm(!isShowCreateForm),
    [isShowCreateForm],
  );

  const renderAddButton = () => (
    <Button
      mix="create-task__add-button"
      onClick={switchFormState}
    >
      {Icons.plus}
    </Button>
  );

  const handleCreateTask = () => {
    // TODO: need validation
    onCreateTask(value);
    switchFormState();
  };

  const renderCreateForm = () => (
    <Item
      onRightButtonClick={handleCreateTask}
      onLeftButtonClick={switchFormState}
      leftIcon={Icons.cross}
      rightIcon={Icons.check}
    >
      <Field
        value={value}
        onChange={(value) => setValue((value))}
        placeholder="Введите новую задачу"
        mix="create-task__field"
      />
    </Item>
  );

  return (
    <div className="create-task__container">
      { isShowCreateForm
        ? renderCreateForm()
        : renderAddButton()}
    </div>
  );
};
