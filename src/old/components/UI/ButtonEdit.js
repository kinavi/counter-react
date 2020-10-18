import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaRegCircle } from 'react-icons/fa';

import { ModalEdit } from './index';
import { editeCounter } from '../../redux/actions';

const ButtonEdit = ({ onEdit }) => {
  const input = useRef(null);
  const [open, setOpen] = useState(false);

  const { id } = useParams();

  const handlerClick = (e) => {
    setOpen(true);
    e.stopPropagation();
  };

  const handlerSubmit = (e) => {
    onEdit(id, input.current.value);
    e.stopPropagation();
    setOpen(false);
  };

  const handlerCancel = (e) => {
    setOpen(false);
    e.stopPropagation();
  };

  return (
    <di>
      <IconContext.Provider value={{ color: '#DF9077' }}>
        <FaRegCircle onClick={handlerClick} className="btn" />
      </IconContext.Provider>
      <ModalEdit
        input={input}
        isOpen={open}
        onSubmit={handlerSubmit}
        onCancel={handlerCancel}
      />
    </di>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onEdit: (id, name) => {
    dispatch(editeCounter(id, name));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ButtonEdit);
