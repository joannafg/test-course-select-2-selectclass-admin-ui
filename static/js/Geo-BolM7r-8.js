import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-O5wN1oKt.js";import{d as e}from"./dashboard-DOn_dvFN.js";import{u as t}from"./index.esm.min-DTLic3kH.js";import{d as l,a5 as s,r,B as o,c as i,w as n,f as u,a as d,h as c,g as p,b as m,i as v,t as f,F as h,C as _,o as g,x as y}from"./index-BAyZi_co.js";import"./echarts-BUOH3neG.js";const x={class:"content"},F={class:"mapChart"},w={class:"dataShow"},b={class:"title"},j=y(l({__name:"Geo",setup(l){const y=s("chartRef"),j=r([]),z=r(0),C=r([]),{chartOption:R}=t((a=>({visualMap:{left:"left",min:0,max:2e4,inRange:{color:["#EAF4FF","#3C7EFF"]},orient:"horizontal",calculable:!1},tooltip:{trigger:"item",formatter:a=>`${a.name}<br/>访问次数: ${a.value||0}`},series:[{type:"map",map:"china",zoom:1.1,label:{show:!1},itemStyle:{normal:{areaColor:a?"#313132":"#F6F6F6"}},data:j.value}]}))),S=r(!1);return o((()=>{(async()=>{try{S.value=!0;const{data:a}=await e();j.value=a.filter((a=>0!==a.value)),z.value=a.reduce(((a,e)=>a+e.value),0),C.value=a.sort(((a,e)=>e.value-a.value)).slice(0,7)}finally{S.value=!1}})()})),(e,t)=>{const l=d("a-radio"),s=d("a-radio-group"),r=a,o=d("a-progress"),j=d("a-card"),k=d("a-spin");return g(),i(k,{loading:u(S),style:{width:"100%"}},{default:n((()=>[c(j,{class:"general-card",title:"Geographical Location"},{extra:n((()=>[c(s,{type:"button",size:"small"},{default:n((()=>[c(l,{value:"china"},{default:n((()=>t[0]||(t[0]=[_("US")]))),_:1}),c(l,{value:"world",disabled:"",title:"暂未开放"},{default:n((()=>t[1]||(t[1]=[_("World")]))),_:1})])),_:1})])),default:n((()=>[p("div",x,[p("div",F,[c(r,{ref_key:"chartRef",ref:y,option:u(R),style:{height:"468px"}},null,8,["option"])]),p("div",w,[(g(!0),m(h,null,v(u(C),(a=>(g(),m("div",{key:a.name,class:"dataItem"},[p("div",b,[p("span",null,f(a.name),1),p("span",null,f(a.value),1)]),c(o,{color:"#165dff",size:"medium",percent:a.value/u(z),"show-text":!1},null,8,["percent"])])))),128))])])])),_:1})])),_:1},8,["loading"])}}}),[["__scopeId","data-v-8937f157"]]);export{j as default};
