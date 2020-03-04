import React, { FunctionComponent } from 'react';
import './ModalHeadImage.scss';
import Modal from '../Modal/Modal';
import HeadImage from '../HeadImage/HeadImage';

const ModalHeadImage: FunctionComponent = () => {
  return (
    <div className='modal-head'>
      <Modal>
        <HeadImage />
      </Modal>
    </div>
  );
}

export default React.memo(ModalHeadImage);