```yaml
title:
  zh-CN: 自定义样式
  en-US: Custom style
```

## zh-CN

自定义面板样式。

---

## en-US

custom panels styles.

---

```vue
<template>
  <a-collapse :default-active-key="['1', 2]" :bordered="false">
    <a-collapse-item header="title" :style="customStyle" key="1">
      <div>content 1</div>
      <div>content 2</div>
    </a-collapse-item>
    <a-collapse-item header="title" :style="customStyle" :key="2">
      <div>content 1</div>
      <div>content 2</div>
    </a-collapse-item>
    <a-collapse-item header="title" :style="customStyle" key="3">
      <div>content 1</div>
      <div>content 2</div>
    </a-collapse-item>
  </a-collapse>
</template>

<script>
export default {
  setup() {
    const customStyle = {
      borderRadius: '6px',
      marginBottom: '18px',
      border: 'none',
      overflow: 'hidden',
    }

    return {
      customStyle
    }
  }
}
</script>
```
