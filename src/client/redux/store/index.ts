import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../reducers';
import { INITIAL_STATE } from './initial';

const middleware = [applyMiddleware(thunk)];
// TODO: Написать заглушку для прод окружения
/* eslint-disable no-underscore-dangle */
if (typeof window !== 'undefined') {
  // код, который выполнится только в браузере
  middleware.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
} else {
  console.log('this server!');
  // код, который выполнится только на сервере
}

/* eslint-enable */

export const Store = createStore(
  Reducers,
  INITIAL_STATE,
  compose(...middleware),
);
