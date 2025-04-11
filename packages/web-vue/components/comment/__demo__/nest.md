```yaml
title:
  zh-CN: 嵌套评论
  en-US: Nested comments
```

## zh-CN

评论可以嵌套使用

---

## en-US

Comments can be nested.

---

```vue
<template>
  <a-comment
    author="Socrates"
    avatar="https://uxd.lenovo.com/avatar_girl.svg"
    content="Comment body content."
    datetime="1 hour"
  >
    <template #actions>
      <span class="action"> <IconMessage /> Reply </span>
    </template>
    <a-comment
      author="Balzac"
      avatar="https://uxd.lenovo.com/avatar_boy.svg"
      content="Comment body content."
      datetime="1 hour"
    >
      <template #actions>
        <span class="action"> <IconMessage /> Reply </span>
      </template>
      <a-comment
        author="Austen"
        avatar="https://uxd.lenovo.com/avatar_girl_1.svg"
        content="Reply content"
        datetime="1 hour"
      >
        <template #actions>
          <span class="action"> <IconMessage /> Reply </span>
        </template>
      </a-comment>
      <a-comment
        author="Plato"
        avatar="https://uxd.lenovo.com/avatar_boy_1.svg"
        content="Reply content"
        datetime="1 hour"
      >
        <template #actions>
          <span class="action"> <IconMessage /> Reply </span>
        </template>
      </a-comment>
    </a-comment>
  </a-comment>
</template>

<script>
import { IconHeart, IconMessage, IconStar } from 'genedesign/es/icon';

export default {
  components: {
    IconHeart,
    IconMessage,
    IconStar,
  },
};
</script>

<style scoped>
.action {
  display: inline-block;
  padding: 0 4px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
}
.action:hover {
  background: var(--color-fill-3);
}
</style>
```
