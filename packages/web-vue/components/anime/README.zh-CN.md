```yaml
meta:
  type: 组件
  category: 通用
title: 动画 Anime
description: 用于为元素添加动画效果，支持多种类型的动画（如：淡入、缩放、滑动、旋转等）。
```

@import ./__demo__/anime.md


## API


### `<anime>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|type| 动画类型|`fade \| scale \| slide \| rotate \|`|`'fade'`|
|duration| 动画持续时间 (ms)|`number`|`800`|
|easing | 缓动函数|`easeInCubic \| linear \|`|`'easeInOutQuad'`|
