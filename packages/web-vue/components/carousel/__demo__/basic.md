```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

基本用法

---

## en-US

Basic usage

---

```vue
<template>
  <a-carousel
    :style="{
      width: '600px',
      height: '240px',
    }"
    :default-current="2"
    @change="handleChange"
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
    const handleChange=(value)=>{
      console.log(value)
    }
    return {
      images,
      handleChange
    }
  },
};
</script>
```
