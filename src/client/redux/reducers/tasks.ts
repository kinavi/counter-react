import { Reducer } from 'redux';
import { TaskActions } from '../action/enum.actions';
import { ITask } from '../types';
import { TaskActionsType } from '../action/types';

const TasksReducer: Reducer<ITask[], TaskActionsType> = (
  state = [],
  { type, payload, id },
) => {
  switch (type) {
    case TaskActions.setTasks:
      return payload as ITask[];

    case TaskActions.addTask:
      return [
        ...state,
        {
          id: new Date().getTime(),
          label: payload as string,
          time: 0,
          tracks: [],
        },
      ];

    default: return state;
  }
};

export default TasksReducer;
