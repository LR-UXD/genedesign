```yaml
title:
  zh-CN: 基本用法
  en-US: Basic
```

## zh-CN

`ResizeBox` 伸缩框组件的基础使用。通过设置 `directions`，可以指定四条边中的哪几条边可以进行伸缩。

---

## en-US

Basic usage of `ResizeBox`. By setting `directions`, you can specify which of the four sides can be stretched.

---

```vue
<template>
  <div>
    <a-resize-box
      :directions="['right', 'bottom']"
      :style="{ width: '500px', minWidth: '100px', maxWidth: '100%', height: '200px', textAlign: 'center' }"
    >
      <a-typography-paragraph>title</a-typography-paragraph>
      <a-divider />
      <a-typography-paragraph>
        content,  content,  content,  content,  content,  content,  content,  content,  content,  content
      </a-typography-paragraph>
      <a-divider>Lenovo</a-divider>
      <a-typography-paragraph>title</a-typography-paragraph>
    </a-resize-box>
  </div>
</template>
```
