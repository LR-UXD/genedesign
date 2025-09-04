# 玻璃按钮形状切换功能使用指南

## 功能概述

成功为 Vue.js 玻璃按钮组件添加了形状切换功能，支持在矩形和圆形之间动态切换，与 HTML 版本功能保持一致。

## 文件结构

### 核心实现文件
- `interface.ts` - 类型定义和接口
- `glass-renderer.ts` - WebGL 渲染器，包含 SDF 形状计算
- `glass-button.vue` - Vue 组件封装
- `test-shape-switch.vue` - 功能测试和演示页面

### 新增功能参数

```typescript
// 在 GlassButtonProps 中新增的属性：
shapeType?: 'rectangle' | 'circle'        // 形状类型
circleRadius?: number                      // 圆形半径（当 shapeType='circle' 时使用）
shapeRoundness?: number                   // 形状圆润程度
mergeRate?: number                        // 形状融合速率
showCenterCircle?: boolean                // 是否显示中心圆形装饰
```

## 使用方法

### 基本使用
```vue
<template>
  <GlassButton
    :canvas-width="600"
    :canvas-height="300"
    :button-x="300"
    :button-y="150"
    :shape-type="'rectangle'"
    :glass-width="150"
    :glass-height="60"
    :glass-radius="25"
    :text="'Hello World'"
    @click="handleClick"
  />
</template>
```

### 圆形模式
```vue
<template>
  <GlassButton
    :shape-type="'circle'"
    :circle-radius="80"
    :show-center-circle="false"
    :text="'点击'"
    @click="handleClick"
  />
</template>
```

### 动态形状切换
```vue
<template>
  <div>
    <select v-model="currentShape">
      <option value="rectangle">矩形</option>
      <option value="circle">圆形</option>
    </select>
    
    <GlassButton
      :shape-type="currentShape"
      :circle-radius="80"
      :glass-width="150"
      :glass-height="60"
      :merge-rate="0.05"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentShape = ref('rectangle')
</script>
```

## 技术实现原理

### 1. SDF（有向距离场）函数
在 Fragment Shader 中使用数学函数计算形状：
- `sdRoundedRect()` - 计算圆角矩形的有向距离
- `sdCircle()` - 计算圆形的有向距离
- `mainSDF()` - 根据 `shapeType` 参数选择具体形状

### 2. WebGL Uniform 参数传递
- `u_shapeType` - 形状类型（0=矩形，1=圆形）
- `u_circleRadius` - 圆形半径
- `u_shapeRoundness` - 形状圆润度
- `u_mergeRate` - 融合速率
- `u_showCenterCircle` - 中心圆形显示标志

### 3. Vue 响应式绑定
组件 props 变化时自动更新 WebGL uniform 参数，实现实时形状切换。

## 测试和演示

### 运行测试页面
1. 在项目中引入 `test-shape-switch.vue`
2. 该页面提供完整的交互控制界面
3. 支持实时调整所有形状参数
4. 包含多种预设配置（默认矩形、圆形、胶囊、方形）

### 主要测试功能
- ✅ 矩形/圆形形状切换
- ✅ 尺寸参数动态调整
- ✅ 融合效果控制
- ✅ 预设配置快速切换
- ✅ 鼠标交互和点击事件
- ✅ 文字内容自定义

## 兼容性说明

- **浏览器要求**：支持 WebGL 2.0 的现代浏览器
- **Vue版本**：Vue 3.x + TypeScript
- **性能**：GPU 加速渲染，60fps 流畅动画

## 下一步扩展

可以进一步添加的功能：
- 更多形状类型（椭圆、多边形）
- 形状变换动画过渡
- 自定义 SDF 函数支持
- 形状组合和布尔运算

---

**状态**：✅ 实现完成，已通过编译检查，可以直接使用。
