<template>
  <div class="glass-button-container" :style="{ width: `${canvasWidth}px`, height: `${canvasHeight}px` }">
    <canvas ref="glCanvas" class="gl-canvas" :data-canvas-width="canvasWidth" :data-canvas-height="canvasHeight"
      :data-button-x="buttonX" :data-button-y="buttonY" :data-bg-image="bgImage" :data-bg-blur="bgBlur"
      :data-glass-width="glassWidth" :data-glass-height="glassHeight" :data-glass-radius="glassRadius"
      :data-light-intensity="lightIntensity" :data-light-angle="lightAngle" :data-refraction-depth="refractionDepth"
      :data-refraction-factor="refractionFactor" :data-dispersion="dispersion" :data-text="text"
      :data-text-color="textColor" :data-text-size="textSize" :data-text-font="textFont" :data-icon="icon"
      :data-icon-type="iconType" :data-icon-size="iconSize" :data-icon-color="iconColor"
      :data-icon-position="iconPosition" :data-icon-spacing="iconSpacing" :data-icon-svg-path="iconSvgPath"
      :data-debug-step="debugStep" :data-non-shape-alpha="nonShapeAlpha" :data-shape-type="shapeType"
      :data-circle-radius="circleRadius" :data-shape-roundness="shapeRoundness" :data-merge-rate="mergeRate"
      :data-show-center-circle="showCenterCircle" />
    <canvas ref="textCanvas" class="text-canvas" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick, defineOptions, withDefaults, defineProps, defineEmits } from 'vue'
import { GlassButtonRenderer, type GlassButtonConfig } from './glass-renderer'
import type { GlassButtonProps } from './interface'

defineOptions({
  name: 'GlassButton'
})

// 定义事件
const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// 定义 props
const props = withDefaults(defineProps<{
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
}>(), {
  canvasWidth: 800,
  canvasHeight: 400,
  buttonX: 400,
  buttonY: 200,
  bgImage: '/html/bg_glass.jpg',
  bgBlur: 6,
  glassWidth: 120,
  glassHeight: 60,
  glassRadius: 30,
  lightIntensity: 85,
  lightAngle: 100,
  refractionDepth: 25,
  refractionFactor: 75,
  dispersion: 8,
  text: 'Glass Button',
  textColor: '#ffffff',
  textSize: 16,
  textFont: 'Arial',
  icon: '',
  iconType: 'text',
  iconSize: 20,
  iconColor: '#ffffff',
  iconPosition: 'left',
  iconSpacing: 8,
  iconSvgPath: '',
  debugStep: 9,
  nonShapeAlpha: 0,
  // 形状控制参数默认值
  shapeType: 'rectangle',
  circleRadius: 150,
  shapeRoundness: 7,
  mergeRate: 0.05,
  showCenterCircle: false
})

const glCanvas = ref<HTMLCanvasElement>()
const textCanvas = ref<HTMLCanvasElement>()
let renderer: GlassButtonRenderer | null = null
let updateTimer: ReturnType<typeof setTimeout>

onMounted(async () => {
  await nextTick()
  if (glCanvas.value && textCanvas.value) {
    renderer = new GlassButtonRenderer(glCanvas.value, textCanvas.value)
    renderer.init()

    renderer.setClickCallback((event: MouseEvent) => {
      emit('click', event)
    })
  }
})

onUnmounted(() => {
  clearTimeout(updateTimer)
  if (renderer) {
    renderer.destroy()
    renderer = null
  }
})

watch(
  () => props,
  (newProps) => {
    if (renderer) {
      clearTimeout(updateTimer)
      updateTimer = setTimeout(() => {
        if (renderer) {
          renderer.updateParams({
            canvasWidth: newProps.canvasWidth,
            canvasHeight: newProps.canvasHeight,
            buttonX: newProps.buttonX,
            buttonY: newProps.buttonY,
            bgImage: newProps.bgImage,
            bgBlur: newProps.bgBlur,
            glassWidth: newProps.glassWidth,
            glassHeight: newProps.glassHeight,
            glassRadius: newProps.glassRadius,
            lightIntensity: newProps.lightIntensity,
            lightAngle: newProps.lightAngle,
            refractionDepth: newProps.refractionDepth,
            refractionFactor: newProps.refractionFactor,
            dispersion: newProps.dispersion,
            text: newProps.text,
            textColor: newProps.textColor,
            textSize: newProps.textSize,
            textFont: newProps.textFont,
            icon: newProps.icon,
            iconType: newProps.iconType,
            iconSize: newProps.iconSize,
            iconColor: newProps.iconColor,
            iconPosition: newProps.iconPosition,
            iconSpacing: newProps.iconSpacing,
            iconSvgPath: newProps.iconSvgPath,
            debugStep: newProps.debugStep,
            nonShapeAlpha: newProps.nonShapeAlpha,
            // 形状控制参数
            shapeType: newProps.shapeType,
            circleRadius: newProps.circleRadius,
            shapeRoundness: newProps.shapeRoundness,
            mergeRate: newProps.mergeRate,
            showCenterCircle: newProps.showCenterCircle
          })
        }
      }, 16)
    }
  },
  { deep: true, immediate: true }
)
</script>

<style scoped>
.glass-button-container {
  position: relative;
  display: inline-block;
}

.gl-canvas {
  display: block;
}

.text-canvas {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}
</style>
