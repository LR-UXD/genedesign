```yaml
title:
  zh-CN: 显示 Caption
  en-US: Show Caption
```

## zh-CN

通过设置 `title` 和 `description` 可以将图片的标题和描述显示在图片内部或者底部，显示的位置通过 `footerPosition` 控制。

---

## en-US

By setting title and description, the title and description of the picture can be displayed inside or at the bottom of the picture, and the display position is controlled by footerPosition.

---

```vue
<template>
  <a-image
    width="200px"
    :src="src"
    :title="title"
    :description="description"
  />
  <a-image
    width="200px"
    :src="src"
    :title="title"
    :description="description"
    footerPosition="outer"
    style="margin-left: 67px; vertical-align: top;"
  />
</template>

<script>
export default {
  setup() {
    return {
      src: 'https://uxd.lenovo.com/image_ex.svg',
      title: 'A user’s avatar',
      description: 'Present by Gene Design',
    }
  }
}
</script>
```
