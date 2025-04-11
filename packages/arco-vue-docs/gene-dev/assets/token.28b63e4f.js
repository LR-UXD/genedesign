import{d as b,i as k,_ as y,fi as x,ed as N,r as n,o as d,c as B,w as c,e as t,l as p,p as z,e9 as w,e5 as m,b as g,fj as T,g as _,fk as S,cA as V,cy as L,u as $,ea as H,eb as R,a as l,e7 as I,e6 as C}from"./index.9c61ea88.js";const M=b({name:"TokenTable",props:{data:Array,type:{type:String,default:"color"},dark:Boolean,local:{type:String,default:"zh-CN"}},setup(e){return{columns:k(()=>[{title:e.local==="en-US"?"Token":"\u53D8\u91CF\u540D",dataIndex:"name",slotName:"name",width:200},{title:e.local==="en-US"?"Value":"\u53D8\u91CF\u503C",dataIndex:"value",width:250,slotName:"value"},{title:e.local==="en-US"?"Css Var":"CSS\u53D8\u91CF",dataIndex:"cssvar",slotName:"cssvar",width:200},{title:e.local==="en-US"?"Description":"\u63CF\u8FF0",dataIndex:e.local==="en-US"?"descEN":"desc"}]),onValueClick:s=>{const o=s.target.textContent;o&&x(o).then(()=>{N.success("Copy Success!")}).catch(()=>{N.error("Copy Failed! Please try again.")})}}}}),P={class:"token-content"},U={class:"token-text"};function W(e,a,i,s,o,h){const F=n("a-table");return d(),B(F,{columns:e.columns,data:e.data,pagination:!1},{name:c(({record:u})=>{var r;return[t("div",P,[e.type==="color"?(d(),p("div",{key:0,class:"token-sample",style:z({backgroundColor:e.dark&&(r=u.darkValue)!=null?r:u.value})},null,4)):w("v-if",!0),t("div",U,m(e.type==="color"&&e.dark?`dark-${u.name}`:u.name),1)])]}),value:c(({record:u})=>{var r;return[t("span",{class:"token-value",onClick:a[0]||(a[0]=(...E)=>e.onValueClick&&e.onValueClick(...E))},m(e.dark&&(r=u.darkValue)!=null?r:u.value),1)]}),cssvar:c(({record:u})=>[g(m(u.cssvar?`--${u.name}`:"-"),1)]),_:1},8,["columns","data"])}var O=y(M,[["render",W]]);const G=[{name:"\u4E3B\u8272",nameEN:"Primary",type:"color",tokens:[{name:"primary-6",desc:"\u5E38\u89C4",descEN:"Normal",value:"rgb(var(--arcoblue-6))",cssvar:!0},{name:"primary-5",desc:"\u60AC\u6D6E\uFF08hover\uFF09",descEN:"Hover",value:"rgb(var(--arcoblue-5))",cssvar:!0},{name:"primary-7",desc:"\u70B9\u51FB\uFF08click\uFF09",descEN:"Click",value:"rgb(var(--arcoblue-7))",cssvar:!0},{name:"primary-4",desc:"\u7279\u6B8A\u573A\u666F",descEN:"Special scene",value:"rgb(var(--arcoblue-4))",cssvar:!0},{name:"primary-3",desc:"\u4E00\u822C\u7981\u7528",descEN:"Normally disabled",value:"rgb(var(--arcoblue-3))",cssvar:!0},{name:"primary-2",desc:"\u6587\u5B57\u7981\u7528",descEN:"Text disabled",value:"rgb(var(--arcoblue-2))",cssvar:!0},{name:"primary-1",desc:"\u6D45\u8272/\u767D\u5E95\u60AC\u6D6E",descEN:"Light/white suspension",value:"rgb(var(--arcoblue-1))",cssvar:!0}]},{name:"\u6210\u529F\u8272",nameEN:"Success",type:"color",tokens:[{name:"success-6",desc:"\u5E38\u89C4",descEN:"Normal",value:"rgb(var(--green-6))",cssvar:!0},{name:"success-5",desc:"\u60AC\u6D6E\uFF08hover\uFF09",descEN:"Hover",value:"rgb(var(--green-5))",cssvar:!0},{name:"success-7",desc:"\u70B9\u51FB\uFF08click\uFF09",descEN:"Click",value:"rgb(var(--green-7))",cssvar:!0},{name:"success-4",desc:"\u7279\u6B8A\u573A\u666F",descEN:"Special scene",value:"rgb(var(--green-4))",cssvar:!0},{name:"success-3",desc:"\u4E00\u822C\u7981\u7528",descEN:"Normally disabled",value:"rgb(var(--green-3))",cssvar:!0},{name:"success-2",desc:"\u6587\u5B57\u7981\u7528",descEN:"Text disabled",value:"rgb(var(--green-2))",cssvar:!0},{name:"success-1",desc:"\u6D45\u8272/\u767D\u5E95\u60AC\u6D6E",descEN:"Light/white suspension",value:"rgb(var(--green-1))",cssvar:!0}]},{name:"\u8B66\u793A\u8272",nameEN:"Warning",type:"color",tokens:[{name:"warning-6",desc:"\u5E38\u89C4",descEN:"Normal",value:"rgb(var(--orange-6))",cssvar:!0},{name:"warning-5",desc:"\u60AC\u6D6E\uFF08hover\uFF09",descEN:"Hover",value:"rgb(var(--orange-5))",cssvar:!0},{name:"warning-7",desc:"\u70B9\u51FB\uFF08click\uFF09",descEN:"Click",value:"rgb(var(--orange-7))",cssvar:!0},{name:"warning-4",desc:"\u7279\u6B8A\u573A\u666F",descEN:"Special scene",value:"rgb(var(--orange-4))",cssvar:!0},{name:"warning-3",desc:"\u4E00\u822C\u7981\u7528",descEN:"Normally disabled",value:"rgb(var(--orange-3))",cssvar:!0},{name:"warning-2",desc:"\u6587\u5B57\u7981\u7528",descEN:"Text disabled",value:"rgb(var(--orange-2))",cssvar:!0},{name:"warning-1",desc:"\u6D45\u8272/\u767D\u5E95\u60AC\u6D6E",descEN:"Light/white suspension",value:"rgb(var(--orange-1))",cssvar:!0}]},{name:"\u9519\u8BEF\u8272",nameEN:"Danger",type:"color",tokens:[{name:"danger-6",desc:"\u5E38\u89C4",descEN:"Normal",value:"rgb(var(--red-6))",cssvar:!0},{name:"danger-5",desc:"\u60AC\u6D6E\uFF08hover\uFF09",descEN:"Hover",value:"rgb(var(--red-5))",cssvar:!0},{name:"danger-7",desc:"\u70B9\u51FB\uFF08click\uFF09",descEN:"Click",value:"rgb(var(--red-7))",cssvar:!0},{name:"danger-4",desc:"\u7279\u6B8A\u573A\u666F",descEN:"Special scene",value:"rgb(var(--red-4))",cssvar:!0},{name:"danger-3",desc:"\u4E00\u822C\u7981\u7528",descEN:"Normally disabled",value:"rgb(var(--red-3))",cssvar:!0},{name:"danger-2",desc:"\u6587\u5B57\u7981\u7528",descEN:"Text disabled",value:"rgb(var(--red-2))",cssvar:!0},{name:"danger-1",desc:"\u6D45\u8272/\u767D\u5E95\u60AC\u6D6E",descEN:"Light/white suspension",value:"rgb(var(--red-1))",cssvar:!0}]},{name:"\u94FE\u63A5\u8272",nameEN:"Link",type:"color",tokens:[{name:"link-6",desc:"\u5E38\u89C4",descEN:"Normal",value:"rgb(var(--arcoblue-6))",cssvar:!0},{name:"link-5",desc:"\u60AC\u6D6E\uFF08hover\uFF09",descEN:"Hover",value:"rgb(var(--arcoblue-5))",cssvar:!0},{name:"link-7",desc:"\u70B9\u51FB\uFF08click\uFF09",descEN:"Click",value:"rgb(var(--arcoblue-7))",cssvar:!0},{name:"link-4",desc:"\u7279\u6B8A\u573A\u666F",descEN:"Special scene",value:"rgb(var(--arcoblue-4))",cssvar:!0},{name:"link-3",desc:"\u4E00\u822C\u7981\u7528",descEN:"Normally disabled",value:"rgb(var(--arcoblue-3))",cssvar:!0},{name:"link-2",desc:"\u6587\u5B57\u7981\u7528",descEN:"Text disabled",value:"rgb(var(--arcoblue-2))",cssvar:!0},{name:"link-1",desc:"\u6D45\u8272/\u767D\u5E95\u60AC\u6D6E",descEN:"Light/white suspension",value:"rgb(var(--arcoblue-1))",cssvar:!0}]},{name:"\u8FB9\u6846\u989C\u8272",nameEN:"Border Color",type:"color",tokens:[{name:"color-border-1",desc:"\u6D45\u8272",descEN:"Light color",value:"var(--color-neutral-2)",cssvar:!0},{name:"color-border-2",desc:"\u4E00\u822C",descEN:"Normal",value:"var(--color-neutral-3)",cssvar:!0},{name:"color-border-3",desc:"\u6DF1/\u60AC\u6D6E",descEN:"Deep/Hover",value:"var(--color-neutral-4)",cssvar:!0},{name:"color-border-4",desc:"\u91CD/\u6309\u94AE\u63CF\u8FB9",descEN:"Heavy/Button Border",value:"var(--color-neutral-6)",cssvar:!0}]},{name:"\u586B\u5145\u989C\u8272",nameEN:"Fill Color",type:"color",tokens:[{name:"color-fill-1",desc:"\u6D45/\u7981\u7528",descEN:"Light/Disabled",value:"var(--color-neutral-1)",darkValue:"fade(#FFF, 4%)",cssvar:!0},{name:"color-fill-2",desc:"\u5E38\u89C4/\u767D\u5E95\u60AC\u6D6E",descEN:"Normal/White Hover",value:"var(--color-neutral-2)",darkValue:"fade(#FFF, 8%)",cssvar:!0},{name:"color-fill-3",desc:"\u6DF1/\u7070\u5E95\u60AC\u6D6E",descEN:"Deep/Gray Hover",value:"var(--color-neutral-3)",darkValue:"fade(#FFF, 12%)",cssvar:!0},{name:"color-fill-4",desc:"\u91CD/\u7279\u6B8A\u573A\u666F",descEN:"Heavy/Special scene",value:"var(--color-neutral-4)",darkValue:"fade(#FFF, 16%)",cssvar:!0}]},{name:"\u6587\u5B57\u989C\u8272",type:"color",tokens:[{name:"color-text-1",desc:"\u5F3A\u8C03/\u6B63\u6587\u6807\u9898",descEN:"Emphasis/Body Title",value:"var(--color-neutral-10)",darkValue:"fade(#FFF, 90%)",cssvar:!0},{name:"color-text-2",desc:"\u6B21\u5F3A\u8C03/\u6B63\u6587\u6807\u9898",descEN:"Sub-Emphasis/Body Title",value:"var(--color-neutral-8)",darkValue:"fade(#FFF, 70%)",cssvar:!0},{name:"color-text-3",desc:"\u6B21\u8981\u4FE1\u606F",descEN:"Secondary information",value:"var(--color-neutral-6)",darkValue:"fade(#FFF, 50%)",cssvar:!0},{name:"color-text-4",desc:"\u7F6E\u7070\u4FE1\u606F",descEN:"Grayed out information",value:"var(--color-neutral-4)",darkValue:"fade(#FFF, 30%)",cssvar:!0}]},{name:"\u80CC\u666F\u989C\u8272",nameEN:"Background Color",type:"color",tokens:[{name:"color-bg-1",desc:"\u6574\u4F53\u80CC\u666F\u8272",descEN:"Overall background color",value:"#FFF",darkValue:"#17171A",cssvar:!0},{name:"color-bg-2",desc:"\u4E00\u7EA7\u5BB9\u5668\u80CC\u666F",descEN:"Primary container background",value:"#FFF",darkValue:"#232324",cssvar:!0},{name:"color-bg-3",desc:"\u4E8C\u7EA7\u5BB9\u5668\u80CC\u666F",descEN:"Secondary container background",value:"#FFF",darkValue:"#2A2A2B",cssvar:!0},{name:"color-bg-4",desc:"\u4E09\u7EA7\u5BB9\u5668\u80CC\u666F",descEN:"Tertiary container background",value:"#FFF",darkValue:"#313132",cssvar:!0},{name:"color-bg-5",desc:"\u4E0B\u62C9\u5F39\u51FA\u6846\u3001Tooltip \u80CC\u666F\u989C\u8272",descEN:"Popup, Tooltip background color",value:"#FFF",darkValue:"#373739",cssvar:!0},{name:"color-bg-white",desc:"\u767D\u8272\u80CC\u666F",descEN:"White background",value:"#FFF",darkValue:"#F6F6F6",cssvar:!0}]},{name:"\u5B57\u4F53\u5927\u5C0F",nameEN:"Font Size",type:"size",tokens:[{name:"font-size-body-3",desc:"\u6B63\u6587-\u5E38\u89C4",descEN:"Body - General",value:"14px"},{name:"font-size-body-2",desc:"\u6B63\u6587-\u5E38\u89C4-\u5C0F",descEN:"Body - Regular - Small",value:"13px"},{name:"font-size-body-1",desc:"\u8F85\u52A9\u6587\u6848/\u6B21\u8981\u6587\u6848",descEN:"Auxiliary Copywriting/Secondary Copywriting",value:"12px"},{name:"font-size-caption",desc:"\u6C34\u5370\u6587\u672C",descEN:"Watermark text",value:"12px"},{name:"font-size-title-1",desc:"\u6807\u9898-\u5C0F",descEN:"Title - Small",value:"16px"},{name:"font-size-title-2",desc:"\u6807\u9898-\u4E2D",descEN:"Title - Medium",value:"20px"},{name:"font-size-title-3",desc:"\u6807\u9898-\u5927",descEN:"Title - Large",value:"24px"},{name:"font-size-display-1",desc:"\u8FD0\u8425\u6807\u9898-\u5C0F",descEN:"Operational Title - Small",value:"36px"},{name:"font-size-display-2",desc:"\u8FD0\u8425\u6807\u9898-\u4E2D",descEN:"Operational Title - Medium",value:"48px"},{name:"font-size-display-3",desc:"\u8FD0\u8425\u6807\u9898-\u5927",descEN:"Operational Title - Large",value:"56px"}]},{name:"\u5B57\u91CD",nameEN:"Font Wight",type:"size",tokens:[{name:"font-weight-400",desc:"\u5E38\u89C4",descEN:"Normal",value:"400"},{name:"font-weight-500",desc:"\u4E2D\u7B49\uFF08\u52A0\u7C97\uFF09",descEN:"Medium (bold)",value:"500"},{name:"font-weight-600",desc:"\u534A\u7C97",descEN:"Half thick",value:"600"},{name:"font-weight-700",desc:"\u7C97\u4F53",descEN:"Bold",value:"700"},{name:"font-weight-800",desc:"\u4E2D\u9ED1",descEN:"Medium black",value:"800"},{name:"font-weight-900",desc:"\u9ED1\u4F53",descEN:"Black body",value:"900"},{name:"font-weight-300",desc:"\u7EC6\u4F53",descEN:"Fine body",value:"300"},{name:"font-weight-200",desc:"\u7EA4\u7EC6",descEN:"Slim",value:"200"},{name:"font-weight-100",desc:"\u6781\u7EC6",descEN:"Very fine",value:"100"}]},{name:"\u5C3A\u5BF8",nameEN:"Size",type:"size",tokens:[{name:"size-none",desc:"0",value:"0"},{name:"size-1",desc:"4px",value:"4px"},{name:"size-2",desc:"8px",value:"8px"},{name:"size-3",desc:"12px",value:"12px"},{name:"size-4",desc:"\u8FF7\u4F60\uFF0824px\uFF09",value:"16px"},{name:"size-5",desc:"20px",value:"20px"},{name:"size-N",desc:"\u53D8\u91CF\u5BF9\u5E94\u7684\u503C\u4E3A (4 * N)px \u5927\u5C0F",descEN:"The corresponding value of the variable is (4 * N)px size",value:"(4 * N)px"},{name:"size-50",desc:"200px",value:"200px"}]},{name:"\u7EC4\u4EF6\u5C3A\u5BF8",nameEN:"Component Size",type:"size",tokens:[{name:"size-mini",desc:"\u8FF7\u4F60\uFF0824px\uFF09",descEN:"mini(24px)",value:"@size-6"},{name:"size-small",desc:"\u8F83\u5C0F\uFF0828px\uFF09",descEN:"small(28px)",value:"@size-7"},{name:"size-default",desc:"\u4E2D\u7B49\uFF0832px\uFF09",descEN:"medium(32px)",value:"@size-8"},{name:"size-large",desc:"\u8F83\u5927\uFF0836px\uFF09",descEN:"large(36px)",value:"@size-9"}]},{name:"\u8FB9\u6846\u5BBD\u5EA6",nameEN:"Border Size",type:"size",tokens:[{name:"border-none",desc:"\u65E0\u8FB9\u6846",descEN:"None Border",value:"0"},{name:"border-1",desc:"\u5E38\u89C4",descEN:"Normal",value:"1px"},{name:"border-2",desc:"\u8F83\u7C97",descEN:"Thicker",value:"2px"},{name:"border-3",desc:"\u7C97",descEN:"Bold",value:"3px"}]},{name:"\u8FB9\u6846\u5706\u89D2",nameEN:"Border Radius",type:"size",tokens:[{name:"border-radius-none",desc:"\u76F4\u89D2",descEN:"Right angle",value:"0",cssvar:!0},{name:"border-radius-small",desc:"\u5706\u89D2-\u5E38\u89C4",descEN:"Rounded Corners - Regular",value:"2px",cssvar:!0},{name:"border-radius-medium",desc:"\u5706\u89D2-\u4E2D\u7B49",descEN:"Rounded Corners - Medium",value:"4px",cssvar:!0},{name:"border-radius-large",desc:"\u5706\u89D2-\u8F83\u5927",descEN:"Rounded Corners - Larger",value:"8px",cssvar:!0},{name:"border-radius-circle",desc:"\u5706\u89D2-\u5168\u5706\u89D2",descEN:"Rounded Corners - Full Rounded Corners",value:"50%",cssvar:!0}]},{name:"\u9634\u5F71",nameEN:"Shadow",type:"size",tokens:[{name:"shadow-special",desc:"\u7279\u6B8A\u9634\u5F71",descEN:"Special shade",value:"0 0 1px rgba(0, 0, 0, 0.3)"},{name:"shadow1-center",desc:"\u9634\u5F71\u6837\u5F0F1",descEN:"shadow style 1",value:"0 -2px 5px rgba(0, 0, 0, 0.1)"},{name:"shadow2-center",desc:"\u9634\u5F71\u6837\u5F0F2",descEN:"shadow style 2",value:"0 0 10px rgba(0, 0, 0, 0.1)"},{name:"shadow3-center",desc:"\u9634\u5F71\u6837\u5F0F3",descEN:"shadow style 3",value:"0 0 20px rgba(0, 0, 0, 0.1)"}]}],j=()=>{const e=T("vue-site::theme"),a=_(e!=null?e:"light");return{theme:a,handleThemeChange:s=>{s!==a.value&&(a.value=s,s==="dark"?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme"),S("vue-site::theme",s))}}};const q=b({name:"Token",components:{TokenTable:O,IconSunFill:V,IconMoonFill:L},setup(){const{theme:e,handleThemeChange:a}=j(),{t:i,locale:s}=$();return{data:k(()=>s.value==="zh-CN"?{title:"\u8BBE\u8BA1\u53D8\u91CF",description:"\u7EC4\u4EF6\u5E93\u7684\u5168\u5C40 Token\uFF0C\u53EF\u4EE5\u5728\u6B64\u67E5\u770B\u7EC4\u4EF6\u5E93\u5185\u7F6E\u7684\u8BBE\u8BA1\u53D8\u91CF\u4EE5\u53CA\u9ED8\u8BA4\u503C",meta:{type:"\u7EC4\u4EF6",category:"\u901A\u7528"}}:{title:"Design Token",description:"The global Token of the component library, you can view the built-in design variables and default values of the component library here",meta:{type:"Component",category:"Common"}}),tokens:G,locale:s,theme:e,handleThemeChange:a}}}),J={class:"theme-button"};function K(e,a,i,s,o,h){const F=n("icon-sun-fill"),u=n("a-radio"),r=n("icon-moon-fill"),E=n("a-radio-group"),f=n("TokenTable"),D=n("arco-article");return d(),B(D,H(R(e.data)),{default:c(()=>[t("div",J,[l(E,{"model-value":e.theme,type:"button",onChange:e.handleThemeChange},{default:c(()=>[l(u,{value:"light"},{default:c(()=>[l(F),a[0]||(a[0]=g(" Light "))]),_:1}),l(u,{value:"dark"},{default:c(()=>[l(r),a[1]||(a[1]=g(" Dark "))]),_:1})]),_:1},8,["model-value","onChange"])]),(d(!0),p(C,null,I(e.tokens,(v,A)=>(d(),p(C,{key:A},[t("h2",null,m(e.locale==="en-US"?v.nameEN:v.name),1),l(f,{data:v.tokens,type:v.type,dark:e.theme==="dark",local:e.locale,style:{"margin-bottom":"60px"}},null,8,["data","type","dark","local"])],64))),128))]),_:1},16)}var X=y(q,[["render",K]]);export{X as default};
