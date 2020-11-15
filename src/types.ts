import { ResponseStatus } from './constants';
import { AppActionsType, FormActionsType, TaskActionsType } from './client/redux/actions/types';

export interface IApiResponse {
    status: ResponseStatus;
    result?: AppActionsType | FormActionsType | TaskActionsType | TaskActionsType[];
    message?: string;
}
