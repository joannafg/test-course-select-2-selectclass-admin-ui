import{ae as e,k as a,r as l,W as t,n,af as u}from"./index-BAyZi_co.js";const s=e("tabs",(()=>{const e=a(),s=l([]),o=l([]),r=a=>{const l=s.value.findIndex((e=>{var l;return e.path===a&&!(null==(l=e.meta)?void 0:l.affix)}));if(l<0)return;const t=e.currentRoute.value.path===s.value[l].path;if(s.value.splice(l,1),t){const a=s.value[s.value.length-1];e.push(a.fullPath||a.path)}},i=()=>{const e=n(),a=[];u.eachTree(e.routes,(e=>{var l;(null==(l=e.meta)?void 0:l.affix)&&a.push(e)})),s.value=a},v=e=>{var a;e.name&&(o.value.includes(e.name)||(null==(a=e.meta)?void 0:a.keepAlive)&&o.value.push(e.name))},h=e=>{const a=o.value.findIndex((a=>a===e));a>=0&&o.value.splice(a,1)},c=()=>{o.value=[]},d=()=>{i(),c()},f=l(!0);return{tabList:s,cacheList:o,addTabItem:e=>{var a;const l=s.value.findIndex((a=>a.path===e.path));l>=0?s.value[l].fullPath!==e.fullPath&&(s.value[l]=e):((null==(a=e.meta)?void 0:a.showInTabs)??1)&&s.value.push(e)},deleteTabItem:r,clearTabList:i,addCacheItem:v,deleteCacheItem:h,clearCacheList:c,closeCurrent:e=>{const a=s.value.find((a=>a.path===e));(null==a?void 0:a.name)&&h(a.name),r(e)},closeOther:e=>{s.value.filter((a=>a.path!==e)).forEach((e=>{r(e.path),(null==e?void 0:e.name)&&h(e.name)}))},closeLeft:e=>{const a=s.value.findIndex((a=>a.path===e));if(a<0)return;s.value.filter(((e,l)=>l<a)).forEach((e=>{r(e.path),(null==e?void 0:e.name)&&h(e.name)}))},closeRight:e=>{const a=s.value.findIndex((a=>a.path===e));if(a<0)return;s.value.filter(((e,l)=>l>a)).forEach((e=>{r(e.path),(null==e?void 0:e.name)&&h(e.name)}))},closeAll:()=>{i(),c(),e.push({path:"/"})},reset:d,init:()=>{s.value.some((e=>!(null==e?void 0:e.meta.affix)))||d()},reloadFlag:f,reloadPage:()=>{const a=e.currentRoute.value;h(a.name),f.value=!1,t((()=>{f.value=!0,v(a)}))}}}),{persist:{storage:sessionStorage}});export{s as u};
