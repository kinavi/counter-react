import { combineReducers } from 'redux';
import TracksReducer from './tracks';
import { ICombineReducers } from '../types';

export default combineReducers<ICombineReducers>({

  tracks: TracksReducer,

});
