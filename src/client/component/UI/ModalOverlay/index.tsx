import React from 'react';
import { Button } from '../Button';
import { Icons } from '../Icons';

type ModalOverlayPropsType = {
    onClose: () => void;
    children: JSX.Element | JSX.Element[] | string
}

export const ModalOverlay = (props: ModalOverlayPropsType): JSX.Element => {
  const {
    children, onClose,
  } = props;
  return (
    <div className="modal-overlay">
      <div className="modal-overlay__form">
        <div className="modal-overlay__haeder">
          <Button
            onClick={onClose}
            mix="modal-overlay__button-close"
          >
            {Icons.close}
          </Button>
        </div>
        <div className="modal-overlay__container">
          {children}
        </div>
      </div>
      <div className="modal-overlay__bg" />
    </div>
  );
};
