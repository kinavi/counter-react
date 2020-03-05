import {disconnect} from 'mongoose';

export const TypeActions = {

  ADD_COUNTER: 'ADD_COUNTER',

  // ADD_COUNTER: 'ADD_COUNTER',
  EDIT_COUNTER: 'EDIT_COUNTER',
  REMOVE_COUNTER: 'REMOVE_COUNTER',

  START_COUNTING: 'START_COUNTING',
  STOP_COUNTING: 'STOP_COUNTING',

  UPDATE_LAST_ID: 'UPDATE_LAST_ID',

  SHOW_ONLY_COUNTER: 'SHOW_ONLY_COUNTER',
  SHOW_ALL_COUNTER: 'SHOW_ALL_COUNTER',
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

export const setShowAll = () => (dispatch) =>{
  fetch('/api/show', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
  })
      .then(parseResponse)
      // .then(console.log)
      .then(dispatch)
      .catch(logError);
};

export const setShowOnlyThis = (id) => (dispatch) =>{
  fetch('/api/show', {
    method: 'PUT',
    body: JSON.stringify({id}),
    headers: {'Content-Type': 'application/json'},
  })
      .then(parseResponse)
      // .then(console.log)
      .then(dispatch)
      .catch(logError);
};

export const addCounter = (title) => (dispatch)=>
  fetch('/api/add', {
    method: 'POST',
    body: JSON.stringify({title}),
    headers: {'Content-Type': 'application/json'},
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const removeCounter = (id) => (dispatch) =>
  fetch('/api/remove', {
    method: 'DELETE',
    body: JSON.stringify({id}),
    headers: {'Content-Type': 'application/json'},
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const editeCounter = (id, title) => (dispatch) =>
  fetch('/api/edit', {
    method: 'PUT',
    body: JSON.stringify({id, title}),
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

export const stopTimer = (id, idStory, count, dateStop) => (dispatch) =>
  fetch('/api/stop', {
    method: 'PUT',
    body: JSON.stringify({id, idStory, count, dateStop}),
    headers: {'Content-Type': 'application/json'},

    credentials: 'include',
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

// export const startCountingAC = (id, limit) => (
//   {
//     type: TypeActions.START_COUNTING,
//     id,
//     limit,

//   }
// );


// export const stopCountingAC = (id, count) => (
//   {
//     type: TypeActions.STOP_COUNTING,
//     id,
//     count,

//   }
// );


// export const addCounterAC = (id, name) => (
//   {
//     type: TypeActions.ADD_COUNTER,
//     id,
//     name,
//   }
// );

// export const editCounterAC = (id, name) => (
//   {
//     type: TypeActions.EDIT_COUNTER,
//     id,
//     name,
//   }
// );

// export const removeCounterAC = (id) => (
//   {
//     type: TypeActions.REMOVE_COUNTER,
//     id,
//     name,
//   }
// );
