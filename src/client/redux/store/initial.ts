import {
  ITaskState, IAppState, IState, IFormState,
} from '../types';

export const TRACKS_INITIAL_STATE: ITaskState = {
  tasks: [],
};

export const APP_INITIAL_STATE: IAppState = {
  userId: 0,
  readOnly: false,
};

export const FORM_INITIAL_STATE: IFormState = {
  fields: {
    password: '',
    login: '',
    repeatPassword: '',
    email: '',
  },
  error: null,
};

export const INITIAL_STATE: IState = {
  app: APP_INITIAL_STATE,
  tasks: TRACKS_INITIAL_STATE,
  form: FORM_INITIAL_STATE,
};
