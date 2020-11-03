import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import { useSpring, animated, useTransition } from 'react-spring';
import Page from './Page';
import Track from '../component/Track';
import { ITimer } from '../component/types';
import { TIMERS } from '../constants';
import { RegisterForm } from '../component/Forms/Register';
import { AuthentionPageWithState } from '../pages/Authention';

const App = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [isRegisterForm, setIsRegisterForm] = useState(true);
  const test = useSpring({
    perspective: '600px',
    transform: showModal ? 'rotateY(0deg)' : 'rotateY(180deg)',
  });
  const testTrans = useTransition(showModal, null, {
    from: { position: 'absolute', transform: 'rotateY(180deg)' },
    enter: { transform: 'rotateY(0deg)' },
    leave: { transform: 'rotateY(180deg)' },
    // trail: 2000,
    // config: { duration: 500 },
  });
  const test2 = useSpring({
    opacity: showModal ? 0 : 1,
  });
  return (
    <Switch>
      <Route exact path="/">
        <Page>
          <div className="timer">
            <div className="timer__track">
              {TIMERS.map((timer: ITimer) => <Track key={v4} {...timer} />)}
            </div>
          </div>
        </Page>
      </Route>
      <Route path="/auth">
        <AuthentionPageWithState />
      </Route>
    </Switch>
  );
};

export default App;
