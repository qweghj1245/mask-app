(this["webpackJsonpmask-app"]=this["webpackJsonpmask-app"]||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/Icon_location_red.abc33708.svg"},21:function(e,t,n){e.exports=n.p+"static/media/Icon_location_orange.359a86cc.svg"},22:function(e,t,n){e.exports=n.p+"static/media/Icon_location_green.b0317730.svg"},23:function(e,t,n){e.exports=n.p+"static/media/Icon_search.7bf22ceb.svg"},24:function(e,t,n){e.exports=n.p+"static/media/img_bg_orange.0a9c376b.svg"},26:function(e,t,n){e.exports=n(83)},31:function(e,t,n){},33:function(e,t,n){},73:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(16),r=n.n(o),i=(n(31),n(25)),s=n(5),l=n.n(s),u=n(17),m=n(3),d=(n(33),n(18)),f=n.n(d),p=(n(55),n(19)),g=n.n(p),v=(n(73),n(4)),h=(n(74),n(75),n(76),n(20)),b=n.n(h),E=n(21),y=n.n(E),w=n(22),x=n.n(w),j=function(e){var t=e.allPlace,n=e.latitude,o=e.longitude,r=e.init,i=e.zoom,s=function(e,t){var n=e+t,a=v.icon({iconUrl:b.a,iconAnchor:[25,15]}),c=v.icon({iconUrl:y.a,iconAnchor:[25,15]}),o=v.icon({iconUrl:x.a,iconAnchor:[25,15]});return n<50?a:n>=50&&n<200?c:o},l=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=new v.LatLng(n,o);if(t.length&&n&&o){l.current=v.map("map",{center:e,zoom:i}),v.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(l.current);var a=new v.MarkerClusterGroup;l.current.addLayer(a),t.filter((function(e){return e.geometry.coordinates[1]>0&&e.geometry.coordinates[0]>0})).forEach((function(e,t){var c=new v.LatLng(e.geometry.coordinates[1],e.geometry.coordinates[0]),i=v.popup({minWidth:209,maxWidth:209}).setLatLng(c).setContent("\n            <div>\n              <div class='font-bold fz-16 text-333 mb-4'>".concat(e.name,"</div>\n              <div class='fz-12 text-left mb-4'>").concat(e.address,"</div>\n              <div class='fz-12 text-left mb-4'>\u71df\u696d\u6642\u9593\uff5c").concat(e.note||"\u7121\u6a19\u793a","</div>\n              <div class='fz-12 text-left mb-4'>\u9023\u7d61\u96fb\u8a71\uff5c").concat(e.phone,"</div>\n              <div class='fz-12 text-left text-CCC mb-8'>\u8cc7\u8a0a\u66f4\u65b0\u65bc ").concat(e.updated,"</div>\n              <div class='flex-row mb-8'>\n                <div class='orange mr-8'>\u6210\u4eba\u53e3\u7f69 ").concat(e.adultCount,"\u500b</div>\n                <div class='yellow'>\u5152\u7ae5\u53e3\u7f69 ").concat(e.childCount,'\u500b</div>\n              </div>\n              <div class="google google-').concat(t,'">Google \u8def\u7dda\u5c0e\u822a</div>\n            </div>\n          ')),l=v.marker(c,{icon:s(e.mask_adult,e.mask_child)});a.addLayer(l),l.bindPopup(i).on("click",(function(){i.openPopup()})).on("popupopen",(function(){var n=document.querySelector(".google-".concat(t));n&&n.addEventListener("click",(function(){window.open("https://www.google.com/maps/search/?api=1&query=".concat(e.geometry.coordinates[1],",").concat(e.geometry.coordinates[0]))}))})),e.geometry.coordinates[1]!==n||e.geometry.coordinates[0]!==o||r||l.openPopup()}))}return function(){l.current&&l.current.remove()}}),[t,n,o,r,i]),c.a.createElement("div",{id:"map"})},N=(n(77),n(78),c.a.memo((function(e){var t=e.isTab,n=e.children,a=e.click;return c.a.createElement("div",{className:"tab ".concat(t?"active":""),onClick:a},n)}),(function(){return!1}))),O=(n(79),n(23)),k=n.n(O),C=c.a.memo((function(e){var t=e.getValue,n=e.reset;return c.a.createElement("div",{className:"input-wrap"},c.a.createElement("img",{src:k.a,alt:"",className:"icon-search"}),c.a.createElement("input",{type:"search",className:"search",placeholder:"\u641c\u5c0b\u5340\u57df , \u5730\u5740 , \u85e5\u5c40",onKeyDown:t,onChange:n}))}),(function(){return!0})),S=c.a.memo((function(e){var t=e.setTab,n=e.getTab,o=e.isSelect,r=e.search,i=Object(a.useState)(!1),s=Object(m.a)(i,2),l=s[0],u=s[1];return c.a.createElement("div",{className:"search-box ".concat(l?"searching-box":null)},c.a.createElement(C,{getValue:function(e){var t=e.target.value;"Enter"===e.key&&(u(!!t),r(t))},reset:function(e){var t=e.target.value;t||(r(t),u(!1))}}),c.a.createElement("div",{className:"tabs ".concat(l?"searching-tabs":null)},["\u6240\u6709\u53e3\u7f69","\u6210\u4eba\u53e3\u7f69","\u5152\u7ae5\u53e3\u7f69"].map((function(e){return c.a.createElement(N,{key:e,isTab:o===e,click:function(){return function(e){t(e),n(e)}(e)}},e)}))))}),(function(){return!1})),z=n(6),T=n.n(z),_=(n(81),n(24)),L=n.n(_),P=c.a.memo((function(){return c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{src:L.a,alt:""}),c.a.createElement("div",null,T()(Date.now()).format("YYYY - MM - DD")),c.a.createElement("div",null,"\u661f\u671f",function(){switch(T()().day()){case 0:return"\u65e5";case 1:return"\u4e00";case 2:return"\u4e8c";case 3:return"\u4e09";case 4:return"\u56db";case 5:return"\u4e94";case 6:return"\u516d"}}()),c.a.createElement("div",{className:"flex"},c.a.createElement("div",{className:"inline"},"\u8eab\u5206\u8b49\u672b\u4e00\u78bc",c.a.createElement("span",null,"\u5076\u6578"),"\u5b57\u865f\u8005\u53ef\u8cfc\u8cb7\u53e3\u7f69")),c.a.createElement("div",null,"\u203b\u4e00\u9031\u9650\u8cfc\u4e00\u6b21\uff0c\u6bcf\u6b21\u4e00\u4eba\u9650\u8cfc\u5169\u7247"))}),(function(){return!0})),D=(n(82),c.a.memo((function(e){var t=e.place,n=e.isSelect,a=void 0===n?"\u6240\u6709\u53e3\u7f69":n,o=e.setPosition,r=function(){return t.adultCount+t.childCount};return c.a.createElement("div",{className:"place-box",onClick:function(){return o(t)}},c.a.createElement("div",{className:"font-bold fz-16 text-333 mb-4"},t.title),c.a.createElement("div",{className:"mb-4"},t.address),c.a.createElement("div",{className:"fz-12 mb-8"},"\u71df\u696d\u6642\u9593\uff5c",t.note||"\u7121\u6a19\u793a"),c.a.createElement("div",{className:"flex-row"},("\u6240\u6709\u53e3\u7f69"===a||"\u6210\u4eba\u53e3\u7f69"===a)&&t.adultCount>0?c.a.createElement("div",{className:"flex-row justify-between orange mr-8"},c.a.createElement("div",{className:"text"},"\u6210\u4eba\u53e3\u7f69"),c.a.createElement("div",{className:"text"},t.adultCount,"\u500b")):"\u5152\u7ae5\u53e3\u7f69"===a||0===r()?null:c.a.createElement("div",{className:"no-mask mr-8"},"\u53e3\u7f69\u7f3a\u8ca8\u4e2d"),("\u6240\u6709\u53e3\u7f69"===a||"\u5152\u7ae5\u53e3\u7f69"===a)&&t.childCount>0?c.a.createElement("div",{className:"flex-row justify-between yellow"},c.a.createElement("div",{className:"text"},"\u5152\u7ae5\u53e3\u7f69"),c.a.createElement("div",{className:"text"},t.childCount,"\u500b")):"\u6210\u4eba\u53e3\u7f69"===a||0===r()?null:c.a.createElement("div",{className:"no-mask mr-8"},"\u53e3\u7f69\u7f3a\u8ca8\u4e2d"),0===r()?c.a.createElement("div",{className:"no-mask mr-8"},"\u53e3\u7f69\u7f3a\u8ca8\u4e2d"):null),r()>0?c.a.createElement("div",{className:"triangle ".concat(function(e,t){var n=e+t;return n>200?"green":n>=50&&n<200?"oranges":"red"}(t.adultCount,t.childCount))}):null)}),(function(){return!1}))),Y=function(){var e=Object(a.useState)({latitude:0,longitude:0,init:!0,zoom:16}),t=Object(m.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)(!0),s=Object(m.a)(r,2),d=s[0],p=s[1],v=Object(a.useState)([]),h=Object(m.a)(v,2),b=h[0],E=h[1],y=Object(a.useState)("\u6240\u6709\u53e3\u7f69"),w=Object(m.a)(y,2),x=w[0],N=w[1],O=Object(a.useState)(""),k=Object(m.a)(O,2),C=k[0],z=k[1],T=Object(a.useState)({start:30,end:0}),_=Object(m.a)(T,2),L=_[0],Y=_[1],M=Object(a.useState)(),I=Object(m.a)(M,2)[1],W=Object(a.useRef)(0),A=Object(a.useRef)(0),H=Object(a.useState)(),R=Object(m.a)(H,2),U=R[0],q=R[1],B=Object(a.useMemo)((function(){var e=L.start,t=L.end;return C?b.filter((function(e){return e.title.includes(C)||e.address.includes(C)})):e&&t?b.filter((function(n,a){return a<e&&t>a})):b.filter((function(t,n){return n<e}))}),[L,b,C]),G=function(e){o({latitude:e.geometry.coordinates[1],longitude:e.geometry.coordinates[0],init:!1,zoom:18})};return Object(a.useEffect)((function(){Promise.all([void navigator.geolocation.getCurrentPosition(function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o({latitude:t.coords.latitude,longitude:t.coords.longitude,init:!0,zoom:16}),p(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),(p(!0),void g.a.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(e){var t=e.data.features.map((function(e){return Object(i.a)({geometry:e.geometry},e.properties,{title:e.properties.name,adultCount:e.properties.mask_adult,childCount:e.properties.mask_child})}));E(t)})).catch((function(){alert("\u7cfb\u7d71\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u518d\u91cd\u8a66"),p(!1)})))])}),[]),c.a.createElement(c.a.Fragment,null,d?c.a.createElement("div",{className:"relative"},c.a.createElement(f.a,{type:"ThreeDots",color:"orange",height:100,width:100,timeout:3e6})):c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"left"},c.a.createElement(P,null),c.a.createElement(S,{search:function(e){z(e)},setTab:function(){return N(x)},getTab:function(e){N(e)},isSelect:x}),c.a.createElement("div",{style:{bottom:"".concat(C?"0px":window.innerWidth>960?"0px":"-".concat(null===U||void 0===U?void 0:U.offsetHeight,"px")),transitionDuration:"".concat(C?".5s":"0s")},ref:function(e){return q(e)},className:"place-box-wrap",onScroll:function(e){(A.current=e.target.scrollTop,L.start>b.length||C)||e.target.scrollTop/e.target.scrollHeight*100>70&&Y({start:L.start+30,end:L.end+30})},onTouchStart:function(e){1===e.touches.length&&(U&&(U.style.transitionDuration="0s"),W.current=e.touches[0].pageY)},onTouchMove:function(e){1===e.touches.length&&U&&0===A.current&&(U.style.bottom="-".concat(e.touches[0].pageY-W.current,"px"))},onTouchEnd:function(e){1===e.changedTouches.length&&U&&(U.style.transitionDuration=".5s",e.changedTouches[0].pageY-W.current>U.offsetHeight/3&&0===A.current?(U.style.bottom="-".concat(U.offsetHeight,"px"),z("")):U.style.bottom="0px",I({}))}},B.length?B.map((function(e){return c.a.createElement(D,{key:e.id,place:e,isSelect:x,setPosition:G})})):c.a.createElement("div",{className:"no-data"},C&&!B.length?"\u7121\u641c\u5c0b\u8cc7\u6599":""))),c.a.createElement("div",{className:"right"},c.a.createElement(j,{init:n.init,latitude:n.latitude,longitude:n.longitude,allPlace:b,zoom:n.zoom}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.48f80035.chunk.js.map