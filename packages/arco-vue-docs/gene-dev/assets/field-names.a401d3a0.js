var H=Object.defineProperty,G=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var I=(a,t,o)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,F=(a,t)=>{for(var o in t||(t={}))Z.call(t,o)&&I(a,o,t[o]);if(A)for(var o of A(t))J.call(t,o)&&I(a,o,t[o]);return a},N=(a,t)=>G(a,Y(t));import{d as v,h as B,o as g,i as D,e as n,n as V,j as M,_ as m,r as c,c as h,u as w,f as b,w as p,b as s,a as r,g as _,t as C,F as $,v as Q,fw as L,y as S}from"./index.2d41f1b2.js";import{I as T}from"./index.d77897a2.js";import{I as X}from"./index.957cc442.js";import{g as j,i as P,_ as U}from"./plugin-vue_export-helper.4ed399e1.js";const nn=v({name:"IconDown",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:a=>["butt","round","square"].includes(a)},strokeLinejoin:{type:String,default:"miter",validator:a=>["arcs","bevel","miter","miter-clip","round"].includes(a)},rotate:Number,spin:Boolean},emits:{click:a=>!0},setup(a,{emit:t}){const o=j("icon"),e=B(()=>[o,`${o}-down`,{[`${o}-spin`]:a.spin}]),y=B(()=>{const l={};return a.size&&(l.fontSize=P(a.size)?`${a.size}px`:a.size),a.rotate&&(l.transform=`rotate(${a.rotate}deg)`),l});return{cls:e,innerStyle:y,onClick:l=>{t("click",l)}}}}),sn=["stroke-width","stroke-linecap","stroke-linejoin"];function tn(a,t,o,e,y,d){return g(),D("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(a.cls),style:M(a.innerStyle),"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin,onClick:t[0]||(t[0]=(...l)=>a.onClick&&a.onClick(...l))},t[1]||(t[1]=[n("path",{d:"M39.6 17.443 24.043 33 8.487 17.443"},null,-1)]),14,sn)}var q=U(nn,[["render",tn]]);const an=Object.assign(q,{install:(a,t)=>{var o;const e=(o=t==null?void 0:t.iconPrefix)!=null?o:"";a.component(e+q.name,q)}}),en=v({name:"IconDriveFile",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:a=>["butt","round","square"].includes(a)},strokeLinejoin:{type:String,default:"miter",validator:a=>["arcs","bevel","miter","miter-clip","round"].includes(a)},rotate:Number,spin:Boolean},emits:{click:a=>!0},setup(a,{emit:t}){const o=j("icon"),e=B(()=>[o,`${o}-drive-file`,{[`${o}-spin`]:a.spin}]),y=B(()=>{const l={};return a.size&&(l.fontSize=P(a.size)?`${a.size}px`:a.size),a.rotate&&(l.transform=`rotate(${a.rotate}deg)`),l});return{cls:e,innerStyle:y,onClick:l=>{t("click",l)}}}}),on=["stroke-width","stroke-linecap","stroke-linejoin"];function pn(a,t,o,e,y,d){return g(),D("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:V(a.cls),style:M(a.innerStyle),"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin,onClick:t[0]||(t[0]=(...l)=>a.onClick&&a.onClick(...l))},t[1]||(t[1]=[n("path",{d:"M38.5 17H29a1 1 0 0 1-1-1V6.5m0-.5H10a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V17L28 6Z"},null,-1)]),14,on)}var K=U(en,[["render",pn]]);const E=Object.assign(K,{install:(a,t)=>{var o;const e=(o=t==null?void 0:t.iconPrefix)!=null?o:"";a.component(e+K.name,K)}}),cn={data(){return{treeData:ln}}},ln=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Branch 0-0-0",key:"0-0-0",disabled:!0,children:[{title:"Leaf",key:"0-0-0-0"},{title:"Leaf",key:"0-0-0-1"}]},{title:"Branch 0-0-1",key:"0-0-1",children:[{title:"Leaf",key:"0-0-1-0"}]}]}];function un(a,t,o,e,y,d){const l=c("a-tree");return g(),h(l,{data:y.treeData,"default-expanded-keys":["0-0-0"],"default-selected-keys":["0-0-0","0-0-1"]},null,8,["data"])}var rn=m(cn,[["render",un]]);const kn=v({name:"ArcoDemo",components:{VirtualDemo:rn},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function yn(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"basic",title:a.getMessage("\u57FA\u672C\u7528\u6CD5","Basic")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":default-expanded-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("['0-0-0']"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":default-selected-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("['0-0-0', '0-0-1']"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u4E3A\u6BCF\u4E2A\u8282\u70B9\u8D4B\u4E88\u5168\u5C40\u552F\u4E00\u7684 "),n("code",null,"key"),s("\uFF08\u5FC5\u586B\u9879\uFF09\uFF0C"),n("code",null,"title"),s(" \u4E3A\u8BE5\u8282\u70B9\u663E\u793A\u7684\u5185\u5BB9\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("Give each node a globally unique "),n("code",null,"key"),s(" (required), and the "),n("code",null,"title"),s(" is the content to be displayed on the node.")],-1))]),key:"1"}]),1032,["title"])}var at=m(kn,[["render",yn]]);const dn={data(){return{treeData:gn}}},gn=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Branch 0-0-0",key:"0-0-0",children:[{title:"Leaf",key:"0-0-0-0"},{title:"Leaf",key:"0-0-0-1"}]},{title:"Branch 0-0-1",key:"0-0-1",children:[{title:"Leaf",key:"0-0-1-0"}]}]}];function mn(a,t,o,e,y,d){const l=c("a-tree");return g(),h(l,{blockNode:"",data:y.treeData},null,8,["data"])}var fn=m(dn,[["render",mn]]);const hn=v({name:"ArcoDemo",components:{VirtualDemo:fn},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function _n(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"block-node",title:a.getMessage("\u8282\u70B9\u5360\u4E00\u884C","BlockNode")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},"blockNode"),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,"\u8282\u70B9\u5360\u636E\u4E00\u6574\u884C\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,"The treeNode occupy the remaining horizontal space.",-1))]),key:"1"}]),1032,["title"])}var et=m(hn,[["render",_n]]);const vn={setup(){const a=_([]),t=_(!0);return{selectedKeys:a,multiple:t,treeData:[{title:"Trunk 0-0",key:"0-0",children:[{title:"Leaf",key:"0-0-1"},{title:"Branch 0-0-2",key:"0-0-2",children:[{title:"Leaf",key:"0-0-2-1"}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1",children:[{title:"Leaf",key:"0-1-1-1"},{title:"Leaf",key:"0-1-1-2"}]},{title:"Leaf",key:"0-1-2"}]}]}}};function wn(a,t,o,e,y,d){const l=c("a-checkbox"),i=c("a-typography-text"),u=c("a-tree");return g(),D($,null,[r(l,{style:{marginBottom:"24px"},modelValue:e.multiple,"onUpdate:modelValue":t[0]||(t[0]=k=>e.multiple=k),onChange:t[1]||(t[1]=()=>{e.selectedKeys=[]})},{default:p(()=>t[3]||(t[3]=[s(" multiple ")])),_:1},8,["modelValue"]),t[4]||(t[4]=n("br",null,null,-1)),r(i,null,{default:p(()=>{var k;return[s(" Current: "+C((k=e.selectedKeys)==null?void 0:k.join(" , ")),1)]}),_:1}),t[5]||(t[5]=n("br",null,null,-1)),r(u,{"selected-keys":e.selectedKeys,"onUpdate:selectedKeys":t[2]||(t[2]=k=>e.selectedKeys=k),multiple:e.multiple,data:e.treeData},null,8,["selected-keys","multiple","data"])],64)}var bn=m(vn,[["render",wn]]);const Dn=v({name:"ArcoDemo",components:{VirtualDemo:bn},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function $n(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"multiple",title:a.getMessage("\u591A\u9009","Multiple Selection")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-checkbox")]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"marginBottom"),n("span",{class:"token punctuation"},":"),s(" 24px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`() => {
      selectedKeys = [];
    }`),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    multiple
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-checkbox")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-typography-text")]),n("span",{class:"token punctuation"},">")]),s(`
    Current: {{ selectedKeys?.join(' , ') }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-typography-text")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selected-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("multiple"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" multiple "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        selectedKeys`),n("span",{class:"token punctuation"},","),s(`
        multiple`),n("span",{class:"token punctuation"},","),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[n("code",null,"Tree"),s(" \u8BBE\u7F6E "),n("code",null,"multiple"),s(" \u5C5E\u6027\u4E3A"),n("code",null,"true"),s("\uFF0C\u53EF\u4EE5\u542F\u7528\u591A\u9009\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("Add "),n("code",null,':multiple="true"'),s(" to "),n("code",null,"Tree"),s(" to enable multiple selection.")],-1))]),key:"1"}]),1032,["title"])}var ot=m(Dn,[["render",$n]]);const Cn={setup(){const a=_([]),t=_(!1);return{checkedKeys:a,checkStrictly:t,treeData:xn}}},xn=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Leaf",key:"0-0-1"},{title:"Branch 0-0-2",key:"0-0-2",disabled:!0,children:[{title:"Leaf",key:"0-0-2-1"},{title:"Leaf",key:"0-0-2-2",disableCheckbox:!0}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1",children:[{title:"Leaf ",key:"0-1-1-1"},{title:"Leaf ",key:"0-1-1-2"}]},{title:"Leaf",key:"0-1-2"}]}];function Ln(a,t,o,e,y,d){const l=c("a-checkbox"),i=c("a-tree");return g(),D($,null,[r(l,{style:{marginBottom:"24px"},modelValue:e.checkStrictly,"onUpdate:modelValue":t[0]||(t[0]=u=>e.checkStrictly=u),onChange:t[1]||(t[1]=()=>{e.checkedKeys=[]})},{default:p(()=>t[3]||(t[3]=[s(" checkStrictly ")])),_:1},8,["modelValue"]),r(i,{checkable:!0,"checked-keys":e.checkedKeys,"onUpdate:checkedKeys":t[2]||(t[2]=u=>e.checkedKeys=u),"check-strictly":e.checkStrictly,data:e.treeData},null,8,["checked-keys","check-strictly","data"])],64)}var Bn=m(Cn,[["render",Ln]]);const En=v({name:"ArcoDemo",components:{VirtualDemo:Bn},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function Fn(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"checkable",title:a.getMessage("\u5E26\u590D\u9009\u6846\u7684\u6811","Checkable")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-checkbox")]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"marginBottom"),n("span",{class:"token punctuation"},":"),s(" 24px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkStrictly"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`() => {
      checkedKeys = [];
    }`),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    checkStrictly
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-checkbox")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checked-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":check-strictly"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkStrictly"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" checkStrictly "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        checkedKeys`),n("span",{class:"token punctuation"},","),s(`
        checkStrictly`),n("span",{class:"token punctuation"},","),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-2'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"disableCheckbox"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf '"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf '"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u4E3A "),n("code",null,"Tree"),s(" \u6DFB\u52A0 "),n("code",null,"checkable"),s(" \u5C5E\u6027\u5373\u53EF\u4F7F\u6811\u5177\u6709\u590D\u9009\u6846\u529F\u80FD\uFF0C\u53EF\u4EE5\u7528 "),n("code",null,"defaultCheckedKeys"),s(" \u6307\u5B9A\u590D\u9009\u6846\u9ED8\u8BA4\u9009\u4E2D\u7684\u8282\u70B9\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("Add the "),n("code",null,"checkable"),s(" attribute to display the checkbox, and you can use "),n("code",null,"defaultCheckedKeys"),s(" to specify which nodes are checked by default.")],-1))]),key:"1"}]),1032,["title"])}var pt=m(En,[["render",Fn]]);const qn=["0-0","0-0-1","0-0-2","0-0-2-1","0-1","0-1-1","0-1-2"],Kn=["0-0","0-1","0-0-2"],Tn={setup(){const a=_([]),t=_([]),o=_([]);return{selectedKeys:a,checkedKeys:t,expandedKeys:o,treeData:An,toggleChecked(){t.value=t!=null&&t.value.length?[]:qn},toggleExpanded(){o.value=o!=null&&o.value.length?[]:Kn},onSelect(e,y){console.log("select: ",e,y)},onCheck(e,y){console.log("check: ",e,y)},onExpand(e,y){console.log("expand: ",e,y)}}}},An=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Leaf 0-0-1",key:"0-0-1"},{title:"Branch 0-0-2",key:"0-0-2",children:[{title:"Leaf 0-0-2-1",key:"0-0-2-1"}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Leaf 0-1-1",key:"0-1-1"},{title:"Leaf 0-1-2",key:"0-1-2"}]}];function In(a,t,o,e,y,d){const l=c("a-button"),i=c("a-button-group"),u=c("a-tree");return g(),D($,null,[r(i,{style:{"margin-bottom":"20px"}},{default:p(()=>[r(l,{type:"primary",onClick:e.toggleChecked},{default:p(()=>{var k;return[s(C((k=e.checkedKeys)!=null&&k.length?"deselect all":"select all"),1)]}),_:1},8,["onClick"]),r(l,{type:"primary",onClick:e.toggleExpanded},{default:p(()=>{var k;return[s(C((k=e.expandedKeys)!=null&&k.length?"fold":"unfold"),1)]}),_:1},8,["onClick"])]),_:1}),r(u,{checkable:!0,"selected-keys":e.selectedKeys,"onUpdate:selectedKeys":t[0]||(t[0]=k=>e.selectedKeys=k),"checked-keys":e.checkedKeys,"onUpdate:checkedKeys":t[1]||(t[1]=k=>e.checkedKeys=k),"expanded-keys":e.expandedKeys,"onUpdate:expandedKeys":t[2]||(t[2]=k=>e.expandedKeys=k),onSelect:e.onSelect,onCheck:e.onCheck,onExpand:e.onExpand,data:e.treeData},null,8,["selected-keys","checked-keys","expanded-keys","onSelect","onCheck","onExpand","data"])],64)}var Nn=m(Tn,[["render",In]]);const Sn=v({name:"ArcoDemo",components:{VirtualDemo:Nn},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function zn(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"control",title:a.getMessage("\u53CC\u5411\u7ED1\u5B9A","Two-way binding")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button-group")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toggleChecked"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      {{
        checkedKeys?.length ? 'deselect all' : 'select all'
      }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("toggleExpanded"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      {{
        expandedKeys?.length ? 'fold' : 'unfold'
      }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button-group")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("selected-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("selectedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checked-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("expanded-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("expandedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSelect"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@check"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onCheck"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@expand"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onExpand"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" allCheckedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" allExpandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`


  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" selectedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" expandedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`


      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        selectedKeys`),n("span",{class:"token punctuation"},","),s(`
        checkedKeys`),n("span",{class:"token punctuation"},","),s(`
        expandedKeys`),n("span",{class:"token punctuation"},","),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"toggleChecked"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          checkedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" checkedKeys"),n("span",{class:"token operator"},"?."),s("value"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},":"),s(" allCheckedKeys"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"toggleExpanded"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          expandedKeys`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" expandedKeys"),n("span",{class:"token operator"},"?."),s("value"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},":"),s(" allExpandedKeys"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"onSelect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("newSelectedKeys"),n("span",{class:"token punctuation"},","),s(" event")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'select: '"),n("span",{class:"token punctuation"},","),s(" newSelectedKeys"),n("span",{class:"token punctuation"},","),s(" event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"onCheck"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("newCheckedKeys"),n("span",{class:"token punctuation"},","),s(" event")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'check: '"),n("span",{class:"token punctuation"},","),s(" newCheckedKeys"),n("span",{class:"token punctuation"},","),s(" event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"onExpand"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("newExpandedKeys"),n("span",{class:"token punctuation"},","),s(" event")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expand: '"),n("span",{class:"token punctuation"},","),s(" newExpandedKeys"),n("span",{class:"token punctuation"},","),s(" event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-0-2-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-1-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[n("code",null,"selectedKeys"),s(" \u3001 "),n("code",null,"checkedKeys"),s(" \u3001 "),n("code",null,"expandedKeys"),s(" \u5C5E\u6027\u5747\u53EF\u53D7\u63A7\uFF0C\u4E0D\u4EC5\u652F\u6301 "),n("code",null,"v-model"),s(" \uFF0C\u8FD8\u53EF\u4EE5\u5728\u5BF9\u5E94\u7684 "),n("code",null,"select"),s(" / "),n("code",null,"check"),s(" / "),n("code",null,"expand"),s(" \u4E8B\u4EF6\u4E2D\u81EA\u884C\u63A7\u5236\u5982\u4F55\u66F4\u65B0\u5C5E\u6027\u503C\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("The "),n("code",null,"selectedKeys"),s(", "),n("code",null,"checkedKeys"),s(", and "),n("code",null,"expandedKeys"),s(" attributes can all be controlled, not only supporting "),n("code",null,"v-model"),s(", but also controlling how to update attribute values in the corresponding "),n("code",null,"select"),s(" / "),n("code",null,"check"),s(" / "),n("code",null,"expand"),s(" events.")],-1))]),key:"1"}]),1032,["title"])}var ct=m(Sn,[["render",zn]]);const Vn={setup(){return{treeData:_([{title:"Trunk 0-0",key:"0-0"},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1"}]}]),loadMore:o=>new Promise(e=>{setTimeout(()=>{o.children=[{title:"leaf",key:`${o.key}-1`,isLeaf:!0}],e()},1e3)})}}};function Mn(a,t,o,e,y,d){const l=c("a-tree");return g(),h(l,{data:e.treeData,"load-more":e.loadMore},null,8,["data","load-more"])}var jn=m(Vn,[["render",Mn]]);const Pn=v({name:"ArcoDemo",components:{VirtualDemo:jn},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function Un(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"load-more",title:a.getMessage("\u52A8\u6001\u52A0\u8F7D","Dynamic Loading")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":load-more"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("loadMore"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"loadMore"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nodeData"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            nodeData`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
              `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"leaf"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("nodeData"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
        loadMore`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,"\u52A8\u6001\u52A0\u8F7D\u8282\u70B9\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,"Load nodes dynamically.",-1))]),key:"1"}]),1032,["title"])}var lt=m(Pn,[["render",Un]]);const On={setup(){const a=_(Rn),t=_([]),o=_(!1);return{treeData:a,checkedKeys:t,checked:o,onDrop({dragNode:e,dropNode:y,dropPosition:d}){const l=a.value,i=(u,k,f)=>{u.some((x,R,W)=>x.key===k?(f(x,R,W),!0):x.children?i(x.children,k,f):!1)};i(l,e.key,(u,k,f)=>{f.splice(k,1)}),d===0?i(l,y.key,u=>{u.children=u.children||[],u.children.push(e)}):i(l,y.key,(u,k,f)=>{f.splice(d<0?k:k+1,0,e)})}}}},Rn=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Leaf 0-0-1",key:"0-0-1"},{title:"Branch 0-0-2",key:"0-0-2",disableCheckbox:!0,children:[{draggable:!1,title:"Leaf 0-0-2-1 (Drag disabled)",key:"0-0-2-1"}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1",checkable:!1,children:[{title:"Leaf 0-1-1-1",key:"0-1-1-1"},{title:"Leaf 0-1-1-2",key:"0-1-1-2"}]},{title:"Leaf 0-1-2",key:"0-1-2"}]}];function Wn(a,t,o,e,y,d){const l=c("a-checkbox"),i=c("a-tree");return g(),D($,null,[r(l,{modelValue:e.checked,"onUpdate:modelValue":t[0]||(t[0]=u=>e.checked=u),style:{"margin-bottom":"20px"}},{default:p(()=>t[1]||(t[1]=[s(" checkable ")])),_:1},8,["modelValue"]),r(i,{class:"tree-demo",draggable:"",blockNode:"",checkable:e.checked,data:e.treeData,onDrop:e.onDrop},null,8,["checkable","data","onDrop"])],64)}var Hn=m(On,[["render",Wn],["__scopeId","data-v-5e6b8bdd"]]);const Gn=v({name:"ArcoDemo",components:{VirtualDemo:Hn},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function Yn(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"draggable",title:a.getMessage("\u62D6\u62FD","Draggable")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-checkbox")]),s(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checked"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    checkable
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-checkbox")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("tree-demo"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"draggable"),s(`
    `),n("span",{class:"token attr-name"},"blockNode"),s(`
    `),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checked"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onDrop"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("defaultTreeData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" checked "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
        checkedKeys`),n("span",{class:"token punctuation"},","),s(`
        checked`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"onDrop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" dragNode"),n("span",{class:"token punctuation"},","),s(" dropNode"),n("span",{class:"token punctuation"},","),s(" dropPosition "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(" treeData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"loop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("data"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" callback")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("item"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" arr")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"==="),s(" key"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" arr"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},","),s(" key"),n("span",{class:"token punctuation"},","),s(" callback"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

          `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dragNode"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("_"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" arr")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("index"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dropPosition "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropNode"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
              item`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(" item"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
              item`),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("dragNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},","),s(" dropNode"),n("span",{class:"token punctuation"},"."),s("key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("_"),n("span",{class:"token punctuation"},","),s(" index"),n("span",{class:"token punctuation"},","),s(" arr")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
              arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),s("dropPosition "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"?"),s(" index "),n("span",{class:"token operator"},":"),s(" index "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" dragNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" defaultTreeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disableCheckbox"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"draggable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-0-2-1 (Drag disabled)'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"checkable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-1-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},`.tree-demo :deep(.tree-node-dropover) > :deep(a-tree-node-title),
.tree-demo :deep(.tree-node-dropover) > :deep(a-tree-node-title):hover,`),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"animation"),n("span",{class:"token punctuation"},":"),s(" blinkBg 0.4s 2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@keyframes"),s(" blinkBg")]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},"0%"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" transparent"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token selector"},"100%"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--color-primary-light-1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,"\u53EF\u62D6\u62FD\u7684\u6811\u8282\u70B9\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,"Draggable nodes.",-1))]),key:"1"}]),1032,["title"])}var ut=m(Gn,[["render",Yn]]);const Zn=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Leaf",key:"0-0-1"},{title:"Branch 0-0-2",key:"0-0-2",children:[{title:"Leaf",key:"0-0-2-1"}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1",children:[{title:"Leaf",key:"0-1-1-1"},{title:"Leaf",key:"0-1-1-2"}]},{title:"Leaf",key:"0-1-2"}]}],Jn=[{value:"all",label:"show all"},{value:"parent",label:"show parent"},{value:"child",label:"show child"}],Qn={setup(){const a=_([]),t=_("all");return{treeData:Zn,strategyOptions:Jn,checkedStrategy:t,checkedKeys:a}}};function Xn(a,t,o,e,y,d){const l=c("a-radio"),i=c("a-radio-group"),u=c("a-typography-text"),k=c("a-tree");return g(),D($,null,[r(i,{type:"button",modelValue:e.checkedStrategy,"onUpdate:modelValue":t[0]||(t[0]=f=>e.checkedStrategy=f),onChange:t[1]||(t[1]=f=>{e.checkedKeys=[]})},{default:p(()=>[(g(!0),D($,null,Q(e.strategyOptions,f=>(g(),h(l,{key:f==null?void 0:f.value,value:f==null?void 0:f.value},{default:p(()=>[s(C(f==null?void 0:f.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),t[3]||(t[3]=n("br",null,null,-1)),r(u,{style:{margin:"24px 0",display:"inline-block"}},{default:p(()=>{var f;return[s(" Current: "+C((f=e.checkedKeys)==null?void 0:f.join(" , ")),1)]}),_:1}),t[4]||(t[4]=n("br",null,null,-1)),r(k,{checkable:!0,"checked-keys":e.checkedKeys,"onUpdate:checkedKeys":t[2]||(t[2]=f=>e.checkedKeys=f),"checked-strategy":e.checkedStrategy,data:e.treeData},null,8,["checked-keys","checked-strategy","data"])],64)}var ns=m(Qn,[["render",Xn]]);const ss=v({name:"ArcoDemo",components:{VirtualDemo:ns},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function ts(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"checked-strategy",title:a.getMessage("\u8BBE\u7F6E\u56DE\u586B\u65B9\u5F0F","Checked Strategy")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio-group")]),s(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("button"),n("span",{class:"token punctuation"},"'")]),s(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedStrategy"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`(value) => {
      checkedKeys = []
    }`),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(`
      `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item in strategyOptions"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item?.value"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item?.value"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      {{ item?.label }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio-group")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-typography-text")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 24px 0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline-block"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    Current: {{ checkedKeys?.join(' , ') }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-typography-text")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("br")]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("checked-keys")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedKeys"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("checkedStrategy"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" strategyOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'show all'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'parent'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'show parent'"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'child'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'show child'"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" checkedKeys "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" checkedStrategy "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
        strategyOptions`),n("span",{class:"token punctuation"},","),s(`
        checkedStrategy`),n("span",{class:"token punctuation"},","),s(`
        checkedKeys`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u4E3A "),n("code",null,"Tree"),s(" \u6DFB\u52A0 "),n("code",null,"checkedStrategy"),s(" \u53EF\u4EE5\u8BBE\u7F6E\u9009\u4E2D\u65F6\u7684\u56DE\u586B\u65B9\u5F0F")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("Add "),n("code",null,"checkedStrategy"),s(" to set the return value when selected.")],-1))]),key:"1"}]),1032,["title"])}var rt=m(ss,[["render",ts]]);const as={setup(){return{showLine:_(!0),treeData:es}}},es=[{title:"Trunk 1",key:"0-0",children:[{title:"Trunk 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1",children:[{title:"leaf",key:"0-0-0-1-0"}]},{title:"leaf",key:"0-0-0-2"}]},{title:"Trunk 1-1",key:"0-0-1"},{title:"Trunk 1-2",key:"0-0-2",children:[{title:"leaf",key:"0-0-2-0"},{title:"leaf",key:"0-0-2-1"}]}]},{title:"Trunk 2",key:"0-1"},{title:"Trunk 3",key:"0-2",children:[{title:"Trunk 3-0",key:"0-2-0",children:[{title:"leaf",key:"0-2-0-0"},{title:"leaf",key:"0-2-0-1"}]}]}];function os(a,t,o,e,y,d){const l=c("a-typography-text"),i=c("a-switch"),u=c("a-tree");return g(),D($,null,[n("div",null,[r(l,null,{default:p(()=>t[1]||(t[1]=[s("showLine")])),_:1}),r(i,{modelValue:e.showLine,"onUpdate:modelValue":t[0]||(t[0]=k=>e.showLine=k),style:{"margin-left":"12px"}},null,8,["modelValue"])]),r(u,{"default-selected-keys":["0-0-1"],data:e.treeData,"show-line":e.showLine},null,8,["data","show-line"])],64)}var ps=m(as,[["render",os]]);const cs=v({name:"ArcoDemo",components:{VirtualDemo:ps},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function ls(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"show-line",title:a.getMessage("\u663E\u793A\u8FDE\u63A5\u7EBF","Show Line")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-typography-text")]),n("span",{class:"token punctuation"},">")]),s("showLine"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-typography-text")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-switch")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showLine"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),s(" 12px")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},":default-selected-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("['0-0-1']"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":show-line"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("showLine"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" showLine "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        showLine`),n("span",{class:"token punctuation"},","),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 1-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-2'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 1-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 3-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-0-0'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'leaf'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-2-0-1'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u4E3A "),n("code",null,"Tree"),s(" \u6DFB\u52A0 "),n("code",null,"showLine"),s(" \u5C5E\u6027\u5373\u53EF\u4F7F\u6811\u5177\u6709\u8FDE\u63A5\u7EBF")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("Add the "),n("code",null,"showLine"),s(" property to "),n("code",null,"Tree"),s(" to display the connecting line.")],-1))]),key:"1"}]),1032,["title"])}var kt=m(cs,[["render",ls]]);const us={setup(){return{size:_("medium"),treeData:rs}}},rs=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Branch 0-0-0",key:"0-0-0",children:[{title:"Leaf",key:"0-0-0-0"},{title:"Leaf",key:"0-0-0-1"}]},{title:"Branch 0-0-1",key:"0-0-1",children:[{title:"Leaf",key:"0-0-1-0"}]}]}],ks={style:{"margin-bottom":"20px"}};function is(a,t,o,e,y,d){const l=c("a-radio"),i=c("a-radio-group"),u=c("a-tree");return g(),D($,null,[n("div",ks,[r(i,{modelValue:e.size,"onUpdate:modelValue":t[0]||(t[0]=k=>e.size=k),type:"button"},{default:p(()=>[r(l,{value:"mini"},{default:p(()=>t[1]||(t[1]=[s("mini")])),_:1}),r(l,{value:"small"},{default:p(()=>t[2]||(t[2]=[s("small")])),_:1}),r(l,{value:"medium"},{default:p(()=>t[3]||(t[3]=[s("medium")])),_:1}),r(l,{value:"large"},{default:p(()=>t[4]||(t[4]=[s("large")])),_:1})]),_:1},8,["modelValue"])]),r(u,{style:{"margin-right":"20px"},blockNode:!0,checkable:!0,size:e.size,data:e.treeData},null,8,["size","data"])],64)}var ys=m(us,[["render",is]]);const ds=v({name:"ArcoDemo",components:{VirtualDemo:ys},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function gs(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"size",title:a.getMessage("\u4E0D\u540C\u5C3A\u5BF8","Size")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio-group")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("button"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("mini"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("mini"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("medium"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("medium"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-radio")]),s(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-radio-group")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),s(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
    `),n("span",{class:"token attr-name"},":blockNode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("size"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" size "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'medium'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        size`),n("span",{class:"token punctuation"},","),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,"\u4E0D\u540C\u5C3A\u5BF8\u7684\u6811\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,"Trees of different sizes.",-1))]),key:"1"}]),1032,["title"])}var it=m(ds,[["render",gs]]);const ms={components:{IconStar:T},setup(){return{treeData:fs}}},fs=[{title:"Trunk",key:"node1",children:[{title:"Leaf",key:"node2"}]},{title:"Trunk",key:"node3",children:[{title:"Leaf",key:"node4",icon:()=>L(E)},{title:"Leaf",key:"node5",icon:()=>L(E)}]}];function hs(a,t,o,e,y,d){const l=c("IconStar"),i=c("a-tree");return g(),h(i,{data:e.treeData},{icon:p(()=>[r(l)]),_:1},8,["data"])}var _s=m(ms,[["render",hs]]);const vs=v({name:"ArcoDemo",components:{VirtualDemo:_s},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function ws(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"node-icon",title:a.getMessage("\u5B9A\u5236\u8282\u70B9\u56FE\u6807","Node Icon")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconStar")]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" h "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" IconStar"),n("span",{class:"token punctuation"},","),s(" IconDriveFile "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      IconStar
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s("IconDriveFile"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s("IconDriveFile"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u8282\u70B9\u56FE\u6807\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"tree"),s(" \u7684 "),n("code",null,"icon"),s(" \u63D2\u69FD\u5168\u5C40\u6307\u5B9A\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8282\u70B9\u7684 "),n("code",null,"icon"),s(" \u5C5E\u6027\u5355\u72EC\u6307\u5B9A\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("The icon of a node can be specified globally via the "),n("code",null,"icon"),s(" slot of the "),n("code",null,"tree"),s(", or individually via the "),n("code",null,"icon"),s(" property of the node.")],-1))]),key:"1"}]),1032,["title"])}var yt=m(vs,[["render",ws]]);const bs={components:{IconPlus:X},setup(){function a(o){const e=o.children||[];e.push({title:"new tree node",key:o.key+"-"+(e.length+1)}),o.children=e,t.value=[...t.value]}const t=_([{title:"Trunk",key:"0-0",children:[{title:"Leaf",key:"0-0-1"},{title:"Branch",key:"0-0-2",children:[{title:"Leaf",key:"0-0-2-1"}]}]},{title:"Trunk",key:"0-1",children:[{title:"Branch",key:"0-1-1",children:[{title:"Leaf",key:"0-1-1-1"},{title:"Leaf",key:"0-1-1-2"}]},{title:"Leaf",key:"0-1-2"}]}]);return{onIconClick:a,treeData:t}}},Ds={style:{width:"500px",padding:"2px",overflow:"auto"}};function $s(a,t,o,e,y,d){const l=c("IconPlus"),i=c("a-tree");return g(),D("div",Ds,[r(i,{blockNode:!0,checkable:!0,data:e.treeData},{extra:p(u=>[r(l,{style:{position:"absolute",right:"8px","font-size":"12px",top:"10px",color:"#3370ff"},onClick:()=>e.onIconClick(u)},null,8,["onClick"])]),_:1},8,["data"])])}var Cs=m(bs,[["render",$s]]);const xs=v({name:"ArcoDemo",components:{VirtualDemo:Cs},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function Ls(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"render-extra",title:a.getMessage("\u5B9A\u5236\u989D\u5916\u8282\u70B9","Extra Node")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 500px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 2px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" auto")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
      `),n("span",{class:"token attr-name"},":blockNode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#extra"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("nodeData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconPlus")]),s(`
          `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" absolute"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 12px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),s(" 10px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" #3370ff"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(`
          `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("() => onIconClick(nodeData)"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
 `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s("ref"),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
 `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" IconPlus "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),s(`

 `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
     IconPlus`),n("span",{class:"token punctuation"},","),s(`
   `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
   `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
     `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"onIconClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nodeData"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" children "),n("span",{class:"token operator"},"="),s(" nodeData"),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
      children`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'new tree node'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(" nodeData"),n("span",{class:"token punctuation"},"."),s("key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'-'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),s("children"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      nodeData`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(` children

      treeData`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),s("treeData"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-1'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-2'"),n("span",{class:"token punctuation"},","),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      onIconClick`),n("span",{class:"token punctuation"},","),s(`
      treeData`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
   `),n("span",{class:"token punctuation"},"}"),s(`
 `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[n("code",null,"Tree"),s(" \u63D0\u4F9B\u4E86\u540D\u4E3A "),n("code",null,"extra"),s(" \u7684 "),n("code",null,"Slot"),s(", \u53EF\u4EE5\u5728\u8282\u70B9\u4E0A\u5B9A\u5236\u989D\u5916\u7684\u5185\u5BB9\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[n("code",null,"Tree"),s(" provides "),n("code",null,"Slot"),s(" named "),n("code",null,"extra"),s(", which can customize extra content on the node.")],-1))]),key:"1"}]),1032,["title"])}var dt=m(xs,[["render",Ls]]);const Bs={components:{IconDown:an,IconStar:T},setup(){return{treeData:Es}}},Es=[{title:"Trunk",key:"node1",children:[{title:"Leaf",key:"node2"}]},{title:"Trunk",key:"node3",children:[{title:"Leaf",key:"node4",switcherIcon:()=>L(E)},{title:"Leaf",key:"node5",switcherIcon:()=>L(E)}]}];function Fs(a,t,o,e,y,d){const l=c("IconDown"),i=c("IconStar"),u=c("a-tree");return g(),h(u,{data:e.treeData,"show-line":""},{"switcher-icon":p((k,{isLeaf:f})=>[f?S("v-if",!0):(g(),h(l,{key:0})),f?(g(),h(i,{key:1})):S("v-if",!0)]),_:1},8,["data"])}var qs=m(Bs,[["render",Fs]]);const Ks=v({name:"ArcoDemo",components:{VirtualDemo:qs},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function Ts(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"icons",title:a.getMessage("\u5B9A\u5236\u7EC4\u4EF6\u56FE\u6807","Component Icons")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"show-line"),n("span",{class:"token punctuation"},">")]),s(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#switcher-icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("node, { isLeaf }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconDown")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("!isLeaf"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("IconStar")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("isLeaf"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" h "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" IconDriveFile"),n("span",{class:"token punctuation"},","),s(" IconDown"),n("span",{class:"token punctuation"},","),s(" IconStar "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"components"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      IconDown`),n("span",{class:"token punctuation"},","),s(`
      IconStar
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"switcherIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s("IconDriveFile"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"switcherIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s("IconDriveFile"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u8282\u70B9\u7684\u56FE\u6807 "),n("code",null,"loadingIcon"),s(", "),n("code",null,"switcherIcon"),s("\uFF0C\u540C\u65F6\u652F\u6301\u5728 "),n("code",null,"tree"),s(" \u548C "),n("code",null,"node"),s(" \u4E24\u4E2A\u7EAC\u5EA6\u4E0A\u5B9A\u5236\uFF0C\u5176\u4E2D "),n("code",null,"node"),s(" \u7684\u4F18\u5148\u7EA7\u8F83\u9AD8\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("The node icons "),n("code",null,"loadingIcon"),s(", "),n("code",null,"switcherIcon"),s(", support customization at the two latitudes of "),n("code",null,"tree"),s(" and "),n("code",null,"node"),s(" at the same time, and "),n("code",null,"node"),s(" has a higher priority.")],-1))]),key:"1"}]),1032,["title"])}var gt=m(Ks,[["render",Ts]]);const As={setup(){const a=_(),t=O();return{treeRef:a,treeData:t,scrollIntoView(){a.value&&a.value.scrollIntoView({key:"0-0-2-2"})}}}};function O(a="0",t=2){const o=[];for(let e=0;e<10;e+=1){const y=`${a}-${e}`,d={title:y,key:y};t>0&&(d.children=O(y,t-1)),o.push(d)}return o}function Is(a,t,o,e,y,d){const l=c("a-button"),i=c("a-tree");return g(),D($,null,[r(l,{type:"primary",style:{marginBottom:"20px"},onClick:e.scrollIntoView},{default:p(()=>t[0]||(t[0]=[s(" Scroll to 0-0-2-2, i.e. the 26th. ")])),_:1},8,["onClick"]),r(i,{ref:"treeRef",blockNode:"",checkable:"",data:e.treeData,virtualListProps:{height:200}},null,8,["data"])],64)}var Ns=m(As,[["render",Is]]);const Ss=v({name:"ArcoDemo",components:{VirtualDemo:Ns},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function zs(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"virtual",title:a.getMessage("\u865A\u62DF\u5217\u8868","Virtual List")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[1]||(t[1]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-button")]),s(`
    `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("{ marginBottom: '20px' }"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scrollIntoView"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    Scroll to 0-0-2-2, i.e. the 26th.
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeRef"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"blockNode"),s(`
    `),n("span",{class:"token attr-name"},"checkable"),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":virtualListProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`{
      height: 200,
    }`),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" treeRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeRef`),n("span",{class:"token punctuation"},","),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token function"},"scrollIntoView"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          treeRef`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"&&"),s(" treeRef"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"scrollIntoView"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-2'"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),s(" level "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" list "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" treeNode "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(" key"),n("span",{class:"token punctuation"},","),s(`
        key`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("level "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeNode`),n("span",{class:"token punctuation"},"."),s("children "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},","),s(" level "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("treeNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" list"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u901A\u8FC7\u6307\u5B9A "),n("code",null,"virtualListProps"),s(" \u6765\u5F00\u542F\u865A\u62DF\u5217\u8868\uFF0C\u5728\u5927\u91CF\u6570\u636E\u65F6\u83B7\u5F97\u9AD8\u6027\u80FD\u8868\u73B0\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[]),key:"1"}]),1032,["title"])}var mt=m(Ss,[["render",zs]]);const z=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Branch 0-0-1",key:"0-0-1",children:[{title:"Leaf 0-0-1-1",key:"0-0-1-1"},{title:"Leaf 0-0-1-2",key:"0-0-1-2"}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1",children:[{title:"Leaf 0-1-1-0",key:"0-1-1-0"}]},{title:"Branch 0-1-2",key:"0-1-2",children:[{title:"Leaf 0-1-2-0",key:"0-1-2-0"}]}]}],Vs={setup(){const a=_(""),t=B(()=>a.value?o(a.value):z);function o(y){const d=l=>{const i=[];return l.forEach(u=>{if(u.title.toLowerCase().indexOf(y.toLowerCase())>-1)i.push(F({},u));else if(u.children){const k=d(u.children);k.length&&i.push(N(F({},u),{children:k}))}}),i};return d(z)}function e(y){return a.value?y.toLowerCase().indexOf(a.value.toLowerCase()):-1}return{searchKey:a,treeData:t,getMatchIndex:e}}},Ms={key:1},js={style:{color:"var(--color-primary-light-4)"}};function Ps(a,t,o,e,y,d){const l=c("a-input-search"),i=c("a-tree");return g(),D("div",null,[r(l,{style:{"margin-bottom":"8px","max-width":"240px"},modelValue:e.searchKey,"onUpdate:modelValue":t[0]||(t[0]=u=>e.searchKey=u)},null,8,["modelValue"]),r(i,{data:e.treeData},{title:p(u=>{var k,f,x;return[(a.index=e.getMatchIndex(u==null?void 0:u.title),a.index<0?(g(),D($,{key:0},[s(C(u==null?void 0:u.title),1)],64)):(g(),D("span",Ms,[s(C((k=u==null?void 0:u.title)==null?void 0:k.substr(0,a.index))+" ",1),n("span",js,C((f=u==null?void 0:u.title)==null?void 0:f.substr(a.index,e.searchKey.length)),1),s(C((x=u==null?void 0:u.title)==null?void 0:x.substr(a.index+e.searchKey.length)),1)])))]}),_:1},8,["data"])])}var Us=m(Vs,[["render",Ps]]);const Os=v({name:"ArcoDemo",components:{VirtualDemo:Us},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function Rs(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"search",title:a.getMessage("\u641C\u7D22\u6811","Searchable")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-input-search")]),s(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 8px"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 240px")]),n("span",{class:"token punctuation"},'"')])]),s(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("searchKey"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token punctuation"},"/>")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("nodeData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index = getMatchIndex(nodeData?.title), index < 0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ nodeData?.title }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),s(`
          {{ nodeData?.title?.substr(0, index) }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),s("--color-primary-light-4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
            {{ nodeData?.title?.substr(index, searchKey.length) }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`{{ nodeData?.title?.substr(index + searchKey.length) }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a-tree")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" ref"),n("span",{class:"token punctuation"},","),s(" computed "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" originTreeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-0-1-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-1'"),s(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-0-1-2'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-1-2'"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-1-1-0'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-1-2-0'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-2-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" searchKey "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("searchKey"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" originTreeData"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"searchData"),n("span",{class:"token punctuation"},"("),s("searchKey"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

      `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"searchData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"keyword"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"loop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token keyword"},"const"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
          data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("title"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("keyword"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
              result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"..."),s("item"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token keyword"},"const"),s(" filterData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
              `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("filterData"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
                result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token operator"},"..."),s("item"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),s(` filterData
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
              `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`

        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),s("originTreeData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getMatchIndex"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"title"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("searchKey"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"return"),s(" title"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("searchKey"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`

      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        searchKey`),n("span",{class:"token punctuation"},","),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
        getMatchIndex`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,"\u5C55\u793A\u5982\u4F55\u5B9E\u73B0\u641C\u7D22\u6811\u7684\u6548\u679C\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,"Show how to achieve the search tree effect.",-1))]),key:"1"}]),1032,["title"])}var ft=m(Os,[["render",Rs]]);const Ws={data(){return{treeData:Hs}}},Hs=[{label:"Trunk 0-0",value:"0-0",items:[{label:"Branch 0-0-2",value:"0-0-2",selectable:!1,customIcon:()=>L(E),items:[{label:"Leaf",value:"0-0-2-1",items:[{label:"Leaf 0-0-2",value:"0-0-2-1-0",items:[{label:"Leaf",customIcon:()=>L(T),value:"0-0-2-1-0-0"}]}]}]}]},{label:"Trunk 0-1",value:"0-1",items:[{label:"Branch 0-1-1",value:"0-1-1",items:[{label:"Leaf",value:"0-1-1-0"}]}]}];function Gs(a,t,o,e,y,d){const l=c("a-tree");return g(),h(l,{"default-selected-keys":["0-0-1"],fieldNames:{key:"value",title:"label",children:"items",icon:"customIcon"},data:y.treeData},null,8,["data"])}var Ys=m(Ws,[["render",Gs]]);const Zs=v({name:"ArcoDemo",components:{VirtualDemo:Ys},setup(){const{locale:a}=w();return{locale:a,getMessage:(o,e)=>a.value==="zh-CN"?o:e}}});function Js(a,t,o,e,y,d){const l=c("virtual-demo"),i=c("cell-demo"),u=c("cell-code"),k=c("code-block");return g(),h(k,{id:"field-names",title:a.getMessage("\u81EA\u5B9A\u4E49 data \u7684\u5B57\u6BB5\u540D\u79F0","Customize data")},b({default:p(()=>[r(i,null,{default:p(()=>[r(l)]),_:1}),r(u,null,{default:p(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a-tree")]),s(`
    `),n("span",{class:"token attr-name"},":default-selected-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("['0-0-1']"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":fieldNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`{
      key: 'value',
      title: 'label',
      children: 'items',
      icon: 'customIcon'
    }`),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("treeData"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" h "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" IconStar"),n("span",{class:"token punctuation"},","),s(" IconDriveFile "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
        treeData`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"const"),s(" treeData "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"selectable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token function-variable function"},"customIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s("IconDriveFile"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf 0-0-2'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1-0'"),n("span",{class:"token punctuation"},","),s(`
                  `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                    `),n("span",{class:"token punctuation"},"{"),s(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token function-variable function"},"customIcon"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),s("IconStar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-0-2-1-0-0'"),s(`
                    `),n("span",{class:"token punctuation"},"}"),s(`
                  `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
            `),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),s(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'0-1-1-0'"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])],-1)])),_:1})]),_:2},[a.locale==="zh-CN"?{name:"description",fn:p(()=>[t[0]||(t[0]=n("p",null,[s("\u901A\u8FC7 "),n("code",null,"fieldNames"),s(" \u5B57\u6BB5\u53EF\u4EE5\u81EA\u5B9A\u4E49 data \u7684\u5B57\u6BB5\u540D\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[t[1]||(t[1]=n("p",null,[s("You can customize "),n("code",null,"data"),s(" by "),n("code",null,"fieldNames"),s(".")],-1))]),key:"1"}]),1032,["title"])}var ht=m(Zs,[["render",Js]]);export{at as D,et as a,ot as b,pt as c,ct as d,lt as e,ut as f,rt as g,kt as h,it as i,yt as j,dt as k,gt as l,mt as m,ft as n,ht as o};
