!function(t,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/control-background"]=o():t["video/player/control-background"]=o()}(self,(function(){return function(){var t,o,e={49:function(t,o,e){var n=e(645)((function(t){return t[1]}));n.push([t.id,".bilibili-player-video-control-mask {\n  background: transparent !important;\n}\n.bilibili-player-video-control .bilibili-player-video-control-bottom {\n  background: rgba(0, 0, 0, var(--video-control-opacity)) !important;\n  margin: 5px 0 0 0 !important;\n  padding: 9px 0 0 !important;\n  height: 30px !important;\n}\nbody.player-mode-webfullscreen .bilibili-player-video-control .bilibili-player-video-control-bottom, body.player-fullscreen-fix .bilibili-player-video-control .bilibili-player-video-control-bottom, body.player-full-win .bilibili-player-video-control .bilibili-player-video-control-bottom {\n  margin: -2px 0 0 0 !important;\n  padding: 13px 0 0 !important;\n  height: 45px !important;\n}\n\nbody.video-control-progress-background .bui-track-video-progress .bui-bar-wrap {\n  background: rgba(0, 0, 0, var(--video-control-opacity)) !important;\n}",""]),t.exports=n},645:function(t){"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var o=[];return o.toString=function(){return this.map((function(o){var e=t(o);return o[2]?"@media ".concat(o[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
o.i=function(t,e,n){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);n&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),o.push(c))}},o}},494:function(t,o,e){var n=e(49);n&&n.__esModule&&(n=n.default),t.exports="string"==typeof n?n:n.toString()},407:function(t){"use strict";t.exports=coreApis.settings}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return e[t](i,i.exports,r),i.exports}o=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},r.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var a={};t=t||[null,o({}),o([]),o(o)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=o(l))Object.getOwnPropertyNames(l).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},r.d(i,a),i},r.d=function(t,o){for(var e in o)r.o(o,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:o[e]})},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return o}});var t=coreApis.utils.urls;const o={name:"playerControlBackground",displayName:"播放器控制栏背景色",tags:[componentsTags.video,componentsTags.style],description:{"zh-CN":"给视频播放器控制栏附上半透明的黑色, 代替原来的阴影."},entry:async({metadata:t})=>{const{addComponentListener:o}=await Promise.resolve().then(r.t.bind(r,407,23));o(`${t.name}.includeProgress`,(t=>{document.body.classList.toggle("video-control-progress-background",t)}),!0),o(`${t.name}.opacity`,lodash.debounce((t=>{document.documentElement.style.setProperty("--video-control-opacity",(t/100).toString())}),200),!0)},instantStyles:[{name:"playerControlBackground",style:()=>Promise.resolve().then(r.t.bind(r,494,23))}],urlInclude:t.playerUrls,options:{opacity:{displayName:"不透明度(%)",defaultValue:64,slider:{}},includeProgress:{displayName:"包括进度条",defaultValue:!0}},commitHash:"865f74492dbed4deec7cfde45e59789d02a3ba7a"}}(),i=i.component}()}));