const canvas = document.getElementById('glCanvas');
let gl = canvas.getContext('webgl2', { antialias: true });

if (!gl) {
    alert('WebGL 2.0 not supported! This demo requires WebGL 2.0.');
    throw new Error('WebGL 2.0 not supported');
}

//参数控制 - 添加形状类型和圆形半径
const controls = {
    // Basic Settings
    nonShapeAlpha: 100,
    glareAngle: -45,
    glareFactor: 90,
    refFactor: 80,
    refThickness: 20,
    refDispersion: 7,
    blurRadius: 1,

    // Shape Settings
    shapeType: 0, // 0 = 矩形, 1 = 圆形
    shapeWidth: 580,
    shapeHeight: 110,
    shapeRadius: 80,
    shapeRoundness: 5,
    circleRadius: 150, // 圆形半径
    mergeRate: 0.05,

    // Hidden Parameters
    refFresnelRange: 30,
    refFresnelHardness: 20,
    refFresnelFactor: 20,
    glareRange: 30,
    glareHardness: 20,
    glareConvergence: 50,
    glareOppositeFactor: 80,
    showShape1: true,

    showCenterCircle: true,

    // Debug
    debugStep: 9
};

//控件
Object.keys(controls).forEach(key => {
    const slider = document.getElementById(key);
    const valueSpan = document.getElementById(key + 'Value');
    const checkbox = document.getElementById(key);

    if (slider && valueSpan) {
        slider.oninput = () => {
            controls[key] = parseFloat(slider.value);
            valueSpan.textContent = controls[key];
        };
    } else if (checkbox && typeof controls[key] === 'boolean') {
        checkbox.onchange = () => {
            controls[key] = checkbox.checked;
        };
    }
});

// 鼠标位置
let mouseX = 0;
let mouseY = 0;
let mouseSpringX = 0;
let mouseSpringY = 0;
let isDragging = false;

canvas.addEventListener('mousedown', (event) => {
    isDragging = true;
    mouseX = event.clientX;
    mouseY = window.innerHeight - event.clientY;
});

canvas.addEventListener('mouseup', () => {
    isDragging = false;
});

canvas.addEventListener('mouseleave', () => {
    isDragging = false;
});

canvas.addEventListener('mousemove', (event) => {
    if (isDragging) {
        mouseX = event.clientX;
        mouseY = window.innerHeight - event.clientY;
    }
});

//着色器代码 - 修改为支持形状切换
const vertexShaderSource = `#version 300 es
precision highp float;

in vec2 a_position;
out vec2 v_uv;

void main() 
{
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_uv = (a_position + 1.0) / 2.0;
}`;

