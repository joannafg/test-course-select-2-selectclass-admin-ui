import{b as e}from"./index-FaVgdj3V.js";import"./index-C4tdC7PH.js";import{g as s,u as a,a as t}from"./courseSchedule-C4KTkUU1.js";import{_ as l}from"./GiForm-BWZRNfN-.js";import{d as r,r as o,p as u,A as d,c as i,w as p,f as c,J as m,a as n,h,o as f,M as v}from"./index-BAyZi_co.js";import{u as y}from"./useResetReactive-NMdkdCz2.js";import{u as b}from"./useDict-ConFaTXJ.js";import{l as g}from"./teacher-AO1vI7zE.js";import{l as w}from"./course-DukAjqW8.js";const _=r({__name:"CourseScheduleAddModal",emits:["save-success"],setup(r,{expose:_,emit:j}){const k=j,{width:q}=e(),x=o(""),R=o(!1),I=u((()=>!!x.value)),T=u((()=>I.value?"modify course schedule":"add course schedule")),z=o(),{course_schedule_status:A}=b("course_schedule_status"),O={form:{size:"large"},btns:{hide:!0}},[S,U]=y({}),V=o([]),B=o([]),C=d([{label:"course",field:"courseId",type:"select",props:{placeholder:"please select the course"},options:B,rules:[{required:!0,message:"please enter the course"}]},{label:"teacher",field:"teacherId",type:"select",props:{placeholder:"please select the teacher"},options:V,rules:[{required:!0,message:"please enter the teacher"}]},{label:"semester",field:"semester",type:"input",props:{placeholder:"please enter the semester"},rules:[{required:!0,message:"please enter the semester"}]},{label:"classroom",field:"classroom",type:"input",props:{placeholder:"please enter the classroom"},rules:[{required:!0,message:"please enter the classroom"}]},{label:"day of week",field:"dayOfWeek",type:"input-number",props:{placeholder:"please enter the day of week"},rules:[{required:!0,message:"please enter the day of week"}]},{label:"start time",field:"startTime",type:"date-picker",props:{placeholder:"please enter the start time",showTime:!0},rules:[{required:!0,message:"please enter the start time"}]},{label:"end time",field:"endTime",type:"date-picker",props:{placeholder:"please enter the end time",showTime:!0},rules:[{required:!0,message:"please enter the end time"}]},{label:"max student",field:"maxStudent",type:"input-number",props:{placeholder:"please enter the max student"},rules:[{required:!0,message:"please enter the max student"}]},{label:"status",field:"status",type:"select",props:{placeholder:"please select the status"},options:A,rules:[{required:!0,message:"please enter the status"}]}]),F=()=>{var e,s;null==(s=null==(e=z.value)?void 0:e.formRef)||s.resetFields(),U()},M=async()=>{var e,s;try{return!(await(null==(s=null==(e=z.value)?void 0:e.formRef)?void 0:s.validate()))&&(I.value?(await a(S,x.value),v.success("modify successfully")):(await t(S),v.success("add successfully")),k("save-success"),!0)}catch(l){return!1}};return _({onAdd:async()=>{const{data:{list:e}}=await g({teacherNo:"",name:"",gender:"",collegeId:"",status:"",sort:[],page:1,size:1e3}),{data:{list:s}}=await w({courseNo:"",name:"",credit:"",hours:"",type:"",collegeId:"",status:"",sort:[],page:1,size:1e3});V.value=e.map((e=>({label:e.name,value:e.name}))),B.value=s.map((e=>({label:e.name,value:e.name}))),F(),x.value="",R.value=!0},onUpdate:async e=>{F(),x.value=e;const{data:a}=await s(e);Object.assign(S,a),R.value=!0}}),(e,s)=>{const a=n("a-modal");return f(),i(a,{visible:c(R),"onUpdate:visible":s[1]||(s[1]=e=>m(R)?R.value=e:null),title:c(T),"mask-closable":!1,"esc-to-close":!1,width:c(q)>=600?600:"100%",draggable:"",onBeforeOk:M,onClose:F},{default:p((()=>[h(c(l),{ref_key:"formRef",ref:z,modelValue:c(S),"onUpdate:modelValue":s[0]||(s[0]=e=>m(S)?S.value=e:null),options:O,columns:c(C)},null,8,["modelValue","columns"])])),_:1},8,["visible","title","width"])}}});export{_};
