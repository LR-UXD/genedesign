import{_ as I,d as N,u as V,r as s,o as M,c as S,w as n,a as l,b as e,e as o,m as $}from"./index.9c61ea88.js";import{D as j,a as L,b as R,c as q,d as G,e as H,f as J,g as K,h as O,i as Q}from"./icon.834e2941.js";import"./index.2b17769d.js";import"./index.5bc6c633.js";var g=[{version:"2.52.1",date:"2023-10-13",list:[{type:"enhancement",typeText:"\u{1F48E} \u529F\u80FD\u4F18\u5316",list:[`<p>\u4F18\u5316\u5BF9 <code>undefined</code> \u548C <code>null</code> \u503C\u7684\u5904\u7406 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2737">#2737</a>)</p>
`]}],extra:[]},{version:"2.45.0",date:"2023-04-07",list:[{type:"feature",typeText:"\u{1F195} \u65B0\u589E\u529F\u80FD",list:[`<p>\u65B0\u589E\u6587\u6848\u663E\u793Aprops (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2223">#2223</a>)</p>
`]}],extra:[]},{version:"2.42.0",date:"2023-01-13",list:[{type:"bugfix",typeText:"\u{1F41B} \u95EE\u9898\u4FEE\u590D",list:[`<p>\u4FEE\u590D\u7C7B\u578B\u4E3A<code>line</code>\u65F6\u81EA\u5B9A\u4E49\u989C\u8272\u6837\u5F0F\u9519\u8BEF\u7684\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/2044">#2044</a>)</p>
`]}],extra:[]},{version:"2.40.1",date:"2022-12-23",list:[{type:"bugfix",typeText:"\u{1F41B} \u95EE\u9898\u4FEE\u590D",list:[`<p>\u4FEE\u590Dswitch\u7EC4\u4EF6type\u4E3Aline,size\u4E3Asmall,checked\u72B6\u6001\u5706\u70B9\u504F\u79FB\u4E0D\u6B63\u786E (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1975">#1975</a>)</p>
`]}],extra:[]},{version:"2.39.0",date:"2022-11-18",list:[{type:"bugfix",typeText:"\u{1F41B} \u95EE\u9898\u4FEE\u590D",list:[`<p>\u4FEE\u590D\u72B6\u6001\u6539\u53D8\u524D\u94A9\u5B50\u7684\u503C (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1859">#1859</a>)</p>
`,`<p>\u4FEE\u590D\u6837\u5F0F token \u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1859">#1859</a>)</p>
`]}],extra:[]},{version:"2.37.0",date:"2022-09-16",list:[{type:"feature",typeText:"\u{1F195} \u65B0\u589E\u529F\u80FD",list:[`<p>\u652F\u6301 <code>beforeChange</code> \u5207\u6362\u4E8B\u4EF6\u62E6\u622A (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/1626">#1626</a>)</p>
`]}],extra:[]},{version:"2.17.0",date:"2022-02-11",list:[{type:"style",typeText:"\u{1F485} \u6837\u5F0F\u66F4\u65B0",list:[`<p>\u4FEE\u590D\u5F00\u5173\u52A8\u753B\u5076\u73B0\u6296\u52A8\u95EE\u9898 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/656">#656</a>)</p>
`]}],extra:[]},{version:"2.12.0",date:"2021-12-24",list:[{type:"feature",typeText:"\u{1F195} \u65B0\u589E\u529F\u80FD",list:[`<p>\u589E\u52A0 <code>checked-value</code> \u548C <code>unchecked-value</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/444">#444</a>)</p>
`,`<p>\u589E\u52A0 <code>checked-color</code> \u548C <code>unchecked-color</code> \u5C5E\u6027 (<a class="link" href="https://github.com/arco-design/arco-design-vue/pull/444">#444</a>)</p>
`]}],extra:[]}];const U=N({name:"ArcoMain",components:{DemoBasic:j,DemoType:L,DemoSize:R,DemoDisabled:q,DemoColor:G,DemoValue:H,DemoChangeIntercept:J,DemoLoading:K,DemoText:O,DemoIcon:Q},setup(){const{locale:i}=V();return{locale:i,data:{meta:{type:"\u7EC4\u4EF6",category:"\u6570\u636E\u8F93\u5165"},title:"\u5F00\u5173 Switch",description:"\u4E92\u65A5\u6027\u7684\u64CD\u4F5C\u63A7\u4EF6\uFF0C\u7528\u6237\u53EF\u6253\u5F00\u6216\u5173\u95ED\u67D0\u4E2A\u529F\u80FD\u3002"},changelog:typeof g=="undefined"?void 0:g,getMessage:(m,F)=>i.value==="zh-CN"?m:F}}});function W(i,u,E,D,m,F){const b=s("demo-basic"),v=s("demo-type"),C=s("demo-size"),y=s("demo-disabled"),x=s("demo-color"),B=s("demo-value"),k=s("demo-change-intercept"),A=s("demo-loading"),w=s("demo-text"),z=s("demo-icon"),T=s("anchor-head"),f=s("a-th"),d=s("a-tr"),a=s("a-thead"),t=s("a-td"),r=s("a-tbody"),p=s("a-table"),P=s("arco-article");return M(),S(P,$(i.data,{changelog:i.changelog}),{default:n(()=>[l(b),l(v),l(C),l(y),l(x),l(B),l(k),l(A),l(w),l(z),l(T,{level:"2",href:"API"},{default:n(()=>u[0]||(u[0]=[e("API")])),_:1}),u[95]||(u[95]=o("h3",{id:"switch Props"},[o("code",null,"<switch>"),e(" Props")],-1)),l(p,{class:"component-api-table"},{default:n(()=>[u[65]||(u[65]=o("colgroup",null,[o("col",{style:{"min-width":"120px"}})],-1)),l(a,null,{default:n(()=>[l(d,null,{default:n(()=>[l(f,null,{default:n(()=>u[1]||(u[1]=[e("\u53C2\u6570\u540D")])),_:1}),l(f,null,{default:n(()=>u[2]||(u[2]=[e("\u63CF\u8FF0")])),_:1}),l(f,null,{default:n(()=>u[3]||(u[3]=[e("\u7C7B\u578B")])),_:1}),l(f,null,{default:n(()=>u[4]||(u[4]=[e("\u9ED8\u8BA4\u503C")])),_:1}),l(f,null,{default:n(()=>u[5]||(u[5]=[e("\u7248\u672C")])),_:1})]),_:1})]),_:1}),l(r,null,{default:n(()=>[l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[6]||(u[6]=[e("model-value "),o("strong",null,"(v-model)",-1)])),_:1}),l(t,null,{default:n(()=>u[7]||(u[7]=[e("\u7ED1\u5B9A\u503C")])),_:1}),l(t,null,{default:n(()=>u[8]||(u[8]=[o("code",null,"string|number|boolean",-1)])),_:1}),l(t,null,{default:n(()=>u[9]||(u[9]=[o("code",null,"-",-1)])),_:1}),l(t)]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[10]||(u[10]=[e("default-checked")])),_:1}),l(t,null,{default:n(()=>u[11]||(u[11]=[e("\u9ED8\u8BA4\u9009\u4E2D\u72B6\u6001\uFF08\u975E\u53D7\u63A7\u72B6\u6001\uFF09")])),_:1}),l(t,null,{default:n(()=>u[12]||(u[12]=[o("code",null,"boolean",-1)])),_:1}),l(t,null,{default:n(()=>u[13]||(u[13]=[o("code",null,"false",-1)])),_:1}),l(t)]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[14]||(u[14]=[e("disabled")])),_:1}),l(t,null,{default:n(()=>u[15]||(u[15]=[e("\u662F\u5426\u7981\u7528")])),_:1}),l(t,null,{default:n(()=>u[16]||(u[16]=[o("code",null,"boolean",-1)])),_:1}),l(t,null,{default:n(()=>u[17]||(u[17]=[o("code",null,"false",-1)])),_:1}),l(t)]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[18]||(u[18]=[e("loading")])),_:1}),l(t,null,{default:n(()=>u[19]||(u[19]=[e("\u662F\u5426\u4E3A\u52A0\u8F7D\u4E2D\u72B6\u6001")])),_:1}),l(t,null,{default:n(()=>u[20]||(u[20]=[o("code",null,"boolean",-1)])),_:1}),l(t,null,{default:n(()=>u[21]||(u[21]=[o("code",null,"false",-1)])),_:1}),l(t)]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[22]||(u[22]=[e("type")])),_:1}),l(t,null,{default:n(()=>u[23]||(u[23]=[e("\u5F00\u5173\u7684\u7C7B\u578B")])),_:1}),l(t,null,{default:n(()=>u[24]||(u[24]=[o("code",null,"'circle' | 'round' | 'line'",-1)])),_:1}),l(t,null,{default:n(()=>u[25]||(u[25]=[o("code",null,"'circle'",-1)])),_:1}),l(t)]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[26]||(u[26]=[e("size")])),_:1}),l(t,null,{default:n(()=>u[27]||(u[27]=[e("\u5F00\u5173\u7684\u5927\u5C0F")])),_:1}),l(t,null,{default:n(()=>u[28]||(u[28]=[o("code",null,"'small' | 'medium'",-1)])),_:1}),l(t,null,{default:n(()=>u[29]||(u[29]=[o("code",null,"'medium'",-1)])),_:1}),l(t)]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[30]||(u[30]=[e("checked-value")])),_:1}),l(t,null,{default:n(()=>u[31]||(u[31]=[e("\u9009\u4E2D\u65F6\u7684\u503C")])),_:1}),l(t,null,{default:n(()=>u[32]||(u[32]=[o("code",null,"string|number|boolean",-1)])),_:1}),l(t,null,{default:n(()=>u[33]||(u[33]=[o("code",null,"true",-1)])),_:1}),l(t,null,{default:n(()=>u[34]||(u[34]=[e("2.12.0")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[35]||(u[35]=[e("unchecked-value")])),_:1}),l(t,null,{default:n(()=>u[36]||(u[36]=[e("\u672A\u9009\u4E2D\u65F6\u7684\u503C")])),_:1}),l(t,null,{default:n(()=>u[37]||(u[37]=[o("code",null,"string|number|boolean",-1)])),_:1}),l(t,null,{default:n(()=>u[38]||(u[38]=[o("code",null,"false",-1)])),_:1}),l(t,null,{default:n(()=>u[39]||(u[39]=[e("2.12.0")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[40]||(u[40]=[e("checked-color")])),_:1}),l(t,null,{default:n(()=>u[41]||(u[41]=[e("\u9009\u4E2D\u65F6\u7684\u5F00\u5173\u989C\u8272")])),_:1}),l(t,null,{default:n(()=>u[42]||(u[42]=[o("code",null,"string",-1)])),_:1}),l(t,null,{default:n(()=>u[43]||(u[43]=[o("code",null,"-",-1)])),_:1}),l(t,null,{default:n(()=>u[44]||(u[44]=[e("2.12.0")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[45]||(u[45]=[e("unchecked-color")])),_:1}),l(t,null,{default:n(()=>u[46]||(u[46]=[e("\u672A\u9009\u4E2D\u65F6\u7684\u5F00\u5173\u989C\u8272")])),_:1}),l(t,null,{default:n(()=>u[47]||(u[47]=[o("code",null,"string",-1)])),_:1}),l(t,null,{default:n(()=>u[48]||(u[48]=[o("code",null,"-",-1)])),_:1}),l(t,null,{default:n(()=>u[49]||(u[49]=[e("2.12.0")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[50]||(u[50]=[e("before-change")])),_:1}),l(t,null,{default:n(()=>u[51]||(u[51]=[e("switch \u72B6\u6001\u6539\u53D8\u524D\u7684\u94A9\u5B50\uFF0C \u8FD4\u56DE false \u6216\u8005\u8FD4\u56DE Promise \u4E14\u88AB reject \u5219\u505C\u6B62\u5207\u6362\u3002")])),_:1}),l(t,null,{default:n(()=>u[52]||(u[52]=[o("code",null,"( newValue: string | number | boolean) => Promise<boolean | void> | boolean | void",-1)])),_:1}),l(t,null,{default:n(()=>u[53]||(u[53]=[o("code",null,"-",-1)])),_:1}),l(t,null,{default:n(()=>u[54]||(u[54]=[e("2.37.0")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[55]||(u[55]=[e("checked-text")])),_:1}),l(t,null,{default:n(()=>u[56]||(u[56]=[e("\u6253\u5F00\u72B6\u6001\u65F6\u7684\u6587\u6848\uFF08"),o("code",null,"type='line'",-1),e("\u548C"),o("code",null,"size='small'",-1),e("\u65F6\u4E0D\u751F\u6548\uFF09")])),_:1}),l(t,null,{default:n(()=>u[57]||(u[57]=[o("code",null,"string",-1)])),_:1}),l(t,null,{default:n(()=>u[58]||(u[58]=[o("code",null,"-",-1)])),_:1}),l(t,null,{default:n(()=>u[59]||(u[59]=[e("2.45.0")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[60]||(u[60]=[e("unchecked-text")])),_:1}),l(t,null,{default:n(()=>u[61]||(u[61]=[e("\u5173\u95ED\u72B6\u6001\u65F6\u7684\u6587\u6848\uFF08"),o("code",null,"type='line'",-1),e("\u548C"),o("code",null,"size='small'",-1),e("\u65F6\u4E0D\u751F\u6548\uFF09")])),_:1}),l(t,null,{default:n(()=>u[62]||(u[62]=[o("code",null,"string",-1)])),_:1}),l(t,null,{default:n(()=>u[63]||(u[63]=[o("code",null,"-",-1)])),_:1}),l(t,null,{default:n(()=>u[64]||(u[64]=[e("2.45.0")])),_:1})]),_:1})]),_:1})]),_:1}),u[96]||(u[96]=o("h3",{id:"switch Events"},[o("code",null,"<switch>"),e(" Events")],-1)),l(p,{class:"component-api-table"},{default:n(()=>[u[78]||(u[78]=o("colgroup",null,[o("col",{style:{"min-width":"120px"}})],-1)),l(a,null,{default:n(()=>[l(d,null,{default:n(()=>[l(f,null,{default:n(()=>u[66]||(u[66]=[e("\u4E8B\u4EF6\u540D")])),_:1}),l(f,null,{default:n(()=>u[67]||(u[67]=[e("\u63CF\u8FF0")])),_:1}),l(f,null,{default:n(()=>u[68]||(u[68]=[e("\u53C2\u6570")])),_:1})]),_:1})]),_:1}),l(r,null,{default:n(()=>[l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[69]||(u[69]=[e("change")])),_:1}),l(t,null,{default:n(()=>u[70]||(u[70]=[e("\u503C\u6539\u53D8\u65F6\u89E6\u53D1")])),_:1}),l(t,null,{default:n(()=>u[71]||(u[71]=[e("value: "),o("code",null,"boolean | string | number",-1),o("br",null,null,-1),e("ev: "),o("code",null,"Event",-1)])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[72]||(u[72]=[e("focus")])),_:1}),l(t,null,{default:n(()=>u[73]||(u[73]=[e("\u7EC4\u4EF6\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1")])),_:1}),l(t,null,{default:n(()=>u[74]||(u[74]=[e("ev: "),o("code",null,"FocusEvent",-1)])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[75]||(u[75]=[e("blur")])),_:1}),l(t,null,{default:n(()=>u[76]||(u[76]=[e("\u7EC4\u4EF6\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1")])),_:1}),l(t,null,{default:n(()=>u[77]||(u[77]=[e("ev: "),o("code",null,"FocusEvent",-1)])),_:1})]),_:1})]),_:1})]),_:1}),u[97]||(u[97]=o("h3",{id:"switch Slots"},[o("code",null,"<switch>"),e(" Slots")],-1)),l(p,{class:"component-api-table"},{default:n(()=>[u[94]||(u[94]=o("colgroup",null,[o("col",{style:{"min-width":"120px"}})],-1)),l(a,null,{default:n(()=>[l(d,null,{default:n(()=>[l(f,null,{default:n(()=>u[79]||(u[79]=[e("\u63D2\u69FD\u540D")])),_:1}),l(f,null,{default:n(()=>u[80]||(u[80]=[e("\u63CF\u8FF0")])),_:1}),l(f,null,{default:n(()=>u[81]||(u[81]=[e("\u53C2\u6570")])),_:1})]),_:1})]),_:1}),l(r,null,{default:n(()=>[l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[82]||(u[82]=[e("checked-icon")])),_:1}),l(t,null,{default:n(()=>u[83]||(u[83]=[e("\u6253\u5F00\u72B6\u6001\u65F6\uFF0C\u6309\u94AE\u4E0A\u7684\u56FE\u6807")])),_:1}),l(t,null,{default:n(()=>u[84]||(u[84]=[e("-")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[85]||(u[85]=[e("unchecked-icon")])),_:1}),l(t,null,{default:n(()=>u[86]||(u[86]=[e("\u5173\u95ED\u72B6\u6001\u65F6\uFF0C\u6309\u94AE\u4E0A\u7684\u56FE\u6807")])),_:1}),l(t,null,{default:n(()=>u[87]||(u[87]=[e("-")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[88]||(u[88]=[e("checked")])),_:1}),l(t,null,{default:n(()=>u[89]||(u[89]=[e("\u6253\u5F00\u72B6\u6001\u65F6\u7684\u6587\u6848\uFF08"),o("code",null,"type='line'",-1),e("\u548C"),o("code",null,"size='small'",-1),e("\u65F6\u4E0D\u751F\u6548\uFF09")])),_:1}),l(t,null,{default:n(()=>u[90]||(u[90]=[e("-")])),_:1})]),_:1}),l(d,null,{default:n(()=>[l(t,null,{default:n(()=>u[91]||(u[91]=[e("unchecked")])),_:1}),l(t,null,{default:n(()=>u[92]||(u[92]=[e("\u5173\u95ED\u72B6\u6001\u65F6\u7684\u6587\u6848\uFF08"),o("code",null,"type='line'",-1),e("\u548C"),o("code",null,"size='small'",-1),e("\u65F6\u4E0D\u751F\u6548\uFF09")])),_:1}),l(t,null,{default:n(()=>u[93]||(u[93]=[e("-")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1},16,["changelog"])}var h=I(U,[["render",W]]);export{h as default};
