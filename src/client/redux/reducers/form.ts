import { Reducer } from 'react';
import {
  IErrors, IFieldsForm, IFormState,
} from '../types';
import { FORM_INITIAL_STATE } from '../store/initial';
import { FormActions } from '../actions/enum.actions';
import { FormActionsType } from '../actions/types';

export const FormReducer: Reducer<IFormState, FormActionsType> = (
  state = FORM_INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case FormActions.updateField:
      return ({
        ...state,
        fields: action.payload as IFieldsForm,
      });
    case FormActions.setErrors:
      return ({
        ...state,
        error: action.payload as IErrors,
      });
    default:
      return state;
  }
};
