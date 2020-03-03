import React, { FunctionComponent, useState } from 'react';
import './SearchInput.scss';
import iconSearch from '../../assets/Icon_search.svg';

interface Props {
  getValue: any,
  reset: any,
  parentSearch: string,
}

const SearchInput: FunctionComponent<Props> = ({ getValue, reset, parentSearch }) => {
  const [inputValue, setInputValue] = useState<string>(parentSearch);
  const setValue = (e: any) => {
    setInputValue(e.target.value);
    reset(e);
  }
  return (
    <div className='input-wrap'>
      <img src={iconSearch} alt="" className='icon-search' />
      <input type="search" value={inputValue} className='search' placeholder='搜尋區域 , 地址 , 藥局' onKeyDown={getValue} onChange={setValue}/>
    </div>
  );
}

export default React.memo(SearchInput, () => true);
