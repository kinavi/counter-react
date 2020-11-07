import { Reducer } from 'redux';
import { Moment } from 'moment';
import { AppActionsType, FormActionsType, TaskActionsType } from './action/types';

export interface ITask {
    id: string;
    label: string;
    time: string;
    tracks: ITrack[];
}

export interface ITrack {
    id: string;
    label: string;
    value: string;
    left: string;
    dateStart: Moment;
    dateStop: Moment;
}

// export interface ITaskState {
//     tasks: ITask[];
// }

export interface IAppState {
    userId: string;
    readOnly: boolean;
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
