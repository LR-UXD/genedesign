import{_ as k,g as f,r as c,o as i,l as v,a as l,b as a,e5 as w,e6 as y,d as C,u as D,c as V,f as $,w as o,e as n}from"./index.9c61ea88.js";const B={setup(){return{value:f(new Date("2023-01-01"))}}};function x(t,s,p,e,d,m){const u=c("a-calendar");return i(),v(y,null,[l(u,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=r=>e.value=r)},null,8,["modelValue"]),a(" select: "+w(e.value),1)],64)}var N=k(B,[["render",x]]);const b=C({name:"ArcoDemo",components:{VirtualDemo:N},setup(){const{locale:t}=D();return{locale:t,getMessage:(p,e)=>t.value==="zh-CN"?p:e}}});function A(t,s,p,e,d,m){const u=c("virtual-demo"),r=c("cell-demo"),g=c("cell-code"),_=c("code-block");return i(),V(_,{id:"basic",title:t.getMessage("\u57FA\u672C\u7528\u6CD5","Basic Usage")},$({default:o(()=>[l(r,null,{default:o(()=>[l(u)]),_:1}),l(g,null,{default:o(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-calendar")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  select: {{value}}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2023-01-01'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:o(()=>[s[0]||(s[0]=n("p",null,"\u5C55\u793A\u548C\u9009\u62E9\u65E5\u5386",-1))]),key:"0"}:{name:"description",fn:o(()=>[s[1]||(s[1]=n("p",null,"Display and select calendars",-1))]),key:"1"}]),1032,["title"])}var M=k(b,[["render",A]]);export{M as D};
