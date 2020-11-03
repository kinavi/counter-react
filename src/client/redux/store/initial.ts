import { ITracksState, IAppState, IState } from '../types';

export const TRACKS_INITIAL_STATE: ITracksState = {
  tracks: [],
};

export const APP_INITIAL_STATE: IAppState = {
  userId: 0,
  readOnly: false,
  form: {
    fields: {
      password: '',
      login: '',
      repeatPassword: '',
      email: '',
    },
    error: null,
  },
};

export const INITIAL_STATE: IState = {
  app: APP_INITIAL_STATE,
  tracks: TRACKS_INITIAL_STATE,
};
