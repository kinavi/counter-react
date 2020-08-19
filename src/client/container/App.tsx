import React from 'react';
import { v4 } from 'uuid';
import Page from './Page';
import Track from '../component/Track';
import { ITimer } from '../component/types';
import { TIMERS } from '../constants';

const App = (): JSX.Element => (
  <Page>
    <div className="timer">
      <div className="timer__track">
        {TIMERS.map((timer: ITimer) => <Track key={v4} {...timer} />)}
      </div>
    </div>
  </Page>
);

export default App;
