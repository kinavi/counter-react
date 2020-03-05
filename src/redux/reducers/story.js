import {TypeActions} from '../actions';

export const story = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.START_COUNTING:
      return [...state, {
        _id: action.id,
        idTimer: action.idTimer,
        isActive: action.isActive,
        limit: action.limit,
        dateStart: action.dateStart,
      }];
    case TypeActions.STOP_COUNTING:
      return state.map((el)=>(el._id==action.id)?{
        ...el,
        isActive: action.isActive,
        dateStop: action.dateStop,
      }: el);
    case TypeActions.REMOVE_COUNTER:
      return state.filter((item)=>item.idTimer!=action.id);
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

