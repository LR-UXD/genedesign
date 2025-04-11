```yaml
title:
  zh-CN: 图标列表样式
  en-US: Picture List
```

## zh-CN

通过设置 `list-type="picture"` 开启图片列表样式

---

## en-US

Enable the picture list mode by setting `list-type="picture"`.

---

```vue
<template>
  <a-upload
    list-type="picture"
    action="/"
    :default-file-list="fileList"
  />
</template>

<script>
export default {
  setup() {
    const fileList = [
      {
        uid: '-2',
        name: '20200717-103937.png',
        url: '//uxd.lenovo.com/carousel.svg',
      },
      {
        uid: '-1',
        name: 'hahhahahahaha.png',
        url: '//uxd.lenovo.com/carousel.svg',
      },
    ];

    return {
      fileList
    }
  },
};
</script>
```
