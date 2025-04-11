import{_ as d,d as m,u as f,o as g,c as y,w as t,m as w,r as i,e as n,a as p,b as s}from"./index.9c61ea88.js";const b=m({name:"ArcoMain",components:{},setup(){const{locale:o}=f(),a={meta:{type:"Arco Pro"},title:"State management - Pinia",description:"Site-wide status management"},c=(u,l)=>o.value==="zh-CN"?u:l;return{locale:o,data:a,changelog:typeof _changelog=="undefined"?void 0:_changelog,getMessage:c}}});function v(o,a,c,r,u,l){const e=i("anchor-head"),k=i("arco-article");return g(),y(k,w(o.data,{changelog:o.changelog}),{default:t(()=>[a[5]||(a[5]=n("p",null,[n("em",null,"Auto translate by google.")],-1)),p(e,{level:"2",href:"Arco-Pro-Version"},{default:t(()=>a[0]||(a[0]=[s("Arco Pro Version")])),_:1}),a[6]||(a[6]=n("p",null,"Arco Pro >= 2.1.0",-1)),a[7]||(a[7]=n("p",null,[n("strong",null,"Note"),s("\uFF1A Arco Pro Version 2.1.0 has replaced the state management library with Pinia.")],-1)),p(e,{level:"2",href:"Pinia-description"},{default:t(()=>a[1]||(a[1]=[s("Pinia description")])),_:1}),a[8]||(a[8]=n("p",null,"Replacing Vuex with Pinia is based on technological forward-looking considerations.",-1)),a[9]||(a[9]=n("p",null,"At the same time, Evan You has announced on Twitter on November 24, 2021 that Pinia has officially become the official state library of vuejs, which means that Pinia is Vuex 5.",-1)),a[10]||(a[10]=n("p",null,[s("Regarding the many new features and usages brought by Pinia, you can learn about them on "),n("a",{class:"link",href:"https://pinia.vuejs.org/"},"Pinia"),s("'s official website. This article will not go into too much detail.")],-1)),p(e,{level:"2",href:"Foreword"},{default:t(()=>a[2]||(a[2]=[s("Foreword")])),_:1}),a[11]||(a[11]=n("p",null,"Global state management is an inevitable existence in a large-scale system, because there are often some information that needs to be shared globally, such as user information, so Pinia is built into PRO for information sharing.",-1)),a[12]||(a[12]=n("p",null,"With Pinia, the table of contents is more concise and clear. At the same time, the support for Typescript is more friendly and has unparalleled advantages.",-1)),a[13]||(a[13]=n("pre",{class:"code-content"},[n("code",null,`\u251C\u2500\u2500 modulers
\u2502 \u251C\u2500\u2500 user (specific module, subject to actual project)
\u2502 \u2502 \u2514\u2500\u2500 index.ts (module entry)
\u2502 \u2502 \u2514\u2500\u2500 types.ts (store type declaration)
\u251C\u2500\u2500 index.ts (export store)
`)],-1)),p(e,{level:"2",href:"Add-new-module"},{default:t(()=>a[3]||(a[3]=[s("Add new module")])),_:1}),a[14]||(a[14]=n("ol",null,[n("li",null," Add state type declaration")],-1)),a[15]||(a[15]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token comment"},"// store/modulers/user/types.ts"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"UserState"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1)),a[16]||(a[16]=n("ol",{start:"2"},[n("li",null," Defining a store is as easy as defining a component")],-1)),a[17]||(a[17]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token comment"},"// store/modulers/user/index.ts"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'pinia'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  login `),n("span",{class:"token keyword"},"as"),s(" userLogin"),n("span",{class:"token punctuation"},","),s(`
  getUserInfo`),n("span",{class:"token punctuation"},","),s(`
  LoginData`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@/api/user'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" setToken "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@/utils/auth'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" UserState "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./types'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"const"),s(" useUserStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"defineStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'user'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  state`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" UserState "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`

  getters`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function"},"userInfo"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token operator"},":"),s(" UserState"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" UserState "),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token operator"},"..."),s("state "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

  actions`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`

    `),n("span",{class:"token comment"},"// Get user's information"),s(`
    `),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"getUserInfo"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setInfo"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

    `),n("span",{class:"token comment"},"// Login"),s(`
    `),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token function"},"login"),n("span",{class:"token punctuation"},"("),s("loginForm"),n("span",{class:"token operator"},":"),s(" LoginData"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"userLogin"),n("span",{class:"token punctuation"},"("),s("loginForm"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token function"},"setToken"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])],-1)),p(e,{level:"2",href:"Specific-use"},{default:t(()=>a[4]||(a[4]=[s("Specific use")])),_:1}),a[18]||(a[18]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" useUserStore "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@/store'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" userStore "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"useUserStore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"login"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"const"),s(" userInfo "),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),s(`
        username`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'admin'"),n("span",{class:"token punctuation"},","),s(`
        password`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'admin'"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"await"),s(" userStore"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"login"),n("span",{class:"token punctuation"},"("),s("userInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      login`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])],-1))]),_:1},16,["changelog"])}var S=d(b,[["render",v]]);export{S as default};
