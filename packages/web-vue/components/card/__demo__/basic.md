```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

常规的内容容器，可承载文字、列表、图片、段落，常用于模块划分和内容概览。

---

## en-US

Conventional content containers can hold text, lists, pictures, and paragraphs, and are often used for module division and content overview

---

```vue
<template>
  <div :style="{ display: 'flex' }">
    <a-card :style="{ width: '360px' }" title="Gene Card">
      <template #extra>
        <a-link>More</a-link>
      </template>
      card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content,card content
    </a-card>
  </div>
</template>
```
