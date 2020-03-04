import React, { FunctionComponent, useState } from 'react';
import './SearchBox.scss';
import Tabs from '../Tab/Tab';
import SearchInput from '../SearchInput/SearchInput';
import { ReactComponent as Arrow } from '../../assets/Ico_ios_arrowback.svg';
interface Props {
  getTab: any,
  setTab: any,
  isSelect: string,
  search: any,
  parentSearch: string,
  resetList: any,
  isSetLocation: boolean,
}

const SearchBox: FunctionComponent<Props> = ({ setTab, getTab, isSelect, search, parentSearch, resetList, isSetLocation }) => {
  const tabGroup: string[] = ['所有口罩', '成人口罩', '兒童口罩'];
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const resetSearch = (e: any): void => {
    let value = e.target.value;
    if (!value) {
      search(value);
      setIsSearch(false);
    }
  }

  const getValue = (e: any): void => {
    let value = e.target.value;
    if (e.key === 'Enter') {
      setIsSearch(!!value);
      search(value);
    }
  }

  const clickSearch = (value: string) => {
    setIsSearch(!!value);
    search(value);
  }

  const setTabs = (tab: string): void => {
    setTab(tab);
    getTab(tab);
  }

  return (
    <React.Fragment>
      <div className={`search-box ${(isSearch && parentSearch) || isSetLocation ? 'searching-box' : ''}`}>
        <SearchInput parentSearch={parentSearch} getValue={getValue} reset={resetSearch} clickSearch={clickSearch} />
        <div className={`tabs ${isSearch && parentSearch ? 'searching-tabs' : ''}`}>
          {
            tabGroup.map(tab => <Tabs key={tab} isTab={isSelect === tab} click={() => setTabs(tab)}>{tab}</Tabs>)
          }
        </div>
      </div>
      <div className={`back-list ${isSetLocation ? 'block' : ''}`} onClick={resetList}>
        <Arrow className='arrow' />
        返回列表
      </div>
    </React.Fragment>
  );
}

export default SearchBox;
