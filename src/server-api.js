import {Router} from 'express';
import {TypeActions} from './redux/actions';
const express = require('express');
import {Timer} from './server';
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

router.post('/add', jsonParser, (req, res) =>{
  if (!req.body) return res.sendStatus(400);

  const timerName = req.body.title;
  const timer = new Timer({name: timerName, count: 0, dateCreate: new Date()});
  timer.save()
      .then(()=>{
        dispatchAndRespond(req, res, {
          type: TypeActions.ADD_TIMER,
          ...timer._doc,
        });
      })
      .catch((e)=>{
        console.log('Error --> ', e);
        res.sendStatus(500).send(e);
      });
});

router.put('/start', jsonParser, async (req, res)=>{
  try {
    console.log('start');
    if (!req.body) return res.sendStatus(400);

    const Id = req.body.id;
    const dateStart = req.body.dateStart;
    const note = {
      isActive: true,
      limit: 2700,
      dateStart: dateStart,
    };
    const timer = await Timer.findById(Id);
    const register = await Timer.findByIdAndUpdate({_id: Id}, {
      story: [note, ...timer.story],
    }, {new: true});
    res.cookie('idActiveNote', register.story[0]._id);

    dispatchAndRespond(req, res, {
      type: TypeActions.START_COUNTING,
      id: Id,
      isActive: true,
      limit: 2700,
      dateStart: dateStart,
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

    const Id = req.body.id;
    const count = req.body.count;
    const dateStop = req.body.dateStop;
    const idNote = req.cookies.idActiveNote;

    const timer = await Timer.findOne({_id: Id});
    const register = await Timer.findByIdAndUpdate({
      _id: Id,
    }, {
      count: count,
      story: timer.story.map((st)=>{
        if (st._id==idNote) {
          st.isActive=false;
          st.dateStop=dateStop;
          return st;
        }
        return st;
      }),
    }, {new: true});
    console.log(register);


    dispatchAndRespond(req, res, {
      type: TypeActions.STOP_COUNTING,
      id: Id,
      idTimer: idNote,
      count: count,
      isActive: false,
      dateStop: dateStop,
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

