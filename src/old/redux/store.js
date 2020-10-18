import {createStore, applyMiddleware, combineReducers} from 'redux';
import {сounters} from './reducers/сounters';
import {story} from './reducers/story';
import thunk from 'redux-thunk';
// export const storeFactory = (initialState = {}) =>
//   createStore(
//       сounters,
//       initialState,
//   );

const clientLogger = (store) => (next) => (action) => {
  let result;
  console.groupCollapsed('dispatching', action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const serverLogger = (store) => (next) => (action) => {
  console.log('\n dispatching server action\n');
  console.log(action);
  console.log('\n');
  return next(action);
};

const middleware = (server) =>[
  (server) ? serverLogger : clientLogger,
  thunk,
];


const storeFactory = (server = false, initialState = {}) =>
  applyMiddleware(...middleware(server))(createStore)(
      combineReducers({сounters, story}),
      initialState,
  );

export default storeFactory;
