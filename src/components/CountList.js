import React, {useState} from 'react';
import {connect} from 'react-redux';
import Count from './Count';
import {FaPlusCircle, FaMinusCircle, FaListUl} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import AddForm from './AddForm';
import {Clock} from '.';
import {stopTimer, startTimer, setShowOnlyThis, setShowAll} from '../redux/actions';
// FaListAlt

import ButtonList from './ButtonList';

const CountList = ({counts}) =>{
  const [isAddMode, setAddMode]=useState(false);

  return (
    <div className="container-timers">
      <div className="menu">
        <ButtonList/>
        <Clock/>
      </div>

      {
        counts.map((count, i)=>
          <Count key={i} {...count}/>, // id={count._id}
        )
      }
      {isAddMode&&
      <div>
        <AddForm/>
        <IconContext.Provider value={{color: '#DF9077'}}>
          <FaMinusCircle className="btn" onClick={()=>setAddMode(false)}/>
        </IconContext.Provider>
      </div>||
      <IconContext.Provider value={{color: '#DF9077'}}>
        <FaPlusCircle className="btn" onClick={()=>setAddMode(true)}/>
      </IconContext.Provider>
      }
    </div>

  );
};
// const mapDispatchToProps = (dispatch) =>({
//   printAll: ()=>{
//     dispatch(setShowAll());
//   },
// });
const mapStateToProps = (state) =>({
  counts: state.сounters,
});

export default connect(
    mapStateToProps,
    null,
)(CountList);
