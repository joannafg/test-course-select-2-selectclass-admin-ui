import{b as e}from"./index-FaVgdj3V.js";import{g as s,u as t,a}from"./courseSelection-2y9Q28ra.js";import{_ as l}from"./GiForm-BWZRNfN-.js";import{d as u,r as o,p as r,A as i,c as d,w as c,f as n,J as m,a as p,h as f,o as v,M as h}from"./index-BAyZi_co.js";import{u as y}from"./useResetReactive-NMdkdCz2.js";import{u as b}from"./useDict-ConFaTXJ.js";import{l as g}from"./courseSchedule-C4KTkUU1.js";const w=u({__name:"CourseSelectionAddModal",emits:["save-success"],setup(u,{expose:w,emit:_}){const j=_,{width:I}=e(),x=o(""),k=o(!1),R=r((()=>!!x.value)),S=r((()=>R.value?"modify course selection":"add course selection")),q=o(),{select_course_status:T}=b("select_course_status"),A={form:{size:"large"},btns:{hide:!0}},[O,U]=y({}),V=o([]),z=i([{label:"student",field:"studentId",type:"input",props:{placeholder:"please enter the student name"},rules:[{required:!0,message:"please enter the student ID"}]},{label:"course schedule",field:"scheduleId",type:"select",options:V,rules:[{required:!0,message:"please enter the course schedule"}]},{label:"select time",field:"selectTime",type:"date-picker",props:{showTime:!0},rules:[{required:!0,message:"please enter the select time"}]},{label:"status",field:"status",type:"select",options:T,rules:[{required:!0,message:"please enter the status"}]}]),C=()=>{var e,s;null==(s=null==(e=q.value)?void 0:e.formRef)||s.resetFields(),U()},D=async()=>{var e,s;try{return!(await(null==(s=null==(e=q.value)?void 0:e.formRef)?void 0:s.validate()))&&(R.value?(await t(O,x.value),h.success("modify successfully")):(await a(O),h.success("add successfully")),j("save-success"),!0)}catch(l){return!1}};return w({onAdd:async()=>{const{data:{list:e}}=await g({courseId:"",teacherId:"",semester:"",classroom:"",dayOfWeek:"",startTime:"",endTime:"",maxStudent:"",selected:"",status:"",sort:[],page:1,size:1e3});V.value=e.filter((e=>e.selected<e.maxStudent)).map((e=>({label:e.courseId,value:e.courseId}))),C(),x.value="",k.value=!0},onUpdate:async e=>{C(),x.value=e;const{data:t}=await s(e);Object.assign(O,t),k.value=!0}}),(e,s)=>{const t=p("a-modal");return v(),d(t,{visible:n(k),"onUpdate:visible":s[1]||(s[1]=e=>m(k)?k.value=e:null),title:n(S),"mask-closable":!1,"esc-to-close":!1,width:n(I)>=600?600:"100%",draggable:"",onBeforeOk:D,onClose:C},{default:c((()=>[f(n(l),{ref_key:"formRef",ref:q,modelValue:n(O),"onUpdate:modelValue":s[0]||(s[0]=e=>m(O)?O.value=e:null),options:A,columns:n(z)},null,8,["modelValue","columns"])])),_:1},8,["visible","title","width"])}}});export{w as _};
