```yaml
title:
  zh-CN: 单独使用多图预览组件
  en-US: Use PreviewGroup alone
```

## zh-CN

`<a-image-preview-group>` 可单独使用，需控制 `visible` 。在图片的展示上分为两种场景，一是通过 `defaultCurrent` 指定第一张展示的图片；二是控制 `current` 来决定当前显示的是第几张图片。

---

## en-US

`<a-image-preview-group>` can be used alone, you need to control `visible` by yourself. The image display is divided into two scenes: First, the first image to be displayed can be specified by `defaultCurrent`. Second, to control which image is currently displayed by `current`.

---

```vue
<template>
  <a-button type="primary" @click="onClick">Click me to preview multiple image</a-button>
  <a-image-preview-group
    v-model:visible="visible"
    v-model:current="current"
    infinite
    :srcList="[
      'https://uxd.lenovo.com/image_ex.svg',
      'https://uxd.lenovo.com/image_ex.svg',
      'https://uxd.lenovo.com/image_ex.svg',
      'https://uxd.lenovo.com/image_ex.svg',
    ]"
  />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false)
    const current = ref(3);
    const onClick = () => {
      visible.value = true;
    };

    return {
      visible,
      current,
      onClick,
    };
  },
}
</script>
```
