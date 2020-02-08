import React, { FunctionComponent } from 'react';
import './SearchInput.scss';
import iconSearch from '../../assets/Icon_search.svg';

interface Props {
  getValue: any,
}

const SearchInput: FunctionComponent<Props> = ({ getValue }) => {
  return (
    <div className='input-wrap'>
      <img src={iconSearch} alt="" className='icon-search' />
      <input type="text" className='search' placeholder='請輸入地址' onChange={getValue} />
    </div>
  );
}

export default React.memo(SearchInput, () => true);
