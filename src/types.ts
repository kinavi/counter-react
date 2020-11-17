import { ResponseStatus } from './constants';
import {
  AppActionsType, FormActionsType, TaskActionsType, TrackActionsType,
} from './client/redux/actions/types';

export interface IApiResponse {
    status: ResponseStatus;
    result?: AppActionsType
        | FormActionsType
        | TaskActionsType
        | TaskActionsType[]
        | TrackActionsType;
    message?: string;
}
