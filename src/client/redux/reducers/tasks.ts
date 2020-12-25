import { Reducer } from 'react';
import { TaskActions } from '../actions/enum.actions';
import { ITask, ITrack } from '../types';
import { TaskActionsType } from '../actions/types';

export const TasksReducer: Reducer<ITask[], TaskActionsType> = (
  tasks = [],
  action,
) => {
  const { type, payload, id } = action;
  switch (type) {
    case TaskActions.setTasks:
      return (payload as ITask[]).map((
        task,
      ) => ({ ...task, snapshot: task.label, isReadonly: true }));

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

    case TaskActions.setTracks:
      return tasks.map((task) => (task.id === (payload as ITrack).taskId
        ? ({
          ...task,
          tracks: payload as ITrack[],
        })
        : task));

    case TaskActions.startTrack:
      return tasks.map((task) => (task.id === (payload as ITrack).taskId
        ? ({
          ...task,
          hasActiveTrack: true,
          tracks: [...task.tracks, payload as ITrack],
        })
        : task));

    case TaskActions.stopTrack:
      return tasks.map((task) => (task.id === (payload as ITrack).taskId
        ? ({
          ...task,
          hasActiveTrack: false,
          tracks: task.tracks.map((track) => (track.id === (payload as ITrack).id
            ? payload as ITrack
            : track)),
        })
        : task));

    case TaskActions.updateTotalCount:
      return tasks.map((task) => (task.id === id
        ? ({
          ...task,
          timeTotal: payload as number,
        })
        : task));
    default: return tasks;
  }
};
