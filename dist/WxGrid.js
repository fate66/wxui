!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wxui",[],e):"object"==typeof exports?exports.wxui=e():t.wxui=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=47)}({0:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,c){var a,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},s._ssrRegister=a):o&&(a=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,e){return a.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:s}}n.d(e,"a",function(){return r})},1:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i="object"===("undefined"==typeof HTMLElement?"undefined":o()(HTMLElement))?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"===o()(t)&&1===t.nodeType&&"string"==typeof t.nodeName};function u(){return screen.width||0}function c(){return screen.height||0}function a(){return document.documentElement.scrollTop||document.body.scrollTop}function s(t){return i(t)&&t.offsetTop}function f(t){if(i(t))return t.parentElement?f(t.parentElement)+t.offsetTop:t.offsetTop}function l(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return g(p(t),e)}function d(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return g(h(t),e)}function p(t){return u()/750*parseFloat(t)}function h(t){return c()/1334*parseFloat(t)}function m(t){return 750*t/u()}function g(t){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?window.lib.flexible.px2rem(parseFloat(t))+"rem":window.lib.flexible.px2rem(parseFloat(t))}var v=n(3);function y(t){return null==t}function b(t){return null!=t}function w(t){return!0===t}function x(t){return!1===t}function S(t){return"string"==typeof t||"number"==typeof t||"symbol"===o()(t)||"boolean"==typeof t}function j(t){return null!==t&&"object"===o()(t)}var O=Object.prototype.toString;function T(t){return"[object Object]"===O.call(t)}function _(t){return null==t?"":Array.isArray(t)||T(t)&&t.toString===O?JSON.stringify(t,null,2):String(t)}function C(t){var e=parseFloat(t);return isNaN(e)?t:e}function R(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function k(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function A(t,e){var n=this;if(t===e)return!0;var r=this.isObject(t),o=this.isObject(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{var i=Array.isArray(t),u=Array.isArray(e);if(i&&u)return t.length===e.length&&t.every(function(t,r){return n.looseEqual(t,e[r])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||u)return!1;var c=Object.keys(t),a=Object.keys(e);return c.length===a.length&&c.every(function(r){return n.looseEqual(t[r],e[r])})}catch(t){return!1}}function M(t){var e;if("object"===o()(t))if(null===t)e=null;else if(t instanceof Array){e=[];for(var n=0,r=t.length;n<r;n++)e.push(this.deepClone(t[n]))}else for(var i in e={},t)e[i]=this.deepClone(t[i]);else e=t;return e}function E(t){var e=location.search.match(new RegExp("(\\?|&)(".concat(t,")=([^&$]*)")));return e?e[3]:""}function I(t){return new Promise(function(e,n){t(e,n)})}function N(){var t=window.location.href.split("/");return t[t.length-1].split("?")[0].split(".")[0]}function U(){for(var t=[],e=0;e<36;e++)t[e]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return t[14]="4",t[19]="0123456789abcdef".substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-",t.join("")}function L(t){var e="";if(T(t)){var n=Object.keys(t);(n&&n.length&&!n.includes("wfr")||!n||!n.length)&&(t.wfr=E("wfr"),!t.wfr&&Reflect.deleteProperty(t,"wfr"),t.debug=E("debug"),!t.debug&&Reflect.deleteProperty(t,"debug")),n=Object.keys(t);var r=!0,i=!1,u=void 0;try{for(var c,a=n[Symbol.iterator]();!(r=(c=a.next()).done);r=!0){var s=c.value;e=e+s+"="+("object"===o()(t[s])?JSON.stringify(t[s]):t[s])+"&"}}catch(t){i=!0,u=t}finally{try{r||null==a.return||a.return()}finally{if(i)throw u}}}return e=e&&e.slice(0,e.length-1)}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(isNaN(t))return console.error("必须为数字"),!1;for(var n=1,r=1;r<=e;)n*=10,r++;return parseInt(t*n)/n}function $(t){console.log(t);var e=document.createElement("input");if(e.value=t,e.style.opacity=.1,document.body.appendChild(e),v.a.isIOS()){window.getSelection().removeAllRanges();var n=document.createRange();n.selectNode(e),window.getSelection().addRange(n),document.execCommand("copy"),window.getSelection().removeAllRanges()}else e.select(),document.execCommand("Copy");document.body.removeChild(e)}function W(t){t.sort(function(){return Math.random()-.5})}function X(t){var e={},n=t.split("?"),r=n.length>1?n[1]:"";if(r){var o=!0,i=!1,u=void 0;try{for(var c,a=r.split("&")[Symbol.iterator]();!(o=(c=a.next()).done);o=!0){var s=c.value.split("=");e[s[0]]=s.length>1?s[1]:""}}catch(t){i=!0,u=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw u}}}return Object.keys(e)?e:""}function F(t,e){if(!v.a.isWX())return console.log("不是微信"),!1;t.$refs[e].offsetHeight<c()&&(t.$refs[e].style.height=g(c()))}function z(t,e){var n="",r=window.location.href.split("/");r.length=r.length-1;var o=r.join("/");r.length=r.length-1;var i=r.join("/"),u=L(e);n=t.includes("/")?"".concat(i,"/").concat(t,".html").concat(u?"?"+u:""):"".concat(o,"/").concat(t,".html").concat(u?"?"+u:""),window.location.href=n}var B={set:function(t,e,n,r,o){var i=new Date,u=n?i.getTime()+n:i.getTime()+2592e6;i.setTime(u),!0===r&&(r=document.domain.replace(/[a-zA-Z]+/,""));var c=r?";domain="+r+";path=/":";path=/";document.cookie=t+"="+escape(e)+(o?"":";expires="+i.toGMTString())+c},get:function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),n=document.cookie.match(e);return n?unescape(n[2]):""},setObject:function(t,e,n,r,o){e=JSON.stringify(e);var i=new Date,u=n?i.getTime()+n:i.getTime()+2592e6;i.setTime(u),!0===r&&(r=document.domain.replace(/[a-zA-Z]+/,""));var c=r?";domain="+r+";path=/":";path=/";document.cookie=t+"="+escape(e)+(o?"":";expires="+i.toGMTString())+c},getObject:function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),n=document.cookie.match(e),r=null;try{r=JSON.parse(n?unescape(n[2]):"")}catch(t){console.log("缓存数据解决json异常!")}return r},del:function(t,e){var n=new Date;n.setTime(n.getTime()-1);var r=this.get(t);!0===e&&(e=document.domain.replace(/[a-zA-Z]+/,""));var o=e?";domain="+e+";path=/":";path=/";r&&(document.cookie=t+"=1;expires="+n.toGMTString()+o)},clear:function(t){!0===t&&(t=document.domain.replace(/[a-zA-Z]+/,""));var e=t?";domain="+t+";path=/":";path=/",n=document.cookie.match(/[^ =;]+(?==)/g);if(n&&n.length)for(var r=n.length-1;r>=0;r--)document.cookie=n[r]+"=0;expires=Thu, 01 Jan 1970 00:00:00 GMT;"+e}};function D(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N(),e=function(e,n){if(e=t+"--"+e,window.localStorage)try{window.localStorage.setItem(e,n)}catch(t){window.console.warn("Your browser not support localStorage. "+t),window.alert("Your browser not support localStorage. Please check set browser private model.")}else window.alert("Your browser not support localStorage. Please check set browser private model.")},n=function(e){return e=t+"--"+e,window.localStorage.getItem(e)};return{set:e,get:n,setObject:function(t,n){n=JSON.stringify(n),e(t,n)},getObject:function(t){var e=n(t),r=null;if(e){try{r=JSON.parse(e)}catch(t){console.log("缓存数据解决json异常!")}return r}},del:function(e){e=t+"--"+e,window.localStorage.removeItem(e)},clear:function(){window.localStorage.clear(),window.sessionStorage.clear()},key:function(t){return t=t||0,Object.keys(window.localStorage)[t]},keys:function(){return Object.keys(window.localStorage)},values:function(){return Object.values(window.localStorage)},length:function(){return Object.keys(window.localStorage).length}}}n.d(e,"getWindowWidth",function(){return u}),n.d(e,"getWindowHeight",function(){return c}),n.d(e,"getScrollTop",function(){return a}),n.d(e,"getOffsetTop",function(){return s}),n.d(e,"getElementToPageTop",function(){return f}),n.d(e,"wpx2rem",function(){return l}),n.d(e,"hpx2rem",function(){return d}),n.d(e,"wpx2dp",function(){return p}),n.d(e,"hpx2dp",function(){return h}),n.d(e,"wdp2px",function(){return m}),n.d(e,"dp2rem",function(){return g}),n.d(e,"isUndef",function(){return y}),n.d(e,"isDef",function(){return b}),n.d(e,"isTrue",function(){return w}),n.d(e,"isFalse",function(){return x}),n.d(e,"isPrimitive",function(){return S}),n.d(e,"isObject",function(){return j}),n.d(e,"isPlainObject",function(){return T}),n.d(e,"toString",function(){return _}),n.d(e,"toNumber",function(){return C}),n.d(e,"makeMap",function(){return R}),n.d(e,"remove",function(){return k}),n.d(e,"looseEqual",function(){return A}),n.d(e,"deepClone",function(){return M}),n.d(e,"urlQuery",function(){return E}),n.d(e,"ps",function(){return I}),n.d(e,"pageName",function(){return N}),n.d(e,"uuid",function(){return U}),n.d(e,"getUri",function(){return L}),n.d(e,"toDecimal",function(){return P}),n.d(e,"copyVal",function(){return $}),n.d(e,"sort",function(){return W}),n.d(e,"url2obj",function(){return X}),n.d(e,"fixRubberUI",function(){return F}),n.d(e,"push",function(){return z}),n.d(e,"cookie",function(){return B}),n.d(e,"localStorage",function(){return D}),n.d(e,"ua",function(){return v.a})},2:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},24:function(t,e,n){var r=n(65);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,o);r.locals&&(t.exports=r.locals)},3:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=navigator.userAgent.toLowerCase(),o=/(Android)\s+([\d.]+)/i,i=/\(i[^;]+;( U;)? cpu.+mac os x/i,u=/Windows Phone ([\d.]+)/i,c=/(iPhone|iPad|iPod|iOS)/i,a=/(iPad).*OS\s([\d_]+)/i,s=/(iPhone\sOS)\s([\d_]+)/i,f=/QQ/i,l=/micromessenger/i,d=/wxwork\/.* MicroMessenger/i,p=/WeiBo/i,h=Object.create(null);h.isMobile=function(){return!!r.match(/AppleWebKit.*Mobile.*/i)},h.isAndriod=function(){return!!o.test(r)},h.isIOS=function(){return!!i.test(r)},h.isWP=function(){return!!u.test(r)},h.isApple=function(){return!!c.test(r)},h.isIphone=function(){return!!s.test(r)},h.isIpad=function(){return!!a.test(r)},h.isQQ=function(){return!!f.test(r)},h.isWX=function(){return!!l.test(r)},h.isWXWork=function(){return!!d.test(r)},h.isWeiBo=function(){return!!p.test(r)},h.isIphoneX_XS=function(){return this.isIOS()&&812==screen.height&&375==screen.width},h.isIPhoneXM_XR=function(){return this.isIOS()&&414===window.screen.width&&896===window.screen.height},h.isIPhoneX_later=function(){return this.isIphoneX_XS()||this.isIPhoneXM_XR()},h.isMiniprogram=function(){return"miniprogram"===window.__wxjs_environment}},4:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(u=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(u))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var u;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var u=t[o];null!=u[0]&&r[u[0]]||(n&&!u[2]?u[2]=n:n&&(u[2]="("+u[2]+") and ("+n+")"),e.push(u))}},e}},47:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wx-grid"},t._l(t.grids,function(e,r){return n("div",{key:r,staticClass:"wx-grid-item",style:t.itemSty(r),on:{click:function(n){return t.click(r,e)}}},[n("img",{attrs:{src:e.src}}),t._v(" "),n("span",{style:t.inner_sty},[t._v(t._s(e.label))])])}),0)};r._withStripped=!0;var o=n(1),i={name:"WxGrid",props:{grids:{type:Array,default:function(){return[]}},width:{type:Number,default:112},column:{type:Number,default:4},labelColor:{type:String,default:""},labelSize:{type:Number,default:0}},computed:{signLF:function(){return(750-this.width*this.column)/(2*this.column)},inner_sty:function(){var t={color:this.labelColor,"font-size":Object(o.wpx2rem)(this.labelSize)};return!this.labelSize&&Reflect.deleteProperty(t,"font-size"),t}},data:function(){return{}},created:function(){},components:{},methods:{itemSty:function(t){return{width:Object(o.wpx2rem)(this.width),marginLeft:Object(o.wpx2rem)(t%this.column==0?this.signLF:2*this.signLF)}},click:function(t,e){this.$emit("click",{index:t,data:e})}}},u=(n(64),n(0)),c=Object(u.a)(i,r,[],!1,null,"2c7525f4",null);c.options.__file="packages/WxGrid/src/WxGrid.vue";var a=c.exports;n.d(e,"default",function(){return a})},5:function(t,e,n){var r,o,i={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),a=null,s=0,f=[],l=n(6);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(y(r.parts[u],e))}else{var c=[];for(u=0;u<r.parts.length;u++)c.push(y(r.parts[u],e));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(t,e){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],u=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[u]?r[u].parts.push(c):n.push(r[u]={id:u,parts:[c]})}return n}function h(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),f.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=f.indexOf(t);e>=0&&f.splice(e,1)}function g(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return n.nc}();r&&(t.attrs.nonce=r)}return v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function y(t,e){var n,r,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=a||(a=g(e)),r=x.bind(null,n,u,!1),o=x.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),r=function(t,e,n){var r=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var u=new Blob([r],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(u),c&&URL.revokeObjectURL(c)}.bind(null,n,e),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=u()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=p(t,e);return d(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var u=n[o];(c=i[u.id]).refs--,r.push(c)}t&&d(p(t,e),e);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}};var b,w=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function x(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),u=t.childNodes;u[e]&&t.removeChild(u[e]),u.length?t.insertBefore(i,u[e]):t.appendChild(i)}}},6:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},64:function(t,e,n){"use strict";var r=n(24);n.n(r).a},65:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".wx-grid[data-v-2c7525f4] {\n  width: 10rem;\n  padding: 0px 0px;\n  box-sizing: border-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.wx-grid .wx-grid-item[data-v-2c7525f4] {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0.26667rem 0;\n    width: 1.49333rem;\n}\n.wx-grid .wx-grid-item img[data-v-2c7525f4] {\n      width: 100%;\n      height: auto;\n}\n.wx-grid .wx-grid-item span[data-v-2c7525f4] {\n      margin-top: 0.08rem;\n      font-family: PingFang-SC-Regular;\n      font-size: 0.32rem;\n      color: #353535;\n      letter-spacing: 0;\n      text-align: center;\n}\n",""])}})});