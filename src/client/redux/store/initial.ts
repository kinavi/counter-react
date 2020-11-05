import {
  IAppState, IState, IFormState,
} from '../types';

export const APP_INITIAL_STATE: IAppState = {
  userId: '',
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
  tasks: [],
  form: FORM_INITIAL_STATE,
};
