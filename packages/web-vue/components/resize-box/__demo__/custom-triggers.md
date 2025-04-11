```yaml
title:
  zh-CN: 定制伸缩杆内容
  en-US: Customize Trigger
```

## zh-CN

可通过插槽 `resize-trigger` 定制各个方向的伸缩杆的内容。

---

## en-US

The content of trigger in all directions can be customized through the slot `resize-trigger`.

---

```vue
<template>
  <a-resize-box
    :directions="['right', 'bottom']"
    style="width: 500px; min-width: 100px; max-width: 100%; height: 200px; text-align: center;"
  >
    <template #resize-trigger="{ direction }">
      <div
        :class="[
          `resizebox-demo`,
          `resizebox-demo-${direction === 'right' ? 'vertical' : 'horizontal'}`
        ]"
      >
        <div class="resizebox-demo-line"/>
      </div>
    </template>
    <a-typography-paragraph>title</a-typography-paragraph>
    <a-divider />
    <a-typography-paragraph>
     content, content, content, content, content, content, content, content, content, content
    </a-typography-paragraph>
    <a-divider>title</a-divider>
    <a-typography-paragraph>title</a-typography-paragraph>
  </a-resize-box>
</template>

<style scoped>
  .resizebox-demo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-2);
  }
  .resizebox-demo::before,
  .resizebox-demo::after {
    width: 6px;
    height: 6px;
    border: 1px solid rgb(var(--g-plum-500));
    content: '';
}
  .resizebox-demo-line {
    flex: 1;
    background-color: rgb(var(--g-plum-500));
  }
  .resizebox-demo-vertical {
    flex-direction: column;
  }
  .resizebox-demo-vertical .resizebox-demo-line {
    width: 1px;
    height: 100%;
  }
  .resizebox-demo-horizontal .resizebox-demo-line {
    height: 1px;
  }
</style>
```
