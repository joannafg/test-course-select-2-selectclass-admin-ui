import{_ as e}from"./index-B7Sos0mo.js";import{_ as a}from"./GiCellTag.vue_vue_type_script_setup_true_lang-BFrLDIrR.js";import{d as t,A as o,Z as l,a1 as s,r as i,B as n,b as d,h as r,a4 as u,w as p,f as c,a as m,C as h,t as b,G as g,c as j,aC as _,M as f,k,a0 as v,o as y}from"./index-BAyZi_co.js";import N from"./JobAddModal-CEXVeElH.js";import{_ as x}from"./JobDetailDrawer.vue_vue_type_script_setup_true_lang-DYdL89EN.js";import{l as w,b as C,c as S,t as I,d as V}from"./job-DmHuDFqW.js";import{u as T}from"./useTable-DUTUCT70.js";import{u as D}from"./useDict-ConFaTXJ.js";import{h as J}from"./has-CF2CDZHh.js";import"./index-FaVgdj3V.js";import"./useResetReactive-NMdkdCz2.js";import"./useBreakpoint-C2fvcUp5.js";const R={class:"gi_table_page"},U={key:0},O={key:1},W=t({name:"ScheduleJob",__name:"index",setup(t){const{job_status_enum:W,job_trigger_type_enum:A,job_task_type_enum:M}=D("job_status_enum","job_trigger_type_enum","job_task_type_enum"),P=o({groupName:""}),{tableData:z,loading:q,pagination:B,search:G,handleDelete:Q}=T((e=>C({...P,...e})),{immediate:!1}),Z=[{title:"序号",width:66,align:"center",render:({rowIndex:e})=>l("span",{},e+1+(B.current-1)*B.pageSize)},{title:"任务名称",dataIndex:"jobName",slotName:"jobName",minWidth:100,ellipsis:!0,tooltip:!0},{title:"调度类型",dataIndex:"triggerType",slotName:"triggerType",minWidth:130},{title:"任务类型",dataIndex:"taskType",slotName:"taskType",minWidth:130,ellipsis:!0,tooltip:!0},{title:"状态",dataIndex:"jobStatus",slotName:"jobStatus",align:"center"},{title:"描述",dataIndex:"description",minWidth:130,ellipsis:!0,tooltip:!0},{title:"创建时间",dataIndex:"createDt",width:180},{title:"修改时间",dataIndex:"updateDt",width:180,show:!1},{title:"操作",slotName:"action",width:200,align:"center",fixed:s()?void 0:"right",show:J.hasPermOr(["schedule:log:list","schedule:job:trigger","schedule:job:update","schedule:job:delete"])}],$=i(),E=()=>{P.jobName=void 0,P.jobStatus=void 0,G()},F=i(),H=()=>{var e;null==(e=F.value)||e.onAdd()},K=i(),L=k();return n((()=>{(async()=>{const{data:e}=await w();$.value=null==e?void 0:e.map((e=>({label:e,value:e}))),P.groupName=$.value[0].label,G()})()})),(t,o)=>{const l=m("a-select"),s=m("a-input-search"),i=m("icon-refresh"),n=m("a-button"),k=m("icon-plus"),w=m("a-link"),C=a,T=m("a-textarea"),D=m("a-popover"),X=m("a-switch"),Y=m("a-popconfirm"),ee=m("a-space"),ae=e,te=v("permission");return y(),d("div",R,[r(ae,{title:"","row-key":"id",data:c(z),columns:Z,loading:c(q),scroll:{x:"100%",y:"100%",minWidth:1300},pagination:c(B),"disabled-tools":["size"],"disabled-column-keys":["name"],onRefresh:c(G)},u({"toolbar-left":p((()=>[r(l,{modelValue:c(P).groupName,"onUpdate:modelValue":o[0]||(o[0]=e=>c(P).groupName=e),placeholder:"please select the task group",options:c($),style:{width:"200px"},onChange:c(G)},null,8,["modelValue","options","onChange"]),r(s,{modelValue:c(P).jobName,"onUpdate:modelValue":o[1]||(o[1]=e=>c(P).jobName=e),placeholder:"search the task name","allow-clear":"",onSearch:c(G)},null,8,["modelValue","onSearch"]),r(l,{modelValue:c(P).jobStatus,"onUpdate:modelValue":o[2]||(o[2]=e=>c(P).jobStatus=e),placeholder:"please select the task status",options:c(W),"allow-clear":"",style:{width:"150px"},onChange:c(G)},null,8,["modelValue","options","onChange"]),r(n,{onClick:E},{icon:p((()=>[r(i)])),default:p((()=>o[3]||(o[3]=[h("重置")]))),_:1})])),"toolbar-right":p((()=>[g((y(),j(n,{type:"primary",onClick:H},{icon:p((()=>[r(k)])),default:p((()=>o[4]||(o[4]=[h("新增")]))),_:1})),[[te,["schedule:job:add"]]])])),triggerType:p((({record:e})=>[r(C,{value:e.triggerType,dict:c(A)},null,8,["value","dict"]),o[5]||(o[5]=h(":  ")),2===e.triggerType?(y(),d("span",U,b(e.triggerInterval)+" 秒",1)):(y(),d("span",O,[r(D,{title:"最近5次运行时间",position:"bottom"},{content:p((()=>[r(T,{"model-value":c(_)(e.triggerInterval),"auto-size":!0,style:{"margin-top":"10px"}},null,8,["model-value"])])),default:p((()=>[r(w,null,{default:p((()=>[h(b(e.triggerInterval),1)])),_:2},1024)])),_:2},1024)]))])),taskType:p((({record:e})=>[r(C,{value:e.taskType,dict:c(M)},null,8,["value","dict"]),h(" "+b(e.executorInfo),1)])),jobStatus:p((({record:e})=>[r(X,{modelValue:e.jobStatus,"onUpdate:modelValue":a=>e.jobStatus=a,"checked-value":1,"unchecked-value":0,disabled:!c(J).hasPerm("tool:job:update"),onChange:a=>(e=>{const a=1===e.jobStatus?"启用成功":"禁用成功";S({jobStatus:e.jobStatus},e.id).then((()=>{f.success(a)})).catch((()=>{e.jobStatus=1===e.jobStatus?0:1}))})(e)},null,8,["modelValue","onUpdate:modelValue","disabled","onChange"])])),action:p((({record:e})=>[r(ee,null,{default:p((()=>[g((y(),j(w,{title:"日志",onClick:a=>(e=>{L.push({path:"/schedule/log",query:{jobId:e.id,jobName:e.jobName,groupName:e.groupName}})})(e)},{default:p((()=>o[6]||(o[6]=[h("日志")]))),_:2},1032,["onClick"])),[[te,["schedule:log:list"]]]),r(Y,{content:"是否确定立即执行一次任务?",type:"warning",onOk:a=>(e=>{I(e.id).then((()=>{f.success("执行请求已下发")}))})(e)},{default:p((()=>[g((y(),j(w,{title:"执行"},{default:p((()=>o[7]||(o[7]=[h("执行")]))),_:1})),[[te,["schedule:job:trigger"]]])])),_:2},1032,["onOk"]),g((y(),j(w,{title:"修改",onClick:a=>(e=>{var a;null==(a=F.value)||a.onUpdate(e)})(e)},{default:p((()=>o[8]||(o[8]=[h("修改")]))),_:2},1032,["onClick"])),[[te,["schedule:job:update"]]]),g((y(),j(w,{status:"danger",title:"删除",onClick:a=>(e=>Q((()=>V(e.id)),{content:`是否确定删除任务「${e.jobName}」？`,showModal:!0}))(e)},{default:p((()=>o[9]||(o[9]=[h("删除")]))),_:2},1032,["onClick"])),[[te,["schedule:job:delete"]]])])),_:2},1024)])),_:2},[c(J).hasPermOr(["schedule:job:detail"])?{name:"jobName",fn:p((({record:e})=>[r(w,{onClick:a=>(e=>{var a;null==(a=K.value)||a.onOpen(e)})(e)},{default:p((()=>[h(b(e.jobName),1)])),_:2},1032,["onClick"])])),key:"0"}:void 0]),1032,["data","loading","pagination","onRefresh"]),r(N,{ref_key:"JobAddModalRef",ref:F,onSaveSuccess:E},null,512),r(x,{ref_key:"JobDetailDrawerRef",ref:K},null,512)])}}});export{W as default};
