!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["launch-bar/cv-search"]=t():e["launch-bar/cv-search"]=t()}(globalThis,(()=>(()=>{var e,t,r={560:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=560,e.exports=t},436:e=>{"use strict";e.exports="在输入专栏的 cv 号或专栏文集的 rl 号时, 提供对应的跳转选项.\n"}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return r[e](i,i.exports,o),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var i=Object.create(null);o.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,o.d(i,a),i},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";o.d(i,{plugin:()=>r});const e=coreApis.ajax,t=e=>{const{name:t,description:r,indexer:n,link:o}=e;return{name:t||n,icon:"mdi-open-in-new",indexer:n,description:r,action:()=>{window.open(o,"_blank")},order:0}},r={name:"launchBar.actions.cvSearch",displayName:"搜索栏 - 专栏跳转",async setup(r){let{addData:n}=r;n("launchBar.actions",(r=>{r.push({name:"cvSearchProvider",getActions:async r=>{const{match:n,type:o,id:i,indexer:a}=((e,t)=>{const r=e.match(t);if(!r)return{};const n=r[1],o=r[2];return{match:r,type:n,id:o,indexer:`${n}${o}`}})(r,/^(cv|rl)(\d+)$/);if(!n)return[];if("rl"===o){const r=await(0,e.getJson)(`https://api.bilibili.com/x/article/list/web/articles?id=${i}`),{name:n}=lodash.get(r,"data.list",{});return[t({name:n,description:"文集跳转",link:`https://www.bilibili.com/read/readlist/${a}`,indexer:a})]}const c=await(0,e.getJson)(`https://api.bilibili.com/x/article/viewinfo?id=${i}`),{title:s}=lodash.get(c,"data",{});return[t({name:s,description:"专栏跳转",link:`https://www.bilibili.com/read/${a}`,indexer:a})]}})}))},commitHash:"dea0a98a1e882351e3da0cfe5384b7bb004e6180",coreVersion:"2.7.6",description:(()=>{const e=o(560);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(o.t.bind(o,436,17)).then((e=>e.default))}})()}})(),i=i.plugin})()));