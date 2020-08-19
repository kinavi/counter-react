import express, { Request, Response } from 'express';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import Html from './renderHTML';
import App from '../client/container/App';
import { Track, connect, Road } from './mongoose';
import api from './api';

const PORT = 3003;
const app: express.Application = express();

connect('mongodb://localhost:27017/timer', { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server is running --> port ', PORT);
    });
  });

const renderHTML = () => renderToString(
  <Html>
    <App />
  </Html>,
);

const pathStatic = path.resolve('./dist/public');
console.log('path to static ->', pathStatic);

app.use('/', express.static(pathStatic));
// app.get('/api', async (req: Request, res: Response) => {
//   const one = new Track({ label: 'Silence' });
//   const two = new Road({ idTrack: 12313 });
//   await one.save();
//   await two.save();
//   res.send('good');
// });
app.use('/api', api);
app.use('/', (req: Request, res: Response) => {
  res.send(renderHTML());
});
