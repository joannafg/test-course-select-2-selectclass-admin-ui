import{A as e,S as a,a6 as t,r as n,p as s,O as i,M as o}from"./index-BAyZi_co.js";import{u as l}from"./useBreakpoint-C2fvcUp5.js";function r(r,u){const{formatResult:c,onSuccess:d,immediate:g,rowKey:p}=u||{},{pagination:v,setTotal:h}=function(n,s={defaultPageSize:10,defaultSizeOptions:[10,20,30,40,50]}){const{breakpoint:i}=l(),o=e({showPageSize:!0,showTotal:!0,current:1,pageSize:s.defaultPageSize,pageSizeOptions:s.defaultSizeOptions,total:0,simple:!1,onChange:e=>{o.current=e,n&&n()},onPageSizeChange:e=>{o.current=1,o.pageSize=e,n&&n()}});a((()=>i.value),(()=>{o.simple=["xs"].includes(i.value),o.showTotal=!["xs"].includes(i.value)}),{immediate:!0});const r=o.onChange,u=o.onPageSizeChange,{current:c,pageSize:d,total:g}=t(o);return{current:c,pageSize:d,total:g,pagination:o,changeCurrent:r,changePageSize:u,setTotal:function(e){o.total=e}}}((()=>z()),null==u?void 0:u.paginationOption),f=n(!1),S=n([]);async function z(){try{f.value=!0;const e=await r({page:v.current,size:v.pageSize}),a=Array.isArray(e.data)?e.data:e.data.list;S.value=c?c(a):a;const t=Array.isArray(e.data)?a.length:e.data.total;h(t),d&&d()}finally{f.value=!1}}(g??!0)&&z();const m=n([]),{breakpoint:y}=l(),w=s((()=>["xs","sm"].includes(y.value)?void 0:"right"));return{loading:f,tableData:S,getTableData:z,search:()=>{m.value=[],v.onChange(1)},pagination:v,selectedKeys:m,select:e=>{m.value=e},selectAll:e=>{const a=p??"id",t=S.value.filter((e=>!(null==e?void 0:e.disabled)));m.value=e?t.map((e=>e[a])):[]},handleDelete:async(e,a)=>{const t=async()=>{try{const t=await e();return t.success&&(o.success((null==a?void 0:a.successTip)||"删除成功"),m.value=[],await z()),t.success}catch(t){return!1}};if(!((null==a?void 0:a.showModal)??!0))return t();i.warning({title:(null==a?void 0:a.title)||"提示",content:(null==a?void 0:a.content)||"是否确定删除该条数据？",okButtonProps:{status:"danger"},hideCancel:!1,maskClosable:!1,onBeforeOk:t})},refresh:()=>{z()},fixed:w}}export{r as u};
