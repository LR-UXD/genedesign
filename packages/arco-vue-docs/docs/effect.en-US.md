```yaml
meta:
  type: liquid-glass
title: Quick Start
description: Learn the implementation principles and usage of the liquid glass effect.
```

## Liquid Glass Effect

This document describes an interactive "liquid glass" visual effect rendered on a full-screen WebGL2 canvas. It covers the implementation principles, key code snippets, usage notes, and optimization suggestions for easier reading and secondary development.

### Overview

Render an interactive "liquid glass" object on a full-screen WebGL2 canvas. The effect is built from SDF (signed distance field) shapes, background blurring, an approximation of refraction (by offsetting texture sampling using normals), chromatic dispersion (different offsets per RGB channel), Fresnel highlights, and configurable flares. The result is a semi-transparent, glossy, refractive glass-like appearance.

Main features:
- Interactive shapes: rounded rectangle or circle, can smoothly merge with a center circle using smooth min.
- Background image loading with configurable blur (separable horizontal + vertical convolution).
- Refraction approximation: sample the blurred background using normals computed from the SDF to simulate light bending through glass.
- Dispersion: apply different sampling offsets per R/G/B channels to create color separation.
- Rich adjustable parameters: refraction, glare, blur, and more are exposed via a control panel.

### Key Concepts

- SDF (signed distance field): compute distance values for circles and rounded rectangles in the fragment shader and use smin for smooth blending.
- Normal calculation: approximate per-fragment normals by finite differences on the SDF; use these normals for refraction offsets and glare direction.
- Separable blur: perform a horizontal pass into a temporary FBO, then a vertical pass into the final blurred texture — more efficient than a direct 2D kernel.

### Important Code Snippets

1) Control parameters (JS)

```js
const controls = {
  nonShapeAlpha: 0,
  glareAngle: -45,
  glareFactor: 90,
  refFactor: 80,
  refThickness: 20,
  refDispersion: 7,
  blurRadius: 1,
  shapeType: 0, // 0 rectangle, 1 circle
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

2) Blur shader (GLSL & JS)

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

3) Rounded rectangle SDF (GLSL)

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

4) Normal calculation (GLSL)

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

5) Dispersion sampling (GLSL)

```glsl
vec4 getTextureDispersion(sampler2D tex, vec2 offset, float factor) {
  vec4 pixel = vec4(1.0);
  pixel.r = texture(tex, v_uv + offset * (1.0 - (N_R - 1.0) * factor)).r;
  pixel.g = texture(tex, v_uv + offset * (1.0 - (N_G - 1.0) * factor)).g;
  pixel.b = texture(tex, v_uv + offset * (1.0 - (N_B - 1.0) * factor)).b;
  return pixel;
}
```

6) Separable blur (JS)

Process summary:
- Use the blur shader to perform a horizontal pass and write the result into `tempBlurTexture` (FBO1).
- Perform a vertical pass sampling from `tempBlurTexture` and write into `blurredBackgroundTexture` (FBO2).
- Pass `blurredBackgroundTexture` to the main shader for refraction sampling.

### Per-frame render flow

1. Update the mouse spring position to achieve smooth interaction.
2. Ensure the blur FBOs match the canvas size (note: the current implementation recreates FBOs every frame, which is expensive).
3. Run the separable blur to produce `u_blurredBg`.
4. Bind the main program, upload uniforms (resolution, DPR, mouse, control parameters), and bind textures.
5. Draw a full-screen quad; the fragment shader computes SDF, normals, and composes the final color (refraction, Fresnel, glare, etc.).
