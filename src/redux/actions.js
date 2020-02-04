export const TypeActions = {
  ADD_COUNTER: 'ADD_COUNTER',
  EDIT_COUNTER: 'EDIT_COUNTER',
  REMOVE_COUNTER: 'REMOVE_COUNTER',

  START_COUNTING: 'START_COUNTING',
  STOP_COUNTING: 'STOP_COUNTING',

  UPDATE_LAST_ID: 'UPDATE_LAST_ID',
};

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
