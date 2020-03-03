import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import storeFactory from './redux/store';
import './style/main.css';
import {App} from './components';

// const initialState = [{
//   id: 1,
//   name: 'React',
//   count: 250000,
//   dateCreate: null,
//   story: [{
//     isActive: true,
//     limit: 45,
//     currentCount: 30,
//     dateStart: null,
//   }],
// },
// {
//   id: 2,
//   name: 'HTML',
//   count: 87000,
//   dateCreate: null,
//   story: [{
//     isActive: true,
//     limit: 45,
//     currentCount: 30,
//     dateStart: null,
//   }],
// }];


// client
// const store = storeFactory(false, initialState);
// server
const store = storeFactory(false, window.__INITIAL_STATE__);


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'),
);
