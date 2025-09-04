```yaml
title:
  zh-CN: 基础用法
  en-US: Basic Usage
```

## zh-CN

液态玻璃按钮支持自定义背景图片，canvas画布尺寸和按钮内容尺寸可以分别设置。

---

## en-US

Liquid glass buttons support custom background images, canvas size and button content size can be set separately.

---

```vue
<template>
  <a-space direction="vertical" :size="20">
    <a-glass-button 
      :canvasWidth="800" 
      :canvasHeight="400"
      :buttonX="400"
      :buttonY="200"
      :bgImage="'https://uxd.lenovo.com/glass/public/glass.png'" 
      :bgBlur="1" 
      :glassWidth="80"
      :glassHeight="32" 
      :glassRadius="6" 
      :lightIntensity="10" 
      :lightAngle="-30"
      :refractionDepth="15" 
      :refractionFactor="75" 
      :dispersion="8"
      :text="'Primary'"
      :textColor="'#ffffff'"
      :textSize="14"
      @click="handleClick"
    />
  </a-space>
</template>

<script setup>
import { Message } from 'genedesign';

const handleClick = (event) => {
  console.log('Glass button clicked!', event)
  Message.success('液态玻璃按钮被点击了！✨')
}
</script>

```
