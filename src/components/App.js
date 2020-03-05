import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import {TestApp, Clock} from '.';
import {MainPage} from '../pages/MainPage';


export const App = () =>{
  return (
    <Switch>
      <Route exact path="/exper">
        <Clock/>
        <TestApp/>
      </Route>
      <Route path="/">
        <MainPage/>
      </Route>
    </Switch>
  );
};
