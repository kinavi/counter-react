import React, {useState} from 'react';
import {FaPlusCircle, FaMinusCircle, FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {connect} from 'react-redux';
import {stopTimer, startTimer, setShowOnlyThis, setShowAll} from '../redux/actions';

const ButtonList = ({printAll}) => {
  return (
    <IconContext.Provider value={{color: '#DF9077'}}>
      <FaRegArrowAltCircleLeft className='btn' onClick={printAll}/>
    </IconContext.Provider>
  );
};
const mapDispatchToProps = (dispatch) =>({
  printAll: ()=>{
    dispatch(setShowAll());
  },
});
export default connect(
    null,
    mapDispatchToProps,
)(ButtonList);
