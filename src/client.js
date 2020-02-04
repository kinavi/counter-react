import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import './style/main.css';

import {CountList, NoMatch, TestApp} from './components';
import {storeFactory} from './redux/store';

const initialState = [{
  id: 1,
  name: 'React',
  count: 250000,
  dateCreate: null,
  story: [{
    isActive: true,
    limit: 45,
    currentCount: 30,
    dateStart: null,
  }],
},
{
  id: 2,
  name: 'HTML',
  count: 150000,
  dateCreate: null,
  story: [{
    isActive: true,
    limit: 45,
    currentCount: 30,
    dateStart: null,
  }],
}];

const store = storeFactory(initialState);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter >
        <Switch>
          <Route exact path="/">
            <TestApp/>
          </Route>
          <Route path="/list">
            <CountList/>
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'),
);