// 着色器代码 - 修改为支持形状切换
const fragmentShaderSource = `#version 300 es
precision highp float;

#define PI (3.14159265359)

const float N_R = 1.0 - 0.02;
const float N_G = 1.0;
const float N_B = 1.0 + 0.02;

in vec2 v_uv;
uniform sampler2D u_blurredBg;
uniform sampler2D u_bg;
uniform float u_nonShapeAlpha;
uniform vec2 u_resolution;
uniform float u_dpr;
uniform vec2 u_mouse;
uniform vec2 u_mouseSpring;
uniform float u_mergeRate;
uniform float u_shapeWidth;
uniform float u_shapeHeight;
uniform float u_shapeRadius;
uniform float u_shapeRoundness;
uniform float u_circleRadius;
uniform int u_shapeType;
uniform vec4 u_tint;
uniform float u_refThickness;
uniform float u_refFactor;
uniform float u_refDispersion;
uniform float u_refFresnelRange;
uniform float u_refFresnelFactor;
uniform float u_refFresnelHardness;
uniform float u_glareRange;
uniform float u_glareConvergence;
uniform float u_glareOppositeFactor;
uniform float u_glareFactor;
uniform float u_glareHardness;
uniform float u_glareAngle;
uniform int u_showShape1;
uniform int STEP;
uniform int u_showCenterCircle; 

out vec4 fragColor;

float sdCircle(vec2 p, float r) 
{
    return length(p) - r;
}

float superellipseCornerSDF(vec2 p, float r, float n) 
{
    p = abs(p);
    float v = pow(pow(p.x, n) + pow(p.y, n), 1.0 / n);
    return v - r;
}

float roundedRectSDF(vec2 p, vec2 center, float width, float height, float cornerRadius, float n) 
{
    p -= center;
    float cr = cornerRadius * u_dpr;
    vec2 d = abs(p) - vec2(width * u_dpr, height * u_dpr) * 0.5;
    
    float dist;
    if (d.x > -cr && d.y > -cr) 
    {
        vec2 cornerCenter = sign(p) * (vec2(width * u_dpr, height * u_dpr) * 0.5 - vec2(cr));
        vec2 cornerP = p - cornerCenter;
        dist = superellipseCornerSDF(cornerP, cr, n);
    } 
    else
    {
        dist = min(max(d.x, d.y), 0.0) + length(max(d, 0.0));
    }
    return dist;
}

float smin(float a, float b, float k) 
{
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

float mainSDF(vec2 p1, vec2 p2, vec2 p) 
{
    vec2 p1n = p1 + p / u_resolution.y;
    vec2 p2n = p2 + p / u_resolution.y;
    
    // 计算中心圆形的SDF
    float centerCircle = sdCircle(p1n, u_circleRadius * u_dpr / u_resolution.y);
    
    // 根据当前形状类型计算主形状的SDF
    float mainShape;
    if (u_shapeType == 1) 
    {
        mainShape = sdCircle(p2n, u_circleRadius * u_dpr / u_resolution.y);
    }
    else 
    {
        mainShape = roundedRectSDF
        (
            p2n,
            vec2(0.0),
            u_shapeWidth / u_resolution.y,
            u_shapeHeight / u_resolution.y,
            u_shapeRadius / u_resolution.y,
            u_shapeRoundness
        );
    }
    
    // 如果启用了中心圆形，进行融合
    if (u_showCenterCircle == 1) 
    { // 修改为整数比较
        return smin(mainShape, centerCircle, u_mergeRate);
    }
    else
    {
        return mainShape;
    }
}
vec2 getNormal(vec2 p1, vec2 p2, vec2 p) 
{
    vec2 h = vec2(max(abs(dFdx(p.x)), 0.0001), max(abs(dFdy(p.y)), 0.0001));
    vec2 grad = vec2(
        mainSDF(p1, p2, p + vec2(h.x, 0.0)) - mainSDF(p1, p2, p - vec2(h.x, 0.0)),
        mainSDF(p1, p2, p + vec2(0.0, h.y)) - mainSDF(p1, p2, p - vec2(0.0, h.y))
    ) / (2.0 * h);
    return grad * 1.414213562 * 1000.0;
}

// Color space conversion functions (simplified)
vec3 hsv2rgb(vec3 c) 
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float vec2ToAngle(vec2 v) 
{
    float angle = atan(v.y, v.x);
    if (angle < 0.0) angle += 2.0 * PI;
    return angle;
}

vec3 vec2ToRgb(vec2 v) 
{
    float angle = atan(v.y, v.x);
    if (angle < 0.0) angle += 2.0 * PI;
    float hue = angle / (2.0 * PI);
    vec3 hsv = vec3(hue, 1.0, 1.0);
    return hsv2rgb(hsv);
}

vec4 getTextureDispersion(sampler2D tex, vec2 offset, float factor) 
{
    vec4 pixel = vec4(1.0);
    pixel.r = texture(tex, v_uv + offset * (1.0 - (N_R - 1.0) * factor)).r;
    pixel.g = texture(tex, v_uv + offset * (1.0 - (N_G - 1.0) * factor)).g;
    pixel.b = texture(tex, v_uv + offset * (1.0 - (N_B - 1.0) * factor)).b;
    return pixel;
}

void main() 
{
    vec2 u_resolution1x = u_resolution.xy / u_dpr;
    vec2 p1 = (vec2(0, 0) - u_resolution.xy * 0.5) / u_resolution.y;
    vec2 p2 = (vec2(0, 0) - u_mouseSpring) / u_resolution.y;
    float merged = mainSDF(p1, p2, gl_FragCoord.xy);

    vec4 outColor;
    
    if (STEP <= 5) 
    {
        if (merged < 0.0) 
        {
            outColor = texture(u_blurredBg, v_uv);
        } 
        else
        {
            outColor = vec4(0.0); // 非图形区域透明
        }
    } 
    else if (STEP <= 9) 
    {
        if (merged < 0.005) 
        {
            float nmerged = -1.0 * (merged * u_resolution1x.y);
            
            float refThicknessRamp = 0.0 + (u_refThickness - 0.0) * (80.0 / 100.0);
            
            float x_R_ratio = 1.0 - nmerged / refThicknessRamp;
            float thetaI = asin(pow(x_R_ratio, 2.0));
            
            float refFactorRamp = 1.0 + (u_refFactor - 0.0) * (7.0 / 100.0);
            
            float thetaT = asin(1.0 / refFactorRamp * sin(thetaI));
            float edgeFactor = -1.0 * tan(thetaT - thetaI);
            
            if (nmerged >= refThicknessRamp) 
            {
                edgeFactor = 0.0;
            }
 
            if (edgeFactor <= 0.0) 
            {
                outColor = texture(u_blurredBg, v_uv);
                outColor = mix(outColor, vec4(u_tint.r, u_tint.g, u_tint.b, 1.0), u_tint.a * 0.8);
            } 
            else 
            {
                vec2 normal = getNormal(p1, p2, gl_FragCoord.xy);
                
                float refDispersionRamp = 0.0 + (u_refDispersion - 0.0) * (10.0 / 100.0);
                
                vec4 blurredPixel = getTextureDispersion(
                    u_blurredBg,
                    -normal * edgeFactor * 0.05 * u_dpr * vec2(
                        u_resolution.y / (u_resolution1x.x * u_dpr),
                        1.0
                    ),
                    refDispersionRamp
                );

                outColor = mix(blurredPixel, vec4(u_tint.r, u_tint.g, u_tint.b, 1.0), u_tint.a * 0.8);

                // Fresnel effect
                float fresnelFactor = clamp(
                    pow(
                        1.0 + merged * u_resolution1x.y / 1500.0 * pow(500.0 / u_refFresnelRange, 2.0) + u_refFresnelHardness,
                        5.0
                    ),
                    0.0, 1.0
                );

                outColor = mix(outColor, vec4(1.0), fresnelFactor * u_refFresnelFactor * 0.7 * length(normal));

                // Glare effect
                float glareGeoFactor = clamp(pow(1.0 + merged * u_resolution1x.y / 1500.0 * pow(500.0 / u_glareRange, 2.0) + u_glareHardness,5.0),0.0, 1.0);
                float glareAngle = (vec2ToAngle(normalize(normal)) - PI / 4.0 + u_glareAngle) * 2.0;
                int glareFarside = 0;
                
                if ((glareAngle > PI * (2.0 - 0.5) && glareAngle < PI * (4.0 - 0.5)) || glareAngle < PI * (0.0 - 0.5)) 
                {
                    glareFarside = 1;
                }
                
                float glareAngleFactor = (0.5 + sin(glareAngle) * 0.5) * 
                    (glareFarside == 1 ? 1.2 * u_glareOppositeFactor : 1.2) * u_glareFactor;
                glareAngleFactor = clamp(pow(glareAngleFactor, 0.1 + u_glareConvergence * 2.0), 0.0, 1.0);

                outColor = mix(outColor, vec4(1.0), glareAngleFactor * glareGeoFactor * length(normal));
                
                vec4 AlphaColor = texture(u_bg, v_uv);
                float alpha = 1.0 - smoothstep(-0.001, 0.001, merged);
                outColor = mix(AlphaColor, outColor, alpha);
                outColor.a = mix(1.0 - u_nonShapeAlpha, alpha, alpha);
            }
        } 
        else 
        {
           outColor = texture(u_bg, v_uv);
           outColor.a = 1.0 - u_nonShapeAlpha;// 非图形区域：根据u_nonShapeAlpha控制透明度
        }
    }
    fragColor = outColor;
}`;

