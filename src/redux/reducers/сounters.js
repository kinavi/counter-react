import {TypeActions} from '../actions';

export const сounters = (state = [], action) => {
  switch (action.type) {
    case TypeActions.ADD_COUNTER:
      return [...state, {
        _id: action._id,
        name: action.name,
        value: action.value,
        dateCreate: action.dateCreate,
      }];
    case TypeActions.REMOVE_COUNTER:
      return state.filter((item)=>item._id!=action.id);
    case TypeActions.EDIT_COUNTER:
      return state.map((item)=>(item._id==action.id? {
        ...item,
        name: action.name,
      }:item));
    case TypeActions.STOP_COUNTING:
      return state.map((el)=>
      (el._id==action.idCount)?{
        ...el,
        value: action.value,
      }: el);
    default:
      return state;
  }
};
