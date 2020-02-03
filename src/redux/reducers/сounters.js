//     Action:
//     - add-tracke
//     - remove-tracke
//     - edit-tracke

//     - start-count
//     - stop-count
export const TypeActions = {
  ADD_COUNTER: 'ADD_COUNTER',
  EDIT_COUNTER: 'EDIT_COUNTER',
  REMOVE_COUNTER: 'REMOVE_COUNTER',

  START_COUNTING: 'START_COUNTING',
  STOP_COUNTING: 'STOP_COUNTING',

  UPDATE_LAST_ID: 'UPDATE_LAST_ID',
};

export const SizeLevel = {
  1: 0,
  2: 25,
  3: 50,
  4: 100,
  5: 500,
  6: 1000,
  7: 1500,
  8: 2000,
  9: 5000,
  10: 10000,
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

const initialState = [{
  id: 1,
  name: 'React',
  count: 60,
  dateCreate: null,
  story: [{
    isActive: true,
    limit: 45,
    currentCount: 30,
    dateStart: null,
  }],
}];
//timeByLevel: null,
//dateStart: null,
//dateStop: null,
//leftTime: 15,
// dateStop: null,
const settingsState = {
  lastIdCounter: 2,
  lastIdRace: 2,
  limit: 45,
};

export const story = (state = [], action) =>{
  switch (action.type) {
    case TypeActions.START_COUNTING:
      return [{
        isActive: true,
        limit: action.limit,
        currentCount: 0,
        dateStart: new Date(),
      }, ...state];
    case TypeActions.STOP_COUNTING:
      return state.map((note) => (note.isActive)?{...note, isActive: false, currentCount: action.count}:note);
    default:
      return state;
  }
};


export const сounters = (state = [], action) => {
  switch (action.type) {
    case TypeActions.ADD_COUNTER:
      return [{
        id: action.id,
        name: action.name,
        dateCreate: new Date(),
        story: [],
      }, ...state];
    case TypeActions.EDIT_COUNTER:
      return state.map((counter)=>(counter.id==action.id)?{...counter, name: action.name}:counter);
    case TypeActions.REMOVE_COUNTER:
      return state.filter((counter)=>counter.id!=action.id);

    case TypeActions.START_COUNTING:
      return state.map((counter)=>(counter.id==action.id)?{...counter, story: story([], action)}:counter);
    case TypeActions.STOP_COUNTING:
      return state.map((counter)=>(counter.id==action.id)?{...counter, story: story(counter.story, action)}:counter);
    
    default:
      return state;
  }
};