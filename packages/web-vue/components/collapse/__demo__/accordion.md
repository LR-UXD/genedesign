```yaml
title:
  zh-CN: 手风琴模式
  en-US: Accordion
```

## zh-CN

通过 `accordion` 开启手风琴模式，同时只能打开一个面板。

---

## en-US

Activate the accordion mode with `accordion`, and only one panel can be opened at the same time.

---

```vue
<template>
  <a-collapse :default-active-key="[1]" accordion>
    <a-collapse-item header="title" key="1">
      <div>content</div>
    </a-collapse-item>
    <a-collapse-item header="title" key="2">
      <div>content</div>
    </a-collapse-item>
    <a-collapse-item header="title" key="3">
      <div>content</div>
    </a-collapse-item>
  </a-collapse>
</template>
```
