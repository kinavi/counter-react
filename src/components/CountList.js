import React, {useState} from 'react';
import {connect} from 'react-redux';
import Count from './Count';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import AddForm from './AddForm';


export const CountList = ({counts}) =>{
  const [isAddMode, setAddMode]=useState(false);

  return (
    <div className="container-timers">
      {
        counts.map((count, i)=>
          <Count key={i} id={count._id} {...count}/>,
        )
      }
      {isAddMode&&
      <div style={{margin: 'auto', display: 'inherit'}}>
        <AddForm/>
        <IconContext.Provider value={{color: '#DF9077'}}>
          <FaMinusCircle className="btn-add" onClick={()=>setAddMode(false)}/>
        </IconContext.Provider>
      </div>||
      <IconContext.Provider value={{color: '#DF9077'}}>
        <FaPlusCircle className="btn-add" onClick={()=>setAddMode(true)}/>
      </IconContext.Provider>
      }
    </div>

  );
};

const mapStateToProps = (state) =>({
  counts: state,
});

export default connect(
    mapStateToProps,
    null,
)(CountList);
