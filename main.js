!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";var t=[],o=81;function u(){var e=document.getElementsByClassName("js-solutions")[0];e.innerHTML="";for(var r=10,n=new Int8Array(o),u=0;u<o;++u){var i=parseInt(t[u].value);n[u]=i}function a(e,r){for(var t=0;t<9;++t)if(n[9*e+t]==r)return!0;return!1}function f(e,r){for(var t=0;t<9;++t)if(n[9*t+e]==r)return!0;return!1}function l(e,r,t){var o=3*Math.floor(e/3)*9+3*Math.floor(r/3);for(e=0;e<3;++e)for(r=0;r<3;++r)if(n[o+9*e+r]==t)return!0;return!1}function c(e,r){if(0==n[e]){for(var t=Math.floor(e/9),o=e-9*t,u=[],i=1;i<10;++i)if(!a(t,i)&&!f(o,i)&&!l(t,o,i)&&(u.push(i),u.length==r))return;return u}}console.log(n),function t(){var u=function(){for(var e,r=10,n=0;n<o;++n){var t=c(n,r);if(t){if(t.length<=1)return{i:n,choices:t};e={i:n,choices:t},r=t.length}}return e}();if(!u)return function(){var t=document.createElement("div");t.classList.add("field");for(var o=0;o<9;++o)for(var u=0;u<9;++u){var i=document.createElement("span");i.classList.add("cell","col"+u,"row"+o),i.innerText=n[9*o+u].toString(),t.appendChild(i)}return e.appendChild(t),(r-=1)<=0}();for(var i=0,a=u.choices;i<a.length;i++){var f=a[i];if(n[u.i]=f,t())return!0}return n[u.i]=0,!1}()}!function(){for(var e=document.getElementsByClassName("js-field")[0],r=null,n=0;n<9;++n)for(var o=function(o){var u=document.createElement("input");u.maxLength=1,u.classList.add("cell","col"+o,"row"+n),e.appendChild(u),t[9*n+o]=u,r&&r.addEventListener("input",function(){this.value.length>0&&u.focus()}),r=u},i=0;i<9;++i)o(i);document.getElementsByClassName("js-solve")[0].addEventListener("click",u)}()}]);
//# sourceMappingURL=main.js.map