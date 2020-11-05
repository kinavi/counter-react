import React, {useState} from 'react';

import {IconContext} from 'react-icons';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';

import AddForm from './AddForm';

export const ControllPanel = () =>{
  const [isAddMode, setAddMode]=useState(false);

  const ShowAddForm = () =>{
    setAddMode(true);
  };

  const hideAddForm = () =>{
    setAddMode(false);
  };

  return (
    isAddMode&&
        <div>
          <AddForm onHideAddForm={hideAddForm}/>
          <IconContext.Provider value={{color: '#DF9077'}}>
            <FaMinusCircle className="btn" onClick={hideAddForm}/>
          </IconContext.Provider>
        </div>||
        <IconContext.Provider value={{color: '#DF9077'}}>
          <FaPlusCircle className="btn" onClick={ShowAddForm}/>
        </IconContext.Provider>
  );
};
