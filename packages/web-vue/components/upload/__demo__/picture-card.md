```yaml
title:
  zh-CN: 照片墙
  en-US: Picture Card
```

## zh-CN

通过设置 `list-type="picture-card"` 开启照片墙模式。

---

## en-US

Enable the photo wall mode by setting `list-type="picture-card"`.

---

```vue
<template>
  <a-upload
    list-type="picture-card"
    action="/"
    :default-file-list="fileList"
    image-preview
  />
</template>

<script>
export default {
  setup() {
    const fileList = [
      {
        uid: '-2',
        name: 'carousel.svg',
        url: '//uxd.lenovo.com/carousel.svg',
      },
      {
        uid: '-1',
        name: 'carousel.svg',
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
