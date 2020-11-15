import { IState, ITask } from '../types';
import { ApiController } from '../../utils/fetchs';
import { IApiResponse } from '../../../types';
import { ENDPOINTS } from '../api/endpoints';
import { TaskActionsType } from './types';
import { validateForm } from './validate';
import * as ActionsCreator from './ActionsCreator';

export const initialApp = () => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  // TODO: Ref
  ApiController.get<IApiResponse>(ENDPOINTS.initial)
    .then(({ status, result }) => {
      if (status === 'actionsList') {
        (result as TaskActionsType[]).map((item) => dispatch(item));
      }
    })
    .catch((error) => console.log('error', error));
};

export const submitCreateTask = (value: string) => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  const { app: { userId } } = getState();
  ApiController.post<IApiResponse>(ENDPOINTS.createTask, { userId, nameTask: value })
    .then(({
      result,
      status,
      message,
    }) => {
      switch (status) {
        case 'action':
          dispatch(result);
          break;
        case 'error':
          // todo: dispatch error message
          break;
        default:
          throw new Error();
      }
    })
    .catch((error) => console.log('error', error));
};

export const submitUpdateTask = (task: ITask) => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  ApiController.post<IApiResponse>(ENDPOINTS.updateTask, task)
    .then(({ message, result, status }) => {
      switch (status) {
        case 'ok':
          dispatch(result);
          break;
        case 'error':
          throw new Error(message);
        default:
          throw new Error();
      }
    })
    .catch((error) => console.log('error', error));
};

export const submitRemoveTask = (taskId: string) => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  ApiController.delete<IApiResponse>(ENDPOINTS.removeTask, { taskId })
    .then(({ message, result, status }) => {
      switch (status) {
        case 'ok':
          dispatch(result);
          break;
        case 'error':
          throw new Error(message);
          break;
        default:
          throw new Error();
      }
    })
    .catch((error) => {});
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
    ApiController.post<IApiResponse>(ENDPOINTS.register, fields)
      .then((data) => console.log('data', data))
      .catch((error) => console.log('error', error));
  } else {
    dispatch(ActionsCreator.setErrors(errors));
  }
};

export const login = () => (
  dispatch: (action: any) => void,
  getState: () => IState,
) => {
  const { form: { fields } } = getState();
  if (true) { // TODO: need valid
    ApiController.post<IApiResponse>(ENDPOINTS.login, fields)
      .then(({ status, message }) => {
        if (status === 'ok') {
          window.location.assign('/');
        }
        // TODO: add valid form
      })
      .catch((error) => console.log('error', error));
  }
};
