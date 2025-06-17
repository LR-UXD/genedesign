import{_ as p,d,u as f,o as m,c as C,w as s,m as y,r,e as u,a as h,b as l}from"./index.9c61ea88.js";const k=d({name:"ArcoMain",components:{},setup(){const{locale:n}=f(),e={meta:{type:"Arco Pro"},title:"Directory Structure",description:"The organizational structure of the project file."},t=(o,a)=>n.value==="zh-CN"?o:a;return{locale:n,data:e,changelog:typeof _changelog=="undefined"?void 0:_changelog,getMessage:t}}});function v(n,e,t,i,o,a){const c=r("anchor-head"),g=r("arco-article");return m(),C(g,y(n.data,{changelog:n.changelog}),{default:s(()=>[e[1]||(e[1]=u("p",null,[u("em",null,"Auto translate by google.")],-1)),h(c,{level:"2",href:"Content"},{default:s(()=>e[0]||(e[0]=[l("Content")])),_:1}),e[2]||(e[2]=u("pre",{class:"code-content"},[u("code",null,`\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 index.html
\u251C\u2500\u2500 src
\u2502   \u251C\u2500\u2500 api # Request interface
\u2502   \u251C\u2500\u2500 assets # Static resources
\u2502         \u2514\u2500\u2500 style # Global style
\u2502   \u251C\u2500\u2500 components # General business components
\u2502   \u251C\u2500\u2500 config # Global configuration (including echarts theme)
\u2502         \u2514\u2500\u2500 settings.json # Configuration file
\u2502   \u251C\u2500\u2500 directive # Instruction set (if necessary, you can add it yourself)
\u2502   \u251C\u2500\u2500 filters # filter (if necessary, you can add it yourself)
\u2502   \u251C\u2500\u2500 hooks # global hooks
\u2502   \u251C\u2500\u2500 layout # Layout
\u2502   \u251C\u2500\u2500 locale # Internationalized language pack
\u2502   \u251C\u2500\u2500 mock # Mock data
\u2502   \u251C\u2500\u2500 views # Page template
|   |\u2014\u2014 router # Routing configuration
\u2502   \u251C\u2500\u2500 store # State management center
\u2502   \u251C\u2500\u2500 types # Typescript types
\u2502   \u2514\u2500\u2500 utils # Tool library
\u2502   \u2514\u2500\u2500 App.vue # View entrance
\u2502   \u2514\u2500\u2500 main.ts # Entry file
\u2514\u2500\u2500 tsconfig.json
`)],-1)),e[3]||(e[3]=u("p",null,[l("ps: "),u("a",{class:"link",href:"https://v3-migration.vuejs.org/breaking-changes/filters.html"},"Filter description")],-1))]),_:1},16,["changelog"])}var b=p(k,[["render",v]]);export{b as default};
