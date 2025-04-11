```yaml
title:
  zh-CN: 无边框模式
  en-US: Border less
```

## zh-CN

通过设置 `bordered="false"` 隐藏边框。

---

## en-US

Hide the border by setting `bordered="false"`.

---

```vue
<template>
  <a-collapse :default-active-key="['1']" :bordered="false">
    <a-collapse-item header="title" key="1">
      <div>content 1</div>
      <div>content 2</div>
      <div>content 3</div>
    </a-collapse-item>
    <a-collapse-item header="title" key="2" disabled>
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
