!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/showgirl"]=t():e["live/showgirl"]=t()}(globalThis,(()=>(()=>{"use strict";var e,t,o={356:e=>{e.exports=coreApis.style}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var l=2&n&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(i,a),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{r.d(i,{component:()=>a});const e=coreApis.componentApis.define,t=coreApis.utils.urls,o="dpi-live-showgirl",n=async()=>{const{addStyle:e}=await Promise.resolve().then(r.t.bind(r,356,23));null===document.getElementById(o)&&e(`\n      .haruna-ctnr,\n      .avatar-btn\n      {\n        transform: scale(${1/window.devicePixelRatio}) !important;\n      }\n    `,o)},a=(0,e.defineComponentMetadata)({name:"dpiLiveShowgirl",displayName:"直播看板娘高 DPI 适配",enabledByDefault:window.devicePixelRatio>1,description:{"zh-CN":"根据屏幕 DPI 缩放直播看板娘的大小, 避免像素锯齿."},tags:[componentsTags.live,componentsTags.style],entry:n,reload:n,unload:()=>{document.getElementById(o)?.remove()},urlInclude:t.liveUrls,commitHash:"dea0a98a1e882351e3da0cfe5384b7bb004e6180",coreVersion:"2.7.6"})})(),i=i.component})()));