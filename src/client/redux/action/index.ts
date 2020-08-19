import { AnyAction } from 'redux';
import Actions from './enum.actions';
import { ITrack } from '../types';

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
