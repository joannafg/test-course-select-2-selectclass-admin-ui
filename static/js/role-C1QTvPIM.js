import{$ as t}from"./index-BAyZi_co.js";const n="/system/role";function r(r){return t.get(`${n}`,r)}function u(r){return t.get(`${n}/${r}`)}function e(r){return t.post(`${n}`,r)}function s(r,u){return t.put(`${n}/${u}`,r)}function o(r){return t.del(`${n}/${r}`)}function $(r){return t.get(`${n}/${r}/user`)}function a(r,u){return t.post(`${n}/${r}/user`,u)}export{e as a,a as b,r as c,o as d,u as g,$ as l,s as u};