// 模糊着色器
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

// 创建着色器
function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(`Shader compile error:`, gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program));
        return null;
    }
    return program;
}

const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
const program = createProgram(gl, vertexShader, fragmentShader);

// 获取uniform位置
const uniforms = {};
const uniformNames = [
    'u_blurredBg', 'u_bg', 'u_resolution', 'u_dpr', 'u_mouse', 'u_mouseSpring',
    'u_mergeRate', 'u_shapeWidth', 'u_shapeHeight', 'u_shapeRadius', 'u_shapeRoundness',
    'u_tint', 'u_refThickness', 'u_refFactor', 'u_refDispersion', 'u_refFresnelRange',
    'u_refFresnelFactor', 'u_refFresnelHardness', 'u_glareRange', 'u_glareConvergence',
    'u_glareOppositeFactor', 'u_glareFactor', 'u_glareHardness', 'u_glareAngle',
    'u_showShape1', 'STEP', 'u_nonShapeAlpha',
    'u_shapeType', 'u_circleRadius', 'u_showCenterCircle'
];

// 创建模糊着色器
const blurVertexShader = createShader(gl, gl.VERTEX_SHADER, blurVertexShaderSource);
const blurFragmentShader = createShader(gl, gl.FRAGMENT_SHADER, blurFragmentShaderSource);
const blurProgram = createProgram(gl, blurVertexShader, blurFragmentShader);

