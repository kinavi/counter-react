const express = require('express');
const mongoose = require('mongoose');

import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {
  StaticRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {compose} from 'redux';
import storeFactory from './redux/store';

import {App} from './components';

const app = express();

const jsonParser = express.json();

const Schema = mongoose.Schema;

const timerScheme = new Schema(
    {
      name: String,
      count: Number,
      dateCreate: Date,
      story: [{
        isActive: Boolean,
        limit: Number,
        currentCount: Number,
        dateStart: Date,
      }],
    },
    {versionKey: false});

const Timer = mongoose.model('Timer', timerScheme);

const url = 'mongodb://localhost:27017/time-counter';

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(()=>{
      app.listen(3000, ()=>{
        console.log('Сервер ожидает подключения - http://localhost:3000/');
      });
    })
    .catch((err)=>{
      console.log(err);
    });

Timer.find({}, (err, timers)=>{
  if (err) return console.log(err);
  console.log(timers);
  const serverStore = storeFactory(true, timers);
  const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
  };
  const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore;
    next();
  };
  const makeClientStoreFrom = (store) => (url) =>
    ({
      store: storeFactory(false, store.getState()),
      url,
    });
  const renderComponentsToHTML = ({url, store}) =>
    ({
      state: store.getState(),
      // css: defaultStyles,
      html: renderToString(
          <Provider store={store}>
            <StaticRouter location={url} context={{}}>
              <App/>
            </StaticRouter>
          </Provider>,
      ),
    });
  const buildHTMLPage = ({html, state}) => `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Universal Color Organizer</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Quantico&display=swap" rel="stylesheet">
  </head>
  <body>
  <div id="root">${html}</div>
  <script>
  window.__INITIAL_STATE__ = ${JSON.stringify(state)}
  </script>
  <script src="/client.js"></script>
  </body>
  </html>
  `;
  const htmlResponse = compose(
      buildHTMLPage,
      renderComponentsToHTML,
      makeClientStoreFrom(serverStore),
  );

  const respond = (req, res) =>
    res.status(200).send(htmlResponse(req.url));

  app.get('/api/users', (req, res)=>{
    User.find({}, (err, users)=>{
      if (err) return console.log(err);
      res.send(users);
    });
  });

  app.use(express.static('public'))
      .use('/list', express.static('public'))
      .use(logger)
  // .use(fileAssets)
      .use(addStoreToRequestPipeline)
      .use(respond);
});

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

// const serverStore = await storeFactory(true, getPreload);

