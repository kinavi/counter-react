import { AnyAction, Reducer } from 'redux';
import { Actions } from '../action/enum.actions';
import { ITaskState } from '../types';
import { TRACKS_INITIAL_STATE } from '../store/initial';
import { TaskActionsType } from '../action/types';

const TasksReducer: Reducer<ITaskState, TaskActionsType> = (state = TRACKS_INITIAL_STATE, action: AnyAction) => {
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

export default TasksReducer;
