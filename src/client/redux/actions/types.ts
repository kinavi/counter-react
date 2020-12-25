import { Action } from 'redux';
import {
  IErrors,
  IFieldsForm,
  ITask,
  ITrack,
} from '../types';
import { StatusType } from '../../container/types';

export interface IValidateResult {
    isValidate: boolean;
    errors: IErrors;
}

// TODO: Расширить
export type AppActionsType = {
    payload?: string | StatusType
} & Action

export type FormActionsType = {
    payload?: IFieldsForm | IErrors;
} & Action

export type TaskActionsType = {
    payload?: string | ITask[] | ITask | ITrack[] | ITrack | number;
    id?: string;
} & Action
