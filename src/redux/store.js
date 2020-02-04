import {createStore} from 'redux';
import {сounters} from './reducers/сounters';
// const initialState = [{
//   id: 1,
//   name: 'React',
//   count: 60,
//   dateCreate: null,
//   story: [{
//     isActive: true,
//     limit: 45,
//     currentCount: 30,
//     dateStart: null,
//   }],
// }];

const storeFactory = (initialState = {}) =>
  createStore(
      сounters,
      initialState,
  );

export default storeFactory;
