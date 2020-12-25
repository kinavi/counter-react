import { ITask } from '../redux/types';
import * as ActionsCreator from '../redux/actions/ActionsCreator';
import * as ThunkActions from '../redux/actions/ThunkActions';

export type StatusType = 'ready' | 'loading' | 'initial'

export type AppStatePropsType = {
    tasks: ITask[];
    isReady: boolean;
    isLoading: boolean;
}

export type AppPropsType = typeof ActionsCreator & typeof ThunkActions & AppStatePropsType
