import{d as e,ar as a,r as t,B as r,c as l,w as o,a as n,au as s,av as p,b as i,f as u,h as f,C as d,F as _,i as y,v as h,g as c,t as g,e as k,_ as m,o as b,x as E}from"./index-BAyZi_co.js";import{r as v}from"./LatestActivity.vue_vue_type_style_index_0_scoped_478f03cb_lang-CiLH-Fc6.js";const S={key:1},L=["href"],P=["src"],T=["title"],U={class:"content"},w={key:0},R=["href","title"],x={key:1},I={key:2},z={key:3},N={key:4},O={key:5},C={key:6},G={key:7},q={key:8},A={key:9},Q=E(e({__name:"LatestActivity",setup(e){a.extend(v),a.locale("zh-cn");const E=t([]),Q=t(!1),H=async()=>{try{Q.value=!0;const{data:l}=await(e="https://api.charles7c.top/git/orgs/events/continew",new Promise(((a,l)=>{s.request({method:"get",url:e,params:t,paramsSerializer:e=>p.stringify(e),...r}).then((e=>a(e.data))).catch((e=>l(e)))})));l.forEach((e=>{E.value.push({...e,createTimeString:a(new Date(e.createTime)).fromNow()})}))}catch(l){}finally{Q.value=!1}var e,t,r};return r((()=>{H()})),(e,a)=>{const t=n("a-link"),r=n("a-doption"),s=n("a-dropdown"),p=n("a-skeleton-line"),v=n("a-skeleton"),H=n("a-empty"),M=m,$=n("a-avatar"),j=n("a-badge"),D=n("a-comment"),B=n("a-card");return b(),l(B,{class:"general-card",title:"Latest Activity",style:{"margin-bottom":"14px"}},{extra:o((()=>[f(s,null,{content:o((()=>[f(r,null,{default:o((()=>[f(t,{href:"https://gitee.com/organizations/continew/events",target:"_blank",rel:"noopener"},{default:o((()=>a[1]||(a[1]=[d("Gitee")]))),_:1})])),_:1}),f(r,null,{default:o((()=>[f(t,{href:"https://gitcode.com/org/continew/discussion",target:"_blank",rel:"noopener"},{default:o((()=>a[2]||(a[2]=[d("GitCode")]))),_:1})])),_:1}),f(r,null,{default:o((()=>[f(t,{href:"https://github.com/orgs/continew-org/discussions",target:"_blank",rel:"noopener"},{default:o((()=>a[3]||(a[3]=[d("GitHub")]))),_:1})])),_:1})])),default:o((()=>[f(t,null,{default:o((()=>a[0]||(a[0]=[d("more")]))),_:1})])),_:1})])),default:o((()=>[u(Q)?(b(),l(v,{key:0,loading:u(Q),animation:!0},{default:o((()=>[f(p,{rows:10})])),_:1},8,["loading"])):(b(),i("div",S,[0===u(E).length?(b(),l(H,{key:0},{default:o((()=>a[4]||(a[4]=[d("No activity")]))),_:1})):(b(!0),i(_,{key:1},y(u(E),((e,r)=>(b(),l(D,{key:r,author:e.actor.nickname,class:h(`animated-fade-up-${r}`)},{avatar:o((()=>[f(j,null,{content:o((()=>["GitHub"===e.platform?(b(),l(M,{key:0,name:"github",size:15})):"Gitee"===e.platform?(b(),l(M,{key:1,name:"gitee",size:15})):k("",!0)])),default:o((()=>[c("a",{href:e.actor.url,target:"_blank",rel:"noopener"},[f($,{size:30},{default:o((()=>[c("img",{src:e.actor.avatar,alt:"avatar"},null,8,P)])),_:2},1024)],8,L)])),_:2},1024)])),datetime:o((()=>[c("span",{title:e.createTime},g(e.createTimeString),9,T)])),content:o((()=>[c("div",U,["PUSH"===e.type?(b(),i("p",w,[a[5]||(a[5]=d(" Pushed to ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),d(" "+g(`the ${e.payload.branch} branch ${e.payload.commits.length} commits`)+" ",1),(b(!0),i(_,null,y(e.payload.commits,((e,a)=>(b(),l(D,{key:a,class:"commit"},{content:o((()=>[f(t,{href:e.url,target:"_blank",rel:"noopener",style:{"font-size":"12px"},title:e.message},{default:o((()=>[d(g(e.sha.substring(0,7)),1)])),_:2},1032,["href","title"]),c("a",{href:e.url,target:"_blank",rel:"noopener",title:e.message},g(e.message),9,R)])),_:2},1024)))),128))])):"ISSUE_OPEN"===e.type?(b(),i("p",x,[a[6]||(a[6]=d(" 在 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),a[7]||(a[7]=d(" 创建了 Issue ")),f(t,{href:e.payload.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.payload.title),1)])),_:2},1032,["href"])])):"ISSUE_CLOSE"===e.type||"ISSUE_REOPEN"===e.type?(b(),i("p",I,[a[8]||(a[8]=d(" 更改了 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),a[9]||(a[9]=d(" 的 Issue ")),f(t,{href:e.payload.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.payload.title),1)])),_:2},1032,["href"]),d(" 状态为 "+g(e.payload.stateString),1)])):"ISSUE_COMMENT"===e.type?(b(),i("p",z,[a[10]||(a[10]=d(" 评论了 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),a[11]||(a[11]=d(" 的 Issue ")),f(t,{href:e.payload.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.payload.title),1)])),_:2},1032,["href"])])):"PULL_REQUEST_OPEN"===e.type?(b(),i("p",N,[a[12]||(a[12]=d(" 在 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),a[13]||(a[13]=d(" 创建了 Pull Request ")),f(t,{href:e.payload.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.payload.title),1)])),_:2},1032,["href"])])):"PULL_REQUEST_MERGE"===e.type?(b(),i("p",O,[a[14]||(a[14]=d(" 接受了 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),a[15]||(a[15]=d(" 的 Pull Request ")),f(t,{href:e.payload.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.payload.title),1)])),_:2},1032,["href"])])):"PULL_REQUEST_CLOSE"===e.type||"PULL_REQUEST_REOPEN"===e.type?(b(),i("p",C,[a[16]||(a[16]=d(" 更改了 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),a[17]||(a[17]=d(" 的 Pull Request ")),f(t,{href:e.payload.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.payload.title),1)])),_:2},1032,["href"]),d(" 状态为 "+g(e.payload.stateString),1)])):"CREATE"===e.type?(b(),i("p",G,[d(" 推送了新的 "+g(e.payload.refType)+" ",1),f(t,{href:e.payload.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.payload.ref),1)])),_:2},1032,["href"]),a[18]||(a[18]=d(" 到 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"])])):"DELETE"===e.type?(b(),i("p",q,[a[19]||(a[19]=d(" 删除了 ")),f(t,{href:e.repo.url,target:"_blank",rel:"noopener"},{default:o((()=>[d(g(e.repo.alias),1)])),_:2},1032,["href"]),d(" 的 "+g(e.payload.ref)+" "+g(e.payload.refType),1)])):(b(),i("p",A,"暂无"))])])),_:2},1032,["author","class"])))),128))]))])),_:1})}}}),[["__scopeId","data-v-478f03cb"]]);export{Q as default};
