```yaml
title:
  zh-CN: 容器中
  en-US: Container
```

## zh-CN

可以给任意内容添加加载中指示符。

---

## en-US

You can add a loading indicator to any content.

---

```vue
<template>
  <a-spin :loading="loading" tip="This may take a while...">
    <a-card title="Gene Card">
     Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content,Card Content
    </a-card>
  </a-spin>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    }
  }
}
</script>
```
