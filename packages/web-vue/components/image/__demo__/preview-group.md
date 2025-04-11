```yaml
title:
  zh-CN: 多图预览
  en-US: Multi-image preview
```

## zh-CN

用 `<a-image-preview-group>` 包裹 `<a-image>` 组件即可进行多图预览。

---

## en-US

Use `<a-image-preview-group>` to wrap the `<a-image>` component to preview multiple images.

---

```vue
<template>
  <a-image-preview-group infinite>
    <a-space>
      <a-image src="https://uxd.lenovo.com/image_ex.svg" width="200" />
      <a-image src="https://uxd.lenovo.com/image_ex.svg" width="200" />
      <a-image src="https://uxd.lenovo.com/image_ex.svg" width="200" />
      <a-image src="https://uxd.lenovo.com/image_ex.svg" width="200" />
    </a-space>
  </a-image-preview-group>
</template>
```
