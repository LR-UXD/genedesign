```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

单选框的基本用法。

---

## en-US

Basic usage of radio.

---

```vue
<template>
  <a-space size="large">
    <a-radio value="radio1">Radio 1</a-radio>
    <a-radio value="radio2">Radio 2</a-radio>
    <a-radio value="radio3">Radio 3</a-radio>
    <a-radio value="radio4">Radio 4</a-radio>
    <a-radio value="radio5">Radio 5</a-radio>
    <a-radio value="disabled radio" :default-checked="true" disabled>Disabled Radio</a-radio>
  </a-space>
</template>
```
