import { Reducer } from 'redux';
import { IAppState } from '../types';
import { APP_INITIAL_STATE } from '../store/initial';
import { AppActions } from '../action/enum.actions';
import { AppActionsType } from '../action/types';

export const AppReducer: Reducer<IAppState, AppActionsType> = (
  state = APP_INITIAL_STATE,
  { payload, type },
) => {
  switch (type) {
    case AppActions.updateUserId:
      return ({
        ...state,
        userId: payload as number,
      });
    default:
      return state;
  }
};
