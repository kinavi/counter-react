import { Router } from 'express';
import { TypeActions } from '../redux/actions';

import { Count, Story } from './server';

const express = require('express');
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

router.post('/add', jsonParser, async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);

    const nameCount = req.body.name;
    const count = new Count({
      name: nameCount,
      value: 0,
      dateCreate: new Date(),
    });

    const result = await count.save();
    dispatchAndRespond(req, res, {
      type: TypeActions.ADD_COUNTER,
      _id: result._id,
      name: result.name,
      value: result.value,
      dateCreate: result.dateCreate,
    });
  } catch (e) {
    console.log('Error --> ', e);
    res.sendStatus(500).send(e);
  }
});

router.put('/start', jsonParser, async (req, res) => {
  try {
    // console.log('start');
    if (!req.body) return res.sendStatus(400);
    const { id } = req.body;
    const datestart = req.body.dateStart;
    const story = new Story({
      idCount: id,
      isActive: true,
      limit: 2700,
      dateStart: datestart,
    });

    const result = await story.save();
    dispatchAndRespond(req, res, {
      type: TypeActions.START_COUNTING,
      id: result._id,
      idCount: result.idCount,
      isActive: true,
      limit: 2700,
      dateStart: result.dateStart,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

router.put('/stop', jsonParser, async (req, res) => {
  try {
    // console.log('stop');
    if (!req.body) return res.sendStatus(400);

    const { idStory } = req.body;
    const datestop = req.body.dateStop;
    const { idCount } = req.body;
    const valueCount = req.body.value;

    const story = await Story.findByIdAndUpdate(idStory, {
      isActive: false,
      dateStop: datestop,
    }, { new: true });
    const count = await Count.findByIdAndUpdate(idCount, {
      value: valueCount,
    }, { new: true });
    dispatchAndRespond(req, res, {
      type: TypeActions.STOP_COUNTING,
      id: story._id,
      isActive: story.isActive,
      dateStop: story.dateStop,
      idCount: count._id,
      value: count.value,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

router.delete('/remove', jsonParser, async (req, res) => {
  try {
    // console.log('remove');
    if (!req.body) return res.sendStatus(400);

    const idCount = req.body.id;

    await Count.deleteOne({ _id: idCount });

    await Story.deleteMany({ idCount });

    dispatchAndRespond(req, res, {
      type: TypeActions.REMOVE_COUNTER,
      id: idCount,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

router.put('/edit', jsonParser, async (req, res) => {
  try {
    if (!req.body) return res.sendStatus(400);

    const idCount = req.body.id;
    const nameCount = req.body.name;

    const result = await Count.findByIdAndUpdate(
      idCount,
      { name: nameCount },
      { new: true },
    );
    dispatchAndRespond(req, res, {
      type: TypeActions.EDIT_COUNTER,
      id: result._id,
      name: result.name,
    });
  } catch (e) {
    console.log('Error --> ', e);
    req.sendStatus(500).send(e);
  }
});

export default router;
