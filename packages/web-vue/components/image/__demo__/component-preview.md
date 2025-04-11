```yaml
title:
  zh-CN: 单独使用预览组件
  en-US: Use Preview alone
```

## zh-CN

`a-image-preview` 可单独使用，需要手动控制 `visible`。

---

## en-US

`a-image-preview` can be used alone, you need to control `visible`.

---

```vue
<template>
  <a-button type="primary" @click="onClick">Click me to preview image</a-button>
  <a-image-preview
    src="https://uxd.lenovo.com/image_ex.svg"
    v-model:visible="visible"
  />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false)
    const onClick = () => {
      visible.value = true;
    };

    return {
      visible,
      onClick,
    };
  },
};
</script>
```
