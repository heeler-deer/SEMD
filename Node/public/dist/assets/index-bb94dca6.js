import{_ as B,r as b,w as D,a as h,o as m,c as k,b as e,d,e as u,u as v,s as te,n as R,f as C,g as F,p as P,h as K,i as z,F as U,j as W,t as A,k as ne,l as H,m as oe,q as N,v as J,x as se,E as L,y as I,z as ae,A as ie}from"./index-5c5f702f.js";import{C as le}from"./index-8a32a3d6.js";import{s as ce,c as re}from"./index-385e6889.js";import"./index-30221ceb.js";const f=n=>(P("data-v-1bd5afeb"),n=n(),K(),n),de={class:"aside"},ue=f(()=>e("div",{class:"aside-logo"},[e("i",{class:"iconfont icon-circulation"}),e("span",{title:"多人协作编辑器"}," 多人协作编辑器 ")],-1)),_e={class:"aside-search"},pe=f(()=>e("span",null,"abc",-1)),me=f(()=>e("i",{class:"iconfont icon-shouye-zhihui"},null,-1)),he=f(()=>e("span",null," 首页123 ",-1)),fe=[me,he],ge=f(()=>e("i",{class:"iconfont icon-zuijinchangyong"},null,-1)),ve=f(()=>e("span",null," 最近文档 ",-1)),ye=[ge,ve],xe=f(()=>e("i",{class:"iconfont icon-shujugongxiang"},null,-1)),we=f(()=>e("span",null," 与我共享 ",-1)),be=[xe,we],Ce=f(()=>e("i",{class:"iconfont icon-shoucang2"},null,-1)),$e=f(()=>e("span",null," 我的收藏 ",-1)),ke=[Ce,$e],Me=f(()=>e("i",{class:"iconfont icon-huishouzhan"},null,-1)),Se=f(()=>e("span",null," 回收站 ",-1)),Ie=[Me,Se],Te={__name:"aside",props:{activeMenu:{type:String,default:"pages"}},setup(n){const s=b("");D(s,o=>F.commit("setSearchKeyWord",o));const l=o=>C.push(`/home/${o}`);return(o,t)=>{const c=h("el-icon"),r=h("el-input");return m(),k("div",de,[ue,e("div",_e,[d(r,{placeholder:"搜索",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=a=>s.value=a),clearable:""},{prefix:u(()=>[d(c,null,{default:u(()=>[d(v(te))]),_:1}),pe]),_:1},8,["modelValue"])]),e("div",{class:R(["aside-icon",{active:n.activeMenu==="pages"}]),onClick:t[1]||(t[1]=a=>l("pages"))},fe,2),e("div",{class:R(["aside-icon",{active:n.activeMenu==="news"}]),onClick:t[2]||(t[2]=a=>l("news"))},ye,2),e("div",{class:R(["aside-icon",{active:n.activeMenu==="share"}]),onClick:t[3]||(t[3]=a=>l("share"))},be,2),e("div",{class:R(["aside-icon",{active:n.activeMenu==="favor"}]),onClick:t[4]||(t[4]=a=>l("favor"))},ke,2),e("div",{class:"aside-bottom",onClick:t[5]||(t[5]=a=>v(C).push("/recycle"))},Ie)])}}},Re=B(Te,[["__scopeId","data-v-1bd5afeb"]]);const ze={style:{width:"100%",height:"100%"}},Be={class:"dropdownItem"},Oe=["title"],Ve={__name:"index",props:{trigger:{type:String,default:"click"},list:{type:Array,default:()=>[]}},emits:["handleCommand","handleOpen","handleClose"],setup(n,{emit:s}){const l=c=>s("handleCommand",c),o=()=>s("handleOpen"),t=()=>s("handleClose");return(c,r)=>{const a=h("el-dropdown-item"),x=h("el-dropdown-menu"),g=h("el-dropdown");return m(),z(g,{trigger:n.trigger,onHandleOpen:o,onHandleClose:t,onCommand:l},{dropdown:u(()=>[d(x,null,{default:u(()=>[(m(!0),k(U,null,W(n.list,_=>(m(),z(a,{key:_.command,command:_.command},{default:u(()=>[e("div",Be,[e("i",{class:R(["iconfont",_.icon])},null,2),e("span",{title:_.name},A(_.name),9,Oe)])]),_:2},1032,["command"]))),128))]),_:1})]),default:u(()=>[e("div",ze,[ne(c.$slots,"content",{},void 0,!0)])]),_:3},8,["trigger"])}}},Ne=B(Ve,[["__scopeId","data-v-b30e786d"]]),Fe=(n,s,l="Typora")=>new Promise((o,t)=>{if(n.name.split(".")[1]==="md"){let r=new FileReader;r.readAsText(n,"UTF-8"),r.onloadend=async a=>{a.target.readyState!==2&&t({msg:"文件读写失败"});let x=He(a.target.result.toString().split(`
`)),{userid:g}=JSON.parse(sessionStorage.getItem("user")),_=await ce({fileid:s,userid:g,content:x});_.code!==200&&t(_),o(_)}}});function He(n,s){let l=[];return n.forEach(o=>{let t=o&&o.match(/^[#]+|[*]+[\u4e00-\u9fa5|\d|a-z|A-Z|-]|[~~~]{3}|[<][u][>]|[\]][(]/g);if(!t)return l.push({insert:j(o)});let c=null;t.forEach(r=>{r.toString().includes("#")&&(c=r.length)}),l.push({insert:j(o),attributes:{header:c}})}),JSON.stringify(l)}function j(n){return n.replace(/[']/g,"#[d]#").replace(/["]/g,"#[s]#").replace(/^#+/g,"")}const y=n=>(P("data-v-6579e611"),n=n(),K(),n),Ae={class:"top-left"},Ee=y(()=>e("i",{class:"iconfont icon-xinjian"},null,-1)),qe=y(()=>e("span",null,"新建",-1)),Je=y(()=>e("i",{class:"iconfont icon-daoru"},null,-1)),Le=y(()=>e("span",null,"导入",-1)),je=y(()=>e("i",{class:"iconfont icon-duqumoban"},null,-1)),De=y(()=>e("span",null,"模板",-1)),Pe=y(()=>e("i",{class:"iconfont icon-gongneng"},null,-1)),Ke=y(()=>e("span",null,"工具箱",-1)),Ue={class:"top-right"},We={class:"top-right-vip"},Ze=y(()=>e("i",{class:"iconfont icon-zuanshi"},null,-1)),Ge={class:"top-right-message",style:{"margin-right":"20px"}},Qe=y(()=>e("i",{class:"iconfont icon-xiaoxizhongxin"},null,-1)),Xe={class:"top-right-user"},Ye=["innerHTML"],et={key:2,class:"iconfont icon-tipvip"},tt={__name:"top",setup(n){const s=b("【双十一】超值活动，会员低至0.5元/天！");let l=b(!0),o=b("");const t=H([{name:"个人中心",command:"user",icon:"icon-zhanghao"},{name:"系统设置",command:"setting",icon:"icon-shezhi-xianxing"},{name:"项目地址",command:"gitee",icon:"icon-github-fill"},{name:"退出系统",command:"exit",icon:"icon-tuichu"}]),c=H({show:!1}),r=i=>{switch(i){case"user":C.push("/user");break;case"gitee":window.open("https://gitee.com/wfeng0/mpoe");break;case"setting":c.show=!0;break;case"exit":sessionStorage.clear(),C.push("/login");break}},a=()=>C.push("/template");let x=b(null),g=b(!1);const _=async i=>{g.value=!0,await se(),x.value.showContentMenu(i,!0)},Z=()=>g.value=!1,G=i=>F.commit("setTopCreateData",i);let O=b(null);const Q=async i=>{const p=i.target.files[0];try{await L.confirm(`确认上传 ${p.name} 进行协同吗？`,"文件上传",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}),X(p)}catch{I.info("已取消")}O.value.value=""},X=async i=>{let p=JSON.parse(sessionStorage.getItem("user")).userid,w=i.name.split(".")[0],$=i.name.split(".")[1],T={md:"markdown",txt:"txt",doc:"word",docx:"word",xls:"excel",xlsx:"excel"}[$],M=C.currentRoute.value.query.folderid,Y=Math.random().toString().split(".")[1].slice(0,3),S=await re({userid:p,filename:w,filesuffix:$,filetype:T,fileownerfolderid:M});if(S.code!==200)return I.error("导入失败，"+S.msg);I.success("文件导入成功！");let ee={id:S.data,name:Y,suffix:$,type:T};F.commit("setTopCreateData",ee);let V=await Fe(i,S.data,"Typora");if(V.code!==200)return I.error(V.msg);I.success(V.msg);try{await L.confirm("是否立即打开文件？","打开文件",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});let q={filename:w,filesuffix:$,filetype:T,owner:p};C.push({path:$==="xlsx"?`/excel/${S.data}`:`/edit/${S.data}`,query:q})}catch{I.info("已取消")}};return oe(()=>{let i=JSON.parse(sessionStorage.getItem("user"));l.value=i.vip,o.value=i.userimg}),(i,p)=>{const w=h("el-button"),$=h("el-link"),E=h("el-badge"),T=h("el-avatar");return m(),k("div",{class:"top",onClick:p[2]||(p[2]=N((...M)=>i.hiddenContentMenu&&i.hiddenContentMenu(...M),["stop"]))},[e("div",Ae,[d(w,{type:"primary",onClick:p[0]||(p[0]=N(M=>_(M),["stop"]))},{default:u(()=>[Ee,qe]),_:1}),d(w,{text:"",onClick:p[1]||(p[1]=N(M=>v(O).click(),["stop"]))},{default:u(()=>[Je,Le]),_:1}),d(w,{text:"",onClick:a},{default:u(()=>[je,De]),_:1}),d(w,{text:""},{default:u(()=>[Pe,Ke]),_:1})]),e("div",Ue,[e("div",We,[d($,{type:"danger"},{default:u(()=>[Ze,e("span",null,A(s.value),1)]),_:1})]),e("div",Ge,[d(E,{value:"",class:"item"},{default:u(()=>[Qe]),_:1})]),e("div",Xe,[d(Ne,{list:t,onCommand:r},{content:u(()=>[v(o)?(m(),k("div",{key:0,class:"userimg_svg",innerHTML:v(o)},null,8,Ye)):(m(),z(T,{key:1,shape:"square",src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})),v(l)?(m(),k("i",et)):J("",!0)]),_:1},8,["list"])])]),v(g)?(m(),z(le,{key:0,ref_key:"contentmenuRef",ref:x,onCreate:G,onClose:Z},null,512)):J("",!0),e("input",{type:"file",onChange:Q,style:{display:"none"},accept:"*",ref_key:"inputRef",ref:O},null,544)])}}},nt=B(tt,[["__scopeId","data-v-6579e611"]]);const ot={class:"home"},st={class:"home-main"},at={__name:"index",setup(n){let s=H([{title:"首页123",path:"/home/pages"}]),l=[{path:"news",title:"最近文档123"},{path:"share",title:"与我共享123"},{path:"favor",title:"我的收藏123"}],o=b("pages");return D(C.currentRoute,t=>{let c=t.path.split("/")[2];o=c;let r=l.find(a=>a.path===c);s.length===1&&c==="pages"||(s.length>1&&s.pop(),r&&s.push({title:r.title,path:`/home/${r.path}`}))},{deep:!0,immediate:!0}),(t,c)=>{const r=h("el-breadcrumb-item"),a=h("el-breadcrumb"),x=h("router-view");return m(),k("div",ot,[d(Re,{activeMenu:v(o)},null,8,["activeMenu"]),e("div",st,[d(nt),d(a,{class:"home-main-bread","separator-icon":v(ie)},{default:u(()=>[(m(!0),k(U,null,W(v(s),(g,_)=>(m(),z(r,{key:_,to:{path:g.path}},{default:u(()=>[ae(A(g.title),1)]),_:2},1032,["to"]))),128))]),_:1},8,["separator-icon"]),d(x,{style:{flex:"auto",padding:"10px 20px"}})])])}}},dt=B(at,[["__scopeId","data-v-57c1ab27"]]);export{dt as default};
