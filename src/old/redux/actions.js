export const TypeActions = {

  ADD_COUNTER: 'ADD_COUNTER',
  EDIT_COUNTER: 'EDIT_COUNTER',
  REMOVE_COUNTER: 'REMOVE_COUNTER',

  START_COUNTING: 'START_COUNTING',
  STOP_COUNTING: 'STOP_COUNTING',

  UPDATE_LAST_ID: 'UPDATE_LAST_ID',

  SHOW_ONLY_COUNTER: 'SHOW_ONLY_COUNTER',
  SHOW_ALL_COUNTER: 'SHOW_ALL_COUNTER',
};

const parseResponse = (response) => response.json();

const logError = (error) => console.error(error);

export const addCounter = (name) => (dispatch)=>
  fetch('/api/add', {
    method: 'POST',
    body: JSON.stringify({name}),
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

export const editeCounter = (id, name) => (dispatch) =>
  fetch('/api/edit', {
    method: 'PUT',
    body: JSON.stringify({id, name}),
    headers: {'Content-Type': 'application/json'},
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const startCounter = (id, dateStart) => (dispatch) =>
  fetch('/api/start', {
    method: 'PUT',
    body: JSON.stringify({id, dateStart}),
    headers: {'Content-Type': 'application/json'},
    credentials: 'include',
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

export const stopCounter = (idCount, idStory, value, dateStop) => (dispatch) =>
  fetch('/api/stop', {
    method: 'PUT',
    body: JSON.stringify({idCount, idStory, value, dateStop}),
    headers: {'Content-Type': 'application/json'},

    credentials: 'include',
  })
      .then(parseResponse)
      .then(dispatch)
      .catch(logError);

