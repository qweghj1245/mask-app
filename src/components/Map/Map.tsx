import React, { useEffect, FunctionComponent, useState, useRef } from 'react';
import './Map.scss';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet/dist/leaflet.css";
import iconRed from '../../assets/Icon_location_red.svg';
import iconOrange from '../../assets/Icon_location_orange.svg';
import iconGreen from '../../assets/Icon_location_green.svg';

interface Props {
  allPlace: object[],
  latitude: number,
  longitude: number,
}

const Map: FunctionComponent<Props> = ({ allPlace, latitude, longitude }) => {
  const Icon = (adult: number, child: number) => {
    const allMask = adult + child;
    const redIcon = L.icon({
      iconUrl: iconRed,
      iconAnchor: [25, 15],
    });
    const orangeIcon = L.icon({
      iconUrl: iconOrange,
      iconAnchor: [25, 15],
    });
    const greenIcon = L.icon({
      iconUrl: iconGreen,
      iconAnchor: [25, 15],
    });
    if (allMask < 50) {
      return redIcon;
    } else if (allMask >= 50 && allMask < 100) {
      return orangeIcon;
    } else {
      return greenIcon;
    }
  };
  const map = useRef<any>(null);
  useEffect(() => {
    let position = new L.LatLng(latitude, longitude);
    if (allPlace.length&&latitude&&longitude) {
      map.current = L.map('map', {
        center: position,
        zoom: 18,
      })
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map.current);
      const cluster = new L.MarkerClusterGroup().addTo(map.current);
      allPlace.forEach((item: any, idx: number) => {
        let itemPos = new L.LatLng(item.geometry.coordinates[1], item.geometry.coordinates[0]);
        const pop = L.popup({
          minWidth: 209,
          maxWidth: 209,
        })
          .setLatLng(itemPos)
          .setContent(`
            <div>
              <div class='font-bold fz-16 text-333 mb-4'>${item.name}</div>
              <div class='fz-12 text-left mb-4'>${item.address}</div>
              <div class='fz-12 text-left mb-4'>營業時間｜${item.note || '無標示'}</div>
              <div class='fz-12 text-left mb-4'>連絡電話｜${item.phone}</div>
              <div class='fz-12 text-left text-CCC mb-8'>資訊更新於 ${item.updated}</div>
              <div class='flex-row mb-8'>
                <div class='orange mr-8'>成人口罩 ${item.adultCount}個</div>
                <div class='yellow'>兒童口罩 ${item.childCount}個</div>
              </div>
              <div class="google google-${idx}">Google 路線導航</div>
            </div>
          `);
        cluster.addLayer(L.marker(itemPos, { icon: Icon(item.mask_adult, item.mask_child) }).bindPopup(pop).on('click', function () {
          pop.openPopup();
        }).on('popupopen', () => {
          const google = document.querySelector(`.google-${idx}`);
          if (google) {
            google.addEventListener('click', () => {
              window.open(`https://www.google.com/maps/search/?api=1&query=${item.geometry.coordinates[1]},${item.geometry.coordinates[0]}`);
            });
          }
        }));
      })
    }
    return () => {
      map.current.remove();
    }
  }, [allPlace, latitude, longitude]);
  return (
    <div id="map"></div>
  )
}

export default Map;