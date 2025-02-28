import{_ as e}from"./index-B7Sos0mo.js";import{_ as t}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-27S6yIFO.js";import{d as n,r as o,Z as a,G as l,ah as d,A as s,p as r,B as i,K as u,S as c,aF as p,W as f,a0 as m,D as v,aG as g,g as y,b as h,o as b,e as x,t as $,v as N,I as S,q as _,a as C,c as D,h as z,a4 as k,w as E,aH as w,F as M,i as O,H as R,P as F,a1 as A,J as B,f as j,C as L,x as T}from"./index-BAyZi_co.js";import{_ as V,l as I,d as P,e as Y}from"./DeptAddModal.vue_vue_type_script_setup_true_lang-BUT9YV4L.js";import{u as X}from"./useTable-DUTUCT70.js";import{u as W}from"./useDownload-C-k5xGNE.js";import{h as U}from"./has-CF2CDZHh.js";import"./index-FaVgdj3V.js";import"./GiForm-BWZRNfN-.js";import"./index.vue_vue_type_script_setup_true_lang-Dekw0iDL.js";import"./useResetReactive-NMdkdCz2.js";import"./useBreakpoint-C2fvcUp5.js";const q=function(e){return"[object Object]"===Object.prototype.toString.call(e)},K=function(e){return"string"==typeof e},J=function(e){return"number"==typeof e},H={print:(e,t,n)=>K(t)||"boolean"==typeof n,pretty:(e,t,n)=>K(t)&&K(e)||"string"==typeof n,primary:(e,t)=>K(e)||"boolean"==typeof t,success:(e,t)=>K(e)||"boolean"==typeof t,info:(e,t)=>K(e)||"boolean"==typeof t,warning:(e,t)=>K(e)||"boolean"==typeof t,danger:(e,t)=>K(e)||"boolean"==typeof t};H.print=function(e,t="default",n=!1){return!0},H.pretty=function(e,t,n="primary"){return!0},H.primary=function(e,t=!1){return this.print&&this.print(e,"primary",t),!0},H.success=function(e,t=!1){return this.print&&this.print(e,"success",t),!0},H.info=function(e,t=!1){return this.print&&this.print(e,"info",t),!0},H.warning=function(e,t=!1){return this.print&&this.print(e,"warning",t),!0},H.danger=function(e,t=!1){return this.print&&this.print(e,"danger",t),!0};const G=function(){let e=!1;return{get:()=>e,set:t=>{e=t}}}(),Z=function(e,t,n){const{id:o,children:a}=t;if(e[o]===n)return e;if(Array.isArray(e[a])){const o=e[a];for(let e=0,a=o.length;e<a;e++){const a=o[e],l=Z(a,t,n);if(l)return l}}},Q=function(e,t){const{parenNode:n,onlyOneNode:o,cloneNodeDrag:a}=t;if(n.value){const{keys:l}=t,{id:d,pid:s,children:r}=l,i=n.value.$$data,u=JSON.parse(JSON.stringify(e.$$data));a?(function(e,t){const{children:n}=t;if(q(e))o(e);else if(Array.isArray(e))for(let a=0,l=e.length;a<l;a++)o(e[a]);function o(e){if(function(e){"string"==typeof e[d]&&-1!==e[d].indexOf("clone-node")&&(e[d]=`clone-node-${e[d]}`)}(e),Array.isArray(e[n])){const t=e[n];for(let e=0,n=t.length;e<n;e++)o(t[e])}}}(u,l),o&&Array.isArray(u[r])&&(u[r]=[]),u[l.pid]=i[l.id],i[r]?i[r].push(u):i[r]=[u]):(function(e,t){const{keys:n,data:o,onlyOneNode:a}=t,{id:l,pid:d,children:s}=n,r=Z(o,n,e[d]),i=r[s];let u;for(let p=0,f=i.length;p<f;p++)if(i[p][l]===e[l]){i.splice(p,1),u=p;break}const c=e[s];a&&void 0!==u&&c&&(e[s]=[],c.forEach((e=>{e[d]=r[l]})),r[s].splice(u,0,...c))}(u,t),u[s]=i[d],i[r]?i[r].push(u):i[r]=[].concat(u))}},ee={beforeMount(e,t){const{l:n,t:o}=t.modifiers,{drag:a,dragData:l,node:d,emit:s,beforeDragEnd:r,initNodes:i}=t.value,{value:u}=t,c={...l};e.addEventListener("mousedown",(function(e){const t=e.target;if(!1===a||0!==e.button||d.focused||d.$$data.noDragging||t.className.indexOf("tree-org-node-btn")>-1)return!1;(function(e){e.stopPropagation(),v=e.screenX,g=e.screenY,f=0,c.contextmenu.value=!1;const{keys:t,onlyOneNode:n}=c;if(n){const{children:e}=t,n={...d.$$data};n[e]=[],c.cloneData.value=i(n)}else c.cloneData.value=i(d.$$data)})(e),document.addEventListener("mousemove",y),document.addEventListener("mouseup",h),x("start")}));let p,f=0,m=!1,v=0,g=0;function y(t){return t.preventDefault(),!(Math.abs(t.screenX-v)<5&&Math.abs(t.screenY-g)<5)&&(m||(m=!0,function(t){G.set(!0),c.nodeMoving.value=!0,d.moving=!0;let n=e;for(;!n.classList.contains("tree-org-node");)f+=n.offsetLeft,n=n.offsetParent;f+=2,p=document.querySelector("#clone-tree-org"),p&&(p.style.width=`${n.clientWidth}px`,p.style.opacity="0.8",p.style.left=t.clientX-f+"px",p.style.top=t.clientY+2+"px")}(t)),n&&o&&u?(p&&(p.style.left=t.clientX-f+"px",p.style.top=t.clientY+2+"px"),void x("move")):n&&u?(e.style.left=t.clientX-f+"px",void x("move")):void(o&&u&&(e.style.top=t.clientY+"px",x("move"))))}function h(e){if(document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",h),m){if("function"==typeof r){const t=r(d,c.parenNode.value);t&&t.then?t.then((()=>{b(e)}),(()=>{})):!1!==t&&b(e)}else b(e);m=!1,p=null,d.moving=!1,c.nodeMoving.value=!1,setTimeout((()=>{G.set(!1)}),200)}}function b(e){const t=document.querySelector(".tree-org-node__moving");if(t&&t.contains(e.target))return x("end"),!1;Q(d,c),x("end")}function x(e){"start"!==e?"move"!==e?"end"===e&&s("on-node-drag-end",d,c.parenNode.value):s("on-node-drag",d):s("on-node-drag-start",d)}}},te={onClick:"onNodeClick",onDblclick:"onNodeDblclick",onContextmenu:"onNodeContextmenu",onMouseenter:"onNodeMouseenter",onMouseleave:"onNodeMouseleave"};function ne(e,t){if("function"==typeof e)return function(n){n.target.className.indexOf("org-tree-node-btn")>-1||e(n,t)}}const oe=(e,t,n)=>!(Array.isArray(e[t])&&e[t].length>0)&&!n||e.isLeaf,ae=(e,t,n)=>{const{attrs:o}=n,a=["tree-org-node"],s=[],{expand:r,children:i,id:u}=t;return oe(t,"children",o.lazy)?a.push("is-leaf"):o.collapsable&&!r&&a.push("collapsed"),t.moving&&a.push("tree-org-node__moving"),s.push(le(e,t,n)),o.collapsable&&!r||s.push(de(e,i,n)),l(e("div",{class:a,key:u},s),[[d,!t.hidden]])},le=(e,t,n)=>{const{attrs:o}=n,a=o.props,s=o.renderContent,{label:r}=t,i=[];if(n.slots.default)i.push(n.slots.default({node:t}));else if("function"==typeof s){H.warning("scoped-slot header is easier to use. We recommend users to use scoped-slot header.");const n=s(e,t);n&&i.push(n)}else i.push(e("div",{class:"tree-org-node__text"},r));o.collapsable&&!oe(t,"children",o.lazy)&&i.push(((e,t,n)=>{const{attrs:o}=n,a=o.onOnExpand,l=["tree-org-node__expand"];t.expand&&l.push("expanded");const d=[];return n.slots.expand?d.push(n.slots.expand({node:t})):d.push(e("span",{class:"tree-org-node__expand-btn"})),e("span",{class:l,onMousedown:e=>{e.stopPropagation()},onDblclick:e=>{e.stopPropagation()},onClick:e=>{e.stopPropagation(),a&&a(e,t)}},d)})(e,t,n));const u=["tree-org-node__inner"];let{labelStyle:c,labelClassName:p,selectedClassName:f,selectedKey:v}=o;"function"==typeof p&&(p=p(t)),p&&u.push(p),t.className&&u.push(t.className),"function"==typeof f&&(f=f(t)),void 0!==v&&(v=Array.isArray(v)?v:[v]),f&&v&&v.includes(t.id)&&u.push(f);const g=["tree-org-node__content"];t.$$root&&g.push(`is-root_${o.suffix}`),t.label||g.push("is-empty"),t.$$focused&&g.push("is-edit");const y=m("nodedrag"),h=[];o.vNodedrag&&y&&!t.$$root&&h.push([y,Object.assign({node:t},o.vNodedrag),"",{l:!0,t:!0}]);const b={};for(const l in te)if(Object.prototype.hasOwnProperty.call(te,l)){const e=o[te[l]];e&&(b[l]=ne(e,t))}const x=o.onNodeFocus,$=o.onNodeBlur,N=m("focus"),S=[[d,t.$$focused]];return N&&S.push([N,t.$$focused]),e("div",{class:g},[l(e("div",{class:u,style:t.style?t.style:c,...b},i),h),l(e("textarea",{class:"tree-org-node__textarea",placeholder:"请输入节点名称",value:t.label,onFocus:e=>{x&&x(e,t.$$data,t)},onInput:e=>{t.label=e.target.value},onBlur:e=>{void 0!==t.$$data.focused&&(t.$$data.focused=!1),t.$$data[a.label]=e.target.value,t.$$focused=!1,$&&$(e,t.$$data,t)},onClick:e=>e.stopPropagation()}),S)])},de=(e,t,n)=>{if(Array.isArray(t)&&t.length){const o=t.filter((e=>!e.$$hidden)).map((t=>ae(e,t,n)));return e("div",{class:"tree-org-node__children"},o)}return""},se=(e,t)=>e.data&&0!==Object.keys(e.data).length?(e.data.$$root=!e.isClone,ae(a,e.data,t)):"";se.directives={focus:{mounted(e,{value:t}){t&&e.focus()},updated(e,{value:t}){t&&e.focus()}},nodedrag:ee};var re=n({props:{scale:String,tools:Object},setup(e,{emit:t}){const n=o(!1),a=o(!1);function l(e){a.value=!a.value,t("onFullscreen",e)}function d(){document.isFullScreen||document.mozIsFullScreen||document.webkitIsFullScreen||!a.value||l("esc")}const s=r((()=>n.value?"全部收起":"全部展开")),c=r((()=>a.value?"退出全屏":"全屏"));return i((()=>{window.addEventListener("resize",d)})),u((()=>{window.removeEventListener("resize",d)})),{expanded:n,fullscreen:a,expandTitle:s,fullTiltle:c,handleExpand:function(){n.value=!n.value,t("onExpand")},handleScale:function(e){"out"===e?t("onScale",.1):"in"===e?t("onScale",-.1):t("onRestore")},handleFullscreen:l}}});const ie={class:"zm-tree-handle"},ue={key:0,class:"zm-tree-percent"},ce=["title"],pe={class:"zm-tree-svg"},fe=[y("span",{class:"zm-tree-icon"},"+",-1)],me=[y("span",{class:"zm-tree-icon"},"-",-1)],ve=[y("span",{class:"zm-tree-restore"},null,-1)],ge=["title"],ye={class:"zm-tree-svg"};function he(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)}function be(e,t,n,o=1){return{deltaX:Math.round(t/o/e[0])*e[0],deltaY:Math.round(n/o/e[1])*e[1]}}function xe(e,t,n){return e<t?t:n<e?n:e}re.render=function(e,t,n,o,a,l){return b(),h("div",ie,[e.tools.scale?(b(),h("div",ue,$(e.scale),1)):x("v-if",!0),e.tools.expand?(b(),h("div",{key:1,onClick:t[0]||(t[0]=(...t)=>e.handleExpand&&e.handleExpand(...t)),title:e.expandTitle,class:"zm-tree-handle-item"},[y("span",pe,[y("i",{class:N(["treefont",e.expanded?"icon-collapse":"icon-expand"])},null,2)])],8,ce)):x("v-if",!0),e.tools.zoom?(b(),h("div",{key:2,onClick:t[1]||(t[1]=t=>e.handleScale("out")),title:"放大",class:"zm-tree-handle-item zoom-out"},fe)):x("v-if",!0),e.tools.zoom?(b(),h("div",{key:3,onClick:t[2]||(t[2]=t=>e.handleScale("in")),title:"缩小",class:"zm-tree-handle-item zoom-in"},me)):x("v-if",!0),e.tools.restore?(b(),h("div",{key:4,onClick:t[3]||(t[3]=t=>e.handleScale("restore")),title:"还原",class:"zm-tree-handle-item"},ve)):x("v-if",!0),e.tools.fullscreen?(b(),h("div",{key:5,onClick:t[4]||(t[4]=(...t)=>e.handleFullscreen&&e.handleFullscreen(...t)),title:e.fullTiltle,class:"zm-tree-handle-item"},[y("span",ye,[y("i",{class:N(["treefont",e.fullscreen?"icon-unfullscreen":"icon-fullscreen"])},null,2)])],8,ge)):x("v-if",!0)])},re.__file="src/components/tools/tools.vue";const $e=function(e,t,n,o=!1){e&&t&&n&&e.addEventListener(t,n,o)},Ne=function(e,t,n,o=!1){e&&t&&n&&e.removeEventListener(t,n,o)},Se=Symbol("wrapper");function _e(e,t){if(null===(n=e)||"object"!=typeof n||e.__elPropsReservedKey)return e;var n;const{values:o,required:a,default:l,type:d,validator:s}=e,r=o||s?e=>{let n=!1,a=[];if(o&&(a=[...o,l],n=n||a.includes(e)),s&&(n=n||s(e)),!n&&a.length>0){const n=[...new Set(a)].map((e=>JSON.stringify(e))).join(", ");g(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${n}], got value ${JSON.stringify(e)}.`)}return n}:void 0;return{type:"object"==typeof d&&Object.getOwnPropertySymbols(d).includes(Se)?d[Se]:d,validator:r,__elPropsReservedKey:!0,default:l,required:!!a}}const Ce=e=>function(e){let t=-1;const n=e?e.length:0,o={};for(;++t<n;){const n=e[t];o[n[0]]=n[1]}return o}(Object.entries(e).map((([e,t])=>[e,_e(t,e)]))),De=e=>({[Se]:e});var ze=n({replace:!0,name:"Draggable",props:Ce({className:{type:String,default:"zm-draggable"},classNameDraggable:{type:String,default:"draggable"},classNameDragging:{type:String,default:"dragging"},classNameActive:{type:String,default:"active"},disableUserSelect:{type:Boolean,default:!0},enableNativeDrag:{type:Boolean,default:!1},preventDeactivation:{type:Boolean,default:!1},active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},x:{type:Number,default:0},y:{type:Number,default:0},z:{type:[String,Number],default:"auto",validator:e=>"string"==typeof e?"auto"===e:e>=0},dragCancel:String,axis:{type:String,default:"both",validator:e=>["x","y","both"].includes(e)},grid:{type:Array,default:()=>[1,1]},parent:{type:Boolean,default:!1},scale:{type:Number,default:1,validator:e=>e>0}}),emits:{activated:()=>!0,deactivated:()=>!0,dragging:(e,t)=>J(e)&&J(t),dragstop:(e,t)=>J(e)&&J(t),"update:active":e=>"boolean"==typeof e},setup(e,t){const n=o(),a=((e,{emit:t},n)=>{const a={start:"mousedown",move:"mousemove",stop:"mouseup"},l={start:"touchstart",move:"touchmove",stop:"touchend"},d={userSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",MsUserSelect:"none"},s={userSelect:"auto",MozUserSelect:"auto",WebkitUserSelect:"auto",MsUserSelect:"auto"};let u=a;const f=o(e.x),m=o(e.y),g=o(e.z),y=o(e.active),h=o(!1),b=o(0),x=o(0),$=o(0),N=o(0),S=o(0),_=o(0);let C={},D={};function z(){C={mouseX:0,mouseY:0,x:0,y:0,w:0,h:0},D={minLeft:-1/0,maxLeft:1/0,minRight:-1/0,maxRight:1/0,minTop:-1/0,maxTop:1/0,minBottom:-1/0,maxBottom:1/0}}function k(){if(e.parent){const[e,t]=E();S.value=e||0,_.value=t||0}}function E(){if(e.parent&&n.eleRef.value){const e=window.getComputedStyle(n.eleRef.value.parentNode,null);return[parseInt(e.getPropertyValue("width"),10),parseInt(e.getPropertyValue("height"),10)]}return[0,0]}function w(o){if(o instanceof MouseEvent&&1!==o.which)return;const a=o.target||o.srcElement;if(a&&n.eleRef.value&&n.eleRef.value.contains(a)){if(e.dragCancel&&function(e,t,n){let o=e;const a=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].find((e=>o&&he(o[e])))||"";if(!he(o[a]))return!1;do{if(o[a](t))return!0;if(o===n)return!1;o=o.parentNode}while(o);return!1}(a,e.dragCancel,n.eleRef.value))return void(h.value=!1);y.value||(y.value=!0,t("activated"),t("update:active",!0)),e.draggable&&(h.value=!0),o instanceof MouseEvent?(C.mouseX=o.pageX,C.mouseY=o.pageY):(C.mouseX=o.touches[0].pageX,C.mouseY=o.touches[0].pageY),C.left=f.value,C.right=b.value,C.top=m.value,C.bottom=x.value,e.parent&&(D=M()),$e(document.documentElement,u.move,R),$e(document.documentElement,u.stop,F)}}function M(){const t=e.grid;return{minLeft:f.value%t[0],maxLeft:Math.floor((S.value-$.value-f.value)/t[0])*t[0]+f.value,minRight:b.value%t[0],maxRight:Math.floor((S.value-$.value-b.value)/t[0])*t[0]+b.value,minTop:m.value%t[1],maxTop:Math.floor((_.value-N.value-m.value)/t[1])*t[1]+m.value,minBottom:x.value%t[1],maxBottom:Math.floor((_.value-N.value-x.value)/t[1])*t[1]+x.value}}function O(o){const a=o.target||o.srcElement;n.eleRef.value&&!n.eleRef.value.contains(a)&&y.value&&!e.preventDeactivation&&(y.value=!1,t("deactivated"),t("update:active",!1))}function R(n){h.value&&function(n){const o=e.axis,a=e.grid;let l=0,d=0;n instanceof MouseEvent?(l=n.pageX,d=n.pageY):(l=n.touches[0].pageX,d=n.touches[0].pageY);const s=o&&"y"!==o?C.mouseX-l:0,r=o&&"x"!==o?C.mouseY-d:0,{deltaX:i,deltaY:u}=be(a,s,r,e.scale),c=xe(C.left-i,D.minLeft,D.maxLeft),p=xe(C.top-u,D.minTop,D.maxTop),v=xe(C.right+i,D.minRight,D.maxRight),g=xe(C.bottom+u,D.minBottom,D.maxBottom);f.value=c,m.value=p,b.value=v,x.value=g,t("dragging",f.value,m.value)}(n)}function F(){z(),h.value&&(h.value=!1,t("dragstop",f.value,m.value))}p((()=>{z()})),i((()=>{!e.enableNativeDrag&&n.eleRef.value&&(n.eleRef.value.ondragstart=()=>!1);const[t,o]=E();if(S.value=t,_.value=o,n.eleRef.value){const[e,t]=function(e){const t=window.getComputedStyle(e);return[parseFloat(t.getPropertyValue("width")),parseFloat(t.getPropertyValue("height"))]}(n.eleRef.value);$.value=e,N.value=t,b.value=S.value-$.value-f.value,x.value=_.value-N.value-m.value}$e(document.documentElement,"mousedown",O),$e(document.documentElement,"touchend touchcancel",O),$e(window,"resize",k)})),v((()=>{Ne(document.documentElement,"mousedown",O),Ne(document.documentElement,"touchstart",F),Ne(document.documentElement,"mousemove",R),Ne(document.documentElement,"touchmove",R),Ne(document.documentElement,"mouseup",F),Ne(document.documentElement,"touchend touchcancel",O),Ne(window,"resize",k)}));const A=r((()=>({transform:`translate(${f.value}px, ${m.value}px)`,zIndex:g.value,...h.value&&e.disableUserSelect?d:s})));return c((()=>e.active),(e=>{y.value=e,t(e?"activated":"deactivated")})),c((()=>e.z),(e=>{(e>=0||"auto"===e)&&(g.value=e)})),c((()=>e.x),(t=>{h.value||(e.parent&&(D=M()),function(t){const{deltaX:n}=be(e.grid,t,m.value,e.scale),o=xe(n,D.minLeft,D.maxLeft);f.value=o,b.value=S.value-$.value-o}(t))})),c((()=>e.y),(t=>{h.value||(e.parent&&(D=M()),function(t){const{deltaY:n}=be(e.grid,f.value,t,e.scale),o=xe(n,D.minTop,D.maxTop);m.value=o,x.value=_.value-N.value-o}(t))})),{enabled:y,dragging:h,style:A,resetBoundsAndMouseState:z,elementTouchDown:function(e){u=l,w(e)},elementMouseDown:function(e){u=a,w(e)}}})(e,t,{eleRef:n});return{top:top,eleRef:n,...a}}});ze.render=function(e,t,n,o,a,l){return b(),h("div",{style:_(e.style),class:N([{[e.classNameActive]:e.enabled,[e.classNameDragging]:e.dragging,[e.classNameDraggable]:e.draggable},e.className]),ref:"eleRef",onMousedown:t[0]||(t[0]=(...t)=>e.elementMouseDown&&e.elementMouseDown(...t)),onTouchstart:t[1]||(t[1]=(...t)=>e.elementTouchDown&&e.elementTouchDown(...t))},[S(e.$slots,"default")],38)},ze.__file="src/components/draggable/src/draggable.vue";var ke=n({components:{TreeOrgNode:se},props:Ce({data:{type:Object,required:!0},props:{type:De(Object)},modelValue:Boolean,horizontal:Boolean,selectedKey:String,collapsable:Boolean,renderContent:Function,labelStyle:Object,labelClassName:{type:[Function,String]}}),setup:(e,t)=>({defaultSlot:!!t.slots.default,expandSlot:!!t.slots.expand})});ke.render=function(e,t,n,o,a,s){const r=C("tree-org-node");return b(),D(w,{to:"body"},[l(y("div",{id:"clone-tree-org",class:N(["clone-tree-org tree-org",{horizontal:e.horizontal,collapsable:e.collapsable}])},[z(r,{data:e.data,props:e.props,isClone:!1,horizontal:e.horizontal,labelStyle:e.labelStyle,collapsable:e.collapsable,renderContent:e.renderContent,labelClassName:e.labelClassName},k({_:2},[e.defaultSlot?{name:"default",fn:E((({node:t})=>[S(e.$slots,"default",{node:t})]))}:void 0,e.expandSlot?{name:"expand",fn:E((({node:t})=>[S(e.$slots,"expand",{node:t})]))}:void 0]),1032,["data","props","horizontal","labelStyle","collapsable","renderContent","labelClassName"])],2),[[d,e.modelValue]])])},ke.__file="src/components/clone-org/clone-org.vue";const Ee=(e,{emit:t},n)=>{const a=o("");function l(e,t,n){if(e[t.id]===n)return e;if(Array.isArray(e[t.children])){const o=e[t.children];for(let e=0,a=o.length;e<a;e++){const a=l(o[e],t,n);if(a)return a}}}function d(){const{props:n,data:o,node:a}=e;if(e.nodeDelete)return void e.nodeDelete(a.$$data);if(a.$$root)return void H.pretty("[提示] ","根节点不允许删除","danger");const{id:d,children:s}=n,r=l(o,n,a.pid);if(r){const e=r[s];for(let n=0,o=e.length;n<o;n++)if(e[n][d]===a.id){e.splice(n,1),t("onNodeDelete",a.$$data,a);break}}}function s(){const{nodeEdit:n,node:o}=e;n?n(o.$$data):(o.$$focused=!0,t("onNodeFocus",o.$$data))}function u(o){if(e.modelValue){if(n.eleRef.value&&n.eleRef.value.contains(o.target))return!1;t("update:modelValue",!1)}}const c=r((()=>({left:`${e.x}px`,top:`${e.y}px`}))),p=r((()=>!e.disabled&&!e.node.disabled));return i((()=>{document.addEventListener("mousedown",u)})),v((()=>{document.removeEventListener("mousedown",u)})),{position:c,editable:p,handleMenu:function(o){const l=o.target;if("zm-tree-menu-item"===l.className){const o=l.getAttribute("action");switch(o){case"copy":e.nodeCopy?e.nodeCopy(e.node.$$data):(a.value=e.node.label,f((()=>{n.inputRef&&n.inputRef.value&&(n.inputRef&&n.inputRef.value.select(),navigator.clipboard.writeText(a.value).then((function(){H.pretty("[提示] ","文本复制成功","success")}),(function(){H.pretty("[错误] ","浏览器不支持","danger")})),t("onNodeCopy",a.value))})));break;case"add":!function(){if(e.nodeAdd)return void e.nodeAdd(e.node.$$data);const{id:n,pid:o,label:a,expand:l,children:d}=e.props,{node:s}=e,r={[n]:String((new Date).getTime()),[o]:s.id,[a]:"",[l]:!1,[d]:[],newNode:!0,focused:!0};Array.isArray(s.children)?s.$$data[d].push(r):s.$$data[d]=[r],t("onNodeFocus",r)}();break;case"edit":s();break;case"delete":d()}t("contextmenu",{command:o,node:e.node,data:e.node.$$data}),t("update:modelValue",!1)}},handleEdit:s,handleClose:u,afterEnter:function(){t("opened")},afterLeave:function(){t("closed")}}};var we=n({name:"Contextmenu",props:Ce({modelValue:{type:Boolean,required:!0},data:{type:Object,required:!0},node:{type:De(Object),required:!0},props:{type:De(Object)},x:Number,y:Number,menus:{type:De(Array)},nodeAdd:Function,nodeDelete:Function,nodeEdit:Function,nodeCopy:Function,disabled:Boolean}),emits:{onNodeDelete:(e,t)=>q(e)&&q(t),onNodeCopy:e=>K(e),contextmenu:e=>q(e),onNodeFocus:e=>q(e),opened:()=>!0,closed:()=>!0,"update:modelValue":e=>"boolean"==typeof e},setup(e,t){const n=o(),a=o();return{eleRef:a,inputRef:n,copyText:o(""),oldData:s({}),...Ee(e,t,{inputRef:n,eleRef:a})}}});const Me=["action"];we.render=function(e,t,n,o,a,s){return b(),D(w,{to:"body"},[z(F,{name:"dialog-fade",onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave,persisted:""},{default:E((()=>[l(y("div",{style:_(e.position),onClick:t[1]||(t[1]=(...t)=>e.handleMenu&&e.handleMenu(...t)),ref:"eleRef",class:"zm-tree-contextmenu"},[y("ul",null,[(b(!0),h(M,null,O(e.menus,(t=>(b(),h(M,null,[e.editable||!["add","edit","delete"].includes(t.command)?(b(),h("li",{class:"zm-tree-menu-item",action:t.command,key:t.command},$(t.name),9,Me)):x("v-if",!0)],64)))),256))]),l(y("textarea",{class:"copy-textarea",ref:"inputRef","onUpdate:modelValue":t[0]||(t[0]=t=>e.copyText=t)},null,512),[[R,e.copyText]])],4),[[d,e.modelValue]])])),_:1},8,["onAfterEnter","onAfterLeave"])])},we.__file="src/components/contextmenu/src/contextmenu.vue";const Oe=[{name:"复制文本",command:"copy"},{name:"新增节点",command:"add"},{name:"编辑节点",command:"edit"},{name:"删除节点",command:"delete"}],Re=Ce({data:{type:Object,required:!0},center:Boolean,props:{type:De(Object),default:()=>({id:"id",pid:"pid",label:"label",expand:"expand",children:"children"})},toolBar:{type:[Object,Boolean],default:()=>({expand:!0,scale:!0,zoom:!0,restore:!0,fullscreen:!0})},disabled:{type:Boolean,default:!1},scalable:{type:Boolean,default:!0},draggable:{type:Boolean,default:!0},draggableOnNode:{type:Boolean,default:!1},nodeDraggable:{type:Boolean,default:!0},cloneNodeDrag:{type:Boolean,default:!0},onlyOneNode:{type:Boolean,default:!0},clickDelay:{type:Number,default:260},lazy:Boolean,load:{type:De(Function)},defaultExpandLevel:Number,defaultExpandKeys:{type:Array,default:()=>[]},beforeDragEnd:Function,horizontal:Boolean,selectedKey:{type:[Array,String,Number]},collapsable:Boolean,renderContent:Function,labelStyle:Object,labelClassName:{type:[Function,String]},selectedClassName:{type:[Function,String]},defineMenus:{type:De([Array,Function]),default:()=>Oe},nodeAdd:Function,nodeDelete:Function,nodeEdit:Function,nodeCopy:Function,filterNodeMethod:Function}),Fe=(e,{emit:t},n)=>{const a=o(0),l=o(0),d=o(!1);function i(t,o){const d=n.zoomRef.value,s=n.treeRef.value;let r=d.clientWidth/2;const i=d.clientHeight/2;let u=d.clientHeight-s.clientHeight,c=d.clientWidth-s.clientWidth;if(u>0&&(u=0),c>0&&(c=0),e.center){const e=(d.clientWidth-s.clientWidth)/2;c-=e,r-=e}a.value=t>r?r:t<c?c:t,l.value=o<u?u:o>i?i:o}function u(e,n){i(e,n),setTimeout((()=>{G.set(!1)}),200),t("on-drag-stop",{x:e,y:n})}const m=o(!1),v=s({value:{}}),g=o(!1),y=o(0),h=o(0),b=o({}),x=o([]),$=o(1);function N(t){if(!e.scalable)return;const n=Number((Number($.value)+t).toFixed(1));$.value=t>0?Math.min(3,n):Math.max(.3,n)}function S(t,n,o){if(d.value=!0,!e.center||e.horizontal){const e=t.offsetLeft-n;a.value-=e}const s=t.offsetTop-o;l.value-=s,i(a.value,l.value)}let _;const C=s(Object.assign({id:"id",pid:"pid",label:"label",expand:"expand",children:"children",isLeaf:"isLeaf"},e.props)),D=o(!1);function z(e){e.forEach((e=>{e.expand&&(e.expand=!1,L.delete(e.id)),e.children&&z(e.children)}))}const k=o(!1);function E(e,t){Array.isArray(e)?e.forEach((e=>{t&&L.add(e.id),e.expand=t,t&&L.add(e.id),e.children&&E(e.children,t)})):(t&&L.add(e.id),e.expand=t,t&&L.add(e.id),e.children&&E(e.children,t))}function w(e){V.value=T(e)}const M=r((()=>({width:100/$.value+"%",height:100/$.value+"%",transform:`scale(${$.value})`}))),O=r((()=>`${Math.round(100*$.value)}%`)),R=r((()=>e.draggableOnNode&&!e.nodeDraggable?"":`.tree-org-node__content:not(.is-root_${P})>.tree-org-node__inner`)),F=r((()=>k.value?"收起全部节点":"展开全部节点")),A=r((()=>k.value?"收起全部节点":"展开全部节点")),B=o({}),j=r((()=>{const{cloneNodeDrag:n,onlyOneNode:o,data:a}=e;return{drag:e.nodeDraggable,dragData:{keys:C,nodeMoving:m,stopClick:G,parenNode:v,cloneNodeDrag:n,onlyOneNode:o,contextmenu:g,cloneData:B,data:a},beforeDragEnd:e.beforeDragEnd,initNodes:T,emit:t}}));c((()=>e.horizontal),(()=>{f((()=>{u(a.value,l.value)}))}));let L=new Set(e.defaultExpandKeys);function T(t){const{defaultExpandLevel:n=0}=e,o=(e,t)=>{const{id:a,label:l,pid:d,expand:s,children:r,isLeaf:i}=C,u={};Object.keys(e).map((t=>{["hidden","disabled","className","style"].includes(t)&&(u[t]=e[t])}));const c=e[r],p=t+1,f=e[s],m=e[a];return(f||void 0===f&&t<n)&&L.add(m),{...u,id:m,label:e[l],pid:e[d],expand:L.has(m),children:c?c.map((e=>o(e,p))):void 0,isLeaf:e[i],$$level:t,$$data:e,$$focused:e.focused||!1}};return o(t,0)}const V=o(T(e.data));c((()=>e.data),((t,n)=>{t!==n&&(L=new Set(e.defaultExpandKeys)),w(e.data)}),{deep:!0});const I=s({visible:!0,data:{expand:!0,scale:!0,zoom:!0,restore:!0,fullscreen:!0}});p((()=>{"object"==typeof e.toolBar?Object.assign(I.data,e.toolBar):e.toolBar||(I.visible=!1)}));const P=function(e){e=e||32;const t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678";let n="";for(let o=0;o<e;o++)n+=t.charAt(Math.floor(48*Math.random()));return n}(6);return{keys:C,left:a,top:l,menuX:y,menuY:h,suffix:P,nodeMoving:m,zoomStyle:M,tools:I,zoomPercent:O,dragCancel:R,expandTitle:F,fullTiltle:A,nodeargs:j,expanded:k,fullscreen:D,treeData:V,autoDragging:d,contextmenu:g,nodeMenus:x,menuData:b,cloneData:B,filter:function(t){const n=e.filterNodeMethod;if(!n)throw new Error("[Tree] filterNodeMethod is required when filter");const o=function(e){const a=e.children||[];if(a.forEach((e=>{e.$$hidden=!n.call(e,t,e),o(e)})),e.$$hidden&&a.length){let t=!0;t=a.some((e=>!e.$$hidden)),e.$$hidden=!t}t&&!e.$$hidden&&e.children&&(e.expand=!0)};o(V.value)},setData:w,zoomWheel:function(n){e.scalable&&(n.preventDefault(),n.deltaY<0?N(.1):N(-.1),t("on-zoom",$.value))},onDrag:function(e,n){G.set(!0),d.value=!1,a.value=e,l.value=n,t("on-drag",{x:e,y:n})},onDragStop:u,expandChange:function(){k.value=!k.value,k.value||(L.clear(),f((()=>{u(a.value,l.value)}))),E(V.value,k.value),t("on-expand-all",k.value)},handleFullscreen:function(e){D.value=!D.value,"esc"!==e&&(D.value?function(){const e=n.eleRef.value;e.requestFullscreen&&e.requestFullscreen()}():document.exitFullscreen&&document.exitFullscreen())},zoomOrgchart:N,restoreOrgchart:function(){$.value=1,a.value=0,l.value=0,t("on-restore")},handleExpand:function(n,o){n.stopPropagation();const a=document.querySelector(`.is-root_${P}`);if(a){const d=a.offsetLeft,s=a.offsetTop;o.expand=!o.expand;let r=!0;o.expand?(L.add(o.id),e.lazy&&e.load&&(r=!1,l=o,(0,e.load)(l,((e,t)=>{const{children:n}=C;l.isLeaf=!e.length,e.length&&(l.$$data[n]=e,t&&f((()=>{S(a,d,s)})))})))):!o.expand&&o.children&&(L.delete(o.id),z(o.children)),f((()=>{r&&S(a,d,s)})),t("on-expand",n,o.$$data,o)}var l},getExpandKeys:function(){return[...L]},setExpandKeys:function(t){L=new Set(t),w(e.data)},nodeMouseenter:function(e,n){return m.value&&(v.value=n),t("on-node-mouseenter",e,n.$$data,n),!0},nodeMouseleave:function(e,n){return m.value&&(v.value=null),t("on-node-mouseleave",e,n.$$data,n),!0},nodeContextmenu:function(t,n){t.stopPropagation(),t.preventDefault();const{defineMenus:o}=e;Array.isArray(o)?x.value=o:"function"==typeof o&&(x.value=o(t,n)||[]),g.value=!0,y.value=t.clientX,h.value=t.clientY,b.value=n},handleFocus:function(e,n,o){t("on-node-focus",e,n,o)},handleBlur:function(e,n,o){const{id:a,label:l}=C,d=b.value.children||[];for(let t=d.length;t>0;t--){const e=d[t-1];if(""===e[a]&&""===e[l]){d.splice(t-1,1);break}}t("on-node-blur",e,n,o)},handleClick:function(n,o){G.get()||(clearTimeout(_),_=setTimeout((()=>{t("on-node-click",n,o.$$data,o)}),e.clickDelay))},handleDblclick:function(e,n){clearTimeout(_),t("on-node-dblclick",e,n.$$data,n)}}};var Ae=n({name:"vue3TreeOrg",components:{Tools:re,CloneOrg:ke,Draggable:ze,Contextmenu:we,TreeOrgNode:se},directives:{nodedrag:ee},props:Re,emits:{"on-drag":({x:e,y:t})=>J(e)&&J(t),"on-drag-stop":({x:e,y:t})=>J(e)&&J(t),"on-restore":()=>!0,"on-zoom":e=>J(e),"on-expand":(e,t,n)=>e instanceof MouseEvent&&q(n)&&q(t),"on-expand-all":e=>"boolean"==typeof e,"on-node-blur":(e,t,n)=>e instanceof FocusEvent&&q(n)&&q(t),"on-node-click":(e,t,n)=>e instanceof MouseEvent&&q(n)&&q(t),"on-node-dblclick":(e,t,n)=>e instanceof MouseEvent&&q(n)&&q(t),"on-node-mouseenter":(e,t,n)=>e instanceof MouseEvent&&q(n)&&q(t),"on-node-mouseleave":(e,t,n)=>e instanceof MouseEvent&&q(n)&&q(t),"on-contextmenu":e=>q(e),"on-node-copy":e=>K(e),"on-node-delete":e=>q(e),"on-node-drag-start":e=>q(e),"on-node-drag":e=>q(e),"on-node-drag-end":(e,t)=>q(e)&&q(t),"on-node-focus":(e,t,n)=>e instanceof FocusEvent&&q(n)&&q(t)},setup(e,t){const n=!!t.slots.default,a=!!t.slots.expand,l=o(),d=o(),s=o();return{eleRef:l,treeRef:d,zoomRef:s,defaultSlot:n,expandSlot:a,...Fe(e,t,{eleRef:l,treeRef:d,zoomRef:s})}}});const Be={ref:"eleRef",class:"zm-tree-org"},je={class:"tree-org-node__text"},Le=y("span",{class:"tree-org-node__expand-btn"},null,-1),Te={class:"tree-org-node__text"},Ve=y("span",{class:"tree-org-node__expand-btn"},null,-1);Ae.render=function(e,t,n,o,a,l){const d=C("tree-org-node"),s=C("Draggable"),r=C("Tools"),i=C("clone-org"),u=C("Contextmenu");return b(),h("div",Be,[y("div",{ref:"zoomRef",class:N(["zoom-container",{"is-center":e.center&&!e.horizontal}]),style:_(e.zoomStyle),onWheel:t[0]||(t[0]=(...t)=>e.zoomWheel&&e.zoomWheel(...t))},[z(s,{x:e.left,y:e.top,class:N({dragging:e.autoDragging}),onDragging:e.onDrag,onDragstop:e.onDragStop,draggable:e.draggable,"drag-cancel":e.dragCancel},{default:E((()=>[y("div",{ref:"treeRef",class:N(["tree-org",{horizontal:e.horizontal,collapsable:e.collapsable}])},[z(d,{data:e.treeData,props:e.keys,lazy:e.lazy,suffix:e.suffix,horizontal:e.horizontal,labelStyle:e.labelStyle,collapsable:e.collapsable,renderContent:e.renderContent,selectedKey:e.selectedKey,defaultExpandLevel:e.defaultExpandLevel,selectedClassName:e.selectedClassName,labelClassName:e.labelClassName,vNodedrag:e.nodeargs,onOnExpand:e.handleExpand,onNodeClick:e.handleClick,onNodeDblclick:e.handleDblclick,onNodeMouseenter:e.nodeMouseenter,onNodeMouseleave:e.nodeMouseleave,onNodeContextmenu:e.nodeContextmenu,onNodeFocus:e.handleFocus,onNodeBlur:e.handleBlur},k({_:2},[e.defaultSlot?{name:"default",fn:E((({node:t})=>[S(e.$slots,"default",{node:t},(()=>[y("div",je,[y("span",null,$(t.label),1)])]))]))}:void 0,e.expandSlot?{name:"expand",fn:E((({node:t})=>[S(e.$slots,"expand",{node:t},(()=>[Le]))]))}:void 0]),1032,["data","props","lazy","suffix","horizontal","labelStyle","collapsable","renderContent","selectedKey","defaultExpandLevel","selectedClassName","labelClassName","vNodedrag","onOnExpand","onNodeClick","onNodeDblclick","onNodeMouseenter","onNodeMouseleave","onNodeContextmenu","onNodeFocus","onNodeBlur"])],2)])),_:3},8,["x","y","class","onDragging","onDragstop","draggable","drag-cancel"])],38),e.tools.visible?(b(),D(r,{key:0,tools:e.tools.data,scale:e.zoomPercent,onOnExpand:e.expandChange,onOnScale:e.zoomOrgchart,onOnRestore:e.restoreOrgchart,onOnFullscreen:e.handleFullscreen},null,8,["tools","scale","onOnExpand","onOnScale","onOnRestore","onOnFullscreen"])):x("v-if",!0),e.nodeDraggable?(b(),D(i,{key:1,modelValue:e.nodeMoving,"onUpdate:modelValue":t[1]||(t[1]=t=>e.nodeMoving=t),props:e.keys,data:e.cloneData,horizontal:e.horizontal,"label-style":e.labelStyle,collapsable:e.collapsable,"render-content":e.renderContent,"label-class-name":e.labelClassName},k({_:2},[e.defaultSlot?{name:"default",fn:E((({node:t})=>[S(e.$slots,"default",{node:t},(()=>[y("div",Te,[y("span",null,$(t[e.keys.label]),1)])]))]))}:void 0,e.expandSlot?{name:"expand",fn:E((({node:t})=>[S(e.$slots,"expand",{node:t},(()=>[Ve]))]))}:void 0]),1032,["modelValue","props","data","horizontal","label-style","collapsable","render-content","label-class-name"])):x("v-if",!0),e.nodeMenus.length?(b(),D(u,{key:2,modelValue:e.contextmenu,"onUpdate:modelValue":t[2]||(t[2]=t=>e.contextmenu=t),x:e.menuX,y:e.menuY,node:e.menuData,data:e.data,props:e.keys,menus:e.nodeMenus,disabled:e.disabled,"node-add":e.nodeAdd,"node-delete":e.nodeDelete,"node-edit":e.nodeEdit,"node-copy":e.nodeCopy,onContextmenu:t[3]||(t[3]=t=>{e.$emit("on-contextmenu",t)}),onOnNodeCopy:t[4]||(t[4]=t=>{e.$emit("on-node-copy",t)}),onOnNodeDelete:t[5]||(t[5]=t=>{e.$emit("on-node-delete",t)})},null,8,["modelValue","x","y","node","data","props","menus","disabled","node-add","node-delete","node-edit","node-copy"])):x("v-if",!0)],512)},Ae.__file="src/components/tree-org/src/tree.vue",Ae.install=function(e){e.component(Ae.name,Ae)};const Ie={class:"gi_table_page"},Pe={class:"header-actions"},Ye=T(n({name:"SystemDept",__name:"index",setup(n){const a=s({}),i=o(),{tableData:u,loading:c,search:p,handleDelete:v}=X((()=>I(a)),{immediate:!0,onSuccess:()=>{f((()=>{var e,t;null==(t=null==(e=i.value)?void 0:e.tableRef)||t.expandAll(!0)}))}}),g=o("table"),$=[{name:"add department",command:"add"},{name:"modify department",command:"edit"},{name:"delete department",command:"delete"}],N=o(!0),S=o(""),_=r((()=>S.value?(e=>{const t=n=>{const o=[];return n.forEach((n=>{var a;if(null==(a=n.name)?void 0:a.toLowerCase().includes(e.toLowerCase()))o.push({...n});else if(n.children){const e=t(n.children);e.length&&o.push({...n,children:e})}})),o};return t(u.value)})(S.value):u.value)),k=[{title:"name",dataIndex:"name",minWidth:170,ellipsis:!0,tooltip:!0},{title:"status",dataIndex:"status",slotName:"status",align:"center"},{title:"sort",dataIndex:"sort",align:"center",show:!1},{title:"system built-in",dataIndex:"isSystem",slotName:"isSystem",align:"center",show:!1},{title:"description",dataIndex:"description",ellipsis:!0,tooltip:!0},{title:"create user",dataIndex:"createUserString",ellipsis:!0,tooltip:!0,show:!1},{title:"create time",dataIndex:"createTime",width:180},{title:"update user",dataIndex:"updateUserString",ellipsis:!0,tooltip:!0,show:!1},{title:"update time",dataIndex:"updateTime",width:180,show:!1},{title:"action",dataIndex:"action",slotName:"action",width:160,align:"center",fixed:A()?void 0:"right",show:U.hasPermOr(["system:dept:update","system:dept:delete","system:dept:add"])}],w=()=>{S.value=""},M=e=>v((()=>P(e.id)),{content:`are you sure to delete the department「${e.name}」?`,showModal:!0}),O=()=>{W((()=>Y(a)))},R=o(),F=e=>{var t;null==(t=R.value)||t.onAdd(e)},T=e=>{F(e.id)},q=e=>{var t;null==(t=R.value)||t.onUpdate(e.id)};return(n,o)=>{const a=C("a-radio"),s=C("a-radio-group"),r=C("IconDown"),u=C("IconRight"),f=C("icon-search"),v=C("a-input"),A=C("icon-refresh"),I=C("a-button"),P=C("icon-plus"),Y=C("icon-download"),X=t,W=C("a-tag"),U=C("a-link"),K=C("a-space"),J=e,H=C("a-dropdown"),G=C("a-card"),Z=m("permission");return b(),h("div",Ie,[y("div",Pe,[z(s,{modelValue:j(g),"onUpdate:modelValue":o[0]||(o[0]=e=>B(g)?g.value=e:null),type:"button",size:"small",style:{"margin-bottom":"16px"}},{default:E((()=>[z(a,{value:"table"},{default:E((()=>o[4]||(o[4]=[L("table view")]))),_:1}),z(a,{value:"tree"},{default:E((()=>o[5]||(o[5]=[L("organization chart")]))),_:1})])),_:1},8,["modelValue"])]),l(z(J,{ref_key:"tableRef",ref:i,title:"","row-key":"id",data:j(_),columns:k,loading:j(c),scroll:{x:"100%",y:"100%",minWidth:1e3},pagination:!1,"disabled-column-keys":["name"],onRefresh:j(p)},{"expand-icon":E((({expanded:e})=>[e?(b(),D(r,{key:0})):(b(),D(u,{key:1}))])),"toolbar-left":E((()=>[z(v,{modelValue:j(S),"onUpdate:modelValue":o[1]||(o[1]=e=>B(S)?S.value=e:null),placeholder:"search name","allow-clear":""},{prefix:E((()=>[z(f)])),_:1},8,["modelValue"]),z(I,{onClick:w},{icon:E((()=>[z(A)])),default:E((()=>o[6]||(o[6]=[L("reset")]))),_:1})])),"toolbar-right":E((()=>[l((b(),D(I,{type:"primary",onClick:o[2]||(o[2]=e=>F())},{icon:E((()=>[z(P)])),default:E((()=>o[7]||(o[7]=[L("add")]))),_:1})),[[Z,["system:dept:add"]]]),l((b(),D(I,{onClick:O},{icon:E((()=>[z(Y)])),default:E((()=>o[8]||(o[8]=[L("export")]))),_:1})),[[Z,["system:dept:export"]]])])),status:E((({record:e})=>[z(X,{status:e.status},null,8,["status"])])),isSystem:E((({record:e})=>[e.isSystem?(b(),D(W,{key:0,color:"red",size:"small"},{default:E((()=>o[9]||(o[9]=[L("yes")]))),_:1})):(b(),D(W,{key:1,color:"arcoblue",size:"small"},{default:E((()=>o[10]||(o[10]=[L("no")]))),_:1}))])),action:E((({record:e})=>[z(K,null,{default:E((()=>[l((b(),D(U,{title:"modify",onClick:t=>q(e)},{default:E((()=>o[11]||(o[11]=[L("modify")]))),_:2},1032,["onClick"])),[[Z,["system:dept:update"]]]),l((b(),D(U,{status:"danger",disabled:e.isSystem,title:e.isSystem?"system built-in data cannot be deleted":"delete",onClick:t=>M(e)},{default:E((()=>o[12]||(o[12]=[L(" delete ")]))),_:2},1032,["disabled","title","onClick"])),[[Z,["system:dept:delete"]]]),l((b(),D(U,{title:"add",onClick:t=>F(e.id)},{default:E((()=>o[13]||(o[13]=[L("add")]))),_:2},1032,["onClick"])),[[Z,["system:dept:add"]]])])),_:2},1024)])),_:1},8,["data","loading","onRefresh"]),[[d,"table"===j(g)]]),l(y("div",null,[z(G,null,{default:E((()=>[z(H,{trigger:"contextMenu"},{default:E((()=>[j(_).length?(b(),D(j(Ae),{key:0,data:j(_)[0],collapsable:!0,horizontal:!1,"define-menus":$,"expand-all":!0,"default-expand-level":999,props:{id:"id",parentId:"parentId",label:"name",children:"children"},center:"","node-add":T,"node-delete":M,"node-edit":q,onOnExpandAll:o[3]||(o[3]=e=>N.value=e)},null,8,["data"])):x("",!0)])),_:1})])),_:1})],512),[[d,"tree"===j(g)]]),z(V,{ref_key:"DeptAddModalRef",ref:R,depts:j(_),onSaveSuccess:j(p)},null,8,["depts","onSaveSuccess"])])}}}),[["__scopeId","data-v-5d4b1cf8"]]);export{Ye as default};
