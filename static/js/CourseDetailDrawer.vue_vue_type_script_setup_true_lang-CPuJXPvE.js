import{b as e}from"./index-FaVgdj3V.js";import{g as a}from"./course-DukAjqW8.js";import{d as l,r,c as t,w as u,f as s,J as d,a as n,h as i,C as o,t as v,o as c}from"./index-BAyZi_co.js";const f=l({__name:"CourseDetailDrawer",setup(l,{expose:f}){const{width:p}=e(),_=r(""),b=r(),m=r(!1);return f({onOpen:async e=>{_.value=e,await(async()=>{const{data:e}=await a(_.value);b.value=e})(),m.value=!0}}),(e,a)=>{const l=n("a-descriptions-item"),r=n("a-descriptions"),f=n("a-drawer");return c(),t(f,{visible:s(m),"onUpdate:visible":a[0]||(a[0]=e=>d(m)?m.value=e:null),title:" course details",width:s(p)>=600?600:"100%",footer:!1},{default:u((()=>[i(r,{column:2,size:"large",class:"general-description"},{default:u((()=>[i(l,{label:"course ID"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.id),1)]})),_:1}),i(l,{label:"course ID"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.courseNo),1)]})),_:1}),i(l,{label:"course name"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.name),1)]})),_:1}),i(l,{label:"credit(10 points)"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.credit),1)]})),_:1}),i(l,{label:"hours"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.hours),1)]})),_:1}),i(l,{label:"type"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.type),1)]})),_:1}),i(l,{label:"college ID"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.collegeId),1)]})),_:1}),i(l,{label:"description"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.description),1)]})),_:1}),i(l,{label:"status"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.status),1)]})),_:1}),i(l,{label:"create time"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.createTime),1)]})),_:1}),i(l,{label:"update time"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.updateTime),1)]})),_:1}),i(l,{label:"create user"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.createUser),1)]})),_:1}),i(l,{label:"create user"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.createUserString),1)]})),_:1}),i(l,{label:"update user"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.updateUser),1)]})),_:1}),i(l,{label:"update user"},{default:u((()=>{var e;return[o(v(null==(e=s(b))?void 0:e.updateUserString),1)]})),_:1})])),_:1})])),_:1},8,["visible","width"])}}});export{f as _};
