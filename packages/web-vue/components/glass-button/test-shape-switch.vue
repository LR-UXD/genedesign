<template>
    <div class="demo-page">
        <h1>玻璃按钮形状切换测试</h1>

        <div class="controls-panel">
            <div class="control-group">
                <label>形状类型:</label>
                <select v-model="shapeType">
                    <option value="rectangle">矩形</option>
                    <option value="circle">圆形</option>
                </select>
            </div>

            <div class="control-group">
                <label>
                    <input v-model="showCenterCircle" type="checkbox">
                    显示中心圆形
                </label>
            </div>

            <div v-if="shapeType === 'rectangle'" class="shape-controls">
                <div class="control-group">
                    <label>宽度: {{ glassWidth }}</label>
                    <input v-model.number="glassWidth" type="range" min="100" max="300" step="10">
                </div>
                <div class="control-group">
                    <label>高度: {{ glassHeight }}</label>
                    <input v-model.number="glassHeight" type="range" min="40" max="120" step="5">
                </div>
                <div class="control-group">
                    <label>圆角: {{ glassRadius }}</label>
                    <input v-model.number="glassRadius" type="range" min="0" max="50" step="5">
                </div>
            </div>

            <div v-if="shapeType === 'circle'" class="shape-controls">
                <div class="control-group">
                    <label>半径: {{ circleRadius }}</label>
                    <input v-model.number="circleRadius" type="range" min="50" max="150" step="10">
                </div>
            </div>

            <div class="control-group">
                <label>融合度: {{ mergeRate }}</label>
                <input v-model.number="mergeRate" type="range" min="0" max="0.15" step="0.01">
            </div>

            <div class="control-group">
                <label>文字内容:</label>
                <input v-model="text" type="text">
            </div>
        </div>

        <div class="glass-container">
            <GlassButton :canvas-width="600" :canvas-height="300" :button-x="300" :button-y="150"
                :glass-width="glassWidth" :glass-height="glassHeight" :glass-radius="glassRadius"
                :shape-type="shapeType" :circle-radius="circleRadius" :show-center-circle="showCenterCircle"
                :merge-rate="mergeRate" :text="text" :bg-image="bgImage" @click="handleClick" />
        </div>

        <div class="presets">
            <button @click="applyPreset('default')">默认矩形</button>
            <button @click="applyPreset('circle')">圆形按钮</button>
            <button @click="applyPreset('pill')">胶囊按钮</button>
            <button @click="applyPreset('square')">方形按钮</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GlassButton from './glass-button.vue'

// 响应式参数
const shapeType = ref<'rectangle' | 'circle'>('rectangle')
const showCenterCircle = ref(true)
const glassWidth = ref(150)
const glassHeight = ref(60)
const glassRadius = ref(25)
const circleRadius = ref(80)
const mergeRate = ref(0.05)
const text = ref('Glass Button')
const bgImage = ref('https://picsum.photos/800/400?random=1')

// 预设配置
const presets = {
    default: {
        shapeType: 'rectangle' as const,
        glassWidth: 150,
        glassHeight: 60,
        glassRadius: 25,
        showCenterCircle: true,
        text: 'Glass Button'
    },
    circle: {
        shapeType: 'circle' as const,
        circleRadius: 80,
        showCenterCircle: false,
        text: '点击'
    },
    pill: {
        shapeType: 'rectangle' as const,
        glassWidth: 120,
        glassHeight: 40,
        glassRadius: 20,
        showCenterCircle: false,
        text: 'Pill Button'
    },
    square: {
        shapeType: 'rectangle' as const,
        glassWidth: 80,
        glassHeight: 80,
        glassRadius: 8,
        showCenterCircle: true,
        text: '□'
    }
}

// 应用预设
function applyPreset(preset: keyof typeof presets) {
    const config = presets[preset]
    shapeType.value = config.shapeType

    if (config.shapeType === 'rectangle') {
        glassWidth.value = config.glassWidth!
        glassHeight.value = config.glassHeight!
        glassRadius.value = config.glassRadius!
    } else {
        circleRadius.value = config.circleRadius!
    }

    showCenterCircle.value = config.showCenterCircle
    text.value = config.text
}

// 点击事件
function handleClick(event: MouseEvent) {
    console.log('玻璃按钮被点击了！', event)
    alert(`按钮被点击！当前形状：${shapeType.value === 'rectangle' ? '矩形' : '圆形'}`)
}
</script>

<style scoped>
.demo-page {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.controls-panel {
    background: #f8f9fa;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.control-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.control-group label {
    font-weight: 600;
    color: #555;
    font-size: 14px;
}

.control-group input[type="range"] {
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    outline: none;
    -webkit-appearance: none;
    appearance: none;
}

.control-group input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #4a90e2;
    cursor: pointer;
    border: 2px solid white;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.control-group select,
.control-group input[type="text"] {
    padding: 8px 12px;
    border: 2px solid #e1e5e9;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
}

.control-group select:focus,
.control-group input[type="text"]:focus {
    border-color: #4a90e2;
}

.shape-controls {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 15px;
    padding: 15px;
    background: #e9ecef;
    border-radius: 8px;
}

.glass-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 16px;
    padding: 40px;
    margin: 30px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.presets {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.presets button {
    padding: 12px 24px;
    background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}

.presets button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
}

.presets button:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
}
</style>
