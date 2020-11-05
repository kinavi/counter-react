import { Action } from 'redux';
import { IErrors, IFieldsForm, ITask } from '../types';

export interface IValidateResult {
    isValide: boolean;
    errors: IErrors;
}
// TODO: Расширить
export type AppActionsType = {
    payload?: string;
} & Action

export type FormActionsType = {
    payload?: IFieldsForm | IErrors;
} & Action

export type TaskActionsType = {
    payload?: string | ITask[];
    id?: string
} & Action
