import { FormActions, AppActions } from './enum.actions';
import {
  IErrors, IFieldsForm, IState,
} from '../types';
import { ApiController } from '../../utils/fetchs';
import {
  validateForm,
} from './validate';
import { ENDPOINTS } from '../api/endpoints';
import { FormActionsType, AppActionsType } from './types';

// form actions
export const setErrors = (errors: IErrors): FormActionsType => ({
  type: FormActions.setErrors,
  payload: errors,
});

export const updateFields = (fields: IFieldsForm): FormActionsType => ({
  type: FormActions.updateField,
  payload: fields,
});

// app actions
export const setUserId = (id: number): AppActionsType => ({
  type: AppActions.updateUserId,
  payload: id,
});

export const initialApp = () => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  ApiController.get(ENDPOINTS.initial)
    .then((data) => {
      // TODO: if (status)
      dispatch(data);
    })
    .catch((error) => console.log('error', error));
};

// task actions
// export const addTrack = (track: ITrack): AnyAction => ({ type: Actions.addTrack, payload: track });
// export const updateTrack = (number: number, track: ITrack): AnyAction => ({
//   type: Actions.updateTrack,
//   payload: { number, track },
// });
//
// export const remuveTrack = (number: number): AnyAction => ({
//   type: Actions.removeTrack,
//   payload: number,
// });
// export const start = (): AnyAction => ({ type: Actions.start });
// export const stop = (): AnyAction => ({ type: Actions.stop });

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
