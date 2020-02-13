import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {CountList, NoMatch, TestApp} from '.';

export const App = () =>{
  return (
    <Switch>
      <Route exact path="/test">
        <TestApp/>
      </Route>
      <Route exact path="/">
        <CountList/>
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};
