```yaml
title:
  zh-CN: 列表元素
  en-US: List Item Meta
```

## zh-CN

使用 `list-item-meta` 组件可快速指定头像、标题、文字。

---

## en-US

Use the `list-item-meta` component to quickly specify the avatar, title, and text.

---

```vue
<template>
  <a-list>
    <a-list-item v-for="idx in 4" :key="idx">
      <a-list-item-meta
        title="title"
        description="content,content,content,content,content,content,content,content"
      >
        <template #avatar>
          <a-avatar shape="square">
            <img
              alt="avatar"
              src="https://uxd.lenovo.com/avatar.svg"
            />
          </a-avatar>
        </template>
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>
```
