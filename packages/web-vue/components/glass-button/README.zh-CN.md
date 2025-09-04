```yaml
meta:
  type: 组件
  category: 通用
title: 液态玻璃按钮 GlassButton
description: 一个具有液态玻璃效果的按钮组件，支持WebGL渲染和CSS降级，提供真实的玻璃质感和光影效果。
```

@import ./__demo__/basic.md
@import ./__demo__/icon-glass.md

## API

### Props

| 参数名 | 描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| canvasWidth | 画布宽度 | `number` | `800` |
| canvasHeight | 画布高度 | `number` | `600` |
| buttonX | 按钮X坐标位置 | `number` | `400` |
| buttonY | 按钮Y坐标位置 | `number` | `300` |
| bgImage | 背景图片URL | `string` | `''` |
| bgBlur | 背景模糊程度 | `number` | `10` |
| glassWidth | 玻璃按钮宽度 | `number` | `120` |
| glassHeight | 玻璃按钮高度 | `number` | `40` |
| glassRadius | 玻璃按钮圆角半径 | `number` | `8` |
| lightIntensity | 光照强度 | `number` | `0.8` |
| lightAngle | 光照角度 | `number` | `45` |
| refractionDepth | 折射深度 | `number` | `0.1` |
| refractionFactor | 折射系数 | `number` | `0.3` |
| dispersion | 色散效果强度 | `number` | `0.1` |
| text | 按钮文本 | `string` | `''` |
| textColor | 文本颜色 | `string` | `'#ffffff'` |
| textSize | 文本字体大小 | `number` | `14` |
| textFont | 文本字体 | `string` | `'Arial, sans-serif'` |
| icon | 图标内容（文本图标时使用） | `string(play、pause、stop、download、heart、star、home、setting)` | `''` |
| iconType | 图标类型 | `'text' \| 'svg' \| 'local-svg' \| 'image'` | `'text'` |
| iconSize | 图标大小 | `number` | `16` |
| iconColor | 图标颜色 | `string` | `'#ffffff'` |
| iconPosition | 图标位置 | `'left' \| 'right' \| 'top' \| 'bottom'` | `'left'` |
| iconSpacing | 图标与文本间距 | `number` | `8` |
| iconSvgPath | 本地SVG图标路径 | `string` | `''` |
| debugStep | 调试步骤 (0-9) | `number` | `9` |
| nonShapeAlpha |  非形状区域透明度 (0-100) | `number` | `0` |

### Events

| 事件名 | 描述 | 参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `(event: MouseEvent)` |

<!-- ### 特性

- **WebGL渲染**：使用硬件加速渲染，提供流畅的液态玻璃效果
- **CSS降级**：不支持WebGL时自动降级为CSS样式
- **图标支持**：支持文本、SVG、本地SVG文件和图片图标
- **交互反馈**：智能的点击/拖拽检测，支持鼠标交互
- **自适应布局**：按钮位置可拖拽调整
- **高性能优化**：内置性能监控和优化机制 -->

