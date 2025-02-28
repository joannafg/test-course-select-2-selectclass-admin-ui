import{_ as e}from"./index-B7Sos0mo.js";import{_ as t}from"./GiCellStatus.vue_vue_type_script_setup_true_lang-27S6yIFO.js";import{_ as a}from"./GiCellTag.vue_vue_type_script_setup_true_lang-BFrLDIrR.js";import{_ as s,l,d as i}from"./StorageAddDrawer.vue_vue_type_script_setup_true_lang-BW43LBm3.js";import{D as o}from"./common-BtD_44m1.js";import{d,A as n,Z as r,a1 as p,r as u,b as c,h as m,w as _,f as g,a as f,G as h,c as y,C as x,g as v,e as w,t as b,a0 as k,o as I}from"./index-BAyZi_co.js";import{u as j}from"./useTable-DUTUCT70.js";import{u as S}from"./useDict-ConFaTXJ.js";import{h as C}from"./has-CF2CDZHh.js";import"./index-FaVgdj3V.js";import"./useResetReactive-NMdkdCz2.js";import"./encrypt-fe7GwHAY.js";import"./index-DVDBkEOF.js";import"./useBreakpoint-C2fvcUp5.js";const D={class:"gi_table_page"},N=d({name:"SystemStorage",__name:"index",setup(d){const{storage_type_enum:N}=S("storage_type_enum"),V=n({sort:["createTime,desc"]}),{tableData:R,loading:T,pagination:U,search:A,handleDelete:z}=j((e=>l({...V,...e})),{immediate:!0}),G=[{title:"number",width:66,align:"center",render:({rowIndex:e})=>r("span",{},e+1+(U.current-1)*U.pageSize)},{title:"name",dataIndex:"name",slotName:"name",width:140,ellipsis:!0,tooltip:!0},{title:"code",dataIndex:"code",ellipsis:!0,tooltip:!0},{title:"status",dataIndex:"status",slotName:"status",align:"center"},{title:"type",dataIndex:"type",slotName:"type",align:"center",ellipsis:!0,tooltip:!0},{title:"access key",dataIndex:"accessKey",ellipsis:!0,tooltip:!0},{title:"endpoint",dataIndex:"endpoint",ellipsis:!0,tooltip:!0},{title:"bucket name",dataIndex:"bucketName",ellipsis:!0,tooltip:!0},{title:"domain",dataIndex:"domain",ellipsis:!0,tooltip:!0},{title:"description",dataIndex:"description",ellipsis:!0,tooltip:!0},{title:"create user",dataIndex:"createUserString",ellipsis:!0,tooltip:!0,show:!1},{title:"create time",dataIndex:"createTime",width:180},{title:"update user",dataIndex:"updateUserString",ellipsis:!0,tooltip:!0,show:!1},{title:"update time",dataIndex:"updateTime",width:180,show:!1},{title:"action",dataIndex:"action",slotName:"action",width:130,align:"center",fixed:p()?void 0:"right",show:C.hasPermOr(["system:storage:update","system:storage:delete"])}],q=()=>{V.description=void 0,V.status=void 0,A()},B=u(),J=()=>{var e;null==(e=B.value)||e.onAdd()};return(l,d)=>{const n=f("a-input-search"),r=f("a-select"),p=f("icon-refresh"),u=f("a-button"),j=f("icon-plus"),S=f("a-tag"),C=f("a-space"),K=a,M=t,O=f("a-link"),P=e,W=k("permission");return I(),c("div",D,[m(P,{title:"","row-key":"id",data:g(R),columns:G,loading:g(T),scroll:{x:"100%",y:"100%",minWidth:1300},pagination:g(U),"disabled-tools":["size"],"disabled-column-keys":["name"],onRefresh:g(A)},{"toolbar-left":_((()=>[m(n,{modelValue:g(V).description,"onUpdate:modelValue":d[0]||(d[0]=e=>g(V).description=e),placeholder:"search by name/code/description","allow-clear":"",onSearch:g(A)},null,8,["modelValue","onSearch"]),m(r,{modelValue:g(V).status,"onUpdate:modelValue":d[1]||(d[1]=e=>g(V).status=e),options:g(o),placeholder:"please select the status","allow-clear":"",style:{width:"150px"},onChange:g(A)},null,8,["modelValue","options","onChange"]),m(u,{onClick:q},{icon:_((()=>[m(p)])),default:_((()=>d[2]||(d[2]=[x("reset")]))),_:1})])),"toolbar-right":_((()=>[h((I(),y(u,{type:"primary",onClick:J},{icon:_((()=>[m(j)])),default:_((()=>d[3]||(d[3]=[x("add")]))),_:1})),[[W,["system:storage:add"]]])])),name:_((({record:e})=>[m(C,{fill:""},{default:_((()=>[v("span",null,b(e.name),1),e.isDefault?(I(),y(S,{key:0,color:"arcoblue",size:"small",class:"gi_round"},{default:_((()=>d[4]||(d[4]=[x("default")]))),_:1})):w("",!0)])),_:2},1024)])),type:_((({record:e})=>[m(K,{value:e.type,dict:g(N)},null,8,["value","dict"])])),status:_((({record:e})=>[m(M,{status:e.status},null,8,["status"])])),action:_((({record:e})=>[m(C,null,{default:_((()=>[h((I(),y(O,{title:"update",onClick:t=>(e=>{var t;null==(t=B.value)||t.onUpdate(e.id)})(e)},{default:_((()=>d[5]||(d[5]=[x("update")]))),_:2},1032,["onClick"])),[[W,["system:storage:update"]]]),h((I(),y(O,{status:"danger",disabled:e.isDefault,title:e.isDefault?"default storage cannot be deleted":"delete",onClick:t=>(e=>z((()=>i(e.id)),{content:`are you sure to delete the storage「${e.name}」?`,showModal:!0}))(e)},{default:_((()=>d[6]||(d[6]=[x(" delete ")]))),_:2},1032,["disabled","title","onClick"])),[[W,["system:storage:delete"]]])])),_:2},1024)])),_:1},8,["data","loading","pagination","onRefresh"]),m(s,{ref_key:"StorageAddDrawerRef",ref:B,onSaveSuccess:g(A)},null,8,["onSaveSuccess"])])}}});export{N as default};
