import{_ as a}from"./GiCellTag.vue_vue_type_script_setup_true_lang-BFrLDIrR.js";import{d as e,r as t,B as s,b as l,h as i,w as o,a as n,F as r,c as d,f as p,C as c,i as u,t as m,k as y,o as _,x as f}from"./index-BAyZi_co.js";import{l as v}from"./dashboard-DOn_dvFN.js";import{u as k}from"./useDict-ConFaTXJ.js";import g from"./NoticeDetailModal-BzVDjYhv.js";import"./index-FaVgdj3V.js";import"./index-C39ShLkM.js";import"./style-CMZ46hYP.js";import"./notice-GOHHkgAo.js";const x={key:1},h={key:1},j=f(e({__name:"Notice",setup(e){const f=y(),{notice_type:j}=k("notice_type"),w=t([]),C=t(!1),N=t();return s((()=>{(async()=>{try{C.value=!0;const a=await v();w.value=a.data}finally{C.value=!1}})()})),(e,t)=>{const s=n("a-link"),y=n("a-skeleton-line"),v=n("a-skeleton"),k=n("a-empty"),D=a,b=n("a-typography-paragraph"),B=n("a-card");return _(),l(r,null,[i(B,{class:"general-card",title:"Notice","header-style":{paddingBottom:"0"},"body-style":{padding:"15px 20px 13px 20px"}},{extra:o((()=>[i(s,{onClick:t[0]||(t[0]=a=>p(f).replace({path:"/system/notice"}))},{default:o((()=>t[1]||(t[1]=[c("more")]))),_:1})])),default:o((()=>[p(C)?(_(),d(v,{key:0,loading:p(C),animation:!0},{default:o((()=>[i(y,{rows:5})])),_:1},8,["loading"])):(_(),l("div",x,[0===p(w).length?(_(),d(k,{key:0},{default:o((()=>t[2]||(t[2]=[c("No notice")]))),_:1})):(_(),l("div",h,[(_(!0),l(r,null,u(p(w),((a,e)=>(_(),l("div",{key:e,class:"item"},[i(D,{value:a.type,dict:p(j)},null,8,["value","dict"]),i(s,{class:"item-content",onClick:e=>{return t=a.id,void(null==(s=N.value)||s.onDetail(t));var t,s}},{default:o((()=>[i(b,{ellipsis:{rows:1,showTooltip:!0,css:!0}},{default:o((()=>[c(m(a.title),1)])),_:2},1024)])),_:2},1032,["onClick"])])))),128))]))]))])),_:1}),i(g,{ref_key:"NoticeDetailModalRef",ref:N},null,512)],64)}}}),[["__scopeId","data-v-9a39958c"]]);export{j as default};
