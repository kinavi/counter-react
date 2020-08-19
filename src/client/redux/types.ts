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
    readOnly: boolean;
}

export interface IState {
    app: IAppState;
    tracks: ITracksState;
}

export interface ICombineReducers {
    app: Reducer<IAppState, AnyAction>;
    tracks: Reducer<ITracksState, AnyAction>;
}
