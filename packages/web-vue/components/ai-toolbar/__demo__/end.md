```yaml
title:
  zh-CN: 工具栏位置
  en-US: Toolbar Position
```

## zh-CN

通过 contentAlign 为'start'和'end'' 属性，控制输入框位置，内容向上还是向下扩展

---

## en-US

By setting the contentAlign property to 'start' and 'end', you can control the position of the input box, whether the content expands upwards or downwards.
---

```vue
<template>
  <div class="demo-ai-toolbar-basic">
    <a-aiToolbar
      v-model="text"
      contentAlign="end"
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