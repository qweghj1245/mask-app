import React from 'react';
import moment from 'moment';
import './HeadImage.scss';

import LeftImage from '../../assets/img_bg_orange.svg';

const HeadImage = () => {
  const days = () => {
    switch (moment().day()) {
      case 0:
        return '日';
      case 1:
        return '一';
      case 2:
        return '二';
      case 3:
        return '三';
      case 4:
        return '四';
      case 5:
        return '五';
      case 6:
        return '六';
      default:
        break;
    }
  }
  return (
    <div className='image-wrapper'>
      <img src={LeftImage} alt="" />
      <div>{moment(Date.now()).format('YYYY - MM - DD')}</div>
      <div>星期{days()}</div>
      <div className='flex'>
        <div className='inline'>身分證末一碼<span>偶數</span>字號者可購買口罩</div>
      </div>
      <div>※一週限購一次，每次一人限購兩片</div>
    </div>
  );
}

export default React.memo(HeadImage, () => true);;
