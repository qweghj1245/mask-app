import React from 'react';
import './HeadImage.scss';

import LeftImage from '../../assets/img_bg_orange.svg';

const HeadImage = () => {
  return (
    <div className='image-wrapper'>
      <img src={LeftImage} alt="" />
      <div>2020 - 02 - 06</div>
      <div>星期四</div>
      <div>身分證末一碼<span>偶數</span>字號者可購買口罩</div>
      <div>※一週限購一次，每次一人限購兩片</div>
    </div>
  );
}

export default React.memo(HeadImage, () => true);;
