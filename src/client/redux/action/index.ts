import { AnyAction } from 'redux';
import { Actions, ActionsForm } from './enum.actions';
import {
  IAppState, IErrors, IFieldsForm, IState, ITrack,
} from '../types';
import { ApiController } from '../../utils/fetchs';
import {
  validateForm,
} from './validate';
import { IAppActions } from '../reducers/types';
import { ENDPOINTS } from '../api/endpoints';

export const addTrack = (track: ITrack): AnyAction => ({ type: Actions.addTrack, payload: track });
export const updateTrack = (number: number, track: ITrack): AnyAction => ({
  type: Actions.updateTrack,
  payload: { number, track },
});
export const remuveTrack = (number: number): AnyAction => ({
  type: Actions.removeTrack,
  payload: number,
});
export const start = (): AnyAction => ({ type: Actions.start });
export const stop = (): AnyAction => ({ type: Actions.stop });

export const setErrors = (errors: IErrors): IAppActions => ({
  type: ActionsForm.setErrors,
  payload: errors,
});

export const updateFields = (fields: IFieldsForm): IAppActions => ({
  type: ActionsForm.updateField,
  payload: fields,
});

export const register = () => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  const { app: { form: { fields } } } = getState();
  console.log('state', getState());
  const { isValide, errors } = validateForm(fields);
  if (true) {
    ApiController.post(ENDPOINTS.register, fields)
      .then((data) => console.log('data', data))
      .catch((error) => console.log('error', error));
  } else {
    dispatch(setErrors(errors));
  }
};

export const login = () => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  const { app: { form: { fields } } } = getState();
  if (true) {
    ApiController.post(ENDPOINTS.login, fields)
      .then((data) => console.log('data', data))
      .catch((error) => console.log('error', error));
  }
};
