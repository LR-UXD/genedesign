```yaml
title:
  zh-CN: 自定义图标
  en-US: custom icon
```

## zh-CN

自定义图标

---

## en-US

custom icon

---

```vue

<template>
  <div>
    <div style="margin-bottom: 20px;">
      <a-space>
        <span>Type: </span>
        <a-radio-group v-model="type">
          <a-radio value="text">text</a-radio>
          <a-radio value="picture">picture</a-radio>
          <a-radio value="picture-card">picture-card</a-radio>
        </a-radio-group>
      </a-space>
    </div>
    <a-upload
      action="/"
      :list-type="type"
      :default-file-list="[
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
      ]"
      :custom-icon="getCustomIcon()"
    />
  </div>
</template>

<script>
import { h, ref } from 'vue';
import { IconUpload, IconFileAudio, IconClose, IconFaceFrownFill } from 'genedesign/es/icon';

export default {
  setup() {
    const type = ref('text');
    const getCustomIcon = () => {
      return {
        retryIcon: () => h(IconUpload),
        cancelIcon: () => h(IconClose),
        fileIcon: () => h(IconFileAudio),
        removeIcon: () => h(IconClose),
        errorIcon: () => h(IconFaceFrownFill),
        fileName: (file) => {
          return `文件名： ${file.name}`
        },
      };
    };

    return {
      type,
      getCustomIcon
    }
  },
};
</script>
```
