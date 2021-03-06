(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a={1:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"a9b67cc3",3:"8bb0a3b3",4:"abcaaba2"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"63a47131",3:"8ee78fab",4:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],f.parentNode.removeChild(f),n(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;u.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0fbc":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return l}));n("5319");var r=n("339e"),o=n("c2d5");const a=new r["Converter"];function u(e){return Object(o["htmlToText"])(e||"")}function i(e){return`<!DOCTYPE html><html><body>${e||""}</body></html>`}function c(e){return a.makeMarkdown(e||"")}function s(e){return a.makeHtml(e||"")}function l(e){const t=(e||"").split("<body>");return t.length>1?t[1].replace("</body>","").replace("</html>",""):t[0]}a.setFlavor("github")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"appInfo",(function(){return j})),n.d(r,"settings",(function(){return F}));var o={};n.r(o),n.d(o,"toggleMenu",(function(){return x})),n.d(o,"setDarkMode",(function(){return B})),n.d(o,"setParagraphSpaceBetween",(function(){return A})),n.d(o,"setParagraphIndentFirstLine",(function(){return E}));var a={};n.r(a),n.d(a,"exit",(function(){return H})),n.d(a,"toggleDarkMode",(function(){return _})),n.d(a,"updateSettings",(function(){return D}));var u={};n.r(u),n.d(u,"isChanged",(function(){return $}));var i={};n.r(i),n.d(i,"setFilename",(function(){return J})),n.d(i,"setContentHTML",(function(){return V})),n.d(i,"saveContentHTML",(function(){return W})),n.d(i,"setLastSave",(function(){return z})),n.d(i,"setLastChange",(function(){return K})),n.d(i,"setParagraphCount",(function(){return Q})),n.d(i,"setWordCount",(function(){return U})),n.d(i,"setSentenceCount",(function(){return Y})),n.d(i,"setCharCount",(function(){return G}));var c={};n.r(c),n.d(c,"updateContent",(function(){return ee})),n.d(c,"updateStats",(function(){return ne})),n.d(c,"newFile",(function(){return re})),n.d(c,"loadFile",(function(){return oe})),n.d(c,"saveFile",(function(){return ae})),n.d(c,"printFile",(function(){return ue}));n("e6cf"),n("5319");var s=n("c973"),l=n.n(s),d=(n("7d6e"),n("e54f"),n("62f2"),n("0bae"),n("7e6d"),n("2b0e")),f=n("1f91"),p=n("42d2"),h=n("b05d"),m=n("9c64"),g=n("18d6"),v=n("436b");d["a"].use(h["a"],{config:{},lang:f["a"],iconSet:p["a"],plugins:{Meta:m["a"],LocalStorage:g["a"],Dialog:v["a"]}});var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},w=[],y={name:"App"},C=y,S=n("2877"),L=Object(S["a"])(C,b,w,!1,null,null,null),M=L.exports,P=n("2f62"),k=n("f121"),O=function(){return{menuOpen:g["a"].getItem(k["f"]),darkMode:g["a"].getItem(k["d"]),parSpaceBetween:g["a"].getItem(k["h"]),parIndentFirstLine:g["a"].getItem(k["g"])}},T=n("9224");function j(){return{name:T["d"],version:T["g"],description:T["b"],productName:T["e"],author:T["a"],repository:T["f"],license:T["c"]}}function F(e){return{darkMode:e.darkMode,parSpaceBetween:e.parSpaceBetween,parIndentFirstLine:e.parIndentFirstLine}}var I=n("ff52");function x(e){const t=!e.menuOpen;e.menuOpen=t,g["a"].set(k["f"],t)}function B(e,t){I["a"].set(t),g["a"].set(k["d"],t),e.darkMode=t}function A(e,t){g["a"].set(k["h"],t),e.parSpaceBetween=t}function E(e,t){g["a"].set(k["g"],t),e.parIndentFirstLine=t}function H({commit:e}){}function _({commit:e,state:t}){const n=!t.darkMode;e("setDarkMode",n)}function D({commit:e},t){"darkMode"in t&&e("setDarkMode",t.darkMode),"parSpaceBetween"in t&&e("setParagraphSpaceBetween",t.parSpaceBetween),"parIndentFirstLine"in t&&e("setParagraphIndentFirstLine",t.parIndentFirstLine)}var N={namespaced:!0,getters:r,mutations:o,actions:a,state:O},q=function(){return{filename:"",contentHTML:"",charCount:0,wordCount:0,sentenceCount:0,paragraphCount:0,lastChange:null,lastSave:null}};function $(e){const t=g["a"].getItem(k["b"]);return e.lastChange!==e.lastSave&&e.contentHTML!==t}function J(e,t){e.filename=t||"",g["a"].set(k["e"],t)}function V(e,t){e.contentHTML=t||"",g["a"].set(k["a"],t)}function W(e,t){g["a"].set(k["b"],e.contentHTML)}function z(e,t){const n=t||new Date;e.lastSave=n,g["a"].set(k["c"],n)}function K(e,t){e.lastChange=t}function Q(e,t){e.paragraphCount=t}function U(e,t){e.wordCount=t}function Y(e,t){e.sentenceCount=t}function G(e,t){e.charCount=t}var R=n("1c16");function X(e){const t=e.replace(/(\.+|:|;|\?|!)/g,"$1\n").split(/\n+\s*/).filter(e=>e),n=e.split(/\s+/).filter(e=>e),r=e.split(/\n\n/).filter(e=>e),o=r.length,a=t.length,u=n.length,i=n.reduce((e,t)=>e+(t||"").length,0);return{paragraphCount:o,sentenceCount:a,wordCount:u,charCount:i}}var Z=n("0fbc");function ee({commit:e,dispatch:t},n){e("setContentHTML",n),e("setLastChange",new Date),t("updateStats")}function te({state:e,commit:t}){const n=Object(Z["b"])(e.contentHTML),{charCount:r,wordCount:o,sentenceCount:a,paragraphCount:u}=X(n);t("setCharCount",r),t("setWordCount",o),t("setSentenceCount",a),t("setParagraphCount",u)}const ne=Object(R["a"])(te,k["i"]);function re({commit:e,dispatch:t}){t("updateContent","Type your masterpiece here..."),e("setFilename","masterpiece.html"),e("setLastSave")}function oe({commit:e,dispatch:t},n={}){e("setFilename",n.name),t("updateContent",n.html),t("saveFile")}function ae({commit:e}){e("saveContentHTML"),e("setLastSave")}function ue({commit:e}){window.print()}var ie={namespaced:!0,getters:u,mutations:i,actions:c,state:q};d["a"].use(P["a"]);var ce=function(){const e=new P["a"].Store({modules:{base:N,editor:ie},strict:!1});return e},se=n("8c4f");const le=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"e51e"))}];var de=le;d["a"].use(se["a"]);var fe=function(){const e=new se["a"]({scrollBehavior:()=>({x:0,y:0}),routes:de,mode:"hash",base:""});return e},pe=function(){return he.apply(this,arguments)};function he(){return he=l()((function*(){const e="function"===typeof ce?yield ce({Vue:d["a"]}):ce,t="function"===typeof fe?yield fe({Vue:d["a"],store:e}):fe;e.$router=t;const n={router:t,store:e,render:e=>e(M),el:"#q-app"};return{app:n,store:e,router:t}})),he.apply(this,arguments)}var me=n("9483");Object(me["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var ge=n("a925"),ve={failed:"Action failed",success:"Action was successful"},be={"en-us":ve};d["a"].use(ge["a"]);const we=new ge["a"]({locale:"en-us",fallbackLocale:"en-us",messages:be});var ye=({app:e})=>{e.i18n=we};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&n.e(0).then(n.t.bind(null,"a0db",7));const Ce="";function Se(){return Le.apply(this,arguments)}function Le(){return Le=l()((function*(){const{app:e,store:t,router:n}=yield pe();let r=!1;const o=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),u=[ye];for(let c=0;!1===r&&c<u.length;c++)if("function"===typeof u[c])try{yield u[c]({app:e,router:n,store:t,Vue:d["a"],ssrContext:null,redirect:o,urlPath:a,publicPath:Ce})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&new d["a"](e)})),Le.apply(this,arguments)}Se()},"7e6d":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"d":"alighieri","g":"0.9.5","b":"A distraction-free tool for novelists and writers","e":"Alighieri","a":"Emanuele Bertoldi <emanuele.bertoldi@gmail.com>","c":"MIT","f":{"type":"git","url":"git@github.com:zuck/alighieri.git"}}')},f121:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"i",(function(){return d}));const r="al:filename",o="al:content",a="al:content-last-save",u="al:content-last-save-dt",i="al:settings-menu-open",c="al:settings-dark-mode",s="al:settings-par-space-between",l="al:settings-par-indent-first-line",d=150}});