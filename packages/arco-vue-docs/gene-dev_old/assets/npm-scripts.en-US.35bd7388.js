import{_ as p,d as f,u as v,o as m,c as C,w as s,m as b,r as c,e,a as l,b as t}from"./index.9c61ea88.js";const k=f({name:"ArcoMain",components:{},setup(){const{locale:o}=v(),n={meta:{type:"Arco Pro"},title:"Npm Scripts",description:"package.json script presets convenient and practical commands"},i=(r,u)=>o.value==="zh-CN"?r:u;return{locale:o,data:n,changelog:typeof _changelog=="undefined"?void 0:_changelog,getMessage:i}}});function B(o,n,i,d,r,u){const a=c("anchor-head"),g=c("arco-article");return m(),C(g,b(o.data,{changelog:o.changelog}),{default:s(()=>[n[3]||(n[3]=e("p",null,[e("em",null,"Auto translate by google.")],-1)),l(a,{level:"2",href:"Configuration-file"},{default:s(()=>n[0]||(n[0]=[t("Configuration file")])),_:1}),n[4]||(n[4]=e("pre",{class:"code-content"},[e("code",null,`\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 config
\u2502 \u251C\u2500\u2500 plugin  # vite plugin
\u2502 \u251C\u2500\u2500 vite.config.base.ts  # Basic Environment Configuration
\u2502 \u251C\u2500\u2500 vite.config.dev.ts # Development environment configuration
\u2502 \u251C\u2500\u2500 vite.config.prod.ts # Production environment configuration
\u2514\u2500\u2500 package.json
`)],-1)),l(a,{level:"2",href:"Local-development"},{default:s(()=>n[1]||(n[1]=[t("Local development")])),_:1}),n[5]||(n[5]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},`npm run dev
`)],-1)),n[6]||(n[6]=e("p",null,"The command invoked is as follows",-1)),n[7]||(n[7]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},`{
   "scripts": {
     "dev": "vite --config ./config/vite.config.dev.ts",
   }
}
`)],-1)),l(a,{level:"2",href:"Build-production"},{default:s(()=>n[2]||(n[2]=[t("Build production")])),_:1}),n[8]||(n[8]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},`npm run build
`)],-1)),n[9]||(n[9]=e("p",null,[t("The commands to be called are as follows. According to actual needs, please refer to "),e("a",{class:"link",href:"https://vitejs.dev/"},"vite"),e("a",{class:"link",href:"https://vitejs.dev/"},"Official Website"),t(" for output configuration.")],-1)),n[10]||(n[10]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},`{
   "scripts": {
     "build": "vue-tsc --noEmit && vite build --config ./config/vite.config.prod.ts",
   }
}
`)],-1))]),_:1},16,["changelog"])}var N=p(k,[["render",B]]);export{N as default};
