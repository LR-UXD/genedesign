import{_ as d,r as e,o as r,c as i,d as $,u as v,f as C,w as o,e as n,a as u,b as t}from"./index.9c61ea88.js";const F={};function B(s,a){const c=e("a-rate");return r(),i(c)}var E=d(F,[["render",B]]);const A=$({name:"ArcoDemo",components:{VirtualDemo:E},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function y(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"basic",title:s.getMessage("\u57FA\u672C\u7528\u6CD5","Basic Usage")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,"\u8BC4\u5206\u7EC4\u4EF6\u57FA\u672C\u7528\u6CD5\u3002",-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,"Basic usage of rate component.",-1))]),key:"1"}]),1032,["title"])}var un=d(A,[["render",y]]);const D={};function b(s,a){const c=e("a-rate");return r(),i(c,{"default-value":2.5,"allow-half":""})}var M=d(D,[["render",b]]);const N=$({name:"ArcoDemo",components:{VirtualDemo:M},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function z(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"half",title:s.getMessage("\u534A\u9009","Half")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2.5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"allow-half"),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,[t("\u6307\u5B9A "),n("code",null,"allow-half"),t(" \u6765\u5F00\u542F\u534A\u9009\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,[t("Specify "),n("code",null,"allow-half"),t(" to enable half selection.")],-1))]),key:"1"}]),1032,["title"])}var pn=d(N,[["render",z]]);const V={setup(){return{color:{2:"red",4:"green",5:"blue"}}}};function w(s,a,c,l,g,f){const p=e("a-rate"),k=e("a-space");return r(),i(k,{direction:"vertical"},{default:o(()=>[u(p,{color:"red"}),u(p,{color:l.color},null,8,["color"])]),_:1})}var h=d(V,[["render",w]]);const q=$({name:"ArcoDemo",components:{VirtualDemo:h},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function x(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"color",title:s.getMessage("\u81EA\u5B9A\u4E49\u989C\u8272","Custom Color")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("red"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},":color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" color "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token number"},"2"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token number"},"4"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token number"},"5"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'blue'"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      color
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,"\u901A\u8FC7 color \u53EF\u4EE5\u81EA\u5B9A\u4E49\u989C\u8272\u3002\u53E6\u5916\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u5F62\u5F0F\u81EA\u5B9A\u4E49\u4E0D\u540C\u5206\u503C\u65F6\u7684\u989C\u8272\u3002",-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,"Color can be customized through color. In addition, you can customize the color of different score values through object form.",-1))]),key:"1"}]),1032,["title"])}var rn=d(q,[["render",x]]);const R={};function S(s,a){const c=e("a-rate");return r(),i(c,{"default-value":4,readonly:""})}var j=d(R,[["render",S]]);const G=$({name:"ArcoDemo",components:{VirtualDemo:j},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function H(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"readonly",title:s.getMessage("\u53EA\u8BFB\u6A21\u5F0F","Readonly")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"readonly"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E "),n("code",null,"readonly"),t(" \u5C5E\u6027\u8BA9\u8BC4\u5206\u7EC4\u4EF6\u4E3A\u53EA\u8BFB\u72B6\u6001\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,[t("Make the scoring component readonly by setting the "),n("code",null,"readonly"),t(" property.")],-1))]),key:"1"}]),1032,["title"])}var kn=d(G,[["render",H]]);const I={};function U(s,a){const c=e("a-rate");return r(),i(c,{"default-value":3,"allow-clear":""})}var T=d(I,[["render",U]]);const Y=$({name:"ArcoDemo",components:{VirtualDemo:T},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function J(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"clear",title:s.getMessage("\u652F\u6301\u6E05\u9664","Allow Clear")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"allow-clear"),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E "),n("code",null,"allow-clear"),t(" \u6765\u5141\u8BB8\u6E05\u9664\u8BC4\u5206\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,[t("Allow the score to be cleared by setting "),n("code",null,"allow-clear"),t(".")],-1))]),key:"1"}]),1032,["title"])}var dn=d(Y,[["render",J]]);const K={};function L(s,a){const c=e("icon-check"),l=e("icon-close"),g=e("a-rate");return r(),i(g,{"default-value":2},{character:o(({index:f})=>[f<3?(r(),i(c,{key:0})):(r(),i(l,{key:1}))]),_:1})}var O=d(K,[["render",L]]);const P=$({name:"ArcoDemo",components:{VirtualDemo:O},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function Q(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"character",title:s.getMessage("\u81EA\u5B9A\u4E49\u8BC4\u5206\u5B57\u7B26","Custom Character")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#character"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ index }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-check")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index < 3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("icon-close")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-rate")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,"\u53EF\u4EE5\u5C06\u661F\u661F\u66FF\u6362\u4E3A\u5176\u4ED6\u5B57\u7B26\uFF0C\u6BD4\u5982\u8868\u60C5\u3001\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u5B57\u4F53\u56FE\u6807\u751A\u81F3\u4E2D\u6587\u3002",-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,"You can replace the stars with other characters, such as emoticons, letters, numbers, font icons and even Chinese.",-1))]),key:"1"}]),1032,["title"])}var mn=d(P,[["render",Q]]);const W={};function X(s,a){const c=e("a-rate");return r(),i(c,{count:10})}var Z=d(W,[["render",X]]);const nn=$({name:"ArcoDemo",components:{VirtualDemo:Z},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function tn(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"count",title:s.getMessage("\u4EFB\u610F\u957F\u5EA6\u7684\u8BC4\u5206","Rate Count")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,[t("\u901A\u8FC7\u6307\u5B9A "),n("code",null,"count"),t(" \u6765\u6307\u5B9A\u4EFB\u610F\u957F\u5EA6\u7684\u8BC4\u5206\u7EC4\u4EF6\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,[t("Specify a rate component of any length by specifying "),n("code",null,"count"),t(".")],-1))]),key:"1"}]),1032,["title"])}var _n=d(nn,[["render",tn]]);const an={};function sn(s,a){const c=e("a-rate");return r(),i(c,{grading:""})}var en=d(an,[["render",sn]]);const on=$({name:"ArcoDemo",components:{VirtualDemo:en},setup(){const{locale:s}=v();return{locale:s,getMessage:(c,l)=>s.value==="zh-CN"?c:l}}});function cn(s,a,c,l,g,f){const p=e("virtual-demo"),k=e("cell-demo"),m=e("cell-code"),_=e("code-block");return r(),i(_,{id:"grading",title:s.getMessage("\u7B11\u8138\u5206\u7EA7","Grading")},C({default:o(()=>[u(k,null,{default:o(()=>[u(p)]),_:1}),u(m,null,{default:o(()=>a[2]||(a[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-rate")]),t(),n("span",{class:"token attr-name"},"grading"),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)])),_:1})]),_:2},[s.locale==="zh-CN"?{name:"description",fn:o(()=>[a[0]||(a[0]=n("p",null,[t("\u901A\u8FC7 "),n("code",null,"grading"),t(" \u4F7F\u7528\u7B11\u8138\u5206\u7EA7\u3002")],-1))]),key:"0"}:{name:"description",fn:o(()=>[a[1]||(a[1]=n("p",null,[t("Use "),n("code",null,"grading"),t(" to use the smiley grading.")],-1))]),key:"1"}]),1032,["title"])}var gn=d(on,[["render",cn]]);export{un as D,pn as a,rn as b,kn as c,dn as d,mn as e,_n as f,gn as g};
