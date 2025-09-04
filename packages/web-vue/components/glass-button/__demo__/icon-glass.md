```yaml
title:
  zh-CN: 图标按钮
  en-US: Icon Buttons
```

## zh-CN

液态玻璃按钮支持多种图标类型，包括 SVG 内置图标、文本 Emoji 图标和本地 SVG 文件图标。每个按钮都支持点击事件，可以用于各种交互场景。

---

## en-US

Liquid glass buttons support various icon types, including built-in SVG icons, text Emoji icons, and local SVG file icons. Each button supports click events for various interactive scenarios.

---

```vue
<template>
  <a-space direction="vertical" :size="20">
    <a-glass-button 
      :canvasWidth="800" 
      :canvasHeight="400"
      :buttonX="400"
      :buttonY="200"
      :bgImage="'https://uxd.lenovo.com/glass/public/background.png'" 
      :bgBlur="1" 
      :glassWidth="180"
      :glassHeight="50" 
      :glassRadius="75" 
      :lightIntensity="15" 
      :lightAngle="-30"
      :refractionDepth="25" 
      :refractionFactor="75" 
      :dispersion="8"
      :text="'Play'"
      :textColor="'#ffffff'"
      :textSize="14"
      :icon="'play'"
      :iconType="'svg'"
      :iconPosition="'left'"
      :iconSize="20"
      :iconColor="'#ffffff'"
      :iconSpacing="10"
      @click="handlePlayClick"
    />
    <a-glass-button 
      :canvasWidth="800" 
      :canvasHeight="400"
      :buttonX="400"
      :buttonY="200"
      :bgImage="'https://uxd.lenovo.com/glass/public/background.png'" 
      :bgBlur="1" 
      :glassWidth="40"
      :glassHeight="40" 
      :glassRadius="0" 
      :lightIntensity="25" 
      :lightAngle="-30"
      :refractionDepth="10" 
      :refractionFactor="75" 
      :dispersion="8"
      :text="''"
      :textColor="'#ffffff'"
      :textSize="14"
      :icon="'＋'"
      :iconType="'text'"
      :iconPosition="'left'"
      :iconSize="20"
      :iconSpacing="8"
      @click="handleLaunchClick"
    />
    <a-glass-button 
      :canvasWidth="800" 
      :canvasHeight="400"
      :buttonX="400"
      :buttonY="200"
      :bgImage="'https://uxd.lenovo.com/glass/public/background.png'" 
      :bgBlur="1" 
      :glassWidth="40"
      :glassHeight="40" 
      :glassRadius="65" 
      :lightIntensity="15" 
      :lightAngle="-30"
      :refractionDepth="25" 
      :refractionFactor="75" 
      :dispersion="8"
      :text="''"
      :textColor="'#ffffff'"
      :textSize="14"
      :iconType="'local-svg'"
      :iconSvgPath="'https://uxd.lenovo.com/glass/public/download.svg'"
      :iconPosition="'right'"
      :iconSize="20"
      :iconSpacing="8"
      :shapeType="'circle'"
      :circleRadius="20"
      @click="handleDownloadClick"
    />



  </a-space>
</template>

<script setup>
import { Message } from 'genedesign';

const handlePlayClick = (event) => {
  console.log('Play button clicked!', event)
  Message.success('播放按钮被点击了！')
}

const handleLaunchClick = (event) => {
  console.log('Launch button clicked!', event)
  Message.success('启动按钮被点击了！')
}

const handleDownloadClick = (event) => {
  console.log('Download button clicked!', event)
  Message.success('下载按钮被点击了！')
}
</script>

```
