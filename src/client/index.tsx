import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppWithState } from './container/App';
import { Store } from './redux/store';
import 'reset-css';
import './style/index.sass';
import { AuthentionPageWithState } from './pages/Authention';
import { NavigationBar } from './component/NavigationBar';
import { Order } from './pages/Order';

const Client = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/time-manager">
          <AppWithState />
        </Route>
        <Route path="/auth">
          <AuthentionPageWithState />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Client />, document.getElementById('root'));
