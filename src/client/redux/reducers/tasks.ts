import { Reducer } from 'redux';
import { TaskActions, TrackActions } from '../actions/enum.actions';
import { ITask } from '../types';
import { TaskActionsType, TrackActionsType } from '../actions/types';
import { TracksReducer } from './tracks';

export const TasksReducer: Reducer<ITask[], TaskActionsType> = (
  tasks = [],
  action,
) => {
  const { type, payload, taskId } = action;
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

    case TrackActions.setTracks:
    case TrackActions.startTrack:
    case TrackActions.stopTrack:
      return tasks.map((task) => (
        task.id === taskId
          ? TracksReducer(task.tracks, action as TrackActionsType)
          : task));

    default: return tasks;
  }
};
