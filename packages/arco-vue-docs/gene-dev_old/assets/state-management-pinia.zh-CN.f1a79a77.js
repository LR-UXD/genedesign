import{_ as F,d,u as E,o as g,c as f,w as t,m as B,r as k,a as e,b as s,e as n}from"./index.9c61ea88.js";const m=d({name:"ArcoMain",components:{},setup(){const{locale:u}=E(),a={meta:{type:"Arco Pro \u6700\u4F73\u5B9E\u8DF5"},title:"\u72B6\u6001\u7BA1\u7406 - Pinia",description:"\u5168\u7AD9\u72B6\u6001\u7BA1\u7406"},p=(c,l)=>u.value==="zh-CN"?c:l;return{locale:u,data:a,changelog:typeof _changelog=="undefined"?void 0:_changelog,getMessage:p}}});function C(u,a,p,i,c,l){const o=k("anchor-head"),r=k("arco-article");return g(),f(r,B(u.data,{changelog:u.changelog}),{default:t(()=>[e(o,{level:"2",href:"Arco-Pro-Version"},{default:t(()=>a[0]||(a[0]=[s("Arco Pro Version")])),_:1}),a[5]||(a[5]=n("p",null,"Arco Pro >= 2.1.0",-1)),a[6]||(a[6]=n("p",null,[n("strong",null,"\u6CE8\u610F"),s("\uFF1A "),n("code",null,"Arco Pro"),s(" 2.1.0 \u7248\u672C\u5DF2\u7ECF\u5C06\u72B6\u6001\u7BA1\u7406\u5E93\u66FF\u6362\u4E3A "),n("code",null,"Pinia"),s("\u3002")],-1)),e(o,{level:"2",href:"Pinia-\u8BF4\u660E"},{default:t(()=>a[1]||(a[1]=[s("Pinia \u8BF4\u660E")])),_:1}),a[7]||(a[7]=n("p",null,"\u4F7F\u7528Pinia\u66FF\u6362Vuex\uFF0C\u6709\u57FA\u4E8E\u6280\u672F\u524D\u77BB\u6027\u7684\u8003\u8651\u3002",-1)),a[8]||(a[8]=n("p",null,"\u540C\u65F6 Evan You \u5DF2\u7ECF\u4E8E 2021\u5E7411\u670824\u65E5 \u5728\u63A8\u7279\u5BA3\u5E03 Pinia \u6B63\u5F0F\u6210\u4E3A vuejs \u5B98\u65B9\u7684\u72B6\u6001\u5E93\uFF0C\u610F\u5473\u7740 Pinia \u5C31\u662F Vuex 5 \u3002",-1)),a[9]||(a[9]=n("p",null,[s("\u5173\u4E8E Pinia \u5E26\u6765\u7684\u4F17\u591A\u65B0\u7279\u6027\u53CA\u7528\u6CD5\uFF0C\u5927\u5BB6\u53EF\u4EE5\u5728 "),n("a",{class:"link",href:"https://pinia.vuejs.org/"},"Pinia"),s(" \u5B98\u7F51\u8FDB\u884C\u5B66\u4E60\u4E86\u89E3\u3002\u672C\u6587\u4E0D\u505A\u8FC7\u591A\u8D58\u8FF0\u3002")],-1)),e(o,{level:"2",href:"\u524D\u8A00"},{default:t(()=>a[2]||(a[2]=[s("\u524D\u8A00")])),_:1}),a[10]||(a[10]=n("p",null,"\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u662F\u4E00\u4E2A\u5927\u578B\u7CFB\u7EDF\u4E0D\u53EF\u907F\u514D\u7684\u5B58\u5728\uFF0C\u56E0\u4E3A\u7ECF\u5E38\u6709\u4E00\u4E9B\u9700\u8981\u5168\u5C40\u5171\u4EAB\u7684\u4FE1\u606F\u9700\u8981\u5B58\u50A8\uFF0C\u6BD4\u5982\u7528\u6237\u4FE1\u606F\uFF0C\u6240\u4EE5 PRO \u4E2D\u5185\u7F6E\u4E86 Pinia \u7528\u4E8E\u4FE1\u606F\u5171\u4EAB\u3002",-1)),a[11]||(a[11]=n("p",null,"\u4F7F\u7528 Pinia \uFF0C\u76EE\u5F55\u66F4\u52A0\u7B80\u6D01\u660E\u4E86\u3002 \u540C\u65F6\u5BF9Typescript\u7684\u652F\u6301\u66F4\u52A0\u53CB\u597D\uFF0C\u5177\u6709\u65E0\u53EF\u6BD4\u62DF\u7684\u4F18\u8D8A\u6027\u3002",-1)),a[12]||(a[12]=n("pre",{class:"code-content"},[n("code",null,`\u251C\u2500\u2500 modulers
\u2502 \u251C\u2500\u2500 user (\u5177\u4F53\u6A21\u5757\uFF0C\u4EE5\u5B9E\u9645\u9879\u76EE\u4E3A\u51C6)
\u2502 \u2502 \u2514\u2500\u2500 index.ts (store\u5B9A\u4E49)
\u2502 \u2502 \u2514\u2500\u2500 types.ts (store\u7C7B\u578B)
\u251C\u2500\u2500 index.ts \uFF08\u7528\u4E8E\u5BFC\u51FAstore\uFF09
`)],-1)),e(o,{level:"2",href:"\u6DFB\u52A0\u65B0\u6A21\u5757"},{default:t(()=>a[3]||(a[3]=[s("\u6DFB\u52A0\u65B0\u6A21\u5757")])),_:1}),a[13]||(a[13]=n("ol",null,[n("li",null," \u6DFB\u52A0 state \u7C7B\u578B\u58F0\u660E")],-1)),a[14]||(a[14]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token comment"},"// store/modulers/user/types.ts"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"UserState"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  avatar`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1)),a[15]||(a[15]=n("ol",{start:"2"},[n("li",null," \u5B9A\u4E49store\uFF0C\u5C31\u50CF\u5B9A\u4E49\u4E00\u4E2A\u7EC4\u4EF6\u4E00\u6837\u7B80\u5355")],-1)),a[16]||(a[16]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token comment"},"// store/modulers/user/index.ts"),s(`
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
`)])],-1)),e(o,{level:"2",href:"\u5177\u4F53\u4F7F\u7528"},{default:t(()=>a[4]||(a[4]=[s("\u5177\u4F53\u4F7F\u7528")])),_:1}),a[17]||(a[17]=n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),s(`
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
`)])],-1))]),_:1},16,["changelog"])}var y=F(m,[["render",C]]);export{y as default};
