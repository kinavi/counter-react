import { ITracksState, IAppState, IState } from '../types';

export const TRACKS_INITIAL_STATE: ITracksState = {
  tracks: [],
};

export const APP_INITIAL_STATE: IAppState = {
  readOnly: false,
};

export const INITIAL_STATE: IState = {
  app: APP_INITIAL_STATE,
  tracks: TRACKS_INITIAL_STATE,
};
