const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["static/js/FileImage-Bv6_STlS.js","static/js/index-BAyZi_co.js","static/css/index-D3o2Gh25.css","static/js/file-DhkTWeFG.js","static/css/FileImage-CVA3KTmU.css"])))=>i.map(i=>d[i]);
import{d as e,b as a,h as i,w as l,a as s,F as t,i as c,c as o,g as n,G as d,f as r,a2 as m,t as u,ah as g,E as p,v as f,a3 as _,o as k,x}from"./index-BAyZi_co.js";import h from"./FileRightMenu-CgRDpAPf.js";const v={class:"file-grid"},C=["onClick"],F={class:"file-grid-item__wrapper"},I={class:"file-icon"},b={class:"gi_line_1 file-name"},M=["onClick"],j=x(e({__name:"FileGrid",props:{data:{default:()=>[]},selectedFileIds:{default:()=>[]},isBatchMode:{type:Boolean,default:!1}},emits:["click","select","right-menu-click"],setup(e,{emit:x}){const j=e,w=x,y=m((()=>_((()=>import("./FileImage-Bv6_STlS.js")),__vite__mapDeps([0,1,2,3,4])))),B=e=>`${e.name}${e.extension?`.${e.extension}`:""}`;return(e,m)=>{const _=s("a-checkbox"),x=s("a-grid-item"),E=s("a-trigger"),$=s("a-grid");return k(),a("div",v,[i($,{cols:{xs:4,sm:4,md:5,lg:7,xl:8,xxl:9},"col-gap":12,"row-gap":12},{default:l((()=>[(k(!0),a(t,null,c(e.data,(e=>(k(),o(E,{key:e.id,trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":"","scroll-to-close":""},{content:l((()=>[i(h,{data:e,onClick:a=>((e,a)=>{w("right-menu-click",e,a)})(a,e)},null,8,["data","onClick"])])),default:l((()=>[i(x,null,{default:l((()=>[n("div",{class:"file-grid-item",onClick:p((a=>(e=>{w("click",e)})(e)),["stop"])},[n("section",F,[n("div",I,[i(r(y),{data:e,title:e.name},null,8,["data","title"])]),n("p",b,u(B(e)),1)]),d(n("section",{class:f(["check-mode",{checked:j.selectedFileIds.includes(e.id)}]),onClick:p((a=>(e=>{w("select",e)})(e)),["stop"])},[i(_,{class:"checkbox","model-value":j.selectedFileIds.includes(e.id)},null,8,["model-value"])],10,M),[[g,j.isBatchMode]])],8,C)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}}}),[["__scopeId","data-v-9f277be7"]]);export{j as default};
