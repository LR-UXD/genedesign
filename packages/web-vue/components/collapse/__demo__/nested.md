```yaml
title:
  zh-CN: 嵌套面板
  en-US: Nested panels
```

## zh-CN

面板多层嵌套。

---

## en-US

Panels are nested at multiple levels.

---

```vue
<template>
  <a-collapse :default-active-key="['1', 2]" destroy-on-hide>
    <a-collapse-item header="title 1" key="1">
      <a-collapse :default-active-key="['1.1']" destroy-on-hide>
        <a-collapse-item header="title 1_1" key="1.1">
          <div>title 1_1_1</div>
        </a-collapse-item>
        <a-collapse-item header="title 1_2" key="1.2">
          <div>title 1_2_1</div>
        </a-collapse-item>
      </a-collapse>
    </a-collapse-item>
    <a-collapse-item header="title 2" :key="2">
      <div>title 2_1</div>
    </a-collapse-item>
    <a-collapse-item header="title 3" key="3">
      <div>title 3_1</div>
    </a-collapse-item>
  </a-collapse>
</template>
```
