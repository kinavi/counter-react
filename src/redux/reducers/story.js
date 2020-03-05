import {TypeActions} from '../actions';

export const story = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.START_COUNTING:
      return [...state, {
        _id: action.id,
        idCount: action.idCount,
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
      return state.filter((item)=>item.idCount!=action.id);
    default:
      return state;
  }
};

