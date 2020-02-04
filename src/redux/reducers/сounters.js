import {TypeActions} from '../actions';
import {story} from './story';

export const сounters = (state = [], action) => {
  switch (action.type) {
    case TypeActions.ADD_COUNTER:
      return [{
        id: action.id,
        name: action.name,
        dateCreate: new Date(),
        story: [],
      }, ...state];
    case TypeActions.EDIT_COUNTER:
      return state.map((counter)=>
      (counter.id==action.id)?
      {
        ...counter,
        name: action.name,
      }:
      counter,
      );
    case TypeActions.REMOVE_COUNTER:
      return state.filter((counter)=>
        counter.id!=action.id,
      );
    case TypeActions.START_COUNTING:
      return state.map((counter)=>
      (counter.id==action.id)?
      {
        ...counter,
        story: story([], action),
      }:
        counter,
      );
    case TypeActions.STOP_COUNTING:
      return state.map((counter)=>
      (counter.id==action.id)?
      {
        ...counter,
        story: story(counter.story, action),
      }:
        counter,
      );
    default:
      return state;
  }
};
