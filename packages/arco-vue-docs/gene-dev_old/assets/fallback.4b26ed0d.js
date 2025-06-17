var M=Object.defineProperty,N=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var F=(s,t,c)=>t in s?M(s,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[t]=c,L=(s,t)=>{for(var c in t||(t={}))S.call(t,c)&&F(s,c,t[c]);if(E)for(var c of E(t))O.call(t,c)&&F(s,c,t[c]);return s},B=(s,t)=>N(s,P(t));import{_ as m,ez as D,ee as b,r as p,o as g,c as f,d as v,u as h,f as _,w as o,e as n,a as l,b as a,g as w,l as C,e6 as $,e4 as I,i as j,e5 as V,e7 as U}from"./index.9c61ea88.js";const H={setup(){return{treeData:Y}}},Y=[{key:"node1",icon:()=>D(b),title:"Trunk",disabled:!0,children:[{key:"node2",title:"Leaf"}]},{key:"node3",title:"Trunk2",icon:()=>D(b),children:[{key:"node4",title:"Leaf"},{key:"node5",title:"Leaf"}]}];function K(s,t,c,e,d,y){const u=p("a-tree-select");return g(),f(u,{data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data"])}var R=m(H,[["render",K]]);const W=v({name:"ArcoDemo",components:{VirtualDemo:R},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function G(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"basic",title:s.getMessage("\u57FA\u672C\u7528\u6CD5","Basic")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" h "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" IconCalendar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,"\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002",-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,"Basic usage example.",-1))]),key:"1"}]),1032,["title"])}var Oa=m(W,[["render",G]]);const J={setup(){function s(t){console.log(t)}return{onChange:s,treeData:Q}}},Q=[{key:"node1",icon:()=>D(b),title:"Trunk",disabled:!0,children:[{key:"node2",title:"Leaf"}]},{key:"node3",title:"Trunk2",icon:()=>D(b),children:[{key:"node4",title:"Leaf"},{key:"node5",title:"Leaf"}]}];function X(s,t,c,e,d,y){const u=p("a-tree-select");return g(),f(u,{data:e.treeData,"label-in-value":!0,"default-value":{value:"node2",label:"Leaf"},placeholder:"Please select ...",style:{width:"300px"},onChange:e.onChange},null,8,["data","onChange"])}var Z=m(J,[["render",X]]);const nn=v({name:"ArcoDemo",components:{VirtualDemo:Z},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function an(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"label-in-value",title:s.getMessage("\u8BBE\u7F6E value \u683C\u5F0F","Value Format")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":label-in-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ value: 'node2', label: 'Leaf' }"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" h "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" IconCalendar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        onChange`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[n("code",null,"labelInValue"),a(" \u4E3A "),n("code",null,"true"),a(" \u65F6\uFF0C"),n("code",null,"value"),a(" \u683C\u5F0F\u4E3A\uFF1A "),n("code",null,"{ label: string, value: string }"),a("\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("When "),n("code",null,"labelInValue"),a(" is "),n("code",null,"true"),a(", the format of "),n("code",null,"value"),a(" is: "),n("code",null,"{ label: string, value: string }"),a(".")],-1))]),key:"1"}]),1032,["title"])}var Ia=m(nn,[["render",an]]);const tn={setup(){return{selected:w("node2"),treeData:sn}}},sn=[{key:"node1",icon:()=>D(b),title:"Trunk",disabled:!0,children:[{key:"node2",title:"Leaf"}]},{key:"node3",title:"Trunk2",icon:()=>D(b),children:[{key:"node4",title:"Leaf"},{key:"node5",title:"Leaf"}]}];function en(s,t,c,e,d,y){const u=p("a-tree-select");return g(),f(u,{data:e.treeData,modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=r=>e.selected=r),placeholder:"Please select ...",style:{width:"300px"}},null,8,["data","modelValue"])}var on=m(tn,[["render",en]]);const pn=v({name:"ArcoDemo",components:{VirtualDemo:on},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function cn(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"control",title:s.getMessage("\u53CC\u5411\u7ED1\u5B9A","Two-way binding")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selected"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" h"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" IconCalendar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" selected "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        selected`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,"\u9009\u4E2D\u503C\u652F\u6301\u53CC\u5411\u7ED1\u5B9A\u3002",-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,"The selected value supports two-way binding.",-1))]),key:"1"}]),1032,["title"])}var ja=m(pn,[["render",cn]]);const ln={setup(){return{treeData:w(un),loadMore:c=>{const{title:e,key:d}=c,y=[{title:`${e}-0`,value:`${e}-0`,key:`${d}-0`},{title:`${e}-1`,value:`${e}-1`,key:`${d}-1`}];return new Promise(u=>{setTimeout(()=>{c.children=y,u()},1e3)})}}}},un=[{key:"node1",title:"node1",disabled:!0,children:[{key:"node2",title:"node2"}]},{key:"node3",title:"node3",children:[{key:"node4",title:"node4",isLeaf:!0},{key:"node5",title:"node5",isLeaf:!0}]}];function rn(s,t,c,e,d,y){const u=p("a-tree-select");return g(),f(u,{data:e.treeData,"load-more":e.loadMore,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data","load-more"])}var kn=m(ln,[["render",rn]]);const dn=v({name:"ArcoDemo",components:{VirtualDemo:kn},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function yn(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"load-more",title:s.getMessage("\u52A8\u6001\u52A0\u8F7D","Dynamic Loading")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":load-more"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loadMore"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a("defaultTreeData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"loadMore"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nodeData"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" title"),n("span",{class:"token punctuation"},","),a(" key "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(" nodeData"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" children "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-0"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-0"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-0"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("title"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-1"),n("span",{class:"token template-punctuation string"},"`")]),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
            nodeData`),n("span",{class:"token punctuation"},"."),a("children "),n("span",{class:"token operator"},"="),a(" children"),n("span",{class:"token punctuation"},";"),a(`
            `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
        loadMore`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" defaultTreeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"loadMore"),a(" \u8FDB\u884C\u52A8\u6001\u52A0\u8F7D\u3002\u6B64\u65F6\u53EF\u8BBE\u7F6E "),n("code",null,"isLeaf"),a(" \u6765\u6807\u793A\u53F6\u5B50\u8282\u70B9\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("Load nodes dynamically via "),n("code",null,"loadMore"),a(". At this time, "),n("code",null,"isLeaf"),a(" can be set to indicate leaf nodes.")],-1))]),key:"1"}]),1032,["title"])}var Ua=m(dn,[["render",yn]]);const gn={setup(){function s(t,c){return c.title.toLowerCase().indexOf(t.toLowerCase())>-1}return{filterTreeNode:s,treeData:mn}}},mn=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Branch 0-0-1",key:"0-0-1",children:[{title:"Leaf 0-0-1-1",key:"0-0-1-1"},{title:"Leaf 0-0-1-2",key:"0-0-1-2"}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1",children:[{title:"Leaf 0-1-1-0",key:"0-1-1-0"}]},{title:"Branch 0-1-2",key:"0-1-2",children:[{title:"Leaf 0-1-2-0",key:"0-1-2-0"}]}]}];function fn(s,t,c,e,d,y){const u=p("a-tree-select"),r=p("a-space");return g(),f(r,null,{default:o(()=>[l(u,{"allow-search":!0,"allow-clear":!0,data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data"]),l(u,{"allow-search":!0,"allow-clear":!0,data:e.treeData,"filter-tree-node":e.filterTreeNode,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data","filter-tree-node"])]),_:1})}var vn=m(gn,[["render",fn]]);const hn=v({name:"ArcoDemo",components:{VirtualDemo:vn},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function _n(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"search",title:s.getMessage("\u641C\u7D22","Search")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":filter-tree-node"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filterTreeNode"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"filterTreeNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("searchValue"),n("span",{class:"token punctuation"},","),a(" nodeData")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" nodeData"),n("span",{class:"token punctuation"},"."),a("title"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("searchValue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        filterTreeNode`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1-1'"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1-2'"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-0'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1-0'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-2-0'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-2-0'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u8BBE\u7F6E "),n("code",null,':allow-search="true"'),a(" \u542F\u7528\u641C\u7D22\u529F\u80FD\u3002\u52A8\u6001\u52A0\u8F7D\u65F6\u5019\u53EA\u80FD\u5728\u5DF2\u52A0\u8F7D\u6570\u636E\u4E2D\u8FDB\u884C\u641C\u7D22\u3002\u9ED8\u8BA4\u7684\u5173\u952E\u5B57\u641C\u7D22\u662F\u4ECE"),n("code",null,"value"),a("\u5B57\u6BB5\u5339\u914D\u3002\u4E5F\u53EF\u4EE5\u4F20\u5165 "),n("code",null,"filterTreeNode"),a("\u81EA\u5B9A\u4E49\u8FC7\u6EE4\u65B9\u5F0F\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("Set "),n("code",null,':allow-search="true"'),a(" to enable the search function. You can only search in the loaded data during dynamic loading. The default keyword search is to match from the "),n("code",null,"value"),a(" field. You can also pass in "),n("code",null,"filterTreeNode"),a(" to customize the filtering method.")],-1))]),key:"1"}]),1032,["title"])}var Ha=m(hn,[["render",_n]]);const wn={setup(){const s=w(x),t=w(!1);function c(d){const y=u=>{const r=[];return u.forEach(i=>{if(i.title.toLowerCase().indexOf(d.toLowerCase())>-1)r.push(L({},i));else if(i.children){const k=y(i.children);k.length&&r.push(B(L({},i),{children:k}))}}),r};return y(x)}return{treeData:s,loading:t,onSearch:d=>{t.value=!0,setTimeout(()=>{t.value=!1,s.value=c(d)},200)}}}},x=[{title:"Trunk 0-0",key:"0-0",children:[{title:"Branch 0-0-1",key:"0-0-1",children:[{title:"Leaf 0-0-1-1",key:"0-0-1-1"},{title:"Leaf 0-0-1-2",key:"0-0-1-2"}]}]},{title:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",key:"0-1-1",children:[{title:"Leaf 0-1-1-0",key:"0-1-1-0"}]},{title:"Branch 0-1-2",key:"0-1-2",children:[{title:"Leaf 0-1-2-0",key:"0-1-2-0"}]}]}];function Dn(s,t,c,e,d,y){const u=p("a-tree-select");return g(),f(u,{"allow-search":!0,"allow-clear":!0,"disable-filter":!0,data:e.treeData,loading:e.loading,style:{width:"300px"},placeholder:"Please select ...",onSearch:e.onSearch},null,8,["data","loading","onSearch"])}var bn=m(wn,[["render",Dn]]);const Cn=v({name:"ArcoDemo",components:{VirtualDemo:bn},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function $n(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"search-remote",title:s.getMessage("\u8FDC\u7A0B\u641C\u7D22","Remote search")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":disable-filter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loading"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSearch"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a("defaultTreeData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" loading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"searchData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"keyword"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"loop"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token keyword"},"const"),a(" result "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
          data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},"."),a("title"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("keyword"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
              result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token operator"},"..."),a("item"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},"."),a("children"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token keyword"},"const"),a(" filterData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},"."),a("children"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
              `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("filterData"),n("span",{class:"token punctuation"},"."),a("length"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
                result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
                  `),n("span",{class:"token operator"},"..."),a("item"),n("span",{class:"token punctuation"},","),a(`
                  `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(` filterData
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
          `),n("span",{class:"token keyword"},"return"),a(" result"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`

        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),a("defaultTreeData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSearch"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"searchKey"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        loading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          loading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
          treeData`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"searchData"),n("span",{class:"token punctuation"},"("),a("searchKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
        loading`),n("span",{class:"token punctuation"},","),a(`
        onSearch`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" defaultTreeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1-1'"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1-2'"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-0'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1-0'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-2-0'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-2-0'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u76D1\u542C "),n("code",null,"search"),a(" \u4E8B\u4EF6\uFF0C\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u83B7\u53D6\u6570\u636E\u5E76\u66F4\u65B0 "),n("code",null,"treeData"),a("\u3002 \u81EA\u5B9A\u4E49\u641C\u7D22\u903B\u8F91\u65F6\uFF0C\u5EFA\u8BAE\u5173\u95ED\u5185\u90E8\u8FC7\u6EE4\u903B\u8F91\uFF08"),n("code",null,':disable-filter="true"'),a("\uFF09\uFF0C\u4EE5\u514D\u5F71\u54CD\u81EA\u5B9A\u4E49\u7ED3\u679C\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("Listen to the "),n("code",null,"search"),a(" event, get the data in the event processing function and update the "),n("code",null,"treeData"),a(". When customizing the search logic, it is recommended to turn off the internal filtering logic ("),n("code",null,':disable-filter="true"'),a(") to prevent the customized results be affected.")],-1))]),key:"1"}]),1032,["title"])}var Ya=m(Cn,[["render",$n]]);const qn={setup(){return{size:w("medium"),treeData:Ln}}},Ln=[{key:"node1",title:"node1",disabled:!0,children:[{key:"node2",title:"node2"}]},{key:"node3",title:"node3",children:[{key:"node4",title:"node4",isLeaf:!0},{key:"node5",title:"node5",isLeaf:!0}]}],En={style:{"margin-bottom":"20px"}};function Fn(s,t,c,e,d,y){const u=p("a-radio"),r=p("a-radio-group"),i=p("a-tree-select");return g(),C($,null,[n("div",En,[l(r,{modelValue:e.size,"onUpdate:modelValue":t[0]||(t[0]=k=>e.size=k),type:"button"},{default:o(()=>[l(u,{value:"mini"},{default:o(()=>t[1]||(t[1]=[a("mini")])),_:1}),l(u,{value:"small"},{default:o(()=>t[2]||(t[2]=[a("small")])),_:1}),l(u,{value:"medium"},{default:o(()=>t[3]||(t[3]=[a("medium")])),_:1}),l(u,{value:"large"},{default:o(()=>t[4]||(t[4]=[a("large")])),_:1})]),_:1},8,["modelValue"])]),l(i,{defaultValue:"node1",size:e.size,data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["size","data"])],64)}var Bn=m(qn,[["render",Fn]]);const xn=v({name:"ArcoDemo",components:{VirtualDemo:Bn},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function Vn(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"size",title:s.getMessage("\u4E0D\u540C\u5C3A\u5BF8","Size")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("button"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mini"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("mini"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("small"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("medium"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("medium"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"defaultValue"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("node1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" size "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'medium'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        size`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u8BBE\u7F6E "),n("code",null,"size"),a(" \u53EF\u4EE5\u4F7F\u7528\u56DB\u79CD\u5C3A\u5BF8\uFF08small, default, large, huge\uFF09\u7684\u9009\u62E9\u5668\u3002\u9AD8\u5EA6\u5206\u522B\u5BF9\u5E94 24px\u300128px\u300132px\u300136px\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("Four sizes (small, default, large, huge) can be selected through "),n("code",null,"size"),a(". The height corresponds to 24px, 28px, 32px, 36px.")],-1))]),key:"1"}]),1032,["title"])}var Ka=m(xn,[["render",Vn]]);const Tn={setup(){const s=I({empty:!1,showHeaderOnEmpty:!1,showFooterOnEmpty:!1}),t=[{key:"node1",icon:()=>D(b),title:"Trunk",children:[{key:"node2",title:"Leaf"}]},{key:"node3",title:"Trunk2",icon:()=>D(b),children:[{key:"node4",title:"Leaf"},{key:"node5",title:"Leaf"}]},{key:"node6",title:"Trunk3",icon:()=>D(b),children:[{key:"node7",title:"Leaf"},{key:"node8",title:"Leaf"}]}],c=j(()=>s.empty?[]:t);return{form:s,computedTreeData:c}}},An={style:{padding:"6px 12px"}},zn={style:{padding:"6px 0","text-align":"center"}};function Mn(s,t,c,e,d,y){const u=p("a-switch"),r=p("a-form-item"),i=p("a-form"),k=p("a-checkbox"),A=p("a-button"),z=p("a-tree-select");return g(),C($,null,[l(i,{layout:"inline",model:e.form},{default:o(()=>[l(r,{label:"empty"},{default:o(()=>[l(u,{modelValue:e.form.empty,"onUpdate:modelValue":t[0]||(t[0]=q=>e.form.empty=q)},null,8,["modelValue"])]),_:1}),l(r,{label:"showHeaderOnEmpty"},{default:o(()=>[l(u,{modelValue:e.form.showHeaderOnEmpty,"onUpdate:modelValue":t[1]||(t[1]=q=>e.form.showHeaderOnEmpty=q)},null,8,["modelValue"])]),_:1}),l(r,{label:"showFooterOnEmpty"},{default:o(()=>[l(u,{modelValue:e.form.showFooterOnEmpty,"onUpdate:modelValue":t[2]||(t[2]=q=>e.form.showFooterOnEmpty=q)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),l(z,{style:{width:"300px"},placeholder:"Please select ...",data:e.computedTreeData,"show-header-on-empty":e.form.showHeaderOnEmpty,"show-footer-on-empty":e.form.showFooterOnEmpty},{header:o(()=>[n("div",An,[l(k,{value:"1"},{default:o(()=>t[3]||(t[3]=[a("All")])),_:1})])]),footer:o(()=>[n("div",zn,[l(A,null,{default:o(()=>t[4]||(t[4]=[a("Click Me")])),_:1})])]),_:1},8,["data","show-header-on-empty","show-footer-on-empty"])],64)}var Nn=m(Tn,[["render",Mn]]);const Pn=v({name:"ArcoDemo",components:{VirtualDemo:Nn},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function Sn(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"dropdown-slots",title:s.getMessage("\u4E0B\u62C9\u6846\u7684\u9875\u5934\u548C\u9875\u811A","Dropdown Header and Footer")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form")]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inline"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("empty"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form.empty"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showHeaderOnEmpty"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form.showHeaderOnEmpty"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-form-item")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showFooterOnEmpty"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form.showFooterOnEmpty"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-form")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("computedTreeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-header-on-empty"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form.showHeaderOnEmpty"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-footer-on-empty"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form.showFooterOnEmpty"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 6px 12px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-checkbox")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("All"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-checkbox")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#footer"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 6px 0"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a("Click Me"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" h"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" computed "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" IconCalendar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" form "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"empty"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"showHeaderOnEmpty"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"showFooterOnEmpty"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node6'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk3'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node7'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node8'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"const"),a(" computedTreeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" form"),n("span",{class:"token punctuation"},"."),a("empty "),n("span",{class:"token operator"},"?"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},":"),a(" treeData"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        form`),n("span",{class:"token punctuation"},","),a(`
        computedTreeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,"\u81EA\u5B9A\u4E49\u6811\u9009\u62E9\u4E0B\u62C9\u6846\u7684\u9875\u5934\u548C\u9875\u811A",-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,"Custom Tree Select the header and footer of the drop-down box.",-1))]),key:"1"}]),1032,["title"])}var Ra=m(Pn,[["render",Sn]]);const On={setup(){const s=w("node1");function t(c){s.value=c}return{treeData:In,text:s,onChange:t}}},In=[{key:"node1",title:"node1",children:[{key:"node2",title:"node2"}]},{key:"node3",title:"node3",children:[{key:"node4",title:"node4"},{key:"node5",title:"node5",children:[{key:"node6",title:"node6"},{key:"node7",title:"node7"}]}]}],jn={href:"javascript: void(0)"};function Un(s,t,c,e,d,y){const u=p("a-typography-paragraph"),r=p("a-tree-select");return g(),f(r,{data:e.treeData,"default-value":"node1",onChange:e.onChange},{trigger:o(()=>[l(u,{style:{width:"300px"}},{default:o(()=>[t[0]||(t[0]=a(" You selected: ")),n("a",jn,V(e.text),1)]),_:1})]),_:1},8,["data","onChange"])}var Hn=m(On,[["render",Un]]);const Yn=v({name:"ArcoDemo",components:{VirtualDemo:Hn},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function Kn(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"trigger-element",title:s.getMessage("\u81EA\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20","Customize trigger element")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("node1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onChange"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#trigger"),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-typography-paragraph")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        You selected: `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("javascript: void(0)"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),a("{{ text }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-typography-paragraph")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" text "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"selected"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        text`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" selected"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
        text`),n("span",{class:"token punctuation"},","),a(`
        onChange`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node6'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node6'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node7'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node7'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,"\u81EA\u5B9A\u4E49\u89E6\u53D1\u5143\u7D20\u3002",-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,"Customize trigger element.",-1))]),key:"1"}]),1032,["title"])}var Wa=m(Yn,[["render",Kn]]);const Rn={setup(){return{selected:w([]),treeData:Wn}}},Wn=[{key:"node1",icon:()=>D(b),title:"node1",children:[{key:"node2",title:"node2"}]},{key:"node3",title:"node3",icon:()=>D(b),children:[{key:"node4",title:"node4"},{key:"node5",title:"node5"}]}];function Gn(s,t,c,e,d,y){const u=p("a-tree-select"),r=p("a-space");return g(),f(r,null,{default:o(()=>[l(u,{modelValue:e.selected,"onUpdate:modelValue":t[0]||(t[0]=i=>e.selected=i),multiple:!0,"allow-clear":!0,"allow-search":!0,data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["modelValue","data"]),l(u,{modelValue:e.selected,"onUpdate:modelValue":t[1]||(t[1]=i=>e.selected=i),multiple:!0,"max-tag-count":2,"allow-clear":!0,"allow-search":!0,data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["modelValue","data"])]),_:1})}var Jn=m(Rn,[["render",Gn]]);const Qn=v({name:"ArcoDemo",components:{VirtualDemo:Jn},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function Xn(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"multiple",title:s.getMessage("\u591A\u9009","Multiple Selection")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selected"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selected"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":max-tag-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" h"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" IconCalendar "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'genedesign/es/icon'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" selected "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        selected`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"icon"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),a("IconCalendar"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,"\u591A\u9009",-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,"Multiple Selection",-1))]),key:"1"}]),1032,["title"])}var Ga=m(Qn,[["render",Xn]]);const Zn={setup(){const s=w([]),t=w(!1);return{selected:s,treeCheckStrictly:t,treeData:na}}},na=[{title:"Trunk 0-0",value:"Trunk 0-0",key:"0-0",children:[{title:"Leaf 0-0-1",value:"Leaf 0-0-1",key:"0-0-1"},{title:"Branch 0-0-2",value:"Branch 0-0-2",key:"0-0-2",children:[{title:"Leaf 0-0-2-1",value:"Leaf 0-0-2-1",key:"0-0-2-1"}]}]},{title:"Trunk 0-1",value:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",value:"Branch 0-1-1",key:"0-1-1",checkable:!1,children:[{title:"Leaf 0-1-1-1",value:"Leaf 0-1-1-1",key:"0-1-1-1"},{title:"Leaf 0-1-1-2",value:"Leaf 0-1-1-2",key:"0-1-1-2",disabled:!0}]},{title:"Leaf 0-1-2",value:"Leaf 0-1-2",key:"0-1-2"}]}],aa={style:{marginBottom:"24px"}};function ta(s,t,c,e,d,y){const u=p("a-checkbox"),r=p("a-tree-select");return g(),C($,null,[n("div",aa,[l(u,{modelValue:e.treeCheckStrictly,"onUpdate:modelValue":t[0]||(t[0]=i=>e.treeCheckStrictly=i),onChange:t[1]||(t[1]=()=>{e.selected=[]})},{default:o(()=>t[3]||(t[3]=[a(" treeCheckStrictly ")])),_:1},8,["modelValue"])]),l(r,{modelValue:e.selected,"onUpdate:modelValue":t[2]||(t[2]=i=>e.selected=i),"allow-search":!0,"allow-clear":!0,"tree-checkable":!0,"tree-check-strictly":e.treeCheckStrictly,data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["modelValue","tree-check-strictly","data"])],64)}var sa=m(Zn,[["render",ta]]);const ea=v({name:"ArcoDemo",components:{VirtualDemo:sa},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function oa(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"checkable",title:s.getMessage("\u590D\u9009\u6846\u591A\u9009","Checkable")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"marginBottom"),n("span",{class:"token punctuation"},":"),a(" 24px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeCheckStrictly"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`() => {
        selected = [];
      }`),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
    treeCheckStrictly
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-checkbox")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selected"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":tree-checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":tree-check-strictly"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeCheckStrictly"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" selected "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" treeCheckStrictly "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        selected`),n("span",{class:"token punctuation"},","),a(`
        treeCheckStrictly`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-2-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-2-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2-1'"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"checkable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),n("code",null,"treeCheckable"),a(" \u5C5E\u6027\u5F00\u542F\u590D\u9009\u6846\u52FE\u9009\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("The "),n("code",null,"treeCheckable"),a(" property can display checkbox.")],-1))]),key:"1"}]),1032,["title"])}var Ja=m(ea,[["render",oa]]);const pa={setup(){const s=w([]),t=w("all");return{selected:s,treeCheckedStrategy:t,strategyOptions:ca,treeData:la}}},ca=[{value:"all",label:"show all"},{value:"parent",label:"show parent"},{value:"child",label:"show child"}],la=[{title:"Trunk 0-0",value:"Trunk 0-0",key:"0-0",children:[{title:"Leaf 0-0-1",value:"Leaf 0-0-1",key:"0-0-1"},{title:"Branch 0-0-2",value:"Branch 0-0-2",key:"0-0-2",children:[{title:"Leaf 0-0-2-1",value:"Leaf 0-0-2-1",key:"0-0-2-1"}]}]},{title:"Trunk 0-1",value:"Trunk 0-1",key:"0-1",children:[{title:"Branch 0-1-1",value:"Branch 0-1-1",key:"0-1-1",checkable:!1,children:[{title:"Leaf 0-1-1-1",value:"Leaf 0-1-1-1",key:"0-1-1-1"},{title:"Leaf 0-1-1-2",value:"Leaf 0-1-1-2",key:"0-1-1-2",disabled:!0}]},{title:"Leaf 0-1-2",value:"Leaf 0-1-2",key:"0-1-2"}]}],ua={style:{"margin-bottom":"24px"}};function ra(s,t,c,e,d,y){const u=p("a-radio"),r=p("a-radio-group"),i=p("a-tree-select");return g(),C($,null,[n("div",ua,[l(r,{type:"button",modelValue:e.treeCheckedStrategy,"onUpdate:modelValue":t[0]||(t[0]=k=>e.treeCheckedStrategy=k),onChange:t[1]||(t[1]=k=>{e.selected=[]})},{default:o(()=>[(g(!0),C($,null,U(e.strategyOptions,k=>(g(),f(u,{key:k==null?void 0:k.value,value:k==null?void 0:k.value},{default:o(()=>[a(V(k==null?void 0:k.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),l(i,{modelValue:e.selected,"onUpdate:modelValue":t[2]||(t[2]=k=>e.selected=k),"allow-search":!0,"allow-clear":!0,"tree-checkable":!0,"tree-checked-strategy":e.treeCheckedStrategy,data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["modelValue","tree-checked-strategy","data"])],64)}var ka=m(pa,[["render",ra]]);const ia=v({name:"ArcoDemo",components:{VirtualDemo:ka},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function da(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"checked-strategy",title:s.getMessage("\u5B9A\u5236\u56DE\u586B\u65B9\u5F0F","Check Strategy")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 24px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),a("button"),n("span",{class:"token punctuation"},"'")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeCheckedStrategy"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`(value) => {
        selected = []
      }`),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio")]),a(`
        `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in strategyOptions"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item?.value"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item?.value"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        {{ item?.label }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selected"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":tree-checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":tree-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeCheckedStrategy"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" selected "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" treeCheckedStrategy "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        selected`),n("span",{class:"token punctuation"},","),a(`
        treeCheckedStrategy`),n("span",{class:"token punctuation"},","),a(`
        strategyOptions`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" strategyOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'show all'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'show parent'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'show child'"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-2-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-2-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2-1'"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"checkable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-1-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u53EF\u4EE5\u901A\u8FC7"),n("code",null,"treeCheckStrategy"),a("\u5C5E\u6027\u5B9A\u5236\u56DE\u586B\u65B9\u5F0F\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("Customize the return value through the "),n("code",null,"treeCheckStrategy"),a(" property.")],-1))]),key:"1"}]),1032,["title"])}var Qa=m(ia,[["render",da]]);const ya={setup(){const s=w(!1);function t(){s.value=!s.value}return{onClick:t,popupVisible:s,treeData:ga}}},ga=[{key:"node1",title:"Trunk",children:[{key:"node2",title:"Leaf"}]},{key:"node3",title:"Trunk2",children:[{key:"node4",title:"Leaf"},{key:"node5",title:"Leaf"}]}],ma={style:{"margin-bottom":"24px"}};function fa(s,t,c,e,d,y){const u=p("a-button"),r=p("a-tree-select");return g(),C($,null,[n("div",ma,[l(u,{type:"primary",onClick:e.onClick},{default:o(()=>t[0]||(t[0]=[a("toggle")])),_:1},8,["onClick"])]),l(r,{popupVisible:e.popupVisible,"allow-clear":!0,data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["popupVisible","data"])],64)}var va=m(ya,[["render",fa]]);const ha=v({name:"ArcoDemo",components:{VirtualDemo:va},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function _a(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"popup-visible",title:s.getMessage("\u63A7\u5236\u4E0B\u62C9\u6846\u7684\u5C55\u5F00\u6536\u8D77","Control Collapse")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[3]||(t[3]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 24px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("toggle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":popupVisible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("popupVisible"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" popupVisible "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"onClick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        popupVisible`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("popupVisible"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        onClick`),n("span",{class:"token punctuation"},","),a(`
        popupVisible`),n("span",{class:"token punctuation"},","),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u901A\u8FC7 "),n("code",null,"popupVisible"),a(" (\u652F\u6301 "),n("code",null,"v-model"),a(") \u63A7\u5236\u4E0B\u62C9\u6846\u7684\u5C55\u5F00\u548C\u6536\u8D77\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,"The dropdown expanded by default. Use popupVisible and onVisibleChange to control the expansion and collapse of the dropdown.",-1)),t[2]||(t[2]=n("p",null,"For example, in this demo, onVisibleChange is triggered when the mouse moves out of the dropdown and the popup, the parameter is false, and the dropdown box is collapsed.",-1))]),key:"1"}]),1032,["title"])}var Xa=m(ha,[["render",_a]]);const wa={setup(){return{treeData:Da}}},Da=[{label:"Trunk 0-0",value:"0-0",items:[{label:"Branch 0-0-2",value:"0-0-2",selectable:!1,items:[{label:"Leaf",value:"0-0-2-1",items:[{label:"Leaf 0-0-2",value:"0-0-2-1-0",items:[{label:"Leaf",value:"0-0-2-1-0-0"}]}]}]}]},{label:"Trunk 0-1",value:"0-1",items:[{label:"Branch 0-1-1",value:"0-1-1",items:[{label:"Leaf",value:"0-1-1-0"}]}]}];function ba(s,t,c,e,d,y){const u=p("a-tree-select");return g(),f(u,{"default-value":"0-0-1",fieldNames:{key:"value",title:"label",children:"items"},data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data"])}var Ca=m(wa,[["render",ba]]);const $a=v({name:"ArcoDemo",components:{VirtualDemo:Ca},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function qa(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"field-names",title:s.getMessage("\u81EA\u5B9A\u4E49 TreeData \u7684\u5B57\u6BB5\u540D\u79F0","Customize treeData")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},"default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0-0-1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":fieldNames"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
      key: 'value',
      title: 'label',
      children: 'items'
    }`),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
  `),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
        treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

  `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"selectable"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                `),n("span",{class:"token punctuation"},"{"),a(`
                  `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf 0-0-2'"),n("span",{class:"token punctuation"},","),a(`
                  `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2-1-0'"),n("span",{class:"token punctuation"},","),a(`
                  `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                    `),n("span",{class:"token punctuation"},"{"),a(`
                      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
                      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-0-2-1-0-0'"),a(`
                    `),n("span",{class:"token punctuation"},"}"),a(`
                  `),n("span",{class:"token punctuation"},"]"),a(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk 0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Branch 0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"items"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0-1-1-0'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u901A\u8FC7 "),n("code",null,"fieldNames"),a(" \u5B57\u6BB5\u53EF\u4EE5\u81EA\u5B9A\u4E49 TreeData \u7684\u5B57\u6BB5\u540D\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("You can customize "),n("code",null,"treeData"),a(" by "),n("code",null,"fieldNames"),a(".")],-1))]),key:"1"}]),1032,["title"])}var Za=m($a,[["render",qa]]);const La={setup(){return{treeData:T()}}};function T(s="0",t=2){const c=[];for(let e=0;e<10;e+=1){const d=`${s}-${e}`,y={title:d,key:d};t>0&&(y.children=T(d,t-1)),c.push(y)}return c}function Ea(s,t,c,e,d,y){const u=p("a-tree-select");return g(),f(u,{data:e.treeData,"allow-search":{retainInputValue:!0},multiple:"","tree-checkable":"",scrollbar:!1,"tree-checked-strategy":"parent",treeProps:{virtualListProps:{height:200}}},null,8,["data"])}var Fa=m(La,[["render",Ea]]);const Ba=v({name:"ArcoDemo",components:{VirtualDemo:Fa},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function xa(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"virtual",title:s.getMessage("\u865A\u62DF\u5217\u8868","Virtual List")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[1]||(t[1]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":allow-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
      retainInputValue: true
    }`),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
    `),n("span",{class:"token attr-name"},"tree-checkable"),a(`
    `),n("span",{class:"token attr-name"},":scrollbar"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"tree-checked-strategy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("parent"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":treeProps"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
      virtualListProps: {
        height: 200,
      },
    }`),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeData
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),a("path "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(" level "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"const"),a(" list "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"+="),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" key "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("path"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("i"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" treeNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(" key"),n("span",{class:"token punctuation"},","),a(`
      key`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("level "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeNode`),n("span",{class:"token punctuation"},"."),a("children "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"loop"),n("span",{class:"token punctuation"},"("),a("key"),n("span",{class:"token punctuation"},","),a(" level "),n("span",{class:"token operator"},"-"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),a("treeNode"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" list"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u901A\u8FC7\u6307\u5B9A "),n("code",null,"treeProps.virtualListProps"),a(" \u6765\u5F00\u542F\u865A\u62DF\u5217\u8868\uFF0C\u5728\u5927\u91CF\u6570\u636E\u65F6\u83B7\u5F97\u9AD8\u6027\u80FD\u8868\u73B0\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[]),key:"1"}]),1032,["title"])}var nt=m(Ba,[["render",xa]]);const Va={setup(){return{treeData:Ta,fallback(s){return{key:s,title:`++${s}++`}}}}},Ta=[{key:"node1",title:"Trunk1",children:[{key:"node2",title:"Leaf1"}]},{key:"node3",title:"Trunk2",children:[{key:"node4",title:"Leaf2"},{key:"node5",title:"Leaf3"}]}];function Aa(s,t,c,e,d,y){const u=p("a-tree-select"),r=p("a-space");return g(),f(r,{direction:"vertical",size:"large"},{default:o(()=>[l(u,{defaultValue:"node0",data:e.treeData,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data"]),l(u,{defaultValue:"node0",data:e.treeData,"fallback-option":!1,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data"]),l(u,{defaultValue:"node0",data:e.treeData,"fallback-option":e.fallback,placeholder:"Please select ...",style:{width:"300px"}},null,8,["data","fallback-option"]),l(u,{defaultValue:["node0","node2"],data:e.treeData,multiple:"",placeholder:"Please select ...",style:{width:"300px"}},null,8,["data"]),l(u,{defaultValue:["node0","node2"],data:e.treeData,"fallback-option":!1,multiple:"",placeholder:"Please select ...",style:{width:"300px"}},null,8,["data"]),l(u,{"default-value":["node0","node2"],data:e.treeData,"fallback-option":e.fallback,multiple:"",placeholder:"Please select ...",style:{width:"300px"}},null,8,["data","fallback-option"])]),_:1})}var za=m(Va,[["render",Aa]]);const Ma=v({name:"ArcoDemo",components:{VirtualDemo:za},setup(){const{locale:s}=h();return{locale:s,getMessage:(c,e)=>s.value==="zh-CN"?c:e}}});function Na(s,t,c,e,d,y){const u=p("virtual-demo"),r=p("cell-demo"),i=p("cell-code"),k=p("code-block");return g(),f(k,{id:"fallback",title:s.getMessage("\u56DE\u9000\u9009\u9879","Fallback Option")},_({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(i,null,{default:o(()=>t[2]||(t[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},"defaultValue"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("node0"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},"defaultValue"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("node0"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":fallback-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},"defaultValue"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("node0"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":fallback-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fallback"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},":defaultValue"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['node0', 'node2']"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"multiple"),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},":defaultValue"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['node0', 'node2']"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":fallback-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"multiple"),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-tree-select")]),a(`
      `),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['node0', 'node2']"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeData"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":fallback-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fallback"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"multiple"),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeData`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function"},"fallback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"key"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
          key`),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"++"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("key"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"++"),n("span",{class:"token template-punctuation string"},"`")]),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token keyword"},"const"),a(" treeData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Trunk2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node4'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node5'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[t[0]||(t[0]=n("p",null,[a("\u4F7F\u7528 "),n("code",null,"fallback-option"),a(" \u81EA\u5B9A\u4E49\u627E\u4E0D\u5230\u9009\u9879\u7684\u503C\u7684\u663E\u793A\u6548\u679C\uFF0C\u9ED8\u8BA4\u627E\u4E0D\u5230\u9009\u9879\u5C31\u5C55\u793A\u503C\u672C\u8EAB\u3002\u7528\u6237\u53EF\u4EE5\u5C06\u5176\u8BBE\u5B9A\u4E3A "),n("code",null,"false"),a(" \u6765\u9690\u85CF\u90A3\u4E9B\u6CA1\u6709\u5339\u914D\u5230\u8282\u70B9\u6570\u636E\u7684\u503C\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[t[1]||(t[1]=n("p",null,[a("Use "),n("code",null,"fallback-option"),a(" to customize the display effect of the value of the option that is not found. By default, the value itself is displayed when the option is not found. Users can set this to "),n("code",null,"false"),a(" to hide values that do not match node data.")],-1))]),key:"1"}]),1032,["title"])}var at=m(Ma,[["render",Na]]);export{Oa as D,Ia as a,ja as b,Ua as c,Ha as d,Ya as e,Ka as f,Ra as g,Wa as h,Ga as i,Ja as j,Qa as k,Xa as l,Za as m,nt as n,at as o};
