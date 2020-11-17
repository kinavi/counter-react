// task actions
import {
  IErrors, IFieldsForm, ITask, ITrack,
} from '../types';
import {
  AppActionsType, FormActionsType, TaskActionsType, TrackActionsType,
} from './types';
import {
  AppActions, FormActions, TaskActions, TrackActions,
} from './enum.actions';

export const setTasks = (tasks: ITask[]): TaskActionsType => ({
  type: TaskActions.setTasks,
  payload: tasks,
});

export const addTask = (task: ITask): TaskActionsType => ({
  type: TaskActions.addTask,
  payload: task,
});

export const updateTask = (task: ITask): TaskActionsType => ({
  type: TaskActions.updateTask,
  payload: task,
});

export const removeTask = (taskId: string): TaskActionsType => ({
  type: TaskActions.removeTask,
  payload: taskId,
});
// track actions

export const setTracks = (tracks: ITrack[]): TrackActionsType => ({
  type: TrackActions.setTracks,
  payload: tracks,
});

export const startTrack = (track: ITrack): TrackActionsType => ({
  type: TrackActions.startTrack,
  payload: track,
});

export const stopTrack = (track: ITrack): TrackActionsType => ({
  type: TrackActions.stopTrack,
  payload: track,
});

// form actions
export const setErrors = (errors: IErrors): FormActionsType => ({
  type: FormActions.setErrors,
  payload: errors,
});

export const updateFields = (fields: IFieldsForm): FormActionsType => ({
  type: FormActions.updateField,
  payload: fields,
});

// app actions
export const setUserId = (id: number): AppActionsType => ({
  type: AppActions.updateUserId,
  payload: id,
});
