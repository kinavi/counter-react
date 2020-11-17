import { combineReducers } from 'redux';
import { TasksReducer } from './tasks';
import { ICombineReducers } from '../types';
import { AppReducer } from './app';
import { FormReducer } from './form';

export default combineReducers<ICombineReducers>({
  app: AppReducer,
  tasks: TasksReducer,
  form: FormReducer,
});
