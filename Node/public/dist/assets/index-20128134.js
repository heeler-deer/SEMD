import{_ as oe,l as H,r as R,o as y,c as C,b as E,F as L,j as Q,n as se,B as Z,t as V,u as h,q as N,y as M,E as le,w as U,f as S,m as ae,a as O,i as j,v as ee,d as P,e as G,C as ie,z as re,D as ce,G as de,p as fe,h as ue,g as te,x as ne}from"./index-9377164a.js";import{C as pe}from"./index-a706a0ee.js";import{c as me,e as he}from"./execcontent-83fae5fe.js";import{e as ye,p as ge,u as xe,g as _e}from"./index-5bf050bb.js";import"./index-f224838c.js";const ve=["onClick"],be={__name:"filecontentmenu",emits:["putFileToRecycle","rename"],setup(n,{expose:D,emit:$}){let I=H([{name:"分享",icon:"icon-shujugongxiang",command:"shear"},{name:"删除",icon:"icon-huishouzhan",command:"delete"},{name:"重命名",icon:"icon-zhongmingming",command:"rename"},{name:"移动至",icon:"icon-yidong"},{name:"导出",icon:"icon-daochu",command:"export"}]),m=R(!0),r=H({});const p=H({x:0,y:0,display:"none"});let x=R(0);const b=async(i,c)=>{let{username:f,userid:w}=JSON.parse(sessionStorage.getItem("user"));switch(c){case"shear":let _=me(f,r.fileid,r.filename+"."+r.filesuffix);return he(_),M.success("分享链接已复制到粘贴板");case"delete":if(!r.fileid)return;try{await le.confirm(`确认删除 ${r.filename+"."+r.filesuffix} 吗？`,"删除文件",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});let{code:g,msg:v}=await ge({fileid:r.fileid,userid:w});if(g!==200)return M.error(v);M.success(v),$("putFileToRecycle",r.fileid)}catch{M.info("已取消")}return;case"rename":return $("rename",x.value);case"export":if(!r.fileid)return;try{let{code:g,msg:v}=await ye({fileid:r.fileid,userid:w});if(g!==200)return M.error(v);M.success("文件导出成功")}catch(g){console.log(g),M.error("导出文件失败")}return}},o=i=>{m.value=!i.className.includes("icon-24gf-folderOpen");let{fileid:c,filename:f,filesuffix:w,folderid:_}=i.dataset;r.fileid=c,r.folderid=_,r.filename=f,r.filesuffix=w;let g={name:"打开",icon:"icon-24gf-folderOpen",color:"#FFD153"},v=I.find(k=>k.icon==="icon-24gf-folderOpen");m.value?v&&I.shift():v||I.unshift(g)};return D({showContentMenu:(i,c)=>{x.value=c;let{target:f}=i;o(f),p.x=f.offsetLeft+i.offsetX,p.y=f.offsetTop+i.offsetY,p.display="block"},hiddenContentMenu:()=>(p.display="none",x.value=0)}),(i,c)=>(y(),C("div",null,[E("div",{onContextmenu:c[0]||(c[0]=N(()=>{},["stop"])),class:"contentmenu",style:Z({left:p.x+"px",top:p.y+"px",display:p.display})},[(y(!0),C(L,null,Q(h(I),(f,w)=>(y(),C("div",{key:w,onClick:_=>b(_,f.command)},[E("i",{class:se(["iconfont",f.icon]),style:Z({color:f.color})},null,6),E("span",null,V(f.name),1)],8,ve))),128))],36)]))}},we=oe(be,[["__scopeId","data-v-5fa9d2f3"]]),Ce=()=>{let n=H({isDragging:!1,dom:null,startX:0,startY:0,endX:0,endY:0,mode:"inside"}),D=H([]);function $(o){if(o.button===2)return;n.isDragging=!0,n.dom=document.querySelector(".mask"),n.dom.style.display="block",n.dom.style.width=0,n.dom.style.height=0;let{x:l,y:a}=r(o);n.startX=l,n.startY=a,n.dom.style.left=`${l}px`,n.dom.style.top=`${a}px`}function I(o){if(!n.isDragging)return;let{x:l,y:a}=r(o);l-n.startX<0&&(n.dom.style.left=`${l}px`),a-n.startY<0&&(n.dom.style.top=`${a}px`),n.dom.style.height=`${Math.abs(a-n.startY)}px`,n.dom.style.width=`${Math.abs(l-n.startX)}px`}async function m(o){if(o.button===2)return;let{x:l,y:a}=r(o);n.endX=l,n.endY=a;let i=await p();D.length=0,i.forEach(c=>{D.push(c),document.querySelector(`#${c}`).classList.add("ischoosed")}),n.isDragging=!1,n.dom.style.display="none",n.dom=null,n.startX=0,n.startY=0,n.endX=0,n.endY=0}function r(o){let{offsetLeft:l,offsetTop:a}=document.querySelector(".pages"),{clientX:i,clientY:c}=o;return{x:i-l,y:c-a}}function p(){return new Promise((o,l)=>{let{startX:a,startY:i,endX:c,endY:f}=n,w=Math.abs(a),_=Math.abs(i),g=Math.abs(c),v=Math.abs(f),k=[Math.min(w,g),Math.max(w,g)],X=[Math.min(_,v),Math.max(_,v)],q=[];document.querySelectorAll(".pages-list-files-item").forEach(Y=>{Y.classList.remove("ischoosed");let[z,A,K,W]=x(Y),t=b(z,k,X),e=b(A,k,X),u=b(K,k,X),d=b(W,k,X);function F(){(t||e||u||d)&&q.push(Y.id)}function J(){t&&e&&u&&d&&q.push(Y.id)}n.mode==="inside"?F():J()}),o(q)})}function x(o){let l=[],{offsetLeft:a,offsetTop:i,offsetWidth:c,offsetHeight:f}=o;return l.push({x:a,y:i}),l.push({x:a+c,y:i}),l.push({x:a+c,y:i+f}),l.push({x:a,y:i+f}),l}function b(o,l,a){let i=o.x>=l[0]&&o.x<=l[1],c=o.y>=a[0]&&o.y<=a[1];return i&&c}return{mouseDownHandle:$,mouseUpHandle:m,mouseMoveHandle:I,choosedDomID:D}};const ke=n=>(fe("data-v-a8b4b49f"),n=n(),ue(),n),Me=["onContextmenu"],Ie=ke(()=>E("div",{class:"mask"},null,-1)),De={class:"pages-list"},Fe={key:0,class:"pages-list-filesbread"},Se={class:"pages-list-files"},Re=["onDblclick","onContextmenu","id"],$e=["data-fileid","data-filename","data-filesuffix"],Te=["onDblclick"],He=["onDblclick"],Ee={__name:"index",setup(n){const{mouseDownHandle:D,mouseUpHandle:$,mouseMoveHandle:I}=Ce();var m=H([]);const r=R(null);let p=R(""),x=R(null),b=R(null),o=H([]),l=R("");U(()=>te.state.searchKeyWord,t=>l.value=t,{immediate:!1,deep:!0}),U(()=>te.state.topCreateData,t=>A(t),{immediate:!1,deep:!0});const a=(t,e)=>{if(e==="folder")return"#ffd153";let u={docx:"#0f90e3",xlsx:"#01a408",pdf:"#ea5454",txt:"rgba(0, 0, 0, 0.6)",md:"#5A96DB"};return u[t]?u[t]:""},i=t=>{_(m[t])},c=(t,e)=>{const{type:u}=e,d={folder:()=>{f(e),S.replace({query:{folderid:e.folderid,fromPath:S.currentRoute.value.query.folderid}})},word:()=>S.push(`/word/${e.fileid}`),excel:()=>S.push(`/excel/${e.fileid}`),markdown:()=>S.push(`/edit/${e.fileid}`)};d[u]&&d[u]()},f=t=>{o.push({name:t.foldername}),sessionStorage.setItem("pagelistbread",JSON.stringify(o))},w=()=>{o.pop(),S.replace({query:{folderid:S.currentRoute.value.query.fromPath}})},_=async t=>{m.forEach(e=>e.changeflag=!1),t.changeflag=!0,await ne(),r.value[0].focus()},g=async()=>{let t="";if(m.forEach(e=>{e.changeflag&&(t=e.fileid,e.folderid,e.filename=p.value||e.filename,e.changeflag=!1)}),p.value){let e=t?await xe({fileid:t,newfilename:p.value}):{code:0,msg:"暂未实现文件夹更新"};e.code===200?M.success(e.msg):M.error(e.msg)}p.value=""},v=()=>r.value[0].blur();let k=R(!1);const X=async t=>{k.value=!0,await ne(),x.value.showContentMenu(t),b.value.hiddenContentMenu()},q=()=>{k.value=!1},Y=()=>{x.value&&x.value.hiddenContentMenu(),b.value.hiddenContentMenu()},z=(t,e)=>(b.value.showContentMenu(t,e),x.value&&x.value.hiddenContentMenu()),A=({name:t,id:e,type:u,suffix:d})=>{if(u==="folder")return m.push({type:"folder",foldername:t,folderid:e,icon:"icon-24gf-folderOpen"});let F={md:"icon-file-markdown1",txt:"icon-wenben1",xlsx:"icon-excel",docx:"icon-Word"};m.push({type:u,fileid:e,filename:t,filesuffix:d,suffix:d,icon:F[d]})},K=t=>{m.splice(m.findIndex(e=>e.fileid===t),1)},W=t=>{const e={md:{type:"markdown",icon:"icon-file-markdown1"},txt:{type:"txt",icon:"icon-wenben1"},xlsx:{type:"excel",icon:"icon-excel"},docx:{type:"word",icon:"icon-Word"},folder:{type:"folder",icon:"icon-24gf-folderOpen"}};function u(d){d&&(t.type=e[d].type,t.icon=e[d].icon)}t.folderid?u("folder"):u(t.filesuffix),t.suffix=t.filesuffix};return U(S.currentRoute,async t=>{if(t.path!="/home/pages")return;m.length=0;let{userid:e}=JSON.parse(sessionStorage.getItem("user")),{folderid:u}=t.query;u||(o.length=0,sessionStorage.setItem("pagelistbread",[]));let d=await _e({userid:e,folderid:u});if(d.code!==200)return M.error(d.msg);d.data.length&&d.data.forEach(F=>{W(F),m.push(F)})},{immediate:!0,deep:!0}),ae(()=>{let t=sessionStorage.getItem("pagelistbread");t&&JSON.parse(t).forEach(e=>o.push(e))}),(t,e)=>{const u=O("el-icon"),d=O("el-breadcrumb-item"),F=O("el-breadcrumb"),J=O("el-input");return y(),C("div",{id:"pages",class:"pages",onClick:Y,onContextmenu:N(X,["prevent","stop"]),onMousedown:e[1]||(e[1]=(...s)=>h(D)&&h(D)(...s)),onMouseup:e[2]||(e[2]=(...s)=>h($)&&h($)(...s)),onMousemove:e[3]||(e[3]=(...s)=>h(I)&&h(I)(...s))},[Ie,h(k)?(y(),j(pe,{key:0,ref_key:"contentmenuRef",ref:x,onCreate:A,onClose:q},null,512)):ee("",!0),P(we,{ref_key:"filecontentmenuRef",ref:b,onPutFileToRecycle:K,onRename:i},null,512),E("div",De,[h(o).length?(y(),C("div",Fe,[P(u,{onClick:w},{default:G(()=>[P(h(ie))]),_:1}),P(F,{separator:"/"},{default:G(()=>[(y(!0),C(L,null,Q(h(o),(s,B)=>(y(),j(d,{key:B},{default:G(()=>[re(V(s.name),1)]),_:2},1024))),128))]),_:1})])):ee("",!0),E("div",Se,[(y(!0),C(L,null,Q(h(m).filter(s=>!h(l)||(s.filename||s.foldername).includes(h(l))),(s,B)=>(y(),C("div",{onDblclick:T=>c(B,s),onContextmenu:N(T=>z(T,B),["prevent","stop"]),class:"pages-list-files-item",key:B,id:s.fileid||s.folderid},[E("i",{"data-fileid":s.fileid,"data-filename":s.filename,"data-filesuffix":s.suffix||s.filesuffix,class:se(["iconfont",s.icon]),style:Z({color:a(s.suffix,s.type)})},null,14,$e),s.changeflag?(y(),j(J,{key:1,ref_for:!0,ref_key:"inputRef",ref:r,onBlur:g,onKeydown:ce(v,["enter"]),modelValue:h(p),"onUpdate:modelValue":e[0]||(e[0]=T=>de(p)?p.value=T:p=T)},null,8,["onKeydown","modelValue"])):(y(),C(L,{key:0},[s.type==="folder"?(y(),C("span",{key:0,onDblclick:N(T=>_(s),["stop"])},V(s.foldername),41,Te)):(y(),C("span",{key:1,onDblclick:N(T=>_(s),["stop"])},V(s.filename+"."+s.suffix),41,He))],64))],40,Re))),128))])])],40,Me)}}},Ae=oe(Ee,[["__scopeId","data-v-a8b4b49f"]]);export{Ae as default};
