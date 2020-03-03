import React, {useState} from 'react';
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import AddForm from './AddForm';

export const ControllPanel = () =>{
  const [isAddMode, setAddMode]=useState(false);

  const ShowAddForm = () =>{
    setAddMode(true);
  };

  const HideAddForm = () =>{
    setAddMode(false);
  };
  return (
    isAddMode&&
        <div>
          <AddForm HideAddForm={HideAddForm}/>
          <IconContext.Provider value={{color: '#DF9077'}}>
            <FaMinusCircle className="btn" onClick={HideAddForm}/>
          </IconContext.Provider>
        </div>||
        <IconContext.Provider value={{color: '#DF9077'}}>
          <FaPlusCircle className="btn" onClick={ShowAddForm}/>
        </IconContext.Provider>
  );
};
