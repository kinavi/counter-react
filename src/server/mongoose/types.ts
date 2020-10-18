import { Model } from 'mongoose';
import { MODELS } from './constants';

export interface ITrack {
    label: string;
    isStart: boolean;
}

// TODO: Разобраться с типизацией
export interface IModels<T> {
    [key: string]: Model;
}

export interface IUser {
    login: string;
    email: string;
    hash?: string;
    salt: string;
    name: string;
}
