import{b as e}from"./index-FaVgdj3V.js";import{d as a,L as l,p as s,r as n,A as o,c as r,w as i,f as t,J as u,a as d,h as m,o as f,M as c}from"./index-BAyZi_co.js";import{f as p}from"./user-center-DOjaikc1.js";import{_ as v}from"./GiForm-BWZRNfN-.js";import{u as b}from"./useResetReactive-NMdkdCz2.js";const g=a({__name:"BasicInfoUpdateModal",setup(a,{expose:g}){const{width:k}=e(),h=l(),w=s((()=>h.userInfo)),y=n(!1),_=n(),j={form:{size:"large"},btns:{hide:!0}},[R,x]=b({nickname:w.value.nickname,gender:w.value.gender}),U=o([{label:"nickname",field:"nickname",type:"input",rules:[{required:!0,message:"please enter the nickname"}]},{label:"gender",field:"gender",type:"radio-group",options:[{label:"male",value:1},{label:"female",value:2},{label:"unknown",value:0,disabled:!0}],rules:[{required:!0,message:"please select the gender"}]}]),I=()=>{var e,a;null==(a=null==(e=_.value)?void 0:e.formRef)||a.resetFields(),x()},V=async()=>{var e,a;if(await(null==(a=null==(e=_.value)?void 0:e.formRef)?void 0:a.validate()))return!1;try{return await p(R),c.success("update successfully"),await h.getInfo(),!0}catch(l){return!1}};return g({onUpdate:async()=>{I(),y.value=!0}}),(e,a)=>{const l=d("a-modal");return f(),r(l,{visible:t(y),"onUpdate:visible":a[1]||(a[1]=e=>u(y)?y.value=e:null),title:"modify basic information","mask-closable":!1,"esc-to-close":!1,width:t(k)>=500?500:"100%",draggable:"",onBeforeOk:V,onClose:I},{default:i((()=>[m(t(v),{ref_key:"formRef",ref:_,modelValue:t(R),"onUpdate:modelValue":a[0]||(a[0]=e=>u(R)?R.value=e:null),options:j,columns:t(U)},null,8,["modelValue","columns"])])),_:1},8,["visible","width"])}}});export{g as _};
