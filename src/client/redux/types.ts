import { Reducer, AnyAction } from 'redux';

export interface ITrack {
    name: string;
    dateStart: Date;
    dateStop: Date;
}

export interface ITracksState {
    tracks: ITrack[];
}

export interface IAppState {
    userId: number;
    form: IForm;
    readOnly: boolean;
}

interface IForm {
    fields: IFieldsForm;
    error: IErrors;
}

export interface IErrors extends IFieldsForm{
    [key: string]: string | undefined;
}

export interface IFieldsForm {
    email: string;
    name?: string;
    password: string;
    repeatPassword?: string;
}

// interface IFieldRegisterForm {
//     email: string;
//     name: string;
//     password: string;
// }
//
// interface IFieldLoginForm {
//     email: string;
//     password: string;
// }

export interface IState {
    app: IAppState;
    tracks: ITracksState;
}

export interface ICombineReducers {
    app: Reducer<IAppState, AnyAction>;
    tracks: Reducer<ITracksState, AnyAction>;
}
