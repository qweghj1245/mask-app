import React, { FunctionComponent } from 'react';
// import moment from 'moment';
import './PlaceBox.scss';

interface Props {
  place: any,
  isSelect: string,
}

const PlaceBox: FunctionComponent<Props> = ({ place, isSelect = '所有口罩' }) => {
  const allMask = (): number => {
    return place.adultCount + place.childCount;
  }

  const maskResultColor = (adult: number, child: number): string => {
    const all = adult + child;
    if (all > 100) {
      return 'green';
    } else if (all > 50 && all < 100) {
      return 'oranges';
    } else {
      return 'red';
    }
  }

  return (
    <div className='place-box'>
      <div className='font-bold fz-16 text-333 mb-4'>{place.title}</div>
      <div className='mb-4'>{place.address}</div>
      <div className='fz-12 mb-8'>營業時間｜{place.note||'無標示'}</div>
      <div className='flex-row'>
        {
          (isSelect === '所有口罩' || isSelect === '成人口罩') && place.adultCount > 0 ?
            <div className='flex-row justify-between orange mr-8'>
              <div className='text'>成人口罩</div>
              <div className='text'>{place.adultCount}個</div>
            </div> : isSelect === '兒童口罩' || allMask() === 0 ? null : <div className='no-mask mr-8'>口罩缺貨中</div>
        }
        {
          (isSelect === '所有口罩' || isSelect === '兒童口罩') && place.childCount > 0 ?
            <div className='flex-row justify-between yellow'>
              <div className='text'>兒童口罩</div>
              <div className='text'>{place.childCount}個</div>
            </div> : isSelect === '成人口罩' || allMask() === 0 ? null : <div className='no-mask mr-8'>口罩缺貨中</div>
        }
        {
          allMask() === 0 ? <div className='no-mask mr-8'>口罩缺貨中</div> : null
        }
      </div>
      <div className={`triangle ${maskResultColor(place.adultCount, place.childCount)}`}></div>
    </div>
  );
}

export default React.memo(PlaceBox, () => false);
