import{d as e,c as a,a as s,w as n,C as o,h as l,o as r}from"./index-BAyZi_co.js";const c=e({name:"GiCellGender",__name:"GiCellGender",props:{gender:{default:1}},setup(e){const c=e;return(e,d)=>{const i=s("icon-man"),t=s("a-tag"),u=s("icon-woman");return 1===c.gender?(r(),a(t,{key:0,color:"arcoblue",size:"small",class:"gi_round"},{icon:n((()=>[l(i)])),default:n((()=>d[0]||(d[0]=[o("男")]))),_:1})):2===c.gender?(r(),a(t,{key:1,color:"magenta",size:"small",class:"gi_round"},{icon:n((()=>[l(u)])),default:n((()=>d[1]||(d[1]=[o("女")]))),_:1})):(r(),a(t,{key:2,color:"gray",size:"small",class:"gi_round"},{default:n((()=>d[2]||(d[2]=[o("未知")]))),_:1}))}}});export{c as _};
