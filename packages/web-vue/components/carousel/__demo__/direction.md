```yaml
title:
  zh-CN: 切换方向
  en-US: Vertical
```

## zh-CN

默认情况下，`direction` 为 `horizontal`。通过设置 `direction` 为 `vertical` 来使用垂直方向切换。

---

## en-US

By default, the `direction` is `horizontal`. Use the vertical direction switch by setting the `direction` to `vertical`.

---

```vue
<template>
  <a-carousel
    :style="{
      width: '600px',
      height: '240px',
    }"
    show-arrow="never"
    direction="vertical"
    indicator-position="right"
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
