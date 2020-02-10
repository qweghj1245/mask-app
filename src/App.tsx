import React, { useState, useEffect } from 'react';
import './App.scss';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
interface iLocation {
  latitude: number,
  longitude: number,
  init: boolean,
}

const App = () => {
  const [location, setLocation] = useState<iLocation>({
    latitude: 0,
    longitude: 0,
    init: true,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  const getGeolocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      setLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        init: true,
      });
      setIsLoading(false);
    });
  }

  const getMaskData = () => {
    setIsLoading(true);
    axios.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').then(res => {
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
    }).catch(() => {
      alert('系統發生錯誤，請再重試');
      setIsLoading(false);
    });
  }

  const setPosition = (e:any) => {
    setLocation({
      latitude: e.geometry.coordinates[1],
      longitude: e.geometry.coordinates[0],
      init: false,
    });
  }

  useEffect(() => {
    Promise.all([getGeolocation(), getMaskData()]);
  }, []);

  return (
    <React.Fragment>
      {
        isLoading ?
          <div className='relative'>
            <Loader
              type="ThreeDots"
              color="orange"
              height={100}
              width={100}
              timeout={3000000}
            />
          </div>
          :
          <div className="App">
            <div className="left">
              <HeadImage />
              <SearchBox search={search} setTab={() => setIsTab(isTab)} getTab={getTab} isSelect={isTab} />
              <div className="place-box-wrap" onScroll={scrolling}>
                {
                  filterAllPlace().map(place => <PlaceBox key={place.id} place={place} isSelect={isTab} setPosition={setPosition}/>)
                }
              </div>
            </div>
            <div className="right">
              <Map init={location.init} latitude={location.latitude} longitude={location.longitude} allPlace={allPlace} />
            </div>
          </div>
      }


    </React.Fragment>

  );
}

export default App;