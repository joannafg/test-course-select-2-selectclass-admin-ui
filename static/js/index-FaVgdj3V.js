import{J as e,r as t,B as n,W as i,f as l,a6 as a,a7 as r,a8 as u,a9 as o,S as s,aa as c,ab as d,ac as v,p as f,ad as m,y as p}from"./index-BAyZi_co.js";function h(e){return!!d()&&(v(e),!0)}function g(e){return"function"==typeof e?e():l(e)}const w="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const y=Object.prototype.toString,b=()=>{};function S(e,t){return function(...n){return new Promise(((i,l)=>{Promise.resolve(e((()=>t.apply(this,n)),{fn:t,thisArg:this,args:n})).then(i).catch(l)}))}}const x=e=>e();function E(e,t=200,n={}){return S(function(e,t={}){let n,i,l=b;const a=e=>{clearTimeout(e),l(),l=b};return r=>{const u=g(e),o=g(t.maxWait);return n&&a(n),u<=0||void 0!==o&&o<=0?(i&&(a(i),i=null),Promise.resolve(r())):new Promise(((e,s)=>{l=t.rejectOnCancel?s:e,o&&!i&&(i=setTimeout((()=>{n&&a(n),i=null,e(r())}),o)),n=setTimeout((()=>{i&&a(i),i=null,e(r())}),u)}))}}(t,n),e)}function F(e,n,i={}){const{eventFilter:l,...a}=i,{eventFilter:r,pause:o,resume:c,isActive:d}=function(e=x){const n=t(!0);return{isActive:u(n),pause:function(){n.value=!1},resume:function(){n.value=!0},eventFilter:(...t)=>{n.value&&e(...t)}}}(l),v=function(e,t,n={}){const{eventFilter:i=x,...l}=n;return s(e,S(i,t),l)}(e,n,{...a,eventFilter:r});return{stop:v,pause:o,resume:c,isActive:d}}function k(t,n={}){if(!e(t))return a(t);const i=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const e in t.value)i[e]=r((()=>({get:()=>t.value[e],set(i){var l;if(null==(l=g(n.replaceRef))||l)if(Array.isArray(t.value)){const n=[...t.value];n[e]=i,t.value=n}else{const n={...t.value,[e]:i};Object.setPrototypeOf(n,Object.getPrototypeOf(t.value)),t.value=n}else t.value[e]=i}})));return i}function O(e,t=!0,l){c()?n(e,l):t?e():i(e)}function A(n=!1,i={}){const{truthyValue:l=!0,falsyValue:a=!1}=i,r=e(n),u=t(n);function o(e){if(arguments.length)return u.value=e,u.value;{const e=g(l);return u.value=u.value===e?g(a):e,u.value}}return r?o:[u,o]}function C(e){var t;const n=g(e);return null!=(t=null==n?void 0:n.$el)?t:n}const T=w?window:void 0,N=w?window.document:void 0,I=w?window.navigator:void 0;function j(...e){let t,n,i,l;if("string"==typeof e[0]||Array.isArray(e[0])?([n,i,l]=e,t=T):[t,n,i,l]=e,!t)return b;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const a=[],r=()=>{a.forEach((e=>e())),a.length=0},u=s((()=>[C(t),g(l)]),(([e,t])=>{if(r(),!e)return;const l=(u=t,"[object Object]"===y.call(u)?{...t}:t);var u;a.push(...n.flatMap((t=>i.map((n=>((e,t,n,i)=>(e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)))(e,t,n,l))))))}),{immediate:!0,flush:"post"}),o=()=>{u(),r()};return h(o),o}function M(e){const i=function(){const e=t(!1),i=c();return i&&n((()=>{e.value=!0}),i),e}();return f((()=>(i.value,Boolean(e()))))}function $(e,n={}){const{window:i=T}=n,l=M((()=>i&&"matchMedia"in i&&"function"==typeof i.matchMedia));let a;const r=t(!1),u=e=>{r.value=e.matches},o=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",u):a.removeListener(u))},s=p((()=>{l.value&&(o(),a=i.matchMedia(g(e)),"addEventListener"in a?a.addEventListener("change",u):a.addListener(u),r.value=a.matches)}));return h((()=>{s(),o(),a=void 0})),r}function z(e,t={}){function n(t,n){let i=g(e[g(t)]);return null!=n&&(i=function(e,t){var n;if("number"==typeof e)return e+t;const i=(null==(n=e.match(/^-?\d+\.?\d*/))?void 0:n[0])||"",l=e.slice(i.length),a=Number.parseFloat(i)+t;return Number.isNaN(a)?e:a+l}(i,n)),"number"==typeof i&&(i=`${i}px`),i}const{window:i=T,strategy:l="min-width"}=t;function a(e){return!!i&&i.matchMedia(e).matches}const r=e=>$((()=>`(min-width: ${n(e)})`),t),u=e=>$((()=>`(max-width: ${n(e)})`),t),o=Object.keys(e).reduce(((e,t)=>(Object.defineProperty(e,t,{get:()=>"min-width"===l?r(t):u(t),enumerable:!0,configurable:!0}),e)),{});function s(){const t=Object.keys(e).map((e=>[e,r(e)]));return f((()=>t.filter((([,e])=>e.value)).map((([e])=>e))))}return Object.assign(o,{greaterOrEqual:r,smallerOrEqual:u,greater:e=>$((()=>`(min-width: ${n(e,.1)})`),t),smaller:e=>$((()=>`(max-width: ${n(e,-.1)})`),t),between:(e,i)=>$((()=>`(min-width: ${n(e)}) and (max-width: ${n(i,-.1)})`),t),isGreater:e=>a(`(min-width: ${n(e,.1)})`),isGreaterOrEqual:e=>a(`(min-width: ${n(e)})`),isSmaller:e=>a(`(max-width: ${n(e,-.1)})`),isSmallerOrEqual:e=>a(`(max-width: ${n(e)})`),isInBetween:(e,t)=>a(`(min-width: ${n(e)}) and (max-width: ${n(t,-.1)})`),current:s,active(){const e=s();return f((()=>0===e.value.length?"":e.value.at(-1)))}})}function R(e,n={}){const{controls:i=!1,navigator:l=I}=n,a=M((()=>l&&"permissions"in l));let r;const u="string"==typeof e?{name:e}:e,o=t(),s=()=>{r&&(o.value=r.state)},c=function(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const e=t;t=void 0,e&&await e},n}((async()=>{if(a.value){if(!r)try{r=await l.permissions.query(u),j(r,"change",s),s()}catch(e){o.value="prompt"}return r}}));return c(),i?{state:o,isSupported:a,query:c}:o}function q(e={}){const{navigator:n=I,read:i=!1,source:l,copiedDuring:a=1500,legacy:r=!1}=e,o=M((()=>n&&"clipboard"in n)),s=R("clipboard-read"),c=R("clipboard-write"),d=f((()=>o.value||r)),v=t(""),m=t(!1),p=function(e,n,i={}){const{immediate:l=!0}=i,a=t(!1);let r=null;function o(){r&&(clearTimeout(r),r=null)}function s(){a.value=!1,o()}function c(...t){o(),a.value=!0,r=setTimeout((()=>{a.value=!1,r=null,e(...t)}),g(n))}return l&&(a.value=!0,w&&c()),h(s),{isPending:u(a),start:c,stop:s}}((()=>m.value=!1),a);function y(e){return"granted"===e||"prompt"===e}return d.value&&i&&j(["copy","cut"],(function(){var e,t,i;o.value&&y(s.value)?n.clipboard.readText().then((e=>{v.value=e})):v.value=null!=(i=null==(t=null==(e=null==document?void 0:document.getSelection)?void 0:e.call(document))?void 0:t.toString())?i:""})),{isSupported:d,text:v,copied:m,copy:async function(e=g(l)){d.value&&null!=e&&(o.value&&y(c.value)?await n.clipboard.writeText(e):function(e){const t=document.createElement("textarea");t.value=null!=e?e:"",t.style.position="absolute",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}(e),v.value=e,m.value=!0,p.start())}}}const L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},P="__vueuse_ssr_handlers__",B=D();function D(){return P in L||(L[P]=L[P]||{}),L[P]}function V(e,t){return B[e]||t}const W={boolean:{read:e=>"true"===e,write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},_="vueuse-storage";function H(e,n,l,a={}){var r;const{flush:u="pre",deep:o=!0,listenToStorageChanges:s=!0,writeDefaults:c=!0,mergeDefaults:d=!1,shallow:v,window:f=T,eventFilter:p,onError:h=e=>{},initOnMounted:w}=a,y=(v?m:t)("function"==typeof n?n():n);if(!l)try{l=V("getDefaultStorage",(()=>{var e;return null==(e=T)?void 0:e.localStorage}))()}catch(I){h(I)}if(!l)return y;const b=g(n),S=function(e){return null==e?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":"boolean"==typeof e?"boolean":"string"==typeof e?"string":"object"==typeof e?"object":Number.isNaN(e)?"any":"number"}(b),x=null!=(r=a.serializer)?r:W[S],{pause:E,resume:k}=F(y,(()=>function(t){try{const n=l.getItem(e);if(null==t)A(n,null),l.removeItem(e);else{const i=x.write(t);n!==i&&(l.setItem(e,i),A(n,i))}}catch(I){h(I)}}(y.value)),{flush:u,deep:o,eventFilter:p});function A(t,n){f&&f.dispatchEvent(new CustomEvent(_,{detail:{key:e,oldValue:t,newValue:n,storageArea:l}}))}function C(t){if(!t||t.storageArea===l)if(t&&null==t.key)y.value=b;else if(!t||t.key===e){E();try{(null==t?void 0:t.newValue)!==x.write(y.value)&&(y.value=function(t){const n=t?t.newValue:l.getItem(e);if(null==n)return c&&null!=b&&l.setItem(e,x.write(b)),b;if(!t&&d){const e=x.read(n);return"function"==typeof d?d(e,b):"object"!==S||Array.isArray(e)?e:{...b,...e}}return"string"!=typeof n?n:x.read(n)}(t))}catch(I){h(I)}finally{t?i(k):k()}}}function N(e){C(e.detail)}return f&&s&&O((()=>{j(f,"storage",C),j(f,_,N),w&&C()})),w||C(),y}function J(e){return $("(prefers-color-scheme: dark)",e)}function G(e={}){const{selector:n="html",attribute:i="class",initialValue:l="auto",window:a=T,storage:c,storageKey:d="vueuse-color-scheme",listenToStorageChanges:v=!0,storageRef:m,emitAuto:p,disableTransition:h=!0}=e,g={auto:"",light:"light",dark:"dark",...e.modes||{}},w=J({window:a}),y=f((()=>w.value?"dark":"light")),S=m||(null==d?function(...e){if(1!==e.length)return o(...e);const n=e[0];return"function"==typeof n?u(r((()=>({get:n,set:b})))):t(n)}(l):H(d,l,c,{window:a,listenToStorageChanges:v})),x=f((()=>"auto"===S.value?y.value:S.value)),E=V("updateHTMLAttrs",((e,t,n)=>{const i="string"==typeof e?null==a?void 0:a.document.querySelector(e):C(e);if(!i)return;let l;if(h){l=a.document.createElement("style");const e="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";l.appendChild(document.createTextNode(e)),a.document.head.appendChild(l)}if("class"===t){const e=n.split(/\s/g);Object.values(g).flatMap((e=>(e||"").split(/\s/g))).filter(Boolean).forEach((t=>{e.includes(t)?i.classList.add(t):i.classList.remove(t)}))}else i.setAttribute(t,n);h&&(a.getComputedStyle(l).opacity,document.head.removeChild(l))}));function F(e){var t;E(n,i,null!=(t=g[e])?t:e)}function k(t){e.onChanged?e.onChanged(t,F):F(t)}s(x,k,{flush:"post",immediate:!0}),O((()=>k(x.value)));const A=f({get:()=>p?S.value:x.value,set(e){S.value=e}});try{return Object.assign(A,{store:S,system:y,state:x})}catch(N){return A}}function Y(e={}){const{valueDark:t="dark",valueLight:n="",window:i=T}=e,l=G({...e,onChanged:(t,n)=>{var i;e.onChanged?null==(i=e.onChanged)||i.call(e,"dark"===t,n,t):n(t)},modes:{dark:t,light:n}}),a=f((()=>{if(l.system)return l.system.value;return J({window:i}).value?"dark":"light"}));return f({get:()=>"dark"===l.value,set(e){const t=e?"dark":"light";a.value===t?l.value="auto":l.value=t}})}function X(e,n={}){var i,l;const{pointerTypes:a,preventDefault:r,stopPropagation:u,exact:o,onMove:s,onEnd:c,onStart:d,initialValue:v,axis:m="both",draggingElement:p=T,containerElement:h,handle:y=e}=n,b=t(null!=(i=g(v))?i:{x:0,y:0}),S=t(),x=e=>!a||a.includes(e.pointerType),E=e=>{g(r)&&e.preventDefault(),g(u)&&e.stopPropagation()},F=t=>{var i;if(0!==t.button)return;if(g(n.disabled)||!x(t))return;if(g(o)&&t.target!==g(e))return;const l=g(h),a=null==(i=null==l?void 0:l.getBoundingClientRect)?void 0:i.call(l),r=g(e).getBoundingClientRect(),u={x:t.clientX-(l?r.left-a.left+l.scrollLeft:r.left),y:t.clientY-(l?r.top-a.top+l.scrollTop:r.top)};!1!==(null==d?void 0:d(u,t))&&(S.value=u,E(t))},O=t=>{if(g(n.disabled)||!x(t))return;if(!S.value)return;const i=g(h),l=g(e).getBoundingClientRect();let{x:a,y:r}=b.value;"x"!==m&&"both"!==m||(a=t.clientX-S.value.x,i&&(a=Math.min(Math.max(0,a),i.scrollWidth-l.width))),"y"!==m&&"both"!==m||(r=t.clientY-S.value.y,i&&(r=Math.min(Math.max(0,r),i.scrollHeight-l.height))),b.value={x:a,y:r},null==s||s(b.value,t),E(t)},A=e=>{!g(n.disabled)&&x(e)&&S.value&&(S.value=void 0,null==c||c(b.value,e),E(e))};if(w){const e={capture:null==(l=n.capture)||l};j(y,"pointerdown",F,e),j(p,"pointermove",O,e),j(p,"pointerup",A,e)}return{...k(b),position:b,isDragging:f((()=>!!S.value)),style:f((()=>`left:${b.value.x}px;top:${b.value.y}px;`))}}function K(e,n={width:0,height:0},i={}){const{window:l=T,box:a="content-box"}=i,r=f((()=>{var t,n;return null==(n=null==(t=C(e))?void 0:t.namespaceURI)?void 0:n.includes("svg")})),u=t(n.width),o=t(n.height),{stop:c}=function(e,t,n={}){const{window:i=T,...l}=n;let a;const r=M((()=>i&&"ResizeObserver"in i)),u=()=>{a&&(a.disconnect(),a=void 0)},o=f((()=>Array.isArray(e)?e.map((e=>C(e))):[C(e)])),c=s(o,(e=>{if(u(),r.value&&i){a=new ResizeObserver(t);for(const t of e)t&&a.observe(t,l)}}),{immediate:!0,flush:"post"}),d=()=>{u(),c()};return h(d),{isSupported:r,stop:d}}(e,(([t])=>{const n="border-box"===a?t.borderBoxSize:"content-box"===a?t.contentBoxSize:t.devicePixelContentBoxSize;if(l&&r.value){const t=C(e);if(t){const e=t.getBoundingClientRect();u.value=e.width,o.value=e.height}}else if(n){const e=Array.isArray(n)?n:[n];u.value=e.reduce(((e,{inlineSize:t})=>e+t),0),o.value=e.reduce(((e,{blockSize:t})=>e+t),0)}else u.value=t.contentRect.width,o.value=t.contentRect.height}),i);O((()=>{const t=C(e);t&&(u.value="offsetWidth"in t?t.offsetWidth:n.width,o.value="offsetHeight"in t?t.offsetHeight:n.height)}));const d=s((()=>C(e)),(e=>{u.value=e?n.width:0,o.value=e?n.height:0}));return{width:u,height:o,stop:function(){c(),d()}}}const U=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Q(e,n={}){const{document:i=N,autoExit:l=!1}=n,a=f((()=>{var t;return null!=(t=C(e))?t:null==i?void 0:i.querySelector("html")})),r=t(!1),u=f((()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find((e=>i&&e in i||a.value&&e in a.value)))),o=f((()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find((e=>i&&e in i||a.value&&e in a.value)))),s=f((()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find((e=>i&&e in i||a.value&&e in a.value)))),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find((e=>i&&e in i)),d=M((()=>a.value&&i&&void 0!==u.value&&void 0!==o.value&&void 0!==s.value)),v=()=>{if(s.value){if(i&&null!=i[s.value])return i[s.value];{const e=a.value;if(null!=(null==e?void 0:e[s.value]))return Boolean(e[s.value])}}return!1};async function m(){if(d.value&&r.value){if(o.value)if(null!=(null==i?void 0:i[o.value]))await i[o.value]();else{const e=a.value;null!=(null==e?void 0:e[o.value])&&await e[o.value]()}r.value=!1}}async function p(){if(!d.value||r.value)return;v()&&await m();const e=a.value;u.value&&null!=(null==e?void 0:e[u.value])&&(await e[u.value](),r.value=!0)}const g=()=>{const e=v();(!e||e&&c&&(null==i?void 0:i[c])===a.value)&&(r.value=e)};return j(i,U,g,!1),j((()=>C(a)),U,g,!1),l&&h(m),{isSupported:d,isFullscreen:r,enter:p,exit:m,toggle:async function(){await(r.value?m():p())}}}function Z(e={}){const{window:n=T,initialWidth:i=Number.POSITIVE_INFINITY,initialHeight:l=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:r=!0}=e,u=t(i),o=t(l),c=()=>{n&&(r?(u.value=n.innerWidth,o.value=n.innerHeight):(u.value=n.document.documentElement.clientWidth,o.value=n.document.documentElement.clientHeight))};if(c(),O(c),j("resize",c,{passive:!0}),a){const e=$("(orientation: portrait)");s(e,(()=>c()))}return{width:u,height:o}}export{Q as a,Z as b,Y as c,A as d,z as e,H as f,E as g,K as h,X as i,q as u};
