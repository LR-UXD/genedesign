```yaml
title:
  zh-CN: 渐隐切换
  en-US: Animation Fade
```

## zh-CN

指定 `animation` 为 `fade` 使用渐隐切换效果。

---

## en-US

Set `animation=fade` to use fade transition effect.

---

```vue
<template>
  <a-carousel
    :style="{
      width: '600px',
      height: '240px',
    }"
    :auto-play="true"
    animation-name="fade"
    show-arrow="never"
  >
    <a-carousel-item v-for="image in images">
      <img
        :src="image"
        :style="{
          width: '100%',
        }"
      />
    </a-carousel-item>
  </a-carousel>
</template>

<script>
export default {
  setup() {
    const images = [
       'https://uxd.lenovo.com/carousel.svg',
      'https://uxd.lenovo.com/carousel.svg',
      'https://uxd.lenovo.com/carousel.svg',
    ];
    return {
      images
    }
  },
};
</script>
```
