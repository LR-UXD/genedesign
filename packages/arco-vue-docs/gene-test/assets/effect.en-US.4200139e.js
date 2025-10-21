import{_ as d,d as m,u as k,r as l,o as g,c as f,w as p,a as v,b as n,e,m as y}from"./index.bac81538.js";const b=m({name:"ArcoMain",components:{},setup(){const{locale:s}=k(),t={meta:{type:"liquid-glass"},title:"Quick Start",description:"Learn the implementation principles and usage of the liquid glass effect."},a=(r,o)=>s.value==="zh-CN"?r:o;return{locale:s,data:t,changelog:typeof _changelog=="undefined"?void 0:_changelog,getMessage:a}}});function h(s,t,a,i,r,o){const u=l("anchor-head"),c=l("arco-article");return g(),f(c,y(s.data,{changelog:s.changelog}),{default:p(()=>[v(u,{level:"2",href:"Liquid-Glass-Effect"},{default:p(()=>t[0]||(t[0]=[n("Liquid Glass Effect")])),_:1}),t[1]||(t[1]=e("p",null,'This document describes an interactive "liquid glass" visual effect rendered on a full-screen WebGL2 canvas. It covers the implementation principles, key code snippets, usage notes, and optimization suggestions for easier reading and secondary development.',-1)),t[2]||(t[2]=e("h3",{id:"Overview"},"Overview",-1)),t[3]||(t[3]=e("p",null,'Render an interactive "liquid glass" object on a full-screen WebGL2 canvas. The effect is built from SDF (signed distance field) shapes, background blurring, an approximation of refraction (by offsetting texture sampling using normals), chromatic dispersion (different offsets per RGB channel), Fresnel highlights, and configurable flares. The result is a semi-transparent, glossy, refractive glass-like appearance.',-1)),t[4]||(t[4]=e("p",null,"Main features:",-1)),t[5]||(t[5]=e("ul",null,[e("li",null,"Interactive shapes: rounded rectangle or circle, can smoothly merge with a center circle using smooth min."),e("li",null,"Background image loading with configurable blur (separable horizontal + vertical convolution)."),e("li",null,"Refraction approximation: sample the blurred background using normals computed from the SDF to simulate light bending through glass."),e("li",null,"Dispersion: apply different sampling offsets per R/G/B channels to create color separation."),e("li",null,"Rich adjustable parameters: refraction, glare, blur, and more are exposed via a control panel.")],-1)),t[6]||(t[6]=e("h3",{id:"Key Concepts"},"Key Concepts",-1)),t[7]||(t[7]=e("ul",null,[e("li",null,"SDF (signed distance field): compute distance values for circles and rounded rectangles in the fragment shader and use smin for smooth blending."),e("li",null,"Normal calculation: approximate per-fragment normals by finite differences on the SDF; use these normals for refraction offsets and glare direction."),e("li",null,"Separable blur: perform a horizontal pass into a temporary FBO, then a vertical pass into the final blurred texture \u2014 more efficient than a direct 2D kernel.")],-1)),t[8]||(t[8]=e("h3",{id:"Important Code Snippets"},"Important Code Snippets",-1)),t[9]||(t[9]=e("ol",null,[e("li",null,"Control parameters (JS)")],-1)),t[10]||(t[10]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},[e("span",{class:"token keyword"},"const"),n(" controls "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token punctuation"},"{"),n(`
  `),e("span",{class:"token literal-property property"},"nonShapeAlpha"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"glareAngle"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token number"},"45"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"glareFactor"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"90"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"refFactor"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"80"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"refThickness"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"20"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"refDispersion"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"7"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"blurRadius"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"shapeType"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"0"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token comment"},"// 0 rectangle, 1 circle"),n(`
  `),e("span",{class:"token literal-property property"},"shapeWidth"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"580"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"shapeHeight"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"110"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"shapeRadius"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"80"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"shapeRoundness"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"5"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"circleRadius"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"50"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"mergeRate"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"0.05"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"refFresnelRange"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"refFresnelHardness"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"20"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"refFresnelFactor"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"20"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"glareRange"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"30"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"glareHardness"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"20"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"glareConvergence"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"50"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"glareOppositeFactor"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"80"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"showShape1"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"showCenterCircle"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},","),n(`
  `),e("span",{class:"token literal-property property"},"debugStep"),e("span",{class:"token operator"},":"),n(),e("span",{class:"token number"},"9"),n(`
`),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},";"),n(`
`)])],-1)),t[11]||(t[11]=e("ol",{start:"2"},[e("li",null,"Blur shader (GLSL & JS)")],-1)),t[12]||(t[12]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},[e("span",{class:"token keyword"},"const"),n(" blurVertexShaderSource "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token template-string"},[e("span",{class:"token template-punctuation string"},"`"),e("span",{class:"token string"},`#version 300 es
precision highp float;
in vec2 a_position;
out vec2 v_uv;
void main() 
{
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_uv = (a_position + 1.0) / 2.0;
}`),e("span",{class:"token template-punctuation string"},"`")]),e("span",{class:"token punctuation"},";"),n(`

`),e("span",{class:"token keyword"},"const"),n(" blurFragmentShaderSource "),e("span",{class:"token operator"},"="),n(),e("span",{class:"token template-string"},[e("span",{class:"token template-punctuation string"},"`"),e("span",{class:"token string"},`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_texture;
uniform vec2 u_resolution;
uniform vec2 u_direction;
uniform float u_blurRadius;
out vec4 fragColor;

void main() 
{
    vec2 texelSize = 1.0 / u_resolution;
    vec4 color = vec4(0.0);
    float totalWeight = 0.0;
    
    float blurRadius = u_blurRadius * 3.0 + 1.0;
    
    int radius = int(blurRadius);
    for (int i = -radius; i <= radius; i++) 
    {
        float weight = exp(-0.5 * pow(float(i) / (blurRadius * 0.3), 2.0));
        vec2 offset = u_direction * float(i) * texelSize;
        color += texture(u_texture, v_uv + offset) * weight;
        totalWeight += weight;
    }
    
    fragColor = color / totalWeight;
}`),e("span",{class:"token template-punctuation string"},"`")]),e("span",{class:"token punctuation"},";"),n(`
`)])],-1)),t[13]||(t[13]=e("ol",{start:"3"},[e("li",null,"Rounded rectangle SDF (GLSL)")],-1)),t[14]||(t[14]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},`float roundedRectSDF(vec2 p, vec2 center, float width, float height, float cornerRadius, float n) {
  p -= center;
  float cr = cornerRadius * u_dpr;
  vec2 d = abs(p) - vec2(width * u_dpr, height * u_dpr) * 0.5;
  if (d.x > -cr && d.y > -cr) {
    vec2 cornerCenter = sign(p) * (vec2(width * u_dpr, height * u_dpr) * 0.5 - vec2(cr));
    vec2 cornerP = p - cornerCenter;
    return superellipseCornerSDF(cornerP, cr, n);
  } else {
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
  }
}
`)],-1)),t[15]||(t[15]=e("ol",{start:"4"},[e("li",null,"Normal calculation (GLSL)")],-1)),t[16]||(t[16]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},`vec2 getNormal(vec2 p1, vec2 p2, vec2 p) {
  vec2 h = vec2(max(abs(dFdx(p.x)), 0.0001), max(abs(dFdy(p.y)), 0.0001));
  vec2 grad = vec2(
    mainSDF(p1, p2, p + vec2(h.x, 0.0)) - mainSDF(p1, p2, p - vec2(h.x, 0.0)),
    mainSDF(p1, p2, p + vec2(0.0, h.y)) - mainSDF(p1, p2, p - vec2(0.0, h.y))
  ) / (2.0 * h);
  return grad * 1.414213562 * 1000.0;
}
`)],-1)),t[17]||(t[17]=e("ol",{start:"5"},[e("li",null,"Dispersion sampling (GLSL)")],-1)),t[18]||(t[18]=e("pre",{class:"code-content"},[e("code",{class:"language-lang"},`vec4 getTextureDispersion(sampler2D tex, vec2 offset, float factor) {
  vec4 pixel = vec4(1.0);
  pixel.r = texture(tex, v_uv + offset * (1.0 - (N_R - 1.0) * factor)).r;
  pixel.g = texture(tex, v_uv + offset * (1.0 - (N_G - 1.0) * factor)).g;
  pixel.b = texture(tex, v_uv + offset * (1.0 - (N_B - 1.0) * factor)).b;
  return pixel;
}
`)],-1)),t[19]||(t[19]=e("ol",{start:"6"},[e("li",null,"Separable blur (JS)")],-1)),t[20]||(t[20]=e("p",null,"Process summary:",-1)),t[21]||(t[21]=e("ul",null,[e("li",null,[n("Use the blur shader to perform a horizontal pass and write the result into "),e("code",null,"tempBlurTexture"),n(" (FBO1).")]),e("li",null,[n("Perform a vertical pass sampling from "),e("code",null,"tempBlurTexture"),n(" and write into "),e("code",null,"blurredBackgroundTexture"),n(" (FBO2).")]),e("li",null,[n("Pass "),e("code",null,"blurredBackgroundTexture"),n(" to the main shader for refraction sampling.")])],-1)),t[22]||(t[22]=e("h3",{id:"Per-frame render flow"},"Per-frame render flow",-1)),t[23]||(t[23]=e("ol",null,[e("li",null,"Update the mouse spring position to achieve smooth interaction."),e("li",null,"Ensure the blur FBOs match the canvas size (note: the current implementation recreates FBOs every frame, which is expensive)."),e("li",null,[n("Run the separable blur to produce "),e("code",null,"u_blurredBg"),n(".")]),e("li",null,"Bind the main program, upload uniforms (resolution, DPR, mouse, control parameters), and bind textures."),e("li",null,"Draw a full-screen quad; the fragment shader computes SDF, normals, and composes the final color (refraction, Fresnel, glare, etc.).")],-1))]),_:1},16,["changelog"])}var S=d(b,[["render",h]]);export{S as default};
