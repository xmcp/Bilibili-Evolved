!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["style/v1-panel"]=n():t["style/v1-panel"]=n()}(globalThis,(()=>(()=>{var t,n,e={845:(t,n,e)=>{var r=e(218)((function(t){return t[1]}));r.push([t.id,".be-settings > .be-popup {\n  top: 0 !important;\n  left: 0 !important;\n  transform: translateZ(0) translateY(0) translateX(calc(-101% * var(--direction))) !important;\n  --panel-height: 100vh !important;\n}\nbody.settings-panel-dock-right .be-settings > .be-popup {\n  left: unset !important;\n  right: 0 !important;\n}\n.be-settings > .be-popup.open {\n  transform: translateZ(0) translateY(0) translateX(0) !important;\n}\n.be-settings > .be-popup > * {\n  border-radius: 0 !important;\n  border-width: 0 1px 0 0 !important;\n  height: var(--panel-height) !important;\n}\nbody.settings-panel-dock-right .be-settings > .be-popup > * {\n  border-width: 0 0 0 1px !important;\n}\n.be-settings > .sidebar > * {\n  width: 52px !important;\n  border-radius: 21px !important;\n  transform: translateX(calc(-13px * var(--direction))) !important;\n  display: flex !important;\n  justify-content: flex-end !important;\n}\nbody.settings-panel-dock-right .be-settings > .sidebar > * {\n  justify-content: flex-start !important;\n}\n.be-settings > .sidebar > * .be-icon {\n  transition: 0.2s ease-out !important;\n}\n.be-settings > .sidebar > *:hover {\n  transform: translateX(calc(8px * var(--direction))) !important;\n}\n.be-settings > .sidebar > *:hover .be-icon {\n  transform: rotate(360deg) !important;\n}\n.be-settings > .sidebar > *.open {\n  transform: translateX(calc(12px * var(--direction))) !important;\n}\n.be-settings .settings-panel-popup .component-tags .component-tags-item:last-child {\n  border-radius: 0 !important;\n}\n.be-settings .widgets-panel {\n  padding: 24px !important;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.be-settings .widgets-panel::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.be-settings .widgets-panel-header {\n  margin-bottom: 36px !important;\n}\n.be-settings .widgets-panel .widgets-popup {\n  --columns: 1;\n  --medal-columns: 1;\n  --title-columns: 1;\n  left: 50%;\n  top: calc(100% + 4px) !important;\n  transform-origin: top !important;\n  box-sizing: border-box;\n  max-width: calc(100% + 44px) !important;\n  max-height: unset !important;\n  transform: translateX(calc(-50% * var(--direction))) scale(0.9) !important;\n  display: flex !important;\n  flex-wrap: wrap !important;\n}\n.be-settings .widgets-panel .widgets-popup > * {\n  flex-grow: 1;\n}\n.be-settings .widgets-panel .widgets-popup.open {\n  transform: translateX(calc(-50% * var(--direction))) scale(1) !important;\n}\nbody.settings-panel-dock-right .be-settings .widgets-panel .widgets-popup {\n  left: unset !important;\n  right: 50% !important;\n}",""]),t.exports=r},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=t(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
n.i=function(t,e,r){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var o={};if(r)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<t.length;s++){var p=[].concat(t[s]);r&&o[p[0]]||(e&&(p[2]?p[2]="".concat(e," and ").concat(p[2]):p[2]=e),n.push(p))}},n}},225:(t,n,e)=>{var r=e(845);r&&r.__esModule&&(r=r.default),t.exports="string"==typeof r?r:r.toString()}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,o),a.exports}n=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var a=Object.create(null);o.r(a);var i={};t=t||[null,n({}),n([]),n(n)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,o.d(a,i),a},o.d=(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.d(a,{component:()=>t});const t=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"v1PanelStyle",displayName:"v1 风格设置面板",tags:[componentsTags.style],entry:none,description:{"zh-CN":"使用 v1 风格的设置面板样式"},instantStyles:[{name:"v1PanelStyle",style:()=>Promise.resolve().then(o.t.bind(o,225,23))}],commitHash:"9cd029f0731a58f6cd3a3b6a2eca70423432e48a",coreVersion:"2.8.9"})})(),a=a.component})()));