import { Model } from 'mongoose';

export interface ITrack {
    label: string;
    isStart: boolean;
}

// TODO: Разобраться с типизацией
export interface IModels {
    // [key: string]: Model<any>;
    user: Model<any>;
    task: Model<any>;
    track: Model<any>;
}

export interface IUser {
    login: string;
    email: string;
    hash?: string;
    salt: string;
    name: string;
}
