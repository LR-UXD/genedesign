```yaml
meta:
  type: 液态玻璃
title: 快速上手
description: 了解液态玻璃效果的实现原理和使用方法。
```

## 液态玻璃效果

本文档说明实现的“液态玻璃”视觉效果，包含原理、关键代码片段、使用说明及优化建议，方便阅读与二次开发。

### 概述

在一个 WebGL2 全屏 Canvas 上渲染互动的“液态玻璃”对象。效果由 SDF（signed distance field）形状、背景模糊、近似折射（通过法线偏移纹理采样）、色散（RGB 通道不同偏移）、菲涅尔高光与可配置的耀斑组成，呈现半透明、带光泽和折射感的玻璃外观。

主要功能：
- 可交互形状：圆角矩形或圆形，可与中心圆融合（smooth min）。
- 背景图加载并进行可配置的模糊处理（水平 + 垂直两次卷积）。
- 折射近似：基于 SDF 法线偏移采样模糊背景，模拟光线通过玻璃弯折。
- 色散效果：对 R/G/B 通道施加不同的采样偏移，产生彩色分离。
- 丰富可调参数：通过控制面板调整折射、耀斑、模糊等。

### 关键概念

- SDF（有符号距离场）：在片元着色器内为圆和圆角矩形计算距离值，使用 smin 函数做平滑融合。
- 法线计算：对 SDF 在片元级做有限差分求梯度，得到近似法线，用于计算折射偏移与耀斑方向。
- 可分离模糊：先横向采样写入临时 FBO，再纵向采样得到最终模糊纹理，效率高于直接二维采样。

### 重要代码片段

1）控制参数（JS）

```js
const controls = {
  nonShapeAlpha: 0,
  glareAngle: -45,
  glareFactor: 90,
  refFactor: 80,
  refThickness: 20,
  refDispersion: 7,
  blurRadius: 1,
  shapeType: 0, // 0 矩形, 1 圆
  shapeWidth: 580,
  shapeHeight: 110,
  shapeRadius: 80,
  shapeRoundness: 5,
  circleRadius: 50,
  mergeRate: 0.05,
  refFresnelRange: 30,
  refFresnelHardness: 20,
  refFresnelFactor: 20,
  glareRange: 30,
  glareHardness: 20,
  glareConvergence: 50,
  glareOppositeFactor: 80,
  showShape1: true,
  showCenterCircle: true,
  debugStep: 9
};
```


2）模糊函数（GLSL & jS）
```js
const blurVertexShaderSource = `#version 300 es
precision highp float;
in vec2 a_position;
out vec2 v_uv;
void main() 
{
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_uv = (a_position + 1.0) / 2.0;
}`;

const blurFragmentShaderSource = `#version 300 es
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
}`;
```

3）圆角矩形SDF函数（GLSL）

```glsl
float roundedRectSDF(vec2 p, vec2 center, float width, float height, float cornerRadius, float n) {
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
```

4）法线计算函数（GLSL）

```glsl
vec2 getNormal(vec2 p1, vec2 p2, vec2 p) {
  vec2 h = vec2(max(abs(dFdx(p.x)), 0.0001), max(abs(dFdy(p.y)), 0.0001));
  vec2 grad = vec2(
    mainSDF(p1, p2, p + vec2(h.x, 0.0)) - mainSDF(p1, p2, p - vec2(h.x, 0.0)),
    mainSDF(p1, p2, p + vec2(0.0, h.y)) - mainSDF(p1, p2, p - vec2(0.0, h.y))
  ) / (2.0 * h);
  return grad * 1.414213562 * 1000.0;
}
```

5）色散函数（GLSL）

```glsl
vec4 getTextureDispersion(sampler2D tex, vec2 offset, float factor) {
  vec4 pixel = vec4(1.0);
  pixel.r = texture(tex, v_uv + offset * (1.0 - (N_R - 1.0) * factor)).r;
  pixel.g = texture(tex, v_uv + offset * (1.0 - (N_G - 1.0) * factor)).g;
  pixel.b = texture(tex, v_uv + offset * (1.0 - (N_B - 1.0) * factor)).b;
  return pixel;
}
```

6）可分离模糊（JS）

流程简述：
- 使用模糊着色器，先横向采样将结果写入 `tempBlurTexture`（FBO1），
- 再以纵向采样将 `tempBlurTexture` 写入 `blurredBackgroundTexture`（FBO2），
- 最终将 `blurredBackgroundTexture` 传给主着色器用于折射采样。

### 每帧渲染流程

1. 更新鼠标弹簧位置以获得平滑交互。
2. 确保模糊用的 FBO 与画布大小一致（注意：当前实现每帧重建 FBO，开销较大）。
3. 执行可分离模糊，生成 `u_blurredBg`。
4. 绑定主程序，上传 uniform（分辨率、DPR、鼠标、各控件参数），绑定纹理。
5. 绘制全屏四边形；片元着色器计算 SDF、法线并组合最终颜色（折射、菲涅尔、耀斑等）。