// 模糊的uniform位置
const blurUniforms = {
    u_texture: gl.getUniformLocation(blurProgram, 'u_texture'),
    u_resolution: gl.getUniformLocation(blurProgram, 'u_resolution'),
    u_direction: gl.getUniformLocation(blurProgram, 'u_direction'),
    u_blurRadius: gl.getUniformLocation(blurProgram, 'u_blurRadius')
};

const blurPositionAttributeLocation = gl.getAttribLocation(blurProgram, 'a_position');

uniformNames.forEach(name => {
    uniforms[name] = gl.getUniformLocation(program, name);
});

const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');

// 创建全屏四边形
const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// 创建纹理和帧缓冲
let backgroundTexture = gl.createTexture();
let blurredBackgroundTexture = gl.createTexture();
let tempBlurTexture = gl.createTexture();
let blurFramebuffer1 = gl.createFramebuffer();
let blurFramebuffer2 = gl.createFramebuffer();

function createBlurTexture(width, height) {
    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    return texture;
}

function setupBlurFramebuffers(width, height) {
    gl.deleteTexture(tempBlurTexture);
    gl.deleteTexture(blurredBackgroundTexture);

    tempBlurTexture = createBlurTexture(width, height);
    blurredBackgroundTexture = createBlurTexture(width, height);

    // 设置帧缓冲
    gl.bindFramebuffer(gl.FRAMEBUFFER, blurFramebuffer1);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tempBlurTexture, 0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, blurFramebuffer2);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, blurredBackgroundTexture, 0);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

// 初始化纹理
gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

// 初始化模糊纹理
tempBlurTexture = createBlurTexture(1, 1);
blurredBackgroundTexture = createBlurTexture(1, 1);

// 加载背景图像
function loadTexture(url) {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = url;
    image.onload = () => {
        gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        setupBlurFramebuffers(image.width, image.height);
        performBlur();
    };
}

// 模糊
function performBlur() {
    const width = canvas.width;
    const height = canvas.height;

    // 水平模糊
    gl.bindFramebuffer(gl.FRAMEBUFFER, blurFramebuffer1);
    gl.viewport(0, 0, width, height);
    gl.useProgram(blurProgram);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(blurPositionAttributeLocation);
    gl.vertexAttribPointer(blurPositionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
    gl.uniform1i(blurUniforms.u_texture, 0);
    gl.uniform2f(blurUniforms.u_resolution, width, height);
    gl.uniform2f(blurUniforms.u_direction, 1.0, 0.0);
    gl.uniform1f(blurUniforms.u_blurRadius, controls.blurRadius);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    // 垂直模糊
    gl.bindFramebuffer(gl.FRAMEBUFFER, blurFramebuffer2);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tempBlurTexture);
    gl.uniform1i(blurUniforms.u_texture, 0);
    gl.uniform2f(blurUniforms.u_direction, 0.0, 1.0);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
}

