(()=>{"use strict";var e={596:(e,a,n)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.initLanguageSelect=void 0;const o=n(717);function l(e){return`<div class="dropdown-item">\n      <div tabindex="-1" class="dropdown-clickable" aria-checked="false" role="menuitemradio">\n        <div class="locale-container" data-locale="${e.code}">\n          <img class="flag flag-${e.code}"/>\n          <div class="dropdown-language-name">${e.name}</div>\n        </div>\n      </div>\n    </div>`}function i(){let e=[];return window.Localize.getAvailableLanguages((function(a,n){a?console.error(a):e=n.sort((function(e,a){return e.name.localeCompare(a.name)}))})),(0,o.updateSelectedLanguage)(),e}a.initLanguageSelect=function(){!function(){let e=document.querySelectorAll(".language .lang-container");e&&e.forEach((function(e){e.addEventListener("click",(function(e){let a=document.getElementById("locale-dropdown");a&&(a.style.display="block");let n=e.composedPath().find((e=>e instanceof HTMLElement&&e.dataset.locale));if(n){let e=n.dataset.locale;(0,o.setBrowserLanguage)(e),(0,o.hideLocalizer)(),i()}}))}))}();const e=i();if(e){let a=document.querySelector(".language .lang-dropdown-container .lang-dropdown");a&&(a.innerHTML=e.map(l).join(""))}document.addEventListener("click",(e=>{let a=document.getElementsByClassName("language")[0];a&&!a.contains(e.target)&&(0,o.hideLocalizer)()})),window.Localize.hideWidget()}},717:function(e,a,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0}),a.updateSelectedLanguage=a.hideLocalizer=a.setBrowserLanguage=a.getLocalizerLanguage=void 0;const l=o(n(80)),i={},t={};function c(e){let a=[];window.Localize.getAvailableLanguages((function(e,n){e?console.error(e):a=n}));const n={};a.forEach((e=>{n[e.code]=e}));const o=e&&null!=t[e]?t[e]:window.Localize.getLanguage();let l;if(null!=n[o])return n[o];if(null==l&&o.indexOf("-")>-1){const e=o.split("-")[0];l=n[e]}return l}l.default.forEach((e=>{"string"==typeof e.localizeCode&&"string"==typeof e.code&&(i[e.localizeCode]=e.code,t[e.code]=e.localizeCode)})),a.getLocalizerLanguage=c,a.setBrowserLanguage=function(e){if(window.Localize.setLanguage(e),null!=e&&null!=i[e]){const a=i[e];document.cookie=`locale=${a};path=/`}},a.hideLocalizer=function(){let e=document.getElementById("locale-dropdown");e&&(e.style.display="none")},a.updateSelectedLanguage=function(){const e=c();if(null==e)return;let a=document.querySelector(".lang-selector-container .flag");a&&(a.classList.remove(...a.classList),a.classList.add("flag","flag-"+e.code));let n=document.querySelector(".lang-selector-container .selector-language-name");n&&(n.innerHTML=e.name)}},638:(e,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.setupDownloads=a.handleExternalDownloadClick=a.downloadFile=void 0,a.downloadFile=async(e,a)=>{const n=await fetch(e),o=await n.blob(),l=document.createElement("a");l.href=URL.createObjectURL(o),l.setAttribute("download",a),l.click()},a.handleExternalDownloadClick=e=>async n=>{n.preventDefault();const o=n.currentTarget.href;try{await(0,a.downloadFile)(o,e)}catch(n){console.error("Could not automatically download",n),window.open(o,"_blank")}},a.setupDownloads=()=>{document.querySelectorAll("[data-download-file]").forEach((e=>{const n=e;n.addEventListener("click",(0,a.handleExternalDownloadClick)(n.dataset.downloadFile??"untitled"))}))}},80:e=>{e.exports=JSON.parse('[{"name":"English, USA","englishName":"English, USA","code":"en-US","localizeCode":"en"},{"name":"English, UK","englishName":"English, UK","code":"en-GB","localizeCode":"en-GB"},{"name":"中文","englishName":"Chinese Simplified","code":"zh-CN","localizeCode":"zh-Hans"},{"name":"繁體中文","englishName":"Traditional Chinese","code":"zh-TW","localizeCode":"zh-TW"},{"name":"Čeština","englishName":"Czech","code":"cs","localizeCode":"cs"},{"name":"Dansk","englishName":"Danish","code":"da","localizeCode":"da"},{"name":"Nederlands","englishName":"Dutch","code":"nl","localizeCode":"nl"},{"name":"Français","englishName":"French","code":"fr","localizeCode":"fr"},{"name":"Deutsch","englishName":"German","code":"de","localizeCode":"de"},{"name":"Ελληνικά","englishName":"Greek","code":"el","localizeCode":"el"},{"name":"Magyar","englishName":"Hungarian","code":"hu","localizeCode":"hu"},{"name":"Italiano","englishName":"Italian","code":"it","localizeCode":"it"},{"name":"日本語","englishName":"Japanese","code":"ja","localizeCode":"ja"},{"name":"한국어","englishName":"Korean","code":"ko","localizeCode":"ko"},{"name":"Norwegian","englishName":"Norwegian","code":"no","localizeCode":"no"},{"name":"Hrvatski","englishName":"Croatian","code":"hr","localizeCode":"hr"},{"name":"Polski","englishName":"Polish","code":"pl","localizeCode":"pl"},{"name":"Português do Brasil","englishName":"Portuguese, Brazilian","code":"pt-BR","localizeCode":"pt-BR"},{"name":"Русский","englishName":"Russian","code":"ru","localizeCode":"ru"},{"name":"Español","englishName":"Spanish","code":"es-ES","localizeCode":"es"},{"name":"Svenska","englishName":"Swedish","code":"sv-SE","localizeCode":"sv"},{"name":"Türkçe","englishName":"Turkish","code":"tr","localizeCode":"tr"},{"name":"български","englishName":"Bulgarian","code":"bg","localizeCode":"bg"},{"name":"Українська","englishName":"Ukrainian","code":"uk","localizeCode":"uk"},{"name":"Suomi","englishName":"Finnish","code":"fi","localizeCode":"fi"},{"name":"Română","englishName":"Romanian","code":"ro","localizeCode":"ro"},{"name":"Lietuviškai","englishName":"Lithuanian","code":"lt","localizeCode":"lt"},{"name":"ไทย","englishName":"Thai","code":"th","localizeCode":"th"},{"name":"Tiếng Việt","englishName":"Vietnamese","code":"vi","localizeCode":"vi"},{"name":"हिंदी","englishName":"Hindi","code":"hi","localizeCode":"hi"}]')}},a={};function n(o){var l=a[o];if(void 0!==l)return l.exports;var i=a[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}(()=>{const e=n(638);(0,n(596).initLanguageSelect)(),(0,e.setupDownloads)()})()})();