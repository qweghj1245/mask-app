import React, { FunctionComponent } from 'react';
import './SearchInput.scss';
import iconSearch from '../../assets/Icon_search.svg';

interface Props {
  getValue: any,
  reset: any,
}

const SearchInput: FunctionComponent<Props> = ({ getValue, reset }) => {
  return (
    <div className='input-wrap'>
      <img src={iconSearch} alt="" className='icon-search' />
      <input type="search" className='search' placeholder='搜尋區域 , 地址 , 藥局' onKeyDown={getValue} onChange={reset}/>
    </div>
  );
}

export default React.memo(SearchInput, () => true);
