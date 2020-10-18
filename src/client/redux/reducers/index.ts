import { combineReducers } from 'redux';
import TracksReducer from './tracks';
import { ICombineReducers } from '../types';
import { AppReducer } from './app';

export default combineReducers<ICombineReducers>({
  app: AppReducer,
  tracks: TracksReducer,
});
