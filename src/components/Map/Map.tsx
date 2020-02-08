import React, { useEffect } from 'react';
import './Map.scss';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import iconRed from '../../assets/Icon_location_red.svg';

const Map = () => {
  useEffect(() => {
    let position = new L.LatLng(25.0861321, 121.4729058);
    const map = L.map('map', {
      center: position,
      zoom: 15,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const myIcon = L.icon({
      iconUrl: iconRed,
      iconAnchor: [25, 15],
    });
    const pop = L.popup({
      minWidth: 209,
      maxWidth: 209,
    })
      .setLatLng(position)
      .setContent(`
        <div>
          <div class='font-bold fz-16 text-333 mb-4'>合康健保藥局</div>
          <div class='fz-12 text-left mb-4'>24154新北市三重區三和路四段384號</div>
          <div class='fz-12 text-left mb-4'>營業時間｜9:00 - 22:30</div>
          <div class='fz-12 text-left mb-4'>連絡電話｜02 2286 8999</div>
          <div class='fz-12 text-left text-CCC mb-8'>資訊更新於 4分鐘前</div>
          <div class='flex-row mb-8'>
            <div class='orange mr-8'>成人口罩 72個</div>
            <div class='yellow'>兒童口罩 42個</div>
          </div>
          <div class="google">Google 路線導航</div>
        </div>
      `);
    L.marker(position, { icon: myIcon }).addTo(map).bindPopup(pop).on('click', function () {
      pop.openPopup();
    });
  }, []);
  return (
    <div id="map"></div>
  )
}

export default Map;