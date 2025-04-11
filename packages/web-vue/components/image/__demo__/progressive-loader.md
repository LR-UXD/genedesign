```yaml
title:
  zh-CN: 渐进加载
  en-US: Progressive Loading
```

## zh-CN

大图可通过给 `loader` 传递一个小一些的图片，让其在原图未被加载成功时显示，以此来模拟渐进加载。

---

## en-US

When you need to display a large image, you can pass a smaller image to `loader` to display it when the original image is not successfully loaded to simulate progressive loading.

---

```vue
<template>
  <div>
    <a-button
      type="primary"
      @click="() => {timestamp = Date.now()}"
      style="margin-bottom: 20px;"
    >
      reload
    </a-button>
  </div>
  <a-image
    width="200"
    height="200"
    :src="`https://uxd.lenovo.com/image_ex.svg?timestamp=${timestamp}`"
  >
    <template #loader>
      <img
        width="200"
        src="https://uxd.lenovo.com/image_ex.svg"
        style="filter: blur(5px);"
      />
    </template>
  </a-image>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const timestamp = ref('');
    return {
      timestamp,
    }
  }
}
</script>
```
