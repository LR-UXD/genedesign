```yaml
title:
  zh-CN: ai对话
  en-US: AiChat
```

## zh-CN

当上传有文件时，可用于展示文件

---

## en-US

Used for AI conversation
---

```vue
<template>
<a-aiChat
  ai-type="text" 
  :fileNames="['报告2024.pdf', '数据分析.txt']"
  ai-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"
  user-content="Lorem ipsum dolor sit amet"
/>
</template>
```