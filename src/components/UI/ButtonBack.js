import React from 'react';
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import {IconContext} from 'react-icons';
import {
  useHistory,
} from 'react-router-dom';

export const ButtonBack = () => {
  const history = useHistory();

  const handlerClick = (e) =>{
    history.push(`/`);
    e.stopPropagation();
  };

  return (
    <div onClick={handlerClick}>
      <IconContext.Provider value={{color: '#DF9077'}}>
        <FaRegArrowAltCircleLeft className='btn'/>
      </IconContext.Provider>
    </div>

  );
};
