```yaml
title:
  zh-CN: 展开图标
  en-US: Custom expand icon
```

## zh-CN

为展开项自定义展开图标

---

## en-US

Customize the expand icon for `collapse-item`

---

```vue
<template>
  <a-collapse :default-active-key="['1', 2]">
    <template #expand-icon="{ active }">
      <icon-face-smile-fill v-if="active"/>
      <icon-face-frown-fill v-else/>
    </template>
    <a-collapse-item header="title" key="1">
      <template #expand-icon="{ active }">
        <icon-double-down v-if="active"/>
        <icon-double-right v-else/>
      </template>
      <div>content 1</div>
    </a-collapse-item>
    <a-collapse-item header="title" :key="2">
      <div>content 2</div>
    </a-collapse-item>
    <a-collapse-item header="title" key="3">
      <div>content 3</div>
    </a-collapse-item>
  </a-collapse>
</template>
```
