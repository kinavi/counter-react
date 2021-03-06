import { Reducer } from 'redux';
import { Moment } from 'moment';
import {
  AppActionsType,
  FormActionsType,
  TaskActionsType,
} from './actions/types';
import { StatusType } from '../container/types';

export interface ITask {
    id: string;
    label: string;
    timeTotal: number;
    tracks: ITrack[];
    snapshot: string;
    isReadonly: boolean;
    hasActiveTrack: boolean;
}

export interface ITrack {
    id: string;
    taskId: string;
    dateStart: Moment;
    dateStop: Moment | null;
}

export interface IAppState {
    userId: string;
    readOnly: boolean;
    status: StatusType;
}

export interface IFormState {
    fields: IFieldsForm;
    error: IErrors | null;
}

export interface IErrors extends IFieldsForm{
    [key: string]: string | undefined;
}

export interface IFieldsForm {
    email: string;
    login?: string;
    password: string;
    repeatPassword?: string;
}

export interface IState {
    app: IAppState;
    tasks: ITask[];
    form: IFormState;
}

export interface ICombineReducers {
    app: Reducer<IAppState, AppActionsType>;
    tasks: Reducer<ITask[], TaskActionsType>;
    form: Reducer<IFormState, FormActionsType>
}
