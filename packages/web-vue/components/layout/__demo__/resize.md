```yaml
title:
  zh-CN: 可伸缩侧边栏
  en-US: Retractable Sidebar
```

## zh-CN

可以用鼠标进行拖拽放大缩小的侧边栏，需要用到的参数：`resizeDirections`。

---

## en-US

By `resizeDirections`, you can use the mouse to drag the sidebar to zoom in and out.

---

```vue
<template>
  <div class="layout-demo">
    <a-layout>
      <a-layout-header class='gene-layout-header'>Header</a-layout-header>
      <a-layout>
        <a-layout-sider :resize-directions="['right']" class='gene-layout-sider'>
          Sider
        </a-layout-sider>
        <a-layout-content class='gene-layout-content'>Content</a-layout-content>
      </a-layout>
      <a-layout-footer class='gene-layout-footer'>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>

</style>
```
