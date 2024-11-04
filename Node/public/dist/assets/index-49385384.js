import{_ as N,l as C,m as q,H as B,a as w,o as x,c as g,b as u,F as z,j as A,n as E,B as b,t as O,u as s,d as f,e as m,z as v,q as X,y as i,f as F}from"./index-65d0137d.js";import{f as Y}from"./index-94cc0385.js";import{c as J}from"./index-b98c489e.js";const L=[{icon:"icon-24gf-folderOpen",name:"新建文件夹",color:"#FFD153",command:"folder"},{icon:"icon-Word",name:"新建在线文档",color:"#2A8CFF",command:"word"},{icon:"icon-excel",name:"新建在线表格",color:"#00C476",command:"excel"},{icon:"icon-wenben1",name:"新建在线文本",color:"",command:"txt"},{icon:"icon-file-markdown1",name:"新建markdown",color:"#1296db",command:"markdown"},{name:"导入本地文件",command:"inputfile"},{name:"更多类型",command:"more"},{name:"批量管理",command:"manage"}],P=_=>Y({url:"/folder/createFolder",method:"post",data:_});const R=["onClick"],U=["onClick"],W={class:"dialog-footer"},$={__name:"index",emits:["create","close"],setup(_,{expose:V,emit:d}){let e=C({show:!1,title:"",input:"",warning:"",placeholder:""});const a=C({x:0,y:0,display:"none"});function M(o){switch(o){case"folder":e.type=o,e.show=!0,e.title="创建文件夹",e.warning="请输入文件夹名称",e.placeholder="请输入文件夹名称";break;case"word":e.type=o,e.show=!0,e.title="新建 Word",e.warning="文件名称不能为空",e.placeholder="请输入文件名称";break;case"excel":e.type=o,e.show=!0,e.title="新建 Excel",e.warning="文件名称不能为空",e.placeholder="请输入文件名称";break;case"txt":e.type=o,e.show=!0,e.title="新建文本文档",e.warning="文件名称不能为空",e.placeholder="请输入文件名称";break;case"markdown":e.type=o,e.show=!0,e.title="新建markdown文档",e.warning="文件名称不能为空",e.placeholder="请输入文件名称";break}}function S(o,t){if(t){a.x=o.pageX-o.offsetX,a.y=o.pageY-o.offsetY,a.display="block";return}let r=o.pageX,n=o.pageY;a.x=r,a.y=n,a.display="block"}function k(){a.display="none",d("close")}async function D(o,t){let{folderid:r}=F.currentRoute.value.query,n=await P({userid:o,foldername:t,parentfolderid:r});return n.code!==200?i.error(n.msg):(i.success(n.msg),n.data)}async function I(){if(!e.input)return i.warning(e.warning);let{userid:o}=JSON.parse(sessionStorage.getItem("user")),t={type:e.type};if(e.type==="folder"){let r=e.input,n=await D(o,r);t.id=n,t.name=r}else{let{userid:r}=JSON.parse(sessionStorage.getItem("user")),n=e.input,y=e.type,c={txt:"txt",markdown:"md",word:"docx",excel:"xlsx"}[e.type],h=F.currentRoute.value.query.folderid,p=await J({userid:r,filename:n,filetype:y,filesuffix:c,fileownerfolderid:h});if(p.code!==200)return i.error(p.msg);i.success(p.msg),t.id=p.data,t.name=n,t.suffix=c}e.show=!1,e.input="",d("create",t),d("close")}return q(()=>{let o=B();const t=document.querySelector("body");t.append?t.append(o.vnode.el):t.appendChild(o.vnode.el)}),V({showContentMenu:S,hiddenContentMenu:k}),(o,t)=>{const r=w("el-input"),n=w("el-button"),y=w("el-dialog");return x(),g("div",{class:"box",onClick:X(k,["stop","self"]),onContextmenu:t[4]||(t[4]=l=>l.preventDefault())},[u("div",{onContextmenu:t[0]||(t[0]=l=>l.preventDefault()),class:"contentmenu",style:b({left:a.x+"px",top:a.y+"px",display:a.display})},[(x(!0),g(z,null,A(s(L),(l,c)=>(x(),g("div",{key:c,onClick:h=>M(l.command)},[u("i",{class:E(["iconfont",l.icon]),style:b({color:l.color})},null,6),u("span",null,O(l.name),1)],8,U))),128))],36),f(y,{modelValue:s(e).show,"onUpdate:modelValue":t[3]||(t[3]=l=>s(e).show=l),title:s(e).title,width:"30%"},{footer:m(()=>[u("span",W,[f(n,{onClick:t[2]||(t[2]=l=>(s(e).show=!1,d("close"),s(e).input=""))},{default:m(()=>[v(" 取消 ")]),_:1}),f(n,{type:"primary",onClick:I},{default:m(()=>[v(" 确定 ")]),_:1})])]),default:m(()=>[f(r,{modelValue:s(e).input,"onUpdate:modelValue":t[1]||(t[1]=l=>s(e).input=l),placeholder:s(e).placeholder},null,8,["modelValue","placeholder"])]),_:1},8,["modelValue","title"])],40,R)}}},G=N($,[["__scopeId","data-v-a011580c"]]);export{G as C};
