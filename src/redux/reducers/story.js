import {TypeActions} from '../actions';

export const story = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.START_COUNTING:
      return [{
        isActive: true,
        limit: action.limit,
        currentCount: 0,
        dateStart: new Date(),
      }, ...state];
    case TypeActions.STOP_COUNTING:
      return state.map((note) =>
          (note.isActive)?
          {
            ...note,
            isActive: false,
            currentCount: action.count,
          }:
          note,
      );
    default:
      return state;
  }
};
