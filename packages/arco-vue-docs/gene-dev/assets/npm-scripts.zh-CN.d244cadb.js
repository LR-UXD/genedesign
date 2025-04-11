import{_ as p,d as F,u as E,o as f,c as v,w as t,m as C,r as d,a,b as o,e as n}from"./index.9c61ea88.js";const m=F({name:"ArcoMain",components:{},setup(){const{locale:e}=E(),u={meta:{type:"Arco Pro \u6700\u4F73\u5B9E\u8DF5"},title:"npm \u547D\u4EE4",description:"package.json script \u9884\u7F6E\u65B9\u4FBF\u5B9E\u7528\u7684\u547D\u4EE4"},l=(r,i)=>e.value==="zh-CN"?r:i;return{locale:e,data:u,changelog:typeof _changelog=="undefined"?void 0:_changelog,getMessage:l}}});function D(e,u,l,c,r,i){const s=d("anchor-head"),g=d("arco-article");return f(),v(g,C(e.data,{changelog:e.changelog}),{default:t(()=>[a(s,{level:"2",href:"\u914D\u7F6E\u6587\u4EF6"},{default:t(()=>u[0]||(u[0]=[o("\u914D\u7F6E\u6587\u4EF6")])),_:1}),u[3]||(u[3]=n("pre",{class:"code-content"},[n("code",null,`\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 config
\u2502   \u251C\u2500\u2500 plugin  # vite\u63D2\u4EF6
\u2502   \u251C\u2500\u2500 vite.config.base.ts  # \u57FA\u7840\u73AF\u5883\u914D\u7F6E
\u2502   \u251C\u2500\u2500 vite.config.dev.ts  # \u5F00\u53D1\u73AF\u5883\u914D\u7F6E
\u2502   \u251C\u2500\u2500 vite.config.prod.ts  # \u751F\u4EA7\u73AF\u5883\u914D\u7F6E
\u2514\u2500\u2500 package.json
`)],-1)),a(s,{level:"2",href:"\u672C\u5730\u5F00\u53D1"},{default:t(()=>u[1]||(u[1]=[o("\u672C\u5730\u5F00\u53D1")])),_:1}),u[4]||(u[4]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},`npm run dev
`)],-1)),u[5]||(u[5]=n("p",null,"\u8C03\u7528\u7684\u547D\u4EE4\u5982\u4E0B",-1)),u[6]||(u[6]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},`{
  "scripts": {
    "dev": "vite --config ./config/vite.config.dev.ts",
  }
}
`)],-1)),a(s,{level:"2",href:"\u6784\u5EFA\u751F\u4EA7"},{default:t(()=>u[2]||(u[2]=[o("\u6784\u5EFA\u751F\u4EA7")])),_:1}),u[7]||(u[7]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},`npm run build
`)],-1)),u[8]||(u[8]=n("p",null,[o("\u8C03\u7528\u7684\u547D\u4EE4\u5982\u4E0B\uFF0C\u53EF\u4EE5\u6839\u636E\u5B9E\u9645\u9700\u8981\uFF0C\u67E5\u9605"),n("a",{class:"link",href:"https://vitejs.dev/"},"vite"),n("a",{class:"link",href:"https://vitejs.dev/"},"\u5B98\u7F51"),o("\uFF0C\u8FDB\u884C\u8F93\u51FA\u914D\u7F6E\u3002")],-1)),u[9]||(u[9]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},`{
  "scripts": {
    "build": "vue-tsc --noEmit && vite build --config ./config/vite.config.prod.ts",
  }
}
`)],-1))]),_:1},16,["changelog"])}var B=p(m,[["render",D]]);export{B as default};
