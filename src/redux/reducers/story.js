import {TypeActions} from '../actions';

export const story = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.START_COUNTING:
      return [...state, {
        id: action.id,
        idTimer: action.idTimer,
        isActive: action.isActive,
        limit: action.limit,
        dateStart: action.dateStart,
      }];
    case TypeActions.STOP_COUNTING:
      return state.map((el)=>(el.id==action.id)?{
        ...el,
        isActive: action.isActive,
        dateStop: action.dateStop,
      }: el);
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

