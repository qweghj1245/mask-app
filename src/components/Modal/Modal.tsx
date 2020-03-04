import React, { FunctionComponent } from 'react';
import './Modal.scss';

interface Props {
  children: any,
}

const Modal: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className='modal-wrap'>
      <div className='modal-content'>
        {children}
      </div>
    </div>
  );
}

export default Modal;