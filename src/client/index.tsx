import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppWithState } from './container/App';
import { Store } from './redux/store';
import 'reset-css';
import './style/index.sass';
import { AuthentionPageWithState } from './pages/Authention';

const Client = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AppWithState />
        </Route>
        <Route path="/auth">
          <AuthentionPageWithState />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Client />, document.getElementById('root'));
