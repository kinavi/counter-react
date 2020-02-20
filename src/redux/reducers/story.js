import {TypeActions} from '../actions';

export const story = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.START_COUNTING:
      return [timer({}, action), ...state];
    case TypeActions.STOP_COUNTING:
      return state.map((st) =>
          (st._id==action.idTimer)?
          {
            ...st,
            isActive: false,
            dateStop: action.dateStop,
          }:
          st,
      );
    default:
      return state;
  }
};

export const timer = (state = {}, action) =>{
  switch (action.type) {
    case TypeActions.START_COUNTING:
      return {
        isActive: action.isActive,
        limit: action.limit,
        dateStart: action.dateStart,
      };
    default:
      return state;
  }
};
// id: newStory._id,
// story: newStory.story,
// limit: newStory.story[0].limit,
// dateStart: newStory.story[0].dateStart,
// isActive: true, 
// {
//   isActive: true,
//   limit: action.limit,
//   currentCount: 0,
//   dateStart: new Date(),
// }