import { Reducer } from 'redux';
import { IAppState, IErrors, IFieldsForm } from '../types';
import { APP_INITIAL_STATE } from '../store/initial';
import { ActionsForm } from '../action/enum.actions';
import { IAppActions } from './types';

export const AppReducer: Reducer<IAppState, IAppActions> = (
  state = APP_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ActionsForm.updateField:
      return ({
        ...state,
        form: {
          ...state.form,
          fields: action.payload as IFieldsForm,
        },
      });
    case ActionsForm.setErrors:
      return ({
        ...state,
        form: {
          ...state.form,
          error: action.payload as IErrors,
        },
      });
    default:
      return state;
  }
};
