```yaml
title:
  zh-CN: 基本用法
  en-US: Basic
```

## zh-CN

典型的页面布局。

---

## en-US

A typical page layout.

---

```vue
<template>
  <div class="layout-demo">
    <a-layout style="height: 400px;">
      <a-layout-header class='gene-layout-header'>Header</a-layout-header>
      <a-layout-content class='gene-layout-content'>Content</a-layout-content>
      <a-layout-footer class='gene-layout-footer'>Footer</a-layout-footer>
    </a-layout>
    <br />
    <a-layout style="height: 400px;">
      <a-layout-header class='gene-layout-header'>Header</a-layout-header>
      <a-layout>
        <a-layout-sider theme="dark" class='gene-layout-sider'>Sider</a-layout-sider>
        <a-layout-content class='gene-layout-content'>Content</a-layout-content>
      </a-layout>
      <a-layout-footer class='gene-layout-footer'>Footer</a-layout-footer>
    </a-layout>
    <br />
    <a-layout style="height: 400px;">
      <a-layout-header class='gene-layout-header'>Header</a-layout-header>
      <a-layout>
        <a-layout-content class='gene-layout-content'>Content</a-layout-content>
        <a-layout-sider class='gene-layout-sider'>Sider</a-layout-sider>
      </a-layout>
      <a-layout-footer class='gene-layout-footer'>Footer</a-layout-footer>
    </a-layout>
    <br />
    <a-layout style="height: 400px;">
      <a-layout-header class='gene-layout-header'>Header</a-layout-header>
      <a-layout>
        <a-layout-sider style="width: 64px;" class='gene-layout-sider'>Sider</a-layout-sider>
        <a-layout-sider style="width: 206px; margin-left: 1px;" class='gene-layout-sider'>Sider</a-layout-sider>
        <a-layout-content class='gene-layout-content'>Content</a-layout-content>
      </a-layout>
      <a-layout-footer class='gene-layout-footer'>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
</style>
```
