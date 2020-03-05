import {TypeActions} from '../actions';

export const сounters = (state = [], action) => {
  switch (action.type) {
    case TypeActions.ADD_COUNTER:
      return [...state, {
        _id: action._id,
        name: action.name,
        count: action.count,
        dateCreate: action.dateCreate,
      }];
    case TypeActions.REMOVE_COUNTER:
      return state.filter((item)=>item._id!=action.id);
    case TypeActions.EDIT_COUNTER:
      return state.map((item)=>(item._id==action.id? {
        ...item,
        name: action.title,
      }:item));
      // case TypeActions.EDIT_COUNTER:
      //   return state.map((counter)=>
      //   (counter.id==action.id)?
      //   {
      //     ...counter,
      //     name: action.name,
      //   }:
      //   counter,
      //   );
      // case TypeActions.REMOVE_COUNTER:
      //   return state.filter((counter)=>
      //     counter.id!=action.id,
      //   );


    case TypeActions.STOP_COUNTING:
      return state.map((el)=>
      (el._id==action.idTime)?{
        ...el,
        count: action.count,
      }: el);

    // case TypeActions.SHOW_ONLY_COUNTER:
    //   return state.map((counter)=>
    //       (counter._id!=action.id)?
    //         {...counter, isHide: true}:
    //         {...counter, isHide: false},
    //   );

    // case TypeActions.SHOW_ALL_COUNTER:
    //   return state.map((counter)=> {
    //     return {...counter, isHide: false};
    //   });
    default:
      return state;
  }
};
