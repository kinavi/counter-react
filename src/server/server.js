// import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import {
  StaticRouter,
} from 'react-router-dom';
import { compose } from 'redux';
import storeFactory from '../old/redux/store';

import { App } from '../old/components';

import api from './server-api';

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

// const jsonParser = express.json();

const { Schema } = mongoose;

const timerScheme = new Schema(
  {
    name: String,
    value: Number,
    dateCreate: Date,
    isHide: Boolean,
  },
  { versionKey: false },
);

const storyScheme = new Schema({
  idCount: String,
  isActive: Boolean,
  limit: Number,
  dateStart: Date,
  dateStop: Date,
}, { versionKey: false });

export const Count = mongoose.model('Count', timerScheme);
export const Story = mongoose.model('Story', storyScheme);

const url = 'mongodb://localhost:27017/counter-react';

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(3000, () => {
      console.log('Сервер ожидает подключения - http://localhost:3000/');
    });
  })
  .catch((err) => {
    console.log(err);
  });

const logger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
};
const addStoreToRequestPipeline = async (req, res, next) => {
  const counts = await Count.find({});
  const storys = await Story.find({});
  req.store = storeFactory(true, { сounters: counts, story: storys });
  next();
};
const makeClientStoreFrom = (store) => (url, counts, storys) => ({
  store: storeFactory(false, { сounters: counts, story: storys }),
  url,
});
const renderComponentsToHTML = ({ url, store }) => ({
  state: store.getState(),
  // css: defaultStyles,
  html: renderToString(
    <Provider store={store}>
      <StaticRouter location={url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>,
  ),
});
const buildHTMLPage = ({ html, state }) => `
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
  makeClientStoreFrom(storeFactory),
);

const respond = async (req, res) => {
  const timers = await Count.find({});
  const storys = await Story.find({});
  return res.status(200).send(htmlResponse(req.url, timers, storys));
};

app.get('/api/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return console.log(err);
    res.send(users);
  });
});

app.use(express.static('public'))
  .use(cookieParser())
  .use(logger)
  .use(addStoreToRequestPipeline)
  .use('/api', api)
  .use(respond);
