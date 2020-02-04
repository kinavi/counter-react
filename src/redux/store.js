import {createStore} from 'redux';
import {сounters} from './reducers/сounters';

export const storeFactory = (initialState = {}) =>
  createStore(
      сounters,
      initialState,
  );
