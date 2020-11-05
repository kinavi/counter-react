import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { FaPlus } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { addCounter } from '../redux/actions';

const AddForm = ({ onAdd, onHideAddForm }) => {
  const inputEl = useRef(null);
  const onClickAddBtn = () => {
    onHideAddForm();
    onAdd(inputEl.current.value);
  };
  return (
    <div className="container-add-form">
      <div className="title">Title</div>
      <input className="field-input" ref={inputEl} />
      <IconContext.Provider value={{ color: '#6F4D46' }}>
        <FaPlus className="btn-add" onClick={onClickAddBtn} />
      </IconContext.Provider>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAdd: (name) => {
    dispatch(addCounter(name));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AddForm);
