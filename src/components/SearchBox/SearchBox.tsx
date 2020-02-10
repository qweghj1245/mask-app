import React, { FunctionComponent } from 'react';
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

  const getValue = (e: any): void => {
    // console.log(e.target.value);
    search(e.target.value);
  }

  const setTabs = (tab: string): void => {
    setTab(tab);
    getTab(tab);
  }

  return (
    <div className="search-box">
      <SearchInput getValue={getValue} />
      <div className="tabs">
        {
          tabGroup.map(tab => <Tabs key={tab} isTab={isSelect === tab} click={() => setTabs(tab)}>{tab}</Tabs>)
        }
      </div>
      {/* <div className="sub">附近尚有 <span>2</span> 家藥局供應口罩</div> */}
    </div>
  );
}

export default React.memo(SearchBox, () => false);
