(()=>{"use strict";var e,t={77942:(e,t,r)=>{var n="http://localhost:81/wp-json/wp/v2/",o=r(9669),a=r.n(o);const i=function(e,t,r,n,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=document.createElement("div");i.classList.add("rwxs-p-b-lg","rwxs-p-t-no-rsp"),i.classList.add(a?"rwx-split-full":"rwx-split-half");var l="/post?articleId=".concat(o);return i.innerHTML="\n    <div class='news-item ".concat(a?"full-width":"","'>\n      <div>\n        ").concat("vid"===r?'<div class=\'news-item-video rwxs-m-b-sm\'><video width="320" height="240" controls><source src="'.concat(t,'" type="video/mp4"></video></div>'):"<div class='news-item-image rwxs-m-b-sm'><img src='".concat(t,'\'/ referrerpolicy="no-referrer"></div>'),'\n      </div>\n      <div>\n        <p class="rwxc-color-light-blue rwxt-uppercase rwxt-small">').concat("vid"===r?"video":"post","</p>\n        <a href='").concat(l,'\' class="no-decoration rwxc-color-black rwxt-no-underline"><h6>').concat(e,"</h6></a>\n        ").concat(n?'<p class="rwxc-color-light-blue rwxt-small">'.concat(n,"</p>"):"<p class='rwxt-uppercase rwxt-bold rwxc-color-light-blue'>read article</p>","\n      </div>\n    </div>\n  "),i};function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=d(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function d(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=["png","jpg","jpeg"],f=["mp4"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=function(e){var t,r=new Date(e);return"".concat(v[r.getMonth()+1]," ").concat((t=r.getDate(),parseInt(t)<10?"0".concat(t):t),", ").concat(r.getFullYear())};r(97966),window.addEventListener("load",(function(){var e=document.getElementById("slider-left"),t=document.getElementById("slider-right");e.addEventListener("click",(function(){window.rwx.sliders.goToSlide("slider",window.rwx.sliders.getIME("slider").currentSlide-1)})),t.addEventListener("click",(function(){window.rwx.sliders.goToSlide("slider",window.rwx.sliders.getIME("slider").currentSlide+1)}))})),r(52969),window.addEventListener("load",(function(){var e=document.getElementById("latest-news");a().get("".concat(n,"posts?per_page=2")).then((function(t){!function(e,t){var r,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=[],s=c(e);try{for(s.s();!(r=s.n()).done;){var v=r.value;d.push(a().get("".concat(n,"media?parent=").concat(v.id)))}}catch(e){s.e(e)}finally{s.f()}Promise.all(d).then((function(r){var n,a=c(r.entries());try{var d=function(){var r=l(n.value,2),a=r[0],c=r[1],d=void 0,s=void 0;c.data.length>0?u.some((function(e){return c.data[0].mime_type.includes(e)}))?(d=c.data[0].source_url,s="img"):f.some((function(e){return c.data[0].mime_type.includes(e)}))&&(d=c.data[0].source_url,s="vid"):(d="/assets/test.png",s="img"),t.appendChild(i(e[a].title.rendered,d,s,!!o&&p(e[a].date),e[a].id,o&&0===a))};for(a.s();!(n=a.n()).done;)d()}catch(e){a.e(e)}finally{a.f()}}))}(t.data,e)})).catch((function(e){console.log("Error retrieving posts - ".concat(e))}))}))},52969:(e,t,r)=>{r.r(t)}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],l=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(l=!1,a<i&&(i=a));l&&(e.splice(d--,1),t=o())}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={826:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,c]=r,d=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var s=c(n);for(t&&t(r);d<i.length;d++)a=i[d],n.o(e,a)&&e[a]&&e[a][0](),e[i[d]]=0;return n.O(s)},r=self.webpackChunkroger_atkins=self.webpackChunkroger_atkins||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[669,966],(()=>n(77942)));o=n.O(o)})();
//# sourceMappingURL=index.19d4dc84.js.map