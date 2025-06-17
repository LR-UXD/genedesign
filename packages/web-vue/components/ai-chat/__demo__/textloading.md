```yaml
title:
  zh-CN: ai对话
  en-US: AiChat
```

## zh-CN

当ai返回的是流式时，文字加载过程中的loading态

---

## en-US

Used for AI conversation
---

```vue
<template>
<a-aiChat
  ai-type="text" 
  :is-loading="true"
  ai-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"
  user-content="Lorem ipsum dolor sit amet"
/>

<a-aiChat
  ai-type="text" 
  :is-loading="true"
  loading-style="stripe"
  ai-content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"
  user-content="Lorem ipsum dolor sit amet"
/>


</template>
```