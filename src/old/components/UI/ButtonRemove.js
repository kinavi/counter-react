import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {IconContext} from 'react-icons';
import {FaTimesCircle} from 'react-icons/fa';

import {ModalRemove} from './index';

import {removeCounter} from '../../redux/actions';

const ButtonRemove = ({onRemove}) =>{

  const [open, setOpen] = useState(false);

  const {id} = useParams();
  const history = useHistory();

  const handlerClick = (e) =>{
    setOpen(true);
    e.stopPropagation();
  };

  const handlerSubmit = (e) =>{
    onRemove(id);
    e.stopPropagation();
    history.push('/');
  };

  const handlerCancel = (e) =>{
    setOpen(false);
    e.stopPropagation();
  };

  return (
    <di>
      <IconContext.Provider value={{color: '#DF9077'}}>
        <FaTimesCircle onClick={handlerClick} className='btn'/>
      </IconContext.Provider>
      <ModalRemove
        isOpen={open}
        onSubmit={handlerSubmit}
        onCancel={handlerCancel}
      />
    </di>
  );
};

const mapDispatchToProps = (dispatch) =>({
  onRemove: (id)=>{
    dispatch(removeCounter(id));
  },
});

export default connect(
    null,
    mapDispatchToProps,
)(ButtonRemove);
