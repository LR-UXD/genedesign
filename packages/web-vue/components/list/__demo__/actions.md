```yaml
title:
  zh-CN: 增加操作项
  en-US: With Actions
```

## zh-CN

通过 `actions` 来为列表添加操作项。

---

## en-US

Use `actions` to add operation items to the list.

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
      <template #actions>
        <icon-edit />
        <icon-delete />
      </template>
    </a-list-item>
  </a-list>
</template>
```
