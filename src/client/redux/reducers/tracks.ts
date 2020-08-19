import { AnyAction, Reducer } from 'redux';
// initialState
// import { ITrack } from '../action';
import Actions from '../action/enum.actions';
import { ITracksState } from '../types';
import { TRACKS_INITIAL_STATE } from '../store/initial';
// const initialState: IAppState = {
//   tracks: [],
// };

const TracksReducer: Reducer<ITracksState> = (state = TRACKS_INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case Actions.addTrack:
      return [];
    case Actions.removeTrack:
      return [];
    case Actions.updateTrack:
      return [];
    case Actions.start:
      return [];
    case Actions.stop:
      return [];
    default: return state;
  }
};

export default TracksReducer;
