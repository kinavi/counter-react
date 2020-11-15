import { Reducer } from 'redux';
import { TaskActions } from '../actions/enum.actions';
import { ITask } from '../types';
import { TaskActionsType } from '../actions/types';

const TasksReducer: Reducer<ITask[], TaskActionsType> = (
  tasks = [],
  { type, payload, id },
) => {
  switch (type) {
    case TaskActions.setTasks:
      return (payload as ITask[]).map((
        task,
      ) => ({ ...task, snapshot: task.label, isReadonly: true })); // payload as ITask[];

    case TaskActions.addTask:
      return [
        ...tasks,
        {
          ...payload as ITask,
          isReadonly: true,
          snapshot: (payload as ITask).label,
        },
      ];

    case TaskActions.updateTask:
      return tasks.map((task: ITask) => (
        task.id === (payload as ITask).id
          ? payload
          : task));

    case TaskActions.removeTask:
      return tasks.filter((task) => task.id !== payload as string);

    default: return tasks;
  }
};

export default TasksReducer;
