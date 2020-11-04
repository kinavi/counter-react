import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { v4 } from 'uuid';
import { AppWithState } from './container/App';
import { Store } from './redux/store';
import 'reset-css';
import './style/index.sass';
import Track from './component/Track';
import { Icons } from './component/UI/Icons';
import Page from './container/Page';
import { TIMERS } from './constants';
import { ITrack } from './redux/types';
import { AuthentionPageWithState } from './pages/Authention';

const Client = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <AppWithState />
          {/* <Track */}
          {/*  leftIcon={Icons.plus} */}
          {/*  rightIcon={Icons.plus} */}
          {/*  onLeftButtonClick={() => console.log('click left')} */}
          {/*  onRightButtonClick={() => console.log('click right')} */}
          {/*  id={0} */}
          {/*  label="Учи реакт" */}
          {/*  value="100 час" */}
          {/*  left="500 час" */}
          {/* /> */}
        </Route>
        {/* <Route exact path="/old"> */}
        {/*  <Page> */}
        {/*    <div className="timer"> */}
        {/*      <div className="timer__track"> */}
        {/*        {TIMERS.map((timer: ITrack) => <Track key={v4} {...timer} />)} */}
        {/*      </div> */}
        {/*    </div> */}
        {/*  </Page> */}
        {/* </Route> */}
        <Route path="/auth">
          <AuthentionPageWithState />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Client />, document.getElementById('root'));
