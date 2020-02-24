import React from 'react';
import {
  Route,
  Switch,
  Router,
} from 'react-router-dom';
import {CountList, NoMatch, TestApp, Clock} from '.';

export const App = () =>{
  return (
    <Switch>
      <Route path="/test">
        <TestApp/>
        <Route path="/test/1">
          <div>Hello</div>
        </Route>
        <Route path="/test/2">
          <div>Noo</div>
        </Route>
      </Route>
      <Route exact path="/">
        <CountList/>
      </Route>
      <Route exact path="/clock">
        <Clock/>
      </Route>
      <Route>
        <NoMatch />
      </Route>
    </Switch>
  );
};
