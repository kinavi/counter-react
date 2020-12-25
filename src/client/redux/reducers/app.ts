import { Reducer } from 'react';
import { IAppState } from '../types';
import { APP_INITIAL_STATE } from '../store/initial';
import { AppActions } from '../actions/enum.actions';
import { AppActionsType } from '../actions/types';
import { StatusType } from '../../container/types';

export const AppReducer: Reducer<IAppState, AppActionsType> = (
  state = APP_INITIAL_STATE,
  { payload, type },
) => {
  switch (type) {
    case AppActions.updateUserId:
      return ({
        ...state,
        userId: payload as string,
      });
    case AppActions.updateStatus:
      return ({
        ...state,
        status: payload as StatusType,
      });
    default:
      return state;
  }
};
