import {
  IErrors,
  IFieldsForm,
  ITask,
  ITrack,
} from '../types';
import {
  AppActionsType,
  FormActionsType,
  TaskActionsType,
} from './types';
import {
  AppActions,
  FormActions,
  TaskActions,
} from './enum.actions';
import { StatusType } from '../../container/types';

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

export const updateTaskTotalCount = (taskId: string, counts: number): TaskActionsType => ({
  type: TaskActions.updateTotalCount,
  payload: counts,
  id: taskId,
});

// track actions
export const setTracks = (taskId: string, tracks: ITrack[]): TaskActionsType => ({
  type: TaskActions.setTracks,
  payload: tracks,
});

export const startTrack = (taskId: string, track: ITrack): TaskActionsType => ({
  type: TaskActions.startTrack,
  payload: track,
});

export const stopTrack = (taskId: string, track: ITrack): TaskActionsType => ({
  type: TaskActions.stopTrack,
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
export const setUserId = (id: string): AppActionsType => ({
  type: AppActions.updateUserId,
  payload: id,
});

export const updateAppStatus = (status: StatusType): AppActionsType => ({
  type: AppActions.updateStatus,
  payload: status,
});
