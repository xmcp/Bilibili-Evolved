!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["style/player-on-top-new"]=o():e["style/player-on-top-new"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>p});const t=coreApis.componentApis.define,n=coreApis.utils;function r(e,o){const t=e.parentElement;t&&(t.removeChild(e),t.insertBefore(e,o.nextSibling))}const a=async()=>{await(0,n.playerReady)();r(document.querySelector("#viewbox_report"),document.querySelector("#arc_toolbar_report"));r(document.querySelector("#v_upinfo").parentElement,document.querySelector("#danmukuBox"))},p=(0,t.defineComponentMetadata)({name:"playerOnTopNew",author:{name:"RieN7",link:"https://github.com/rien7"},tags:[componentsTags.style,componentsTags.video],displayName:"播放器置顶（新）",description:"原来的播放器置顶插件，现在已经不可用了，这是一个新的版本，可以在视频页面中将播放器放在页面最上方.",entry:a,reload:a,commitHash:"dea0a98a1e882351e3da0cfe5384b7bb004e6180",coreVersion:"2.7.6"});return o=o.component})()));