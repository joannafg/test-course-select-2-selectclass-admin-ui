import{d as a,p as t,ar as e,c as l,a as o,f as r,o as s}from"./index-BAyZi_co.js";const d=a({name:"DateRangePicker",__name:"index",props:{format:{type:String,default:"YYYY-MM-DD HH:mm:ss"},showTime:{type:Boolean,default:!0},placeholder:{type:Array,default:()=>["开始时间","结束时间"]},allowClear:{type:Boolean,default:!0}},setup(a){const d=t((()=>[{label:"今天",value:()=>[e().startOf("day").toDate(),e().toDate()]},{label:"昨天",value:()=>[e().subtract(1,"day").startOf("day").toDate(),e().subtract(1,"day").endOf("day").toDate()]},{label:"本周",value:()=>[e().startOf("week").add(1,"day").toDate(),e().toDate()]},{label:"本月",value:()=>[e().startOf("month").toDate(),e().toDate()]},{label:"本年",value:()=>[e().startOf("year").toDate(),e().toDate()]}]));return(t,e)=>{const n=o("a-range-picker");return s(),l(n,{placeholder:a.placeholder,format:a.format,"show-time":a.showTime,shortcuts:r(d),"shortcuts-position":"left",style:{height:"32px"},"allow-clear":a.allowClear},null,8,["placeholder","format","show-time","shortcuts","allow-clear"])}}});export{d as _};
