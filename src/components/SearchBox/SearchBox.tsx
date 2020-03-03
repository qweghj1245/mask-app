import React, { FunctionComponent, useState } from 'react';
import './SearchBox.scss';
import Tabs from '../Tab/Tab';
import SearchInput from '../SearchInput/SearchInput';

interface Props {
  getTab: any,
  setTab: any,
  isSelect: string,
  search: any,
}

const SearchBox: FunctionComponent<Props> = ({ setTab, getTab, isSelect, search }) => {
  const tabGroup: string[] = ['所有口罩', '成人口罩', '兒童口罩'];
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const resetSearch = (e:any): void => {
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

  const setTabs = (tab: string): void => {
    setTab(tab);
    getTab(tab);
  }

  return (
    <div className={`search-box ${isSearch ? 'searching-box' : null}`}>
      <SearchInput getValue={getValue} reset={resetSearch}/>
      <div className={`tabs ${isSearch ? 'searching-tabs' : null}`}>
        {
          tabGroup.map(tab => <Tabs key={tab} isTab={isSelect === tab} click={() => setTabs(tab)}>{tab}</Tabs>)
        }
      </div>
    </div>
  );
}

export default React.memo(SearchBox, () => false);
