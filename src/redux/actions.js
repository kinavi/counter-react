export const TypeActions = {

  ADD_TIMER: 'ADD_TIMER',

  ADD_COUNTER: 'ADD_COUNTER',
  EDIT_COUNTER: 'EDIT_COUNTER',
  REMOVE_COUNTER: 'REMOVE_COUNTER',

  START_COUNTING: 'START_COUNTING',
  STOP_COUNTING: 'STOP_COUNTING',

  UPDATE_LAST_ID: 'UPDATE_LAST_ID',

  // FETCH_TIMERS: 'FETCH_TIMERS',
};

// import {Timer} from '../server-v2';

// export const fetchTimer = () => async (dispatch) => {
//   const res = await Timer.find({});
//   console.log(res);
//   dispatch({
//     type: FETCH_TIMERS,
//     payload: res,
//   });
// };

const parseResponse = (response) => response.json();

const logError = (error) => console.error(error);

export const addTimer = (title) => (dispatch)=>
  fetch('/api/add', {
    method: 'POST',
    body: JSON.stringify({title}),
    headers: {'Content-Type': 'application/json'},
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const startTimer = (id, dateStart) => (dispatch) =>
  fetch('/api/start', {
    method: 'PUT',
    body: JSON.stringify({id, dateStart}),
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const stopTimer = (id, count, dateStop) => (dispatch) =>
  fetch('/api/stop', {
    method: 'PUT',
    body: JSON.stringify({id, count, dateStop}),
    headers: {'Content-Type': 'application/json'},

    credentials: 'include',
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const startCountingAC = (id, limit) => (
  {
    type: TypeActions.START_COUNTING,
    id,
    limit,

  }
);


export const stopCountingAC = (id, count) => (
  {
    type: TypeActions.STOP_COUNTING,
    id,
    count,

  }
);


export const addCounterAC = (id, name) => (
  {
    type: TypeActions.ADD_COUNTER,
    id,
    name,
  }
);

export const editCounterAC = (id, name) => (
  {
    type: TypeActions.EDIT_COUNTER,
    id,
    name,
  }
);

export const removeCounterAC = (id) => (
  {
    type: TypeActions.REMOVE_COUNTER,
    id,
    name,
  }
);
