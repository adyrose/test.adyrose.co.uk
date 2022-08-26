(()=>{"use strict";var t,e={67947:(t,e,r)=>{var n=r(9669),o=r.n(n),a="http://localhost:81/wp-json/wp/v2/";const i=function(t,e,r,n,o){var a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=document.createElement("div");i.classList.add("rwxs-p-b-lg","rwxs-p-t-no-rsp"),i.classList.add(a?"rwx-split-full":"rwx-split-half");var c="/post?articleId=".concat(o);return i.innerHTML="\n    <div class='news-item ".concat(a?"full-width":"","'>\n      <div>\n        ").concat("vid"===r?'<div class=\'news-item-video rwxs-m-b-sm\'><video width="320" height="240" controls><source src="'.concat(e,'" type="video/mp4"></video></div>'):"<div class='news-item-image rwxs-m-b-sm'><img src='".concat(e,'\'/ referrerpolicy="no-referrer"></div>'),'\n      </div>\n      <div>\n        <p class="rwxc-color-light-blue rwxt-uppercase rwxt-small">').concat("vid"===r?"video":"post","</p>\n        <a href='").concat(c,'\' class="no-decoration rwxc-color-black rwxt-no-underline"><h6>').concat(t,"</h6></a>\n        ").concat(n?'<p class="rwxc-color-light-blue rwxt-small">'.concat(n,"</p>"):"<p class='rwxt-uppercase rwxt-bold rwxc-color-light-blue'>read article</p>","\n      </div>\n    </div>\n  "),i};function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=s(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function s(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d=["png","jpg","jpeg"],f=["mp4"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],p=function(t){var e,r=new Date(t);return"".concat(v[r.getMonth()+1]," ").concat((e=r.getDate(),parseInt(e)<10?"0".concat(e):e),", ").concat(r.getFullYear())};r(36869),window.addEventListener("load",(function(){var t=document.getElementById("news-wrapper");o().get("".concat(a,"posts")).then((function(e){!function(t,e){var r,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=[],u=l(t);try{for(u.s();!(r=u.n()).done;){var v=r.value;s.push(o().get("".concat(a,"media?parent=").concat(v.id)))}}catch(t){u.e(t)}finally{u.f()}Promise.all(s).then((function(r){var o,a=l(r.entries());try{var s=function(){var r=c(o.value,2),a=r[0],l=r[1],s=void 0,u=void 0;l.data.length>0?d.some((function(t){return l.data[0].mime_type.includes(t)}))?(s=l.data[0].source_url,u="img"):f.some((function(t){return l.data[0].mime_type.includes(t)}))&&(s=l.data[0].source_url,u="vid"):(s="/assets/test.png",u="img"),e.appendChild(i(t[a].title.rendered,s,u,!!n&&p(t[a].date),t[a].id,n&&0===a))};for(a.s();!(o=a.n()).done;)s()}catch(t){a.e(t)}finally{a.f()}}))}(e.data,t,!0)})).catch((function(t){console.log("Error retrieving posts - ".concat(t))}))}))},36869:(t,e,r)=>{r.r(e)}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){for(var[r,o,a]=t[s],c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));c&&(t.splice(s--,1),e=o())}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={697:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,c,l]=r,s=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var u=l(n);for(e&&e(r);s<i.length;s++)a=i[s],n.o(t,a)&&t[a]&&t[a][0](),t[i[s]]=0;return n.O(u)},r=self.webpackChunkroger_atkins=self.webpackChunkroger_atkins||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var o=n.O(void 0,[669],(()=>n(67947)));o=n.O(o)})();
//# sourceMappingURL=news.9022fb41.js.map