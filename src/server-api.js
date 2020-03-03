import {Router} from 'express';
import {TypeActions} from './redux/actions';
const express = require('express');
import {Timer, Story} from './server';
// import {FaGofore} from 'react-icons/fa';
require('babel-core/register');
require('babel-polyfill');
const jsonParser = express.json();

const router = Router();

const dispatchAndRespond = (req, res, action) => {
  req.store.dispatch(action);
  res.status(200).json(action);
};

// router.get('/', (req, res) =>{
//   res.status(200).json(req.store.getState().ListNews);
// });

router.post('/add', jsonParser, async (req, res) =>{
  if (!req.body) return res.sendStatus(400);

  const timerName = req.body.title;
  const timer = new Timer({name: timerName, count: 0, dateCreate: new Date()});

  try {
    const product = await timer.save();
    dispatchAndRespond(req, res, {
      type: TypeActions.ADD_TIMER,
      _id: product._id,
      name: product.name,
      count: product.count,
      dateCreate: product.dateCreate,
    });
  } catch (e) {
    console.log('Error --> ', e);
    res.sendStatus(500).send(e);
  }
});


// router.post('/show', jsonParser, (req, res)=>{
//   dispatchAndRespond(req, res, {
//     type: TypeActions.SHOW_ALL_COUNTER,
//   });
// });

// router.put('/show', jsonParser, (req, res)=>{
//   dispatchAndRespond(req, res, {
//     type: TypeActions.SHOW_ONLY_COUNTER,
//     id: req.body.id,
//   });
// });

router.put('/start', jsonParser, async (req, res)=>{
  try {
    console.log('start');
    if (!req.body) return res.sendStatus(400);
    const Id = req.body.id;
    const dateStart = req.body.dateStart;
    const story = new Story({idTimer: Id, isActive: true, limit: 2700, dateStart: dateStart});
 
    const product = await story.save();
    res.cookie('idActiveNote', product._id);

    dispatchAndRespond(req, res, {
      type: TypeActions.START_COUNTING,
      id: product._id,
      idTimer: product.idTimer,
      isActive: true,
      limit: 2700,
      dateStart: product.dateStart,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

router.put('/stop', jsonParser, async (req, res)=>{
  try {
    console.log('stop');
    if (!req.body) return res.sendStatus(400);

    const IdStory = req.body.idStory; // req.cookies.idActiveNote;
    const dateStop = req.body.dateStop;
    const IdTimer = req.body.id;
    const count = req.body.count;

    const story = await Story.findByIdAndUpdate(IdStory, {
      isActive: false,
      dateStop: dateStop,
    }, {new: true});
    const timer = await Timer.findByIdAndUpdate(IdTimer, {
      count,
    }, {new: true});
    dispatchAndRespond(req, res, {
      type: TypeActions.STOP_COUNTING,
      id: story._id,
      isActive: story.isActive,
      dateStop: story.dateStop,
      idTime: timer._id,
      count: timer.count,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

// router.put('/cms', (req, res) =>
//   dispatchAndRespond(req, res, {
//     type: TypeActions.EDIT_NEWS,
//     id: req.body.id,
//     title: req.body.title,
//     description: req.body.description,
//     fileName: req.body.fileName,
//   }),
// );

// router.delete('/cms', (req, res) =>
// {
//   console.log(req.body);
//   dispatchAndRespond(req, res, {
//     type: TypeActions.REMOVE_NEWS,
//     id: req.body.id,
//   });
// },

// );

export default router;

