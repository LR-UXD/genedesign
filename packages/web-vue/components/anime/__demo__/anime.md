```yaml
title:
  zh-CN: 动画
  en-US: Anime
```

## zh-CN

通过内置 anime.js，为元素添加简单的进入动画。
fade：淡入

scale：缩放

slide：滑入

rotate：旋转

zoomIn：从无到有放大

bounce：弹跳

flip：Y轴翻转

flipX：X轴翻转

shake：抖动

---

## en-US

Add simple entry animations to elements through the built-in anime.js.

---

```vue
<template>
 <a-space direction="vertical" :size=20>
  <a-space :size=100>
    <a-anime >
      <a-button type="primary">Primary</a-button>
    </a-anime>
    <a-anime type="scale">
      <a-button type="primary">Primary</a-button>
    </a-anime>
    <a-anime type="slide">
      <a-button type="primary">Primary</a-button>
    </a-anime> 
  </a-space>
  <a-space :size=100>
    <a-anime type="rotate">
      <a-button type="primary">Primary</a-button>
    </a-anime>
    <a-anime type="zoomIn">
      <a-button type="primary">Primary</a-button>
    </a-anime>
    <a-anime type="bounce" >
      <a-button type="primary">Primary</a-button>
    </a-anime> 
  </a-space>
  <a-space :size=100 >
    <a-anime type="flip">
      <a-button type="primary">Primary</a-button>
    </a-anime>   
    <a-anime type="flipX" >
      <a-button type="primary">Primary</a-button>
    </a-anime>
    <a-anime type="shake" >
      <a-button type="primary">Primary</a-button>
    </a-anime> 
  </a-space>
</a-space>
</template>
```
