export interface GlassButtonConfig {
  canvasWidth: number;
  canvasHeight: number;
  buttonX: number;
  buttonY: number;
  bgImage: string;
  bgBlur: number;
  glassWidth: number;
  glassHeight: number;
  glassRadius: number;
  lightIntensity: number;
  lightAngle: number;
  refractionDepth: number;
  refractionFactor: number;
  dispersion: number;
  text: string;
  textColor: string;
  textSize: number;
  textFont: string;
  icon: string;
  iconType: 'text' | 'svg' | 'local-svg' | 'image';
  iconSize: number;
  iconColor: string;
  iconPosition: 'left' | 'right' | 'top' | 'bottom';
  iconSpacing: number;
  iconSvgPath: string;
  debugStep: number;
  nonShapeAlpha: number;
  // 形状控制参数
  shapeType: 'rectangle' | 'circle';
  circleRadius: number;
  shapeRoundness: number;
  mergeRate: number;
  showCenterCircle: boolean;
}

export class GlassButtonRenderer {
  private glCanvas: HTMLCanvasElement;

  private textCanvas: HTMLCanvasElement;

  private gl: WebGL2RenderingContext | null = null;

  private textCtx: CanvasRenderingContext2D | null = null;

  private config: GlassButtonConfig;

  private controls: any = {};

  private program: WebGLProgram | null = null;

  private blurProgram: WebGLProgram | null = null;

  private uniforms: Record<string, WebGLUniformLocation | null> = {};

  private blurUniforms: Record<string, WebGLUniformLocation | null> = {};

  private backgroundTexture: WebGLTexture | null = null;

  private blurredBackgroundTexture: WebGLTexture | null = null;

  private tempBlurTexture: WebGLTexture | null = null;

  private blurFramebuffer1: WebGLFramebuffer | null = null;

  private blurFramebuffer2: WebGLFramebuffer | null = null;

  private positionBuffer: WebGLBuffer | null = null;

  private buttonX = 400;

  private buttonY = 200;

  private mouseSpringX = 400;

  private mouseSpringY = 200;

  private isDragging = false;

  private dragOffsetX = 0;

  private dragOffsetY = 0;

  private isHighPerformanceMode = false;

  private svgCache = new Map<string, string>();

  private svgImageCache = new Map<string, HTMLImageElement>();

  private svgLoadingStates = new Map<string, boolean>();

  private animationFrameId: number | null = null;

  private onClickCallback: ((event: MouseEvent) => void) | null = null;

  private isDraggingStarted = false;

  private mouseDownTime = 0;

  constructor(glCanvas: HTMLCanvasElement, textCanvas: HTMLCanvasElement) {
    this.glCanvas = glCanvas;
    this.textCanvas = textCanvas;
    this.config = this.getCanvasConfig();
    this.gl = glCanvas.getContext('webgl2');
    this.textCtx = textCanvas.getContext('2d');

    if (!this.gl) {
      throw new Error('WebGL 2.0 not supported');
    }

    this.gl.enable(this.gl.BLEND);
    this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    this.setupEventListeners();
  }

  private getCanvasConfig(): GlassButtonConfig {
    const { dataset } = this.glCanvas;
    return {
      canvasWidth: parseInt(dataset.canvasWidth || '800', 10),
      canvasHeight: parseInt(dataset.canvasHeight || '400', 10),
      buttonX: parseFloat(dataset.buttonX || '400'),
      buttonY: parseFloat(dataset.buttonY || '200'),
      bgImage: dataset.bgImage || '/html/bg_glass.jpg',
      bgBlur: parseFloat(dataset.bgBlur || '6'),
      glassWidth: parseFloat(dataset.glassWidth || '120'),
      glassHeight: parseFloat(dataset.glassHeight || '60'),
      glassRadius: parseFloat(dataset.glassRadius || '30'),
      lightIntensity: parseFloat(dataset.lightIntensity || '85'),
      lightAngle: parseFloat(dataset.lightAngle || '100'),
      refractionDepth: parseFloat(dataset.refractionDepth || '25'),
      refractionFactor: parseFloat(dataset.refractionFactor || '75'),
      dispersion: parseFloat(dataset.dispersion || '8'),
      text: dataset.text || '',
      textColor: dataset.textColor || '#ffffff',
      textSize: parseFloat(dataset.textSize || '16'),
      textFont: dataset.textFont || 'Arial',
      icon: dataset.icon || '',
      iconType:
        (dataset.iconType as 'text' | 'svg' | 'local-svg' | 'image') || 'text',
      iconSize: parseFloat(dataset.iconSize || '20'),
      iconColor: dataset.iconColor || '#ffffff',
      iconPosition:
        (dataset.iconPosition as 'left' | 'right' | 'top' | 'bottom') || 'left',
      iconSpacing: parseFloat(dataset.iconSpacing || '8'),
      iconSvgPath: dataset.iconSvgPath || '',
      debugStep: parseFloat(dataset.debugStep || '9'),
      nonShapeAlpha: parseFloat(dataset.nonShapeAlpha || '0'),
      // 形状控制参数
      shapeType: (dataset.shapeType as 'rectangle' | 'circle') || 'rectangle',
      circleRadius: parseFloat(dataset.circleRadius || '150'),
      shapeRoundness: parseFloat(dataset.shapeRoundness || '7'),
      mergeRate: parseFloat(dataset.mergeRate || '0.05'),
      showCenterCircle: dataset.showCenterCircle !== 'false',
    };
  }

  public init(): void {
    this.setCanvasSize();
    this.initControls();
    this.initWebGL();
    this.loadTexture(this.config.bgImage);
    this.startRenderLoop();
  }

  private setCanvasSize(): void {
    this.glCanvas.width = this.config.canvasWidth;
    this.glCanvas.height = this.config.canvasHeight;
    this.glCanvas.style.width = `${this.config.canvasWidth}px`;
    this.glCanvas.style.height = `${this.config.canvasHeight}px`;

    this.textCanvas.width = this.config.canvasWidth;
    this.textCanvas.height = this.config.canvasHeight;
    this.textCanvas.style.width = `${this.config.canvasWidth}px`;
    this.textCanvas.style.height = `${this.config.canvasHeight}px`;
  }

  private initControls(): void {
    this.controls = {
      glareAngle: this.config.lightAngle,
      glareFactor: this.config.lightIntensity,
      refFactor: this.config.refractionFactor,
      refThickness: this.config.refractionDepth,
      refDispersion: this.config.dispersion,
      blurRadius: this.config.bgBlur,
      shapeWidth: this.config.glassWidth,
      shapeHeight: this.config.glassHeight,
      shapeRadius: this.config.glassRadius,
      shapeRoundness: this.config.shapeRoundness,
      mergeRate: this.config.mergeRate,
      refFresnelRange: 30,
      refFresnelHardness: 20,
      refFresnelFactor: 20,
      glareRange: 30,
      glareHardness: 20,
      glareConvergence: 50,
      glareOppositeFactor: 80,
      showShape1: false,
      debugStep: this.config.debugStep,
      nonShapeAlpha: this.config.nonShapeAlpha,
      // 形状控制参数
      shapeType: this.config.shapeType === 'circle' ? 1 : 0, // 0 = 矩形, 1 = 圆形
      circleRadius: this.config.circleRadius,
      showCenterCircle: this.config.showCenterCircle,
    };

    this.buttonX = this.config.buttonX;
    this.buttonY = this.config.buttonY;
    this.mouseSpringX = this.buttonX;
    this.mouseSpringY = this.buttonY;
  }

  private initWebGL(): void {
    if (!this.gl) return;

    this.program = this.createProgram(
      GlassButtonRenderer.getVertexShaderSource(),
      GlassButtonRenderer.getFragmentShaderSource()
    );
    this.blurProgram = this.createProgram(
      GlassButtonRenderer.getBlurVertexShaderSource(),
      GlassButtonRenderer.getBlurFragmentShaderSource()
    );

    this.setupUniforms();
    this.setupBuffers();
    this.setupTextures();
  }

  private static getVertexShaderSource(): string {
    return `#version 300 es
precision highp float;

in vec2 a_position;
out vec2 v_uv;

void main() 
{
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_uv = (a_position + 1.0) / 2.0;
}`;
  }

  private static getFragmentShaderSource(): string {
    return `#version 300 es
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
    {
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
            outColor = vec4(0.0);
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

                float fresnelFactor = clamp(
                    pow(
                        1.0 + merged * u_resolution1x.y / 1500.0 * pow(500.0 / u_refFresnelRange, 2.0) + u_refFresnelHardness,
                        5.0
                    ),
                    0.0, 1.0
                );

                outColor = mix(outColor, vec4(1.0), fresnelFactor * u_refFresnelFactor * 0.7 * length(normal));

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
           outColor.a = 1.0 - u_nonShapeAlpha;
        }
    }
    fragColor = outColor;
}`;
  }

  private static getBlurVertexShaderSource(): string {
    return `#version 300 es
precision highp float;
in vec2 a_position;
out vec2 v_uv;
void main() 
{
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_uv = (a_position + 1.0) / 2.0;
}`;
  }

  private static getBlurFragmentShaderSource(): string {
    return `#version 300 es
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
  }

  private createShader(type: number, source: string): WebGLShader | null {
    if (!this.gl) return null;

    const shader = this.gl.createShader(type);
    if (!shader) return null;

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      // eslint-disable-next-line no-console
      console.error(
        'Shader compilation error:',
        this.gl.getShaderInfoLog(shader)
      );
      this.gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  private createProgram(
    vertexSource: string,
    fragmentSource: string
  ): WebGLProgram | null {
    if (!this.gl) return null;

    const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = this.createShader(
      this.gl.FRAGMENT_SHADER,
      fragmentSource
    );

    if (!vertexShader || !fragmentShader) return null;

    const program = this.gl.createProgram();
    if (!program) return null;

    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
      // eslint-disable-next-line no-console
      console.error(
        'Program linking error:',
        this.gl.getProgramInfoLog(program)
      );
      this.gl.deleteProgram(program);
      return null;
    }

    return program;
  }

  private setupUniforms(): void {
    if (!this.gl || !this.program || !this.blurProgram) return;

    const uniformNames = [
      'u_blurredBg',
      'u_bg',
      'u_resolution',
      'u_dpr',
      'u_mouse',
      'u_mouseSpring',
      'u_mergeRate',
      'u_shapeWidth',
      'u_shapeHeight',
      'u_shapeRadius',
      'u_shapeRoundness',
      'u_circleRadius',
      'u_shapeType',
      'u_showCenterCircle',
      'u_tint',
      'u_refThickness',
      'u_refFactor',
      'u_refDispersion',
      'u_refFresnelRange',
      'u_refFresnelFactor',
      'u_refFresnelHardness',
      'u_glareRange',
      'u_glareConvergence',
      'u_glareOppositeFactor',
      'u_glareFactor',
      'u_glareHardness',
      'u_glareAngle',
      'u_showShape1',
      'STEP',
      'u_nonShapeAlpha',
    ];

    uniformNames.forEach((name) => {
      this.uniforms[name] = this.gl!.getUniformLocation(this.program!, name);
    });

    this.blurUniforms = {
      u_texture: this.gl.getUniformLocation(this.blurProgram, 'u_texture'),
      u_resolution: this.gl.getUniformLocation(
        this.blurProgram,
        'u_resolution'
      ),
      u_direction: this.gl.getUniformLocation(this.blurProgram, 'u_direction'),
      u_blurRadius: this.gl.getUniformLocation(
        this.blurProgram,
        'u_blurRadius'
      ),
    };
  }

  private setupBuffers(): void {
    if (!this.gl) return;

    const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
    this.positionBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(positions),
      this.gl.STATIC_DRAW
    );
  }

  private setupTextures(): void {
    if (!this.gl) return;

    this.backgroundTexture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.backgroundTexture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      1,
      1,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 255, 255])
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );

    this.tempBlurTexture = this.createBlurTexture(1, 1);
    this.blurredBackgroundTexture = this.createBlurTexture(1, 1);
  }

  private createBlurTexture(
    width: number,
    height: number
  ): WebGLTexture | null {
    if (!this.gl) return null;

    const texture = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
    this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      this.gl.RGBA,
      width,
      height,
      0,
      this.gl.RGBA,
      this.gl.UNSIGNED_BYTE,
      null
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      this.gl.LINEAR
    );
    this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      this.gl.LINEAR
    );

    return texture;
  }

  private loadTexture(url: string): void {
    if (!this.gl || !this.backgroundTexture) return;

    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = url;
    image.onload = () => {
      if (!this.gl || !this.backgroundTexture) return;

      this.gl.bindTexture(this.gl.TEXTURE_2D, this.backgroundTexture);
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, true);
      this.gl.texImage2D(
        this.gl.TEXTURE_2D,
        0,
        this.gl.RGBA,
        this.gl.RGBA,
        this.gl.UNSIGNED_BYTE,
        image
      );
      this.setupBlurFramebuffers(image.width, image.height);
      this.performBlur();
    };
  }

  private setupBlurFramebuffers(width: number, height: number): void {
    if (!this.gl) return;

    const { width: canvasWidth, height: canvasHeight } = this.glCanvas;

    this.tempBlurTexture = this.createBlurTexture(canvasWidth, canvasHeight);
    this.blurredBackgroundTexture = this.createBlurTexture(
      canvasWidth,
      canvasHeight
    );

    this.blurFramebuffer1 = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurFramebuffer1);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      this.tempBlurTexture,
      0
    );

    this.blurFramebuffer2 = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurFramebuffer2);
    this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      this.blurredBackgroundTexture,
      0
    );
  }

  private performBlur(): void {
    if (!this.gl || !this.blurProgram || !this.positionBuffer) return;

    const { width, height } = this.glCanvas;

    if (this.controls.blurRadius <= 0) {
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurFramebuffer2);
      this.gl.viewport(0, 0, width, height);
      this.gl.useProgram(this.program);
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.backgroundTexture);
      this.gl.uniform1i(this.uniforms.u_bg, 0);
      this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
      return;
    }

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurFramebuffer1);
    this.gl.viewport(0, 0, width, height);
    this.gl.useProgram(this.blurProgram);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

    const blurPositionAttributeLocation = this.gl.getAttribLocation(
      this.blurProgram,
      'a_position'
    );
    this.gl.enableVertexAttribArray(blurPositionAttributeLocation);
    this.gl.vertexAttribPointer(
      blurPositionAttributeLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.backgroundTexture);
    this.gl.uniform1i(this.blurUniforms.u_texture, 0);
    this.gl.uniform2f(this.blurUniforms.u_resolution, width, height);
    this.gl.uniform2f(this.blurUniforms.u_direction, 1.0, 0.0);
    this.gl.uniform1f(this.blurUniforms.u_blurRadius, this.controls.blurRadius);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blurFramebuffer2);
    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.tempBlurTexture);
    this.gl.uniform1i(this.blurUniforms.u_texture, 0);
    this.gl.uniform2f(this.blurUniforms.u_direction, 0.0, 1.0);
    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
  }

  private setupEventListeners(): void {
    this.glCanvas.addEventListener('mousedown', this.handleMouseDown);
    this.glCanvas.addEventListener('mouseup', this.handleMouseUp);
    this.glCanvas.addEventListener('mouseleave', this.handleMouseUp);
    this.glCanvas.addEventListener('mousemove', this.handleMouseMove);
  }

  private handleMouseDown = (event: MouseEvent): void => {
    const rect = this.glCanvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = this.config.canvasHeight - (event.clientY - rect.top);

    if (this.isMouseOnButton(mouseX, mouseY)) {
      this.isDragging = true;
      this.isDraggingStarted = false;
      this.mouseDownTime = Date.now();
      this.isHighPerformanceMode = true;
      this.dragOffsetX = mouseX - this.buttonX;
      this.dragOffsetY = mouseY - this.buttonY;
      this.glCanvas.style.cursor = 'grabbing';
    }
  };

  private handleMouseUp = (event: MouseEvent): void => {
    const wasClicked = this.isDragging && !this.isDraggingStarted;
    const clickDuration = Date.now() - this.mouseDownTime;

    if (wasClicked && clickDuration < 200 && this.onClickCallback) {
      this.onClickCallback(event);
    }

    this.isDragging = false;
    this.isDraggingStarted = false;
    this.isHighPerformanceMode = false;
    this.glCanvas.style.cursor = 'default';
  };

  private handleMouseMove = (event: MouseEvent): void => {
    if (this.isDragging) {
      if (!this.isDraggingStarted) {
        const rect = this.glCanvas.getBoundingClientRect();
        const currentX = event.clientX - rect.left;
        const currentY = this.config.canvasHeight - (event.clientY - rect.top);
        const initialX = this.buttonX + this.dragOffsetX;
        const initialY = this.buttonY + this.dragOffsetY;
        const distance = Math.sqrt(
          (currentX - initialX) ** 2 + (currentY - initialY) ** 2
        );

        if (distance > 5) {
          this.isDraggingStarted = true;
        }
      }

      const rect = this.glCanvas.getBoundingClientRect();
      const newX = event.clientX - rect.left - this.dragOffsetX;
      const newY =
        this.config.canvasHeight -
        (event.clientY - rect.top) -
        this.dragOffsetY;

      this.buttonX = Math.max(
        this.controls.shapeWidth / 2,
        Math.min(this.config.canvasWidth - this.controls.shapeWidth / 2, newX)
      );
      this.buttonY = Math.max(
        this.controls.shapeHeight / 2,
        Math.min(this.config.canvasHeight - this.controls.shapeHeight / 2, newY)
      );
    }
  };

  private isMouseOnButton(mouseX: number, mouseY: number): boolean {
    const halfWidth = this.controls.shapeWidth * 0.5;
    const halfHeight = this.controls.shapeHeight * 0.5;
    const dx = mouseX - this.buttonX;
    const dy = mouseY - this.buttonY;

    return Math.abs(dx) <= halfWidth && Math.abs(dy) <= halfHeight;
  }

  private startRenderLoop(): void {
    let lastTime = 0;
    const targetFPS = 60;
    const frameInterval = 1000 / targetFPS;

    const render = (currentTime: number) => {
      if (currentTime - lastTime >= frameInterval) {
        this.render();
        lastTime = currentTime;
      }
      this.animationFrameId = requestAnimationFrame(render);
    };
    this.animationFrameId = requestAnimationFrame(render);
  }

  private render(): void {
    if (!this.gl || !this.program || !this.positionBuffer) return;

    this.glCanvas.width = this.config.canvasWidth;
    this.glCanvas.height = this.config.canvasHeight;
    this.gl.viewport(0, 0, this.glCanvas.width, this.glCanvas.height);

    const springFactor = this.isHighPerformanceMode ? 0.15 : 0.08;
    this.mouseSpringX += (this.buttonX - this.mouseSpringX) * springFactor;
    this.mouseSpringY += (this.buttonY - this.mouseSpringY) * springFactor;

    this.setupBlurFramebuffers(this.glCanvas.width, this.glCanvas.height);
    this.performBlur();

    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.gl.viewport(0, 0, this.glCanvas.width, this.glCanvas.height);
    this.gl.clearColor(0.1, 0.1, 0.1, 1);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.gl.useProgram(this.program);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

    const positionAttributeLocation = this.gl.getAttribLocation(
      this.program,
      'a_position'
    );
    this.gl.enableVertexAttribArray(positionAttributeLocation);
    this.gl.vertexAttribPointer(
      positionAttributeLocation,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );

    this.gl.activeTexture(this.gl.TEXTURE0);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.backgroundTexture);
    this.gl.uniform1i(this.uniforms.u_bg, 0);

    this.gl.activeTexture(this.gl.TEXTURE1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.blurredBackgroundTexture);
    this.gl.uniform1i(this.uniforms.u_blurredBg, 1);

    this.gl.uniform2f(
      this.uniforms.u_resolution,
      this.glCanvas.width,
      this.glCanvas.height
    );
    this.gl.uniform1f(this.uniforms.u_dpr, window.devicePixelRatio || 1);
    this.gl.uniform2f(this.uniforms.u_mouse, this.buttonX, this.buttonY);
    this.gl.uniform2f(
      this.uniforms.u_mouseSpring,
      this.mouseSpringX,
      this.mouseSpringY
    );

    this.gl.uniform1f(this.uniforms.u_mergeRate, this.controls.mergeRate);
    this.gl.uniform1f(this.uniforms.u_shapeWidth, this.controls.shapeWidth);
    this.gl.uniform1f(this.uniforms.u_shapeHeight, this.controls.shapeHeight);
    this.gl.uniform1f(this.uniforms.u_shapeRadius, this.controls.shapeRadius);
    this.gl.uniform1f(
      this.uniforms.u_shapeRoundness,
      this.controls.shapeRoundness
    );

    // 形状控制参数
    this.gl.uniform1i(this.uniforms.u_shapeType, this.controls.shapeType);
    this.gl.uniform1f(this.uniforms.u_circleRadius, this.controls.circleRadius);
    this.gl.uniform1i(this.uniforms.u_showCenterCircle, this.controls.showCenterCircle ? 1 : 0);

    this.gl.uniform4f(this.uniforms.u_tint, 1.0, 1.0, 1.0, 0.0); // 默认透明tint
    this.gl.uniform1f(this.uniforms.u_refThickness, this.controls.refThickness);
    this.gl.uniform1f(
      this.uniforms.u_refFactor,
      (this.controls.refFactor / 100.0) * 4.0
    );
    this.gl.uniform1f(
      this.uniforms.u_refDispersion,
      this.controls.refDispersion / 100.0
    );
    this.gl.uniform1f(
      this.uniforms.u_refFresnelRange,
      this.controls.refFresnelRange
    );
    this.gl.uniform1f(
      this.uniforms.u_refFresnelFactor,
      this.controls.refFresnelFactor / 100.0
    );
    this.gl.uniform1f(
      this.uniforms.u_refFresnelHardness,
      this.controls.refFresnelHardness / 100.0
    );
    this.gl.uniform1f(this.uniforms.u_glareRange, this.controls.glareRange);
    this.gl.uniform1f(
      this.uniforms.u_glareConvergence,
      this.controls.glareConvergence / 100.0
    );
    this.gl.uniform1f(
      this.uniforms.u_glareOppositeFactor,
      this.controls.glareOppositeFactor / 100.0
    );
    this.gl.uniform1f(
      this.uniforms.u_glareFactor,
      this.controls.glareFactor / 100.0
    );
    this.gl.uniform1f(
      this.uniforms.u_glareHardness,
      this.controls.glareHardness / 100.0
    );
    this.gl.uniform1f(
      this.uniforms.u_glareAngle,
      (this.controls.glareAngle * Math.PI) / 180.0
    );
    this.gl.uniform1i(
      this.uniforms.u_showShape1,
      this.controls.showShape1 ? 1 : 0
    );
    this.gl.uniform1i(this.uniforms.STEP, this.controls.debugStep);
    this.gl.uniform1f(
      this.uniforms.u_nonShapeAlpha,
      this.controls.nonShapeAlpha / 100.0
    );

    this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

    this.renderText();
  }

  private renderText(): void {
    if (!this.textCtx) return;

    this.textCtx.clearRect(0, 0, this.textCanvas.width, this.textCanvas.height);

    const hasText = this.config.text && this.config.text.trim() !== '';
    const hasIcon =
      (this.config.icon && this.config.icon.trim() !== '') ||
      (this.config.iconType === 'local-svg' &&
        this.config.iconSvgPath &&
        this.config.iconSvgPath.trim() !== '');

    if (!hasText && !hasIcon) {
      return;
    }

    const centerX = this.mouseSpringX;
    const centerY = this.config.canvasHeight - this.mouseSpringY; // Y轴翻转
    if (Number.isNaN(centerX) || Number.isNaN(centerY)) {
      return;
    }

    this.textCtx.save();

    let textWidth = 0;
    let textHeight = 0;
    let iconWidth = 0;
    let iconHeight = 0;

    if (hasText) {
      this.textCtx.font = `bold ${this.config.textSize}px ${this.config.textFont}`;
      const textMetrics = this.textCtx.measureText(this.config.text);
      textWidth = textMetrics.width;
      textHeight = this.config.textSize;
    }

    if (hasIcon) {
      iconWidth = this.config.iconSize;
      iconHeight = this.config.iconSize;
    }

    let textX = centerX;
    let textY = centerY;
    let iconX = centerX;
    let iconY = centerY;

    if (hasText && hasIcon) {
      switch (this.config.iconPosition) {
        case 'left': {
          iconX = centerX - (textWidth + this.config.iconSpacing) / 2;
          textX = centerX + (iconWidth + this.config.iconSpacing) / 2;
          break;
        }
        case 'right': {
          textX = centerX - (iconWidth + this.config.iconSpacing) / 2;
          iconX = centerX + (textWidth + this.config.iconSpacing) / 2;
          break;
        }
        case 'top': {
          iconY = centerY - (textHeight + this.config.iconSpacing) / 2;
          textY = centerY + (iconHeight + this.config.iconSpacing) / 2;
          break;
        }
        case 'bottom': {
          textY = centerY - (iconHeight + this.config.iconSpacing) / 2;
          iconY = centerY + (textHeight + this.config.iconSpacing) / 2;
          break;
        }
        default: {
          // 默认为左侧位置
          iconX = centerX - (textWidth + this.config.iconSpacing) / 2;
          textX = centerX + (iconWidth + this.config.iconSpacing) / 2;
          break;
        }
      }
    }

    if (hasIcon) {
      this.renderIcon(iconX, iconY);
    }

    if (hasText) {
      this.renderTextContent(textX, textY);
    }

    this.textCtx.restore();
  }

  // private renderTextContent(textX: number, textY: number): void {
  //   if (!this.textCtx) return;

  //   this.textCtx.font = ` ${this.config.textSize}px ${this.config.textFont}`;
  //   this.textCtx.textAlign = 'center';
  //   this.textCtx.textBaseline = 'middle';

  //   const gradient = this.textCtx.createLinearGradient(
  //     textX - this.config.textSize,
  //     textY - this.config.textSize / 2,
  //     textX + this.config.textSize,
  //     textY + this.config.textSize / 2
  //   );
  //   gradient.addColorStop(0, this.config.textColor);
  //   gradient.addColorStop(0.5, this.config.textColor);

  //   const highlightColor = GlassButtonRenderer.lightenColor(
  //     this.config.textColor,
  //     30
  //   );
  //   gradient.addColorStop(1, highlightColor);

  //   // 绘制文字阴影 (多层阴影效果)
  //   this.textCtx.globalCompositeOperation = 'source-over';
  //   this.textCtx.fillStyle = 'rgba(0, 0, 0, 0.8)';
  //   this.textCtx.fillText(this.config.text, textX + 2, textY + 2);

  //   this.textCtx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  //   this.textCtx.fillText(this.config.text, textX + 1, textY + 1);

  //   this.textCtx.fillStyle = gradient;
  //   this.textCtx.fillText(this.config.text, textX, textY);

  //   this.textCtx.globalCompositeOperation = 'screen';
  //   this.textCtx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  //   this.textCtx.fillText(this.config.text, textX - 0.5, textY - 0.5);
  // }

  private renderTextContent(textX: number, textY: number): void {
    if (!this.textCtx) return;
    this.textCtx.font = `${this.config.textSize}px ${this.config.textFont}`;
    this.textCtx.textAlign = 'center';
    this.textCtx.textBaseline = 'middle';

    this.textCtx.globalCompositeOperation = 'source-over';
    this.textCtx.fillStyle = this.config.textColor;
    this.textCtx.fillText(this.config.text, textX, textY);
  }

  private renderIcon(x: number, y: number): void {
    if (!this.textCtx) return;

    this.textCtx.save();

    switch (this.config.iconType) {
      // case 'text': {
      //   this.textCtx.font = `${this.config.iconSize}px ${this.config.textFont}`;
      //   this.textCtx.textAlign = 'center';
      //   this.textCtx.textBaseline = 'middle';

      //   const iconGradient = this.textCtx.createLinearGradient(
      //     x - this.config.iconSize / 2,
      //     y - this.config.iconSize / 2,
      //     x + this.config.iconSize / 2,
      //     y + this.config.iconSize / 2
      //   );
      //   iconGradient.addColorStop(0, this.config.iconColor);
      //   iconGradient.addColorStop(0.5, this.config.iconColor);
      //   iconGradient.addColorStop(
      //     1,
      //     GlassButtonRenderer.lightenColor(this.config.iconColor, 30)
      //   );

      //   this.textCtx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      //   this.textCtx.fillText(this.config.icon, x + 1, y + 1);

      //   this.textCtx.fillStyle = iconGradient;
      //   this.textCtx.fillText(this.config.icon, x, y);

      //   this.textCtx.globalCompositeOperation = 'screen';
      //   this.textCtx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      //   this.textCtx.fillText(this.config.icon, x - 0.5, y - 0.5);
      //   break;
      // }
      case 'text': {
        this.textCtx.font = `${this.config.iconSize}px ${this.config.textFont}`;
        this.textCtx.textAlign = 'center';
        this.textCtx.textBaseline = 'middle';

        this.textCtx.fillStyle = this.config.iconColor;
        this.textCtx.fillText(this.config.icon, x, y);
        break;
      }

      case 'svg': {
        this.renderBuiltinSVGIcon(x, y);
        break;
      }

      case 'local-svg': {
        this.renderLocalSVGIcon(x, y);
        break;
      }

      case 'image': {
        this.renderImageIcon(x, y);
        break;
      }

      default: {
        this.textCtx.beginPath();
        this.textCtx.arc(x, y, this.config.iconSize / 2, 0, 2 * Math.PI);
        this.textCtx.fillStyle = this.config.iconColor;
        this.textCtx.fill();
        this.textCtx.strokeStyle = GlassButtonRenderer.lightenColor(
          this.config.iconColor,
          30
        );
        this.textCtx.lineWidth = 2;
        this.textCtx.stroke();
        break;
      }
    }

    this.textCtx.restore();
  }

  // 内置SVG图标渲染
  private renderBuiltinSVGIcon(x: number, y: number): void {
    if (!this.textCtx) return;

    const size = this.config.iconSize;
    const halfSize = size / 2;

    this.textCtx.save();
    this.textCtx.strokeStyle = this.config.iconColor;
    this.textCtx.fillStyle = this.config.iconColor;
    this.textCtx.lineWidth = Math.max(1, size / 10);
    this.textCtx.lineCap = 'round';
    this.textCtx.lineJoin = 'round';

    this.textCtx.save();
    this.textCtx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
    this.textCtx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    this.textCtx.translate(1, 1);
    this.drawSVGShape(x, y, halfSize);
    this.textCtx.restore();

    this.drawSVGShape(x, y, halfSize);

    this.textCtx.save();
    this.textCtx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this.textCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    this.textCtx.translate(-0.5, -0.5);
    this.drawSVGShape(x, y, halfSize);
    this.textCtx.restore();

    this.textCtx.restore();
  }

  // 绘制具体的SVG形状
  private drawSVGShape(x: number, y: number, halfSize: number): void {
    if (!this.textCtx) return;

    const iconName = this.config.icon.toLowerCase();

    switch (iconName) {
      case 'play':
      case '▶': {
        this.textCtx.beginPath();
        this.textCtx.moveTo(x - halfSize * 0.3, y - halfSize * 0.6);
        this.textCtx.lineTo(x + halfSize * 0.6, y);
        this.textCtx.lineTo(x - halfSize * 0.3, y + halfSize * 0.6);
        this.textCtx.closePath();
        this.textCtx.fill();
        break;
      }

      case 'pause':
      case '⏸': {
        const barWidth = halfSize * 0.3;
        this.textCtx.fillRect(
          x - halfSize * 0.5,
          y - halfSize * 0.6,
          barWidth,
          halfSize * 1.2
        );
        this.textCtx.fillRect(
          x + halfSize * 0.2,
          y - halfSize * 0.6,
          barWidth,
          halfSize * 1.2
        );
        break;
      }

      case 'stop':
      case '⏹': {
        this.textCtx.fillRect(
          x - halfSize * 0.5,
          y - halfSize * 0.5,
          halfSize,
          halfSize
        );
        break;
      }

      case 'download':
      case '⬇️': {
        this.textCtx.fillRect(
          x - halfSize * 0.1,
          y - halfSize * 0.6,
          halfSize * 0.2,
          halfSize * 0.8
        );
        this.textCtx.beginPath();
        this.textCtx.moveTo(x - halfSize * 0.4, y + halfSize * 0.1);
        this.textCtx.lineTo(x, y + halfSize * 0.6);
        this.textCtx.lineTo(x + halfSize * 0.4, y + halfSize * 0.1);
        this.textCtx.closePath();
        this.textCtx.fill();
        break;
      }

      case 'heart':
      case '💖': {
        this.textCtx.beginPath();
        const heartSize = halfSize * 0.5;
        this.textCtx.arc(
          x - heartSize * 0.5,
          y - heartSize * 0.3,
          heartSize * 0.6,
          0,
          Math.PI,
          false
        );
        this.textCtx.arc(
          x + heartSize * 0.5,
          y - heartSize * 0.3,
          heartSize * 0.6,
          0,
          Math.PI,
          false
        );
        this.textCtx.lineTo(x, y + heartSize * 0.8);
        this.textCtx.closePath();
        this.textCtx.fill();
        break;
      }

      case 'star':
      case '⭐': {
        this.drawStar(x, y, halfSize * 0.8, 5);
        break;
      }

      case 'home':
      case '🏠': {
        this.textCtx.beginPath();
        this.textCtx.moveTo(x, y - halfSize * 0.6);
        this.textCtx.lineTo(x - halfSize * 0.6, y);
        this.textCtx.lineTo(x + halfSize * 0.6, y);
        this.textCtx.closePath();
        this.textCtx.fill();
        this.textCtx.fillRect(
          x - halfSize * 0.4,
          y,
          halfSize * 0.8,
          halfSize * 0.6
        );
        break;
      }

      case 'settings':
      case '⚙️': {
        this.drawGear(x, y, halfSize * 0.8);
        break;
      }

      default: {
        this.textCtx.beginPath();
        this.textCtx.arc(x, y, halfSize * 0.8, 0, 2 * Math.PI);
        this.textCtx.fill();
        break;
      }
    }
  }

  private drawStar(
    centerX: number,
    centerY: number,
    radius: number,
    points: number
  ): void {
    if (!this.textCtx) return;

    const angle = Math.PI / points;
    this.textCtx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
      const r = i % 2 === 0 ? radius : radius * 0.5;
      const x = centerX + Math.cos(i * angle - Math.PI / 2) * r;
      const y = centerY + Math.sin(i * angle - Math.PI / 2) * r;
      if (i === 0) {
        this.textCtx.moveTo(x, y);
      } else {
        this.textCtx.lineTo(x, y);
      }
    }
    this.textCtx.closePath();
    this.textCtx.fill();
  }

  private drawGear(centerX: number, centerY: number, radius: number): void {
    if (!this.textCtx) return;

    const teeth = 8;
    const innerRadius = radius * 0.6;
    const toothHeight = radius * 0.2;

    this.textCtx.beginPath();
    for (let i = 0; i < teeth * 2; i++) {
      const angle = (i * Math.PI) / teeth;
      const r = i % 2 === 0 ? radius : radius - toothHeight;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      if (i === 0) {
        this.textCtx.moveTo(x, y);
      } else {
        this.textCtx.lineTo(x, y);
      }
    }
    this.textCtx.closePath();
    this.textCtx.fill();

    this.textCtx.globalCompositeOperation = 'destination-out';
    this.textCtx.beginPath();
    this.textCtx.arc(centerX, centerY, innerRadius * 0.3, 0, 2 * Math.PI);
    this.textCtx.fill();
    this.textCtx.globalCompositeOperation = 'source-over';
  }

  // 本地SVG文件渲染
  private async renderLocalSVGIcon(x: number, y: number): Promise<void> {
    if (!this.textCtx) return;

    if (!this.config.iconSvgPath) {
      // eslint-disable-next-line no-console
      console.warn('No SVG path specified for local-svg icon type');
      this.renderFallbackIcon(x, y);
      return;
    }

    const cacheKey = `${this.config.iconSvgPath}_${this.config.iconSize}_${this.config.iconColor}`;

    if (this.svgImageCache.has(cacheKey)) {
      const img = this.svgImageCache.get(cacheKey);
      if (img) {
        this.drawSVGImage(img, x, y);
        return;
      }
    }

    if (this.svgLoadingStates.get(this.config.iconSvgPath)) {
      this.renderFallbackIcon(x, y);
      return;
    }

    this.svgLoadingStates.set(this.config.iconSvgPath, true);

    try {
      const svgText = await this.loadSVG(this.config.iconSvgPath);

      if (!svgText) {
        this.renderFallbackIcon(x, y);
        return;
      }

      const img = await this.svgToImage(
        svgText,
        this.config.iconSize,
        this.config.iconSize,
        this.config.iconColor
      );

      if (!img) {
        this.renderFallbackIcon(x, y);
        return;
      }

      this.svgImageCache.set(cacheKey, img);

      this.drawSVGImage(img, x, y);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Error rendering local SVG icon:', error);
      this.renderFallbackIcon(x, y);
    } finally {
      this.svgLoadingStates.set(this.config.iconSvgPath, false);
    }
  }

  // 绘制SVG图像的辅助函数
  private drawSVGImage(img: HTMLImageElement, x: number, y: number): void {
    if (!this.textCtx) return;

    this.textCtx.save();

    this.textCtx.globalAlpha = 0.6;
    this.textCtx.drawImage(
      img,
      x - this.config.iconSize / 2 + 1,
      y - this.config.iconSize / 2 + 1,
      this.config.iconSize,
      this.config.iconSize
    );

    this.textCtx.globalAlpha = 1.0;
    this.textCtx.drawImage(
      img,
      x - this.config.iconSize / 2,
      y - this.config.iconSize / 2,
      this.config.iconSize,
      this.config.iconSize
    );

    this.textCtx.globalAlpha = 0.3;
    this.textCtx.globalCompositeOperation = 'screen';
    this.textCtx.drawImage(
      img,
      x - this.config.iconSize / 2 - 0.5,
      y - this.config.iconSize / 2 - 0.5,
      this.config.iconSize,
      this.config.iconSize
    );

    this.textCtx.restore();
  }

  // 渲染占位符图标
  private renderFallbackIcon(x: number, y: number): void {
    if (!this.textCtx) return;

    this.textCtx.save();
    this.textCtx.fillStyle = this.config.iconColor;
    this.textCtx.fillRect(
      x - this.config.iconSize / 2,
      y - this.config.iconSize / 2,
      this.config.iconSize,
      this.config.iconSize
    );
    this.textCtx.restore();
  }

  // 图片图标渲染
  private renderImageIcon(x: number, y: number): void {
    if (!this.textCtx) return;

    this.textCtx.beginPath();
    this.textCtx.rect(
      x - this.config.iconSize / 2,
      y - this.config.iconSize / 2,
      this.config.iconSize,
      this.config.iconSize
    );
    this.textCtx.fillStyle = this.config.iconColor;
    this.textCtx.fill();
    this.textCtx.strokeStyle = GlassButtonRenderer.lightenColor(
      this.config.iconColor,
      30
    );
    this.textCtx.lineWidth = 2;
    this.textCtx.stroke();
  }

  // 辅助函数：使颜色变亮
  private static lightenColor(color: string, percent: number): string {
    if (color.startsWith('#')) {
      const num = parseInt(color.replace('#', ''), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) + amt;
      const G = ((num >> 8) & 0x00ff) + amt;
      const B = (num & 0x0000ff) + amt;
      return `#${(
        0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)}`;
    }
    return color;
  }

  // 加载本地SVG文件
  private async loadSVG(svgPath: string): Promise<string | null> {
    if (this.svgCache.has(svgPath)) {
      return this.svgCache.get(svgPath) || null;
    }

    try {
      const response = await fetch(svgPath);
      if (!response.ok) {
        throw new Error(`Failed to load SVG: ${response.statusText}`);
      }
      const svgText = await response.text();
      this.svgCache.set(svgPath, svgText);
      return svgText;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(`Failed to load SVG from ${svgPath}:`, error);
      return null;
    }
  }

  // 将SVG转换为Image对象（用于Canvas渲染）
  private async svgToImage(
    svgText: string,
    width: number,
    height: number,
    color: string
  ): Promise<HTMLImageElement | null> {
    const cacheKey = `${svgText}_${width}_${height}_${color}`;

    if (this.svgImageCache.has(cacheKey)) {
      return this.svgImageCache.get(cacheKey) || null;
    }

    try {
      let coloredSvg = svgText.replace(/fill="[^"]*"/g, `fill="${color}"`);
      coloredSvg = coloredSvg.replace(/stroke="[^"]*"/g, `stroke="${color}"`);

      const blob = new Blob([coloredSvg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);

      const img = new Image();
      img.width = width;
      img.height = height;

      return new Promise((resolve) => {
        img.onload = () => {
          URL.revokeObjectURL(url);
          this.svgImageCache.set(cacheKey, img);
          resolve(img);
        };
        img.onerror = () => {
          URL.revokeObjectURL(url);
          resolve(null);
        };
        img.src = url;
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to convert SVG to image:', error);
      return null;
    }
  }

  public updateParams(newParams: Partial<GlassButtonConfig>): void {
    Object.assign(this.config, newParams);

    // 更新controls
    if (newParams.bgBlur !== undefined)
      this.controls.blurRadius = newParams.bgBlur;
    if (newParams.glassWidth !== undefined)
      this.controls.shapeWidth = newParams.glassWidth;
    if (newParams.glassHeight !== undefined)
      this.controls.shapeHeight = newParams.glassHeight;
    if (newParams.glassRadius !== undefined)
      this.controls.shapeRadius = newParams.glassRadius;
    if (newParams.lightIntensity !== undefined)
      this.controls.glareFactor = newParams.lightIntensity;
    if (newParams.lightAngle !== undefined)
      this.controls.glareAngle = newParams.lightAngle;
    if (newParams.refractionDepth !== undefined)
      this.controls.refThickness = newParams.refractionDepth;
    if (newParams.refractionFactor !== undefined)
      this.controls.refFactor = newParams.refractionFactor;
    if (newParams.dispersion !== undefined)
      this.controls.refDispersion = newParams.dispersion;
    if (newParams.debugStep !== undefined)
      this.controls.debugStep = newParams.debugStep;
    if (newParams.nonShapeAlpha !== undefined)
      this.controls.nonShapeAlpha = newParams.nonShapeAlpha;

    // 形状控制参数
    if (newParams.shapeType !== undefined)
      this.controls.shapeType = newParams.shapeType === 'circle' ? 1 : 0;
    if (newParams.circleRadius !== undefined)
      this.controls.circleRadius = newParams.circleRadius;
    if (newParams.shapeRoundness !== undefined)
      this.controls.shapeRoundness = newParams.shapeRoundness;
    if (newParams.mergeRate !== undefined)
      this.controls.mergeRate = newParams.mergeRate;
    if (newParams.showCenterCircle !== undefined)
      this.controls.showCenterCircle = newParams.showCenterCircle;

    if (newParams.buttonX !== undefined) {
      this.buttonX = newParams.buttonX;
      this.mouseSpringX = this.buttonX;
    }
    if (newParams.buttonY !== undefined) {
      this.buttonY = newParams.buttonY;
      this.mouseSpringY = this.buttonY;
    }

    if (
      newParams.canvasWidth !== undefined ||
      newParams.canvasHeight !== undefined
    ) {
      this.setCanvasSize();
    }

    if (newParams.bgImage && newParams.bgImage !== this.config.bgImage) {
      this.loadTexture(newParams.bgImage);
    }
  }

  public setClickCallback(callback: (event: MouseEvent) => void): void {
    this.onClickCallback = callback;
  }

  public destroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.gl) {
      if (this.program) this.gl.deleteProgram(this.program);
      if (this.blurProgram) this.gl.deleteProgram(this.blurProgram);
      if (this.backgroundTexture) this.gl.deleteTexture(this.backgroundTexture);
      if (this.blurredBackgroundTexture)
        this.gl.deleteTexture(this.blurredBackgroundTexture);
      if (this.tempBlurTexture) this.gl.deleteTexture(this.tempBlurTexture);
      if (this.blurFramebuffer1)
        this.gl.deleteFramebuffer(this.blurFramebuffer1);
      if (this.blurFramebuffer2)
        this.gl.deleteFramebuffer(this.blurFramebuffer2);
      if (this.positionBuffer) this.gl.deleteBuffer(this.positionBuffer);
    }
  }
}

export default GlassButtonRenderer;
