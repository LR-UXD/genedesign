```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

---

## en-US

The basic use of avatars. If the avatar is text, the font size will be automatically adjusted to fit the avatar.

---

```vue
<template>
  <a-space size="large">
    <a-avatar>A</a-avatar>
    <a-avatar :style="{ backgroundColor: '#3370ff' }">
      <IconUser />
    </a-avatar>
    <a-avatar :style="{ backgroundColor: '#14a9f8' }">Gene</a-avatar>
    <a-avatar :style="{ backgroundColor: '#00d0b6' }">Design</a-avatar>
    <a-avatar>
      <img
        alt="avatar"
        src="https://uxd.lenovo.com/avatar_girl.svg"
      />
    </a-avatar>
  </a-space>
</template>

<script>
import { IconUser } from 'genedesign/es/icon';

export default {
  components: { IconUser },
};
</script>
```
