import{_ as d,r as e,o as y,c as h,w as p,a as u,d as v,u as b,f as _,e as n,b as a,g as f,s as D,m as j}from"./index.e16d0a28.js";const C={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function w(t,s,l,o,i,k){const c=e("a-cascader"),r=e("a-space");return y(),h(r,{direction:"vertical",size:"large"},{default:p(()=>[u(c,{options:o.options,style:{width:"320px"},placeholder:"Please select ..."},null,8,["options"]),u(c,{options:o.options,"default-value":"datunli","expand-trigger":"hover",style:{width:"320px"},placeholder:"Please select ..."},null,8,["options"])]),_:1})}var q=d(C,[["render",w]]);const F=v({name:"ArcoDemo",components:{VirtualDemo:q},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function x(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"basic",title:t.getMessage("\u57FA\u672C\u4F7F\u7528","Basic Usage")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("datunli"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"expand-trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hover"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,"\u7EA7\u8054\u9009\u62E9\u5668\u7684\u57FA\u672C\u7528\u6CD5\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,"The basic usage of cascader.",-1))]),key:"1"}]),1032,["title"])}var Qn=d(F,[["render",x]]);const E={setup(){return{value:f("datunli"),options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function B(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r),style:{width:"320px"},placeholder:"Please select ...","allow-clear":""},null,8,["options","modelValue"])}var A=d(E,[["render",B]]);const M=v({name:"ArcoDemo",components:{VirtualDemo:A},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function H(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"clear",title:t.getMessage("\u5141\u8BB8\u6E05\u9664","Allow Clear")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"allow-clear"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,"\u5141\u8BB8\u6E05\u9664\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,"Allow clear.",-1))]),key:"1"}]),1032,["title"])}var Rn=d(M,[["render",H]]);const z={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian",disabled:!0},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao",disabled:!0}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function V(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,style:{width:"320px"},placeholder:"Please select ..."},null,8,["options"])}var N=d(z,[["render",V]]);const P=v({name:"ArcoDemo",components:{VirtualDemo:N},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function S(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"disabled",title:t.getMessage("\u7981\u7528\u9009\u9879","Disabled Option")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u6307\u5B9A "),n("code",null,"option"),a(" \u7684 "),n("code",null,"disabled"),a(" \u4E3A "),n("code",null,"true"),a("\uFF0C\u53EF\u4EE5\u7981\u7528\u8BE5\u9009\u9879\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("Specify the "),n("code",null,"disabled"),a(" of the "),n("code",null,"option"),a(" as "),n("code",null,"true"),a(" to disable the option.")],-1))]),key:"1"}]),1032,["title"])}var Wn=d(P,[["render",S]]);const T={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}],format:l=>l.map(i=>i.label).join("-")}}};function X(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,"default-value":"datunli",style:{width:"320px"},placeholder:"Please select ...","format-label":o.format},null,8,["options","format-label"])}var Y=d(T,[["render",X]]);const J=v({name:"ArcoDemo",components:{VirtualDemo:Y},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function L(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"format",title:t.getMessage("\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u7684\u5C55\u793A\u503C","asdf")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("datunli"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":format-label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("format"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"format"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"options"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" labels "),n("span",{class:"token operator"},"="),a(" options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),a(),n("span",{class:"token operator"},"=>"),a(" option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" labels"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      format
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u5229\u7528 "),n("code",null,"formatLabel"),a(" \u5BF9\u663E\u793A\u7684\u5185\u5BB9\u8FDB\u884C\u81EA\u5B9A\u4E49\u5904\u7406\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("Use "),n("code",null,"formatLabel"),a(" to customize the displayed content.")],-1))]),key:"1"}]),1032,["title"])}var Zn=d(J,[["render",L]]);const O={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function U(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,"default-value":["datunli"],style:{width:"320px"},placeholder:"Please select ...",multiple:""},null,8,["options"])}var I=d(O,[["render",U]]);const G=v({name:"ArcoDemo",components:{VirtualDemo:I},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function K(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"multiple",title:t.getMessage("\u591A\u9009\u6A21\u5F0F","Multiple")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['datunli']"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"multiple"),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u901A\u8FC7\u8BBE\u7F6E "),n("code",null,"multiple"),a(" \u5F00\u542F\u591A\u9009\u6A21\u5F0F\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("Enable multiple selection mode by setting "),n("code",null,"multiple"),a(".")],-1))]),key:"1"}]),1032,["title"])}var na=d(G,[["render",K]]);const Q={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian",disabled:!0},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function R(t,s,l,o,i,k){const c=e("a-cascader"),r=e("a-space");return y(),h(r,{direction:"vertical",size:"large"},{default:p(()=>[u(c,{options:o.options,"default-value":"beijing",style:{width:"320px"},placeholder:"Please select ...","check-strictly":""},null,8,["options"]),u(c,{options:o.options,"default-value":["beijing"],style:{width:"320px"},placeholder:"Please select ...",multiple:"","check-strictly":""},null,8,["options"])]),_:1})}var W=d(Q,[["render",R]]);const Z=v({name:"ArcoDemo",components:{VirtualDemo:W},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function nn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"check-strictly",title:t.getMessage("\u4E25\u683C\u9009\u62E9\u6A21\u5F0F","Check strictly")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beijing"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"check-strictly"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("['beijing']"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"multiple"),a(),n("span",{class:"token attr-name"},"check-strictly"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u8BBE\u7F6E\u5C5E\u6027 "),n("code",null,"check-strictly"),a("\uFF0C\u5F00\u542F\u4E25\u683C\u9009\u62E9\u6A21\u5F0F\uFF0C\u70B9\u51FB\u4EFB\u4F55\u7ED3\u70B9\u90FD\u53EF\u4EE5\u9009\u62E9\u3002\u591A\u9009\u65F6\u5C06\u4F1A\u89E3\u9664\u7236\u5B50\u8282\u70B9\u7684\u5173\u8054\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("Set the attribute "),n("code",null,"check-strictly"),a(", turn on any selectable mode, and click any node to select. Multiple selections will disassociate the parent and child nodes.")],-1))]),key:"1"}]),1032,["title"])}var aa=d(Z,[["render",nn]]);const an={};function sn(t,s){const l=e("a-cascader");return y(),h(l,{options:[],style:{width:"320px"},placeholder:"Please select ...",loading:""})}var tn=d(an,[["render",sn]]);const on=v({name:"ArcoDemo",components:{VirtualDemo:tn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function en(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"loading",title:t.getMessage("\u52A0\u8F7D\u4E2D","Loading")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"loading"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,"\u9009\u62E9\u6846\u548C\u4E0B\u62C9\u83DC\u5355\u663E\u793A\u52A0\u8F7D\u4E2D\u72B6\u6001\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,"Select boxes and drop-down menus show loading status.",-1))]),key:"1"}]),1032,["title"])}var sa=d(on,[["render",en]]);const pn={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang"},{value:"haidian",label:"Haidian",isLeaf:!0},{value:"dongcheng",label:"Dongcheng",isLeaf:!0},{value:"xicheng",label:"Xicheng"}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu",isLeaf:!0}]}],loadMore:(l,o)=>{window.setTimeout(()=>{const i=[{value:`${l.value}-option1`,label:`${l.label}-Option1`,isLeaf:!0},{value:`${l.value}-option2`,label:`${l.label}-Option2`,isLeaf:!0}];o(i)},2e3)}}}};function ln(t,s,l,o,i,k){const c=e("a-cascader"),r=e("a-space");return y(),h(r,null,{default:p(()=>[u(c,{options:o.options,style:{width:"320px"},placeholder:"Please select ...","load-more":o.loadMore},null,8,["options","load-more"])]),_:1})}var cn=d(pn,[["render",ln]]);const un=v({name:"ArcoDemo",components:{VirtualDemo:cn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function rn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"lazy-load",title:t.getMessage("\u5B50\u9009\u9879\u61D2\u52A0\u8F7D","Lazy load")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":load-more"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loadMore"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"loadMore"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("option"),n("span",{class:"token punctuation"},","),a(" done")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      window`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" nodes "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("option"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-option1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-Option1"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("option"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-option2"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"-Option2"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token function"},"done"),n("span",{class:"token punctuation"},"("),a("nodes"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      loadMore
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u901A\u8FC7 "),n("code",null,"load-more"),a(" \u5C5E\u6027\u53EF\u4EE5\u5F00\u542F\u6570\u636E\u61D2\u52A0\u8F7D\u529F\u80FD\u3002"),n("br"),a("\u5F00\u542F\u6570\u636E\u61D2\u52A0\u8F7D\u529F\u80FD\u540E\uFF0C\u9700\u8981\u5728\u53F6\u5B50\u8282\u70B9\u6807\u6CE8 "),n("code",null,"isLeaf: true"),a("\uFF0C\u6CA1\u6709\u6807\u6CE8\u4E14\u6CA1\u6709 "),n("code",null,"children"),a(" \u5C5E\u6027\u7684\u8282\u70B9\u4F1A\u8BA4\u4E3A\u9700\u8981\u61D2\u52A0\u8F7D\u5904\u7406\u3002"),n("br"),n("code",null,"load-more"),a(" \u5C5E\u6027\u6709\u63D0\u4F9B "),n("code",null,"done"),a(" \u51FD\u6570\u8FDB\u884C\u56DE\u8C03\uFF0C\u53EF\u4EE5\u5728\u56DE\u8C03\u4E2D\u4F20\u5165\u61D2\u52A0\u8F7D\u7684\u5B50\u6570\u636E\u3002\u5982\u679C "),n("code",null,"done"),a(" \u51FD\u6570\u6CA1\u6709\u4F20\u5165\u6570\u636E\u4F1A\u8BA4\u4E3A\u61D2\u52A0\u8F7D\u5931\u8D25\uFF0C\u6B64\u8282\u70B9\u53EF\u4EE5\u518D\u6B21\u89E6\u53D1\u61D2\u52A0\u8F7D\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("The lazy data loading function can be turned on through the "),n("code",null,"load-more"),a(" attribute."),n("br"),a("After the data lazy loading function is enabled, the leaf nodes need to be marked with "),n("code",null,"isLeaf: true"),a(". Nodes that are not marked and have no "),n("code",null,"children"),a(" attribute will be considered as requiring lazy loading."),n("br"),a("The "),n("code",null,"load-more"),a(" attribute provides a "),n("code",null,"done"),a(" function for callback, and lazy loaded sub-data can be passed in the callback. If the "),n("code",null,"done"),a(" function does not pass in data, it will be considered as a lazy loading failure, and this node can trigger lazy loading again.")],-1))]),key:"1"}]),1032,["title"])}var ta=d(un,[["render",rn]]);const kn={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function gn(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,style:{width:"320px"},placeholder:"Please select ...","allow-search":""},null,8,["options"])}var dn=d(kn,[["render",gn]]);const yn=v({name:"ArcoDemo",components:{VirtualDemo:dn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function hn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"search",title:t.getMessage("\u5141\u8BB8\u641C\u7D22","Allow Search")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"allow-search"),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u901A\u8FC7\u8BBE\u7F6E "),n("code",null,"allow-search"),a(" \u8BA9\u8F93\u5165\u6846\u652F\u6301\u641C\u7D22\u529F\u80FD\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("Make the input box support search function by setting "),n("code",null,"allow-search"),a(".")],-1))]),key:"1"}]),1032,["title"])}var oa=d(yn,[["render",hn]]);const mn={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}],handleChange:l=>{console.log(l)}}}};function vn(t,s,l,o,i,k){const c=e("a-cascader"),r=e("a-space");return y(),h(r,{direction:"vertical",size:"large"},{default:p(()=>[u(c,{options:o.options,style:{width:"320px"},placeholder:"Please select ...","path-mode":"",onChange:o.handleChange},null,8,["options","onChange"]),u(c,{options:o.options,"default-value":[["beijing","chaoyang","datunli"]],style:{width:"320px"},placeholder:"Please select ...","path-mode":"",onChange:o.handleChange},null,8,["options","onChange"])]),_:1})}var bn=d(mn,[["render",vn]]);const _n=v({name:"ArcoDemo",components:{VirtualDemo:bn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function fn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"path",title:t.getMessage("\u8DEF\u5F84\u6A21\u5F0F","path mode")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"path-mode"),a(`
                `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
                `),n("span",{class:"token attr-name"},":default-value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[['beijing','chaoyang','datunli']]"),n("span",{class:"token punctuation"},'"')]),a(`
                `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(`
                `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
                `),n("span",{class:"token attr-name"},"path-mode"),a(`
                `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"path"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("path"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      handleChange
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[n("code",null,"modelValue"),a(" \u4F7F\u7528\u8DEF\u5F84\u4F5C\u4E3A\u503C\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[n("code",null,"modelValue"),a(" uses the path as the value.")],-1))]),key:"1"}]),1032,["title"])}var ea=d(_n,[["render",fn]]);const $n={setup(){const t=f(["datunli","wuhou"]),s=f([["beijing","chaoyang","datunli"],["sichuan","chengdu","wuhou"]]);return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}],value:t,value2:s,fallback:i=>i.map(k=>k.toUpperCase()).join("-")}}};function Dn(t,s,l,o,i,k){const c=e("a-cascader"),r=e("a-space");return y(),h(r,{direction:"vertical",size:"large"},{default:p(()=>[u(c,{options:o.options,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=g=>o.value=g),style:{width:"320px"},placeholder:"Please select ...",multiple:""},null,8,["options","modelValue"]),u(c,{options:o.options,modelValue:o.value2,"onUpdate:modelValue":s[1]||(s[1]=g=>o.value2=g),style:{width:"320px"},placeholder:"Please select ...","path-mode":"",multiple:"",fallback:o.fallback},null,8,["options","modelValue","fallback"])]),_:1})}var jn=d($n,[["render",Dn]]);const Cn=v({name:"ArcoDemo",components:{VirtualDemo:jn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function wn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"fallback",title:t.getMessage("\u56DE\u9000\u9009\u9879","Fallback")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-space")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"multiple"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(`
                `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"path-mode"),a(),n("span",{class:"token attr-name"},"multiple"),a(),n("span",{class:"token attr-name"},":fallback"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fallback"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-space")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'wuhou'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sichuan'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'chengdu'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'wuhou'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"fallback"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),a(),n("span",{class:"token operator"},"=>"),a(" item"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toUpperCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      value2`),n("span",{class:"token punctuation"},","),a(`
      fallback
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u7EC4\u4EF6\u9ED8\u8BA4\u4F1A\u5C55\u793A\u5728\u9009\u9879\u4E2D\u4E0D\u5B58\u5728\u7684\u503C\uFF0C\u53EF\u901A\u8FC7 "),n("code",null,"fallback"),a(" \u81EA\u5B9A\u4E49\u5C55\u793A\u6216\u8005\u5173\u95ED")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("The component will display the value that does not exist in the options by default, which can be displayed or turned off through "),n("code",null,"fallback")],-1))]),key:"1"}]),1032,["title"])}var pa=d(Cn,[["render",wn]]);const qn={setup(){const t={value:"city",label:"text"},s=D([{city:"beijing",text:"Beijing",children:[{city:"chaoyang",text:"ChaoYang",children:[{city:"datunli",text:"Datunli"}]},{city:"haidian",text:"Haidian"},{city:"dongcheng",text:"Dongcheng"},{city:"xicheng",text:"Xicheng",children:[{city:"jinrongjie",text:"Jinrongjie"},{city:"tianqiao",text:"Tianqiao"}]}]},{city:"shanghai",text:"Shanghai",children:[{city:"huangpu",text:"Huangpu"}]}]);return{fieldNames:t,options:s}}};function Fn(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,"field-names":o.fieldNames,style:{width:"320px"},placeholder:"Please select ..."},null,8,["options","field-names"])}var xn=d(qn,[["render",Fn]]);const En=v({name:"ArcoDemo",components:{VirtualDemo:xn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function Bn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"field-names",title:t.getMessage("\u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D","Custom FieldNames")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":field-names"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fieldNames"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" fieldNames "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'city'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"text"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      fieldNames`),n("span",{class:"token punctuation"},","),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u53EF\u4EE5\u901A\u8FC7 "),n("code",null,"field-names"),a(" \u5C5E\u6027\u81EA\u5B9A\u4E49 "),n("code",null,"options"),a(" \u4E2D\u6570\u636E\u7684\u683C\u5F0F\u3002")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("The format of the data in "),n("code",null,"options"),a(" can be customized through the "),n("code",null,"field-names"),a(" attribute.")],-1))]),key:"1"}]),1032,["title"])}var la=d(En,[["render",Bn]]);const An={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function Mn(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,style:{width:"320px"},placeholder:"Please select ...","expand-child":""},null,8,["options"])}var Hn=d(An,[["render",Mn]]);const zn=v({name:"ArcoDemo",components:{VirtualDemo:Hn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function Vn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"expand",title:t.getMessage("\u5C55\u5F00\u5B50\u83DC\u5355","Expand child menu")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"expand-child"),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u901A\u8FC7\u8BBE\u7F6E "),n("code",null,"expand-child"),a(" \u53EF\u4EE5\u5728\u9009\u62E9\u65F6\u5C55\u5F00\u7B2C\u4E00\u4E2A\u5B50\u83DC\u5355")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("The first submenu can be expanded on selection by setting "),n("code",null,"expand-child")],-1))]),key:"1"}]),1032,["title"])}var ca=d(zn,[["render",Vn]]);const Nn={setup(){return{value:f(""),options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:[{value:"huangpu",label:"Huangpu"}]}]}}};function Pn(t,s,l,o,i,k){const c=e("a-cascader-panel");return y(),h(c,{options:o.options,modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=r=>o.value=r),"expand-child":""},null,8,["options","modelValue"])}var Sn=d(Nn,[["render",Pn]]);const Tn=v({name:"ArcoDemo",components:{VirtualDemo:Sn},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function Xn(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"panel",title:t.getMessage("\u7EA7\u8054\u83DC\u5355","Cascader Panel")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader-panel")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"expand-child"),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'huangpu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Huangpu'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      value`),n("span",{class:"token punctuation"},","),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,[a("\u7EA7\u8054\u83DC\u5355\u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u6B64\u65F6\u4E3A "),n("code",null,"\u6570\u636E\u5C55\u793A"),a(" \u7EC4\u4EF6")],-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,[a("Cascading menu can be used alone, in this case it is the "),n("code",null,"data display"),a(" component")],-1))]),key:"1"}]),1032,["title"])}var ua=d(Tn,[["render",Xn]]);const Yn={setup(){return{options:[{value:"beijing",label:"Beijing",children:[{value:"chaoyang",label:"ChaoYang",children:[{value:"datunli",label:"Datunli"}]},{value:"haidian",label:"Haidian"},{value:"dongcheng",label:"Dongcheng"},{value:"xicheng",label:"Xicheng",children:[{value:"jinrongjie",label:"Jinrongjie"},{value:"tianqiao",label:"Tianqiao"}]}]},{value:"shanghai",label:"Shanghai",children:Array(1e3).fill(null).map((s,l)=>({value:`Option ${l}`,label:`Option ${l}`}))}]}}};function Jn(t,s,l,o,i,k){const c=e("a-cascader");return y(),h(c,{options:o.options,style:{width:"320px"},placeholder:"Please select ...","virtual-list-props":{height:200}},null,8,["options"])}var Ln=d(Yn,[["render",Jn]]);const On=v({name:"ArcoDemo",components:{VirtualDemo:Ln},setup(){const{locale:t}=b();return{locale:t,getMessage:(l,o)=>t.value==="zh-CN"?l:o}}});function Un(t,s,l,o,i,k){const c=e("virtual-demo"),r=e("cell-demo"),g=e("cell-code"),m=e("code-block");return y(),h(m,{id:"virtual",title:t.getMessage("\u865A\u62DF\u5217\u8868","Virtual List")},_({default:p(()=>[u(r,null,{default:p(()=>[u(c)]),_:1}),u(g,null,{default:p(()=>s[2]||(s[2]=[n("pre",{class:"code-content"},[n("code",{class:"language-lang"},[a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{width:'320px'}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select ..."),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},":virtual-list-props"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{height:200}"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'chaoyang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'ChaoYang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'datunli'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Datunli'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'haidian'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Haidian'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dongcheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dongcheng'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Xicheng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jinrongjie'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tianqiao'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Tianqiao'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)])),_:1})]),_:2},[t.locale==="zh-CN"?{name:"description",fn:p(()=>[s[0]||(s[0]=n("p",null,"\u865A\u62DF\u5217\u8868\u7684\u4F7F\u7528\u65B9\u6CD5\u3002",-1))]),key:"0"}:{name:"description",fn:p(()=>[s[1]||(s[1]=n("p",null,"How to use the virtual list.",-1))]),key:"1"}]),1032,["title"])}var ra=d(On,[["render",Un]]);const In=v({name:"ArcoMain",components:{},setup(){const{locale:t}=b();return{locale:t,data:void 0,changelog:typeof $=="undefined"?void 0:$,getMessage:(i,k)=>t.value==="zh-CN"?i:k}}});function Gn(t,s,l,o,i,k){const c=e("arco-article");return y(),h(c,j(t.data,{changelog:t.changelog}),null,16,["changelog"])}var $=d(In,[["render",Gn]]);export{Qn as D,$ as _,Rn as a,Wn as b,Zn as c,na as d,aa as e,sa as f,ta as g,oa as h,ea as i,pa as j,la as k,ca as l,ua as m,ra as n};
