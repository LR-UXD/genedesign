```yaml
title:
  zh-CN: 竖排列表样式
  en-US: Vertical List
```

## zh-CN

这是一个包括分页、右侧内容、下方列表操作的示例。

---

## en-US

This is an example including paging, content on the right, and list operations.

---

```vue
<template>
  <a-list
    class="list-demo-action-layout"
    :bordered="false"
    :data="dataSource"
    :pagination-props="paginationProps"
  >
    <template #item="{ item }">
      <a-list-item class="list-demo-item" action-layout="vertical">
        <template #actions>
          <span><icon-heart />83</span>
          <span><icon-star />{{ item.index }}</span>
          <span><icon-message />Reply</span>
        </template>
        <template #extra>
          <div className="image-area">
            <img alt="gene-design" :src="item.imageSrc" />
          </div>
        </template>
        <a-list-item-meta
          :title="item.title"
          :description="item.description"
        >
          <template #avatar>
            <a-avatar shape="square">
              <img alt="avatar" :src="item.avatar" />
            </a-avatar>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import { reactive } from 'vue'

const names = ['Socrates', 'Balzac', 'Plato'];
const avatarSrc = [
  '//uxd.lenovo.com/avatar.svg',
  '//uxd.lenovo.com/avatar.svg',
  '//uxd.lenovo.com/avatar.svg',
];
const imageSrc = [
  '//uxd.lenovo.com/carousel.svg',
  '//uxd.lenovo.com/carousel.svg',
  '//uxd.lenovo.com/carousel.svg',
];
const dataSource = new Array(15).fill(null).map((_, index) => {
  return {
    index: index,
    avatar: avatarSrc[index % avatarSrc.length],
    title: names[index % names.length],
    description:
      'content,content,content,content,content,content,content,content,content,content',
    imageSrc: imageSrc[index % imageSrc.length],
  };
});

export default {
  setup() {
    return {
      dataSource,
      paginationProps: reactive({
        defaultPageSize: 3,
        total: dataSource.length
      })
    }
  },
}
</script>

<style scoped>
.list-demo-action-layout .image-area {
  width: 183px;
  height: 119px;
  border-radius: 2px;
  overflow: hidden;
}

.list-demo-action-layout .list-demo-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--color-fill-3);
}

.list-demo-action-layout .image-area img {
  width: 100%;
}

.list-demo-action-layout a-list-item-action a-icon {
  margin: 0 4px;
}
</style>
```
