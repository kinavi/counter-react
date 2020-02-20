import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {matchRoutes, renderRoutes} from 'react-router-config';
import express from 'express';
import {Provider} from 'react-redux';
// import serialize from 'serialize-javascript';
import '@babel/polyfill';

import Routes from './Routes';
import storeFactory from './redux/store';
// import {assetsByChunkName} from '../dist/stats.json';

const app = express();

app.use(express.static('public'));
const store = storeFactory(true);
// eslint-disable-next-line no-shadow
const renderer = (req, store, context) => {
  const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>,
  );

  return `<!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Universal Color Organizer</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css?family=Quantico&display=swap" rel="stylesheet">
  </head>
  <body>
  <div id="root">${content}</div>
  <script>
  window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
  </script>
  <script src="/client.js"></script>
  </body>
  </html>
  `;
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//       <link rel="stylesheet" type="text/css" href="/${
//   assetsByChunkName.main[0]
// }" />
//       <title>Document</title>
//     </head>
//     <body>
//       <div id="root">${content}</div>
//       <script>
//       window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
//       /</g,
//       '\\u003c',
//   )}
//       </script>
//       <script src="/${assetsByChunkName.main[1]}"></script>
//     </body>
//   </html>;
};

app.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];

  const routes = matchRoutes(Routes, req.path);

  const promises = routes
      .map(({route}) => {
        return route.loadData ? route.loadData(store, id) : null;
      })
      .map((promise) => {
        if (promise) {
        // eslint-disable-next-line no-unused-vars
          return new Promise((resolve, reject) => {
            promise.then(resolve).catch(resolve);
          });
        }
        return null;
      });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});


const Schema = mongoose.Schema;

const timerScheme = new Schema(
    {
      name: String,
      count: Number,
      dateCreate: Date,
      story: [{
        isActive: Boolean,
        limit: Number,
        count: Number,
        dateStart: Date,
        dateStop: Date,
      }],
    },
    {versionKey: false});

export const Timer = mongoose.model('Timer', timerScheme);

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

