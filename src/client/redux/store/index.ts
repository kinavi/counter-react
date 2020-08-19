import { createStore } from 'redux';
import Reducers from '../reducers';
import { INITIAL_STATE } from './initial';

const store = createStore(Reducers, INITIAL_STATE);

export default store;
