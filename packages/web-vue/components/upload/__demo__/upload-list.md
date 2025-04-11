```yaml
title:
  zh-CN: 已上传的文件列表
  en-US: File List
```

## zh-CN

可以指定默认的已上传文件列表。

---

## en-US

You can specify a default list of uploaded files.

---

```vue
<template>
  <a-upload action="/" :default-file-list="fileList" />
</template>

<script>
export default {
  setup() {
    const fileList = [
      {
        uid: '-1',
        name: 'carousel.svg',
        url: '//uxd.lenovo.com/carousel.svg',
      },
      {
        status: 'error',
        uid: '-2',
        percent: 0,
        response: '上传错误提示',
        name: 'carousel.svg',
        url: '//uxd.lenovo.com/carousel.svg',
      },
      {
        uid: '-3',
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
