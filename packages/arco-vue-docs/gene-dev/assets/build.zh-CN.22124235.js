import{_ as i,d as E,u as k,o as d,c as C,w as p,m as g,r as l,a as f,b as n,e as u}from"./index.9c61ea88.js";const m=E({name:"ArcoMain",components:{},setup(){const{locale:t}=k(),s={meta:{type:"Arco Pro \u6700\u4F73\u5B9E\u8DF5"},title:"\u6253\u5305\u6784\u5EFA",description:"\u6253\u5305\u4EE3\u7801"},a=(o,e)=>t.value==="zh-CN"?o:e;return{locale:t,data:s,changelog:typeof _changelog=="undefined"?void 0:_changelog,getMessage:a}}});function v(t,s,a,F,o,e){const c=l("anchor-head"),r=l("arco-article");return d(),C(r,g(t.data,{changelog:t.changelog}),{default:p(()=>[f(c,{level:"2",href:"\u6253\u5305\u6784\u5EFA"},{default:p(()=>s[0]||(s[0]=[n("\u6253\u5305\u6784\u5EFA")])),_:1}),s[1]||(s[1]=u("p",null,"\u5F53\u4EE3\u7801\u4E66\u5199\u5B8C\u6210\u540E\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u5373\u53EF\u6253\u5305\u4EE3\u7801",-1)),s[2]||(s[2]=u("pre",{class:"code-content"},[u("code",{class:"language-lang"},`npm run build
`)],-1)),s[3]||(s[3]=u("p",null,[n("\u8BE5\u547D\u4EE4\u8C03\u7528\u7684\u662F vite \u63D0\u4F9B\u7684\u6253\u5305\u547D\u4EE4\uFF0C\u6253\u5305\u5B8C\u6210\u540E\uFF0C\u4F1A\u5728\u6839\u76EE\u5F55\u751F\u6210 "),u("code",null,"dist"),n(" \u6587\u4EF6\u5939\uFF0C\u8FD9\u91CC\u9762\u5C31\u662F\u53EF\u4EE5\u7528\u4E8E\u90E8\u7F72\u7684\u4EE3\u7801\u3002")],-1)),s[4]||(s[4]=u("p",null,"PS: \u6253\u5305\u4F53\u79EF\u7F29\u51CF\u63D0\u793A\uFF01\uFF01\uFF01",-1)),s[5]||(s[5]=u("p",null,"\u56E0\u4E3A\u5728Pro\u9879\u76EE\u4E2D\uFF0C\u5C55\u793A\u7684table\u7EC4\u4EF6\u9700\u8981 vue compile \u529F\u80FD\uFF0C\u6240\u4EE5\u5F15\u5165\u4E86\u5E26\u6709\u7F16\u8BD1\u5668\u7684\u7248\u672C\u3002",-1)),s[6]||(s[6]=u("p",null,"\u5982\u679C\u4E0D\u9700\u8981vue \u6A21\u677F\u7F16\u8BD1\u529F\u80FD\uFF0C\u5220\u9664\u5BF9\u5E94\u7684\u4E1A\u52A1\u4EE3\u7801\u540E\uFF0C\u914D\u7F6E\u6307\u5B9A\u7684vue\u7248\u672C\uFF0C\u6784\u5EFA\u6253\u5305\u4EE5\u7F29\u5C0F\u6253\u5305\u4F53\u79EF\u3002",-1)),s[7]||(s[7]=u("p",null,"\u5982\u679C\u9700\u8981 vue \u6A21\u677F\u7F16\u8BD1 \u80FD\u529B\uFF0C\u53EF\u5728 vite.config.prod.ts \u6587\u4EF6 \u4E2D\u8FDB\u884C\u914D\u7F6E\uFF08\u5982\u4E0B\uFF09\u3002",-1)),s[8]||(s[8]=u("pre",{class:"code-content"},[u("code",{class:"language-lang"},[u("span",{class:"token comment"},"// config/vite.config.build.ts"),n(`
`),u("span",{class:"token keyword"},"import"),n(),u("span",{class:"token punctuation"},"{"),n(" defineConfig "),u("span",{class:"token punctuation"},"}"),n(),u("span",{class:"token keyword"},"from"),n(),u("span",{class:"token string"},"'vite'"),u("span",{class:"token punctuation"},";"),n(`

`),u("span",{class:"token keyword"},"export"),n(),u("span",{class:"token keyword"},"default"),n(),u("span",{class:"token function"},"defineConfig"),u("span",{class:"token punctuation"},"("),u("span",{class:"token punctuation"},"{"),n(`
 mode`),u("span",{class:"token operator"},":"),n(),u("span",{class:"token string"},"'production'"),u("span",{class:"token punctuation"},","),n(`
 `),u("span",{class:"token operator"},"..."),n(`
 resolve`),u("span",{class:"token operator"},":"),n(),u("span",{class:"token punctuation"},"{"),n(`
   alias`),u("span",{class:"token operator"},":"),n(),u("span",{class:"token punctuation"},"["),n(`
     `),u("span",{class:"token punctuation"},"{"),n(`
       find`),u("span",{class:"token operator"},":"),n(),u("span",{class:"token string"},"'vue'"),u("span",{class:"token punctuation"},","),n(`
       replacement`),u("span",{class:"token operator"},":"),n(),u("span",{class:"token string"},"'vue/dist/vue.esm-bundler.js'"),u("span",{class:"token punctuation"},","),n(),u("span",{class:"token comment"},"// \u9700\u8981\u7F16\u8BD1tmp"),n(`
     `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
   `),u("span",{class:"token punctuation"},"]"),u("span",{class:"token punctuation"},","),n(`
 `),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},","),n(`
`),u("span",{class:"token punctuation"},"}"),u("span",{class:"token punctuation"},")"),u("span",{class:"token punctuation"},";"),n(`
`)])],-1)),s[9]||(s[9]=u("p",null,[n("\u66F4\u591A\u5177\u4F53\u914D\u7F6E\u8BE6\u89C1"),u("a",{class:"link",href:"https://vitejs.dev/"},"vite"),u("a",{class:"link",href:"https://vitejs.dev/"},"\u5B98\u7F51"),n("\u3002")],-1))]),_:1},16,["changelog"])}var B=i(m,[["render",v]]);export{B as default};
