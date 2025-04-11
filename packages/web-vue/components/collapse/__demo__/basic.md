```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

用于将复杂的内容区域分组和隐藏，可折叠或展开。默认可以展开多个面板。

---

## en-US

Used to group and hide complex content areas, and can be collapsed or expanded. Multiple panels can be expanded by default.

---

```vue
<template>
  <a-collapse :default-active-key="['1', 2]">
    <a-collapse-item header="title" key="1">
      <div>content 1</div>
      <div>content 2</div>
      <div>content 3</div>
    </a-collapse-item>
    <a-collapse-item header="title" :key="2" disabled>
      <div>content 1</div>
      <div>content 2</div>
      <div>content 3</div>
    </a-collapse-item>
    <a-collapse-item header="title" key="3">
      <div>content 1</div>
      <div>content 2</div>
      <div>content 3</div>
    </a-collapse-item>
  </a-collapse>
</template>
```
