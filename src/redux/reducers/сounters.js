import {TypeActions} from '../actions';
import {story} from './story';

export const SizeLevel = {
  1: 0,
  2: 25,
  3: 50,
  4: 100,
  5: 500,
  6: 1000,
  7: 1500,
  8: 2000,
  9: 5000,
  10: 10000,
};

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
