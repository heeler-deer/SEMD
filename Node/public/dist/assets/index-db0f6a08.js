import{_ as u,a as c,o as t,c as a,d as o,e as r,u as s,b as n,t as p,z as d,A as m}from"./index-33253f62.js";const v="/assets/avatar-ae8813d6.jpg";const g={class:"user"},f={class:"user-info"},b=["innerHTML"],h={key:1,src:v,alt:""},x={class:"username"},y={__name:"index",setup(k){let e=JSON.parse(sessionStorage.getItem("user"));console.log(e),e.vip;const i=e.userimg.includes("svg");return(N,S)=>{const _=c("el-breadcrumb-item"),l=c("el-breadcrumb");return t(),a("div",g,[o(l,{"separator-icon":s(m)},{default:r(()=>[o(_,{to:{path:"/"}},{default:r(()=>[d("返回")]),_:1}),o(_,null,{default:r(()=>[d("个人中心")]),_:1})]),_:1},8,["separator-icon"]),n("div",f,[s(i)?(t(),a("div",{key:0,class:"user-avatar-svg",innerHTML:s(e).userimg},null,8,b)):(t(),a("img",h)),n("div",null,[n("p",x,p(s(e).username),1)])])])}}},T=u(y,[["__scopeId","data-v-6fdb4943"]]);export{T as default};
