import {
  addCounterAC,
  editCounterAC,
  removeCounterAC,
  startCountingAC,
  stopCountingAC,
} from '../actions';

import {сounters} from './сounters';

describe('test сounters', () => {
  it('add сounter', () => {
    const date = new Date();
    const id = 0;
    const initialState = [];
    const finalState = [{
      id: 0,
      name: 'React',
      dateCreate: date,
      story: [],
    }];
    const action = addCounterAC(id, 'React', date);
    const test = сounters(initialState, action);
    expect(test.length).toEqual(finalState.length);
    expect(test[0].id).toEqual(finalState[0].id);
    expect(test[0].name).toEqual(finalState[0].name);
  });

  it('edit сounter', ()=>{
    const id = 0;
    const initialState = [{
      id: 0,
      name: 'React',
      totalTime: null,
      timeByLevel: null,
      dateCreate: null,
      story: [],
    }];
    const finalState = [{
      id: 0,
      name: 'edit сounter',
      totalTime: null,
      timeByLevel: null,
      dateCreate: null,
      story: [],
    }];
    const action = editCounterAC(id, 'edit сounter');
    const test = сounters(initialState, action);
    expect(test.length).toEqual(finalState.length);
    expect(test[0].name).toEqual('edit сounter');
  });

  it('remove сounter', ()=>{
    const id = 0;
    const initialState = [{
      id: 0,
      name: 'React',
      dateCreate: null,
      story: [],
    }];
    const finalState = [];
    const action = removeCounterAC(id);
    const test = сounters(initialState, action);
    expect(test.length).toEqual(finalState.length);
    expect(test).toEqual(finalState);
  });
});

describe('test store', () => {
  it('start counting', () => {
    const initialState = [{
      id: 0,
      name: 'React',
      dateCreate: null,
      story: [],
    }];
    const finalState = [{
      id: 0,
      name: 'React',
      dateCreate: null,
      story: [{
        limit: 45,
        currentTime: null,
        leftTime: null,
        dateStart: null,
        dateStop: null,
      }],
    }];
    const action = startCountingAC(0, 45);
    const test = сounters(initialState, action);
    expect(test[0].story.length).toEqual(finalState[0].story.length);
    expect(test[0].story[0].limit).toEqual(finalState[0].story[0].limit);
  });

  it('stop counting', ()=>{
    const initialState = [{
      id: 0,
      name: 'React',
      dateCreate: null,
      story: [{
        isActive: true,
        limit: 45,
        currentCount: 0,
        dateStart: null,
      }],
    }];
    const finalState = [{
      id: 0,
      name: 'React',
      dateCreate: null,
      story: [{
        isActive: false,
        limit: 45,
        currentCount: 30,
        dateStart: null,
      }],
    }];
    const action = stopCountingAC(0, 30);
    const test = сounters(initialState, action);
    expect(test[0].story.length)
        .toEqual(finalState[0].story.length);
    expect(test[0].story[0].limit)
        .toEqual(finalState[0].story[0].limit);
    expect(test[0].story[0].isActive)
        .toEqual(finalState[0].story[0].isActive);
    expect(test[0].story[0].currentCount)
        .toEqual(finalState[0].story[0].currentCount);
  });
});
