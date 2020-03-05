import React from 'react';

export const ModalEdit = ({input, isOpen, onSubmit, onCancel}) =>{
  return (
    isOpen&&
    <div className='modal' onClick={onCancel}>
      <div className='modal-dialog' onClick={(e)=>{
        e.stopPropagation();
      }}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4>Edit</h4>
          </div>
          <div className='modal-body'>
            <span>Enter a new title</span><br/>
            <input ref={input} type="text" size="15" maxLength="15"/>
          </div>
          <div className='modal-footer'>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>

  );
};
