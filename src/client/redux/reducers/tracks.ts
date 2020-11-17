import { Reducer } from 'redux';
import { ITrack } from '../types';
import { TrackActionsType } from '../actions/types';
import { TrackActions } from '../actions/enum.actions';

export const TracksReducer: Reducer<ITrack[], TrackActionsType> = (
  tracks = [],
  { type, payload },
) => {
  switch (type) {
    case TrackActions.setTracks:
      return payload as ITrack[];
    case TrackActions.startTrack:
      return [...tracks, payload as ITrack];
    case TrackActions.stopTrack:
      return tracks.map((track) => (track.id === (payload as ITrack).id
        ? payload as ITrack
        : track));
    default:
      return tracks;
  }
};
