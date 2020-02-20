import {TypeActions} from '../actions';
import {story} from './story';

export const сounters = (state = [], action) => {
  switch (action.type) {
    case TypeActions.ADD_TIMER:
      return [...state, {
        id: action._id,
        name: action.name,
        count: action.count,
        dateCreate: action.dateCreate,
        story: action.story,
      }];

    case TypeActions.STOP_COUNTING:
      return state.map((counter)=>
        (counter.id==action.id)?
        {
          ...counter,
          count: action.count,
          story: story(counter.story, action),
        }:
          counter,
      );

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
        story: story(counter.story = [], action),
      }:
        counter,
      );

    // case TypeActions.FETCH_TIMERS:
    //   return action;
    default:
      return state;
  }
};
