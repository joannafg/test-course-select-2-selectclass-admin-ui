import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-O5wN1oKt.js";import{u as e}from"./index.esm.min-DTLic3kH.js";import{d as t,l as s,p as l,r as o,B as r,c as i,w as n,f as d,a as u,h as c,g as p,C as f,t as v,e as y,q as g,o as m,x as h}from"./index-BAyZi_co.js";import{c as _}from"./dashboard-DOn_dvFN.js";import"./echarts-BUOH3neG.js";const w={class:"content-wrap"},x={class:"content"},b={class:"desc"},j={class:"chart"},k=h(t({__name:"Pv",setup(t){const h=s(),k=l((()=>"dark"===h.theme)),A=o(0),B=o(0),E=o(0),F=o([]),S=o([]),{chartOption:$}=e((()=>({grid:{left:0,right:30,top:10,bottom:0},xAxis:{type:"category",data:F.value},yAxis:{show:!1},tooltip:{show:!0,trigger:"axis"},series:[{name:"访问次数",data:S.value,type:"line",showSymbol:!1,lineStyle:{color:"#246EFF",width:2}}]}))),q=o(!1);return r((()=>{(async()=>{try{q.value=!0;const{data:a}=await _();A.value=a.total,B.value=a.today,E.value=a.growth,a.dataList.forEach((a=>{F.value.push(a.name),S.value.push(a.value)}))}finally{q.value=!1}})()})),(e,t)=>{const s=u("a-statistic"),l=u("a-typography-text"),o=u("icon-arrow-rise"),r=u("icon-arrow-fall"),h=a,_=u("a-card"),F=u("a-spin");return m(),i(F,{loading:d(q),style:{width:"100%"}},{default:n((()=>[c(_,{class:"general-card",style:g({background:k.value?"linear-gradient(180deg, #284991 0%, #122B62 100%)":"linear-gradient(180deg, #f2f9fe 0%, #e6f4fe 100%)"})},{default:n((()=>[p("div",w,[p("div",x,[c(s,{title:"访问次数",value:d(A),"value-from":0,animation:"","show-group-separator":""},null,8,["value"]),p("div",b,[c(l,{type:"secondary",class:"label"},{default:n((()=>t[0]||(t[0]=[f("今日")]))),_:1}),d(E)>0?(m(),i(l,{key:0,type:"success",title:`${d(E)}%`},{default:n((()=>[f(v(d(B))+" ",1),c(o)])),_:1},8,["title"])):(m(),i(l,{key:1,type:"danger",title:`${d(E)}%`},{default:n((()=>[f(v(d(B))+" ",1),c(r)])),_:1},8,["title"]))])]),p("div",j,[d(q)?y("",!0):(m(),i(h,{key:0,option:d($)},null,8,["option"]))])])])),_:1},8,["style"])])),_:1},8,["loading"])}}}),[["__scopeId","data-v-f477fbb5"]]);export{k as default};
