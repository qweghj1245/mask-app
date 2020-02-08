import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Map from './components/Map/Map';
import SearchBox from './components/SearchBox/SearchBox';
import HeadImage from './components/HeadImage/HeadImage';
import PlaceBox from './components/PlaceBox/PlaceBox';
interface iAllPlace {
  id: string,
  title: string,
  address: string,
  // startTime: number,
  // endTime: number,
  adultCount: number,
  childCount: number,
}

interface iAllCount {
  start: number,
  end: number,
}

const App = () => {
  const [allPlace, setAllPlace] = useState<iAllPlace[]>([]);
  const [isTab, setIsTab] = useState<string>('所有口罩');
  const [searchText, setSearchText] = useState<string>('');
  const [allCount, setAllCount] = useState<iAllCount>({
    start: 30,
    end: 0,
  });

  const getTab = (tab: string) => {
    setIsTab(tab);
  }

  const filterAllPlace = () => {
    const { start, end } = allCount;
    if (searchText) {
      return allPlace.filter(item => item.title.includes(searchText) || item.address.includes(searchText));
    }
    if (start && end) {
      return allPlace.filter((item: any, idx: number) => idx < start && end > idx);
    }
    return allPlace.filter((item: any, idx: number) => idx < start);
  };

  const scrolling = (e: any) => {
    if (allCount.start > allPlace.length || searchText) return;
    let top = e.target.scrollTop;
    let height = e.target.scrollHeight;
    if (top / height * 100 > 70) setAllCount({ start: allCount.start + 30, end: allCount.end + 30 });
  }

  const search = (e: string) => {
    setSearchText(e);
  }

  const getMaskData = () => {
    axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').then(res => {
      console.log(res);
      let store = res.data.features.map((item: any) => {
        return {
          geometry: item.geometry,
          ...item.properties,
          title: item.properties.name,
          adultCount: item.properties.mask_adult,
          childCount: item.properties.mask_child,
        };
      });
      setAllPlace(store);
    });
  }

  useEffect(() => {
    getMaskData();
  }, []);
  
  return (
    <div className="App">
      <div className="left">
        <HeadImage />
        <SearchBox search={search} setTab={() => setIsTab(isTab)} getTab={getTab} isSelect={isTab} />
        <div className="place-box-wrap" onScroll={scrolling}>
          {
            filterAllPlace().map(place => <PlaceBox key={place.id} place={place} isSelect={isTab} />)
          }
        </div>
      </div>
      <div className="right">
        <Map />
      </div>
    </div>
  );
}

export default App;

// id: "5901103227"
// name: "建誠中西藥局"
// phone: "02 -25158608"
// address: "台北市中山區龍江路385之1號"
// mask_adult: 2
// mask_child: 18
// updated: "2020/02/09 01:27:06"
// available: "星期一上午看診、星期二上午看診、星期三上午看診、星期四上午看診、星期五上午看診、星期六上午看診、星期日上午休診、星期一下午看診、星期二下午看診、星期三下午看診、星期四下午看診、星期五下午看診、星期六下午看診、星期日下午休診、星期一晚上看診、星期二晚上看診、星期三晚上看診、星期四晚上看診、星期五晚上看診、星期六晚上看診、星期日晚上休診"
// note: ""
// custom_note: ""
// website: ""