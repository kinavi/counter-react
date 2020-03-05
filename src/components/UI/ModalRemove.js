import React from 'react';

export const ModalRemove = ({isOpen, onSubmit, onCancel}) =>{
  return (
    isOpen&&
    <div className='modal' onClick={onCancel}>
      <div className='modal-dialog' onClick={(e)=>{
        e.stopPropagation();
      }}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4>Remove</h4>
          </div>
          <div className='modal-body'>
            <span>Are you sure you want to remove?</span>
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
