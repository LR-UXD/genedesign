```yaml
title:
  zh-CN: 基本使用
  en-US: Basic Usage
```

## zh-CN

ai工具栏的基本用法

---

## en-US

A toolbar designed for AI conversation scenarios
---

```vue
<template>
  <div class="demo-ai-toolbar-basic">
    <a-aiToolbar
      v-model="text"
      :files="files"
      :width="700"
      contentAlign="start"
      placeholder="Ask me anything..."
      listening-placeholder="Listening now..."
      :accept="'.png,.jpg,.jpeg,.pdf,.svg,.xlsx,.xls'"
      @send="onSend"
      @files-change="onFilesChange"
      @voice-toggle="onVoice"
      @end-voice="onEndVoice"
      @pause="onPause"
    >

    </a-aiToolbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
const files = ref([]);

function onSend(payload: { text: string; files: any[] }) {
  console.log('发送请求', payload);
}
function onPause() {
  console.log('停止请求');
}

function onFilesChange(files: any[]) {
  console.log('files change', files);
}

function onVoice(listening: boolean) {
  if(listening) console.log('开始语音识别', listening);
  else console.log('停止语音识别并不保留语音文本', listening);
}
function onEndVoice(listening: boolean) {
  console.log('结束语音并保留语音文本', listening);
}
</script>

<style>
.demo-ai-toolbar-basic {
  height:400px;
  display: flex;
  background-color: var(--color-ai-toolbar-bg);
  position: relative;
}
.ai-toolbar-container{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  }

  .ai-toolbar-start{
     top:100px;
  }

  .ai-toolbar-end{
    bottom:100px;
  }
</style>
```