// 文件上传处理
document.getElementById('imageUpload').onchange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => { loadTexture(e.target.result); };
        reader.readAsDataURL(file);
    }
};

// 加载默认图片
loadTexture('https://picsum.photos/1920/1080?random=' + Math.floor(Math.random() * 100));

// 在controls对象初始化后添加
const showCenterCircleCheckbox = document.getElementById('showCenterCircle');
showCenterCircleCheckbox.checked = controls.showCenterCircle;
showCenterCircleCheckbox.onchange = () => {
    controls.showCenterCircle = showCenterCircleCheckbox.checked;
};

// 渲染函数
function render() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);

    const springFactor = 0.05;
    mouseSpringX += (mouseX - mouseSpringX) * springFactor;
    mouseSpringY += (mouseY - mouseSpringY) * springFactor;

    //模糊
    setupBlurFramebuffers(canvas.width, canvas.height);

    performBlur();

    // 主渲染通道
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, canvas.width, canvas.height);

    // 设置清除颜色为透明
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 启用混合模式
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    // 设置纹理
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, backgroundTexture);
    gl.uniform1i(uniforms.u_bg, 0);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, blurredBackgroundTexture);
    gl.uniform1i(uniforms.u_blurredBg, 1);

    // 设置uniforms
    gl.uniform2f(uniforms.u_resolution, canvas.width, canvas.height);
    gl.uniform1f(uniforms.u_dpr, window.devicePixelRatio || 1);
    gl.uniform2f(uniforms.u_mouse, mouseX, mouseY);
    gl.uniform2f(uniforms.u_mouseSpring, mouseSpringX, mouseSpringY);
    gl.uniform1f(uniforms.u_nonShapeAlpha, controls.nonShapeAlpha / 100.0);

    // Studio参数
    gl.uniform1f(uniforms.u_mergeRate, controls.mergeRate);
    gl.uniform1f(uniforms.u_shapeWidth, controls.shapeWidth);
    gl.uniform1f(uniforms.u_shapeHeight, controls.shapeHeight);
    gl.uniform1f(uniforms.u_shapeRadius, controls.shapeRadius);
    gl.uniform1f(uniforms.u_shapeRoundness, controls.shapeRoundness);

    // 形状类型和圆形半径
    gl.uniform1i(uniforms.u_shapeType, controls.shapeType);
    gl.uniform1f(uniforms.u_circleRadius, controls.circleRadius);

    gl.uniform4f(uniforms.u_tint, 1.0, 1.0, 1.0, 0.0); // 默认透明tint

    gl.uniform1f(uniforms.u_refThickness, controls.refThickness);
    gl.uniform1f(uniforms.u_refFactor, controls.refFactor);
    gl.uniform1f(uniforms.u_refDispersion, controls.refDispersion);

    gl.uniform1f(uniforms.u_refFresnelRange, controls.refFresnelRange);
    gl.uniform1f(uniforms.u_refFresnelFactor, controls.refFresnelFactor / 100.0);
    gl.uniform1f(uniforms.u_refFresnelHardness, controls.refFresnelHardness / 100.0);

    gl.uniform1f(uniforms.u_glareRange, controls.glareRange);
    gl.uniform1f(uniforms.u_glareConvergence, controls.glareConvergence / 100.0);
    gl.uniform1f(uniforms.u_glareOppositeFactor, controls.glareOppositeFactor / 100.0);
    gl.uniform1f(uniforms.u_glareFactor, controls.glareFactor / 100.0);
    gl.uniform1f(uniforms.u_glareHardness, controls.glareHardness / 100.0);
    gl.uniform1f(uniforms.u_glareAngle, controls.glareAngle * Math.PI / 180.0);

    gl.uniform1i(uniforms.u_showShape1, controls.showShape1 ? 1 : 0);
    gl.uniform1i(uniforms.STEP, controls.debugStep);

    gl.uniform1i(uniforms.u_showCenterCircle, controls.showCenterCircle ? 1 : 0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
}

// 窗口大小调整处理
window.addEventListener('resize', () => {
    if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
        setupBlurFramebuffers(canvas.width, canvas.height);
    }
});


// 初始化
render();