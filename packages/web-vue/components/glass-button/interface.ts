export interface GlassButtonProps {
  canvasWidth?: number;
  canvasHeight?: number;
  buttonX?: number;
  buttonY?: number;
  bgImage?: string;
  bgBlur?: number;
  glassWidth?: number;
  glassHeight?: number;
  glassRadius?: number;
  lightIntensity?: number;
  lightAngle?: number;
  refractionDepth?: number;
  refractionFactor?: number;
  dispersion?: number;
  text?: string;
  textColor?: string;
  textSize?: number;
  textFont?: string;
  icon?: string;
  iconType?: 'text' | 'svg' | 'local-svg' | 'image';
  iconSize?: number;
  iconColor?: string;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  iconSpacing?: number;
  iconSvgPath?: string;
  debugStep?: number;
  nonShapeAlpha?: number;
  // 形状控制参数
  shapeType?: 'rectangle' | 'circle';
  circleRadius?: number;
  shapeRoundness?: number;
  mergeRate?: number;
  showCenterCircle?: boolean;
}