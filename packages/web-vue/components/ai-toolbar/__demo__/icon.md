```yaml
title:
  zh-CN: 工具栏按钮图标
  en-US: Toolbar Button Icons
```

## zh-CN

可以自定义工具栏按钮图标，通过具名插槽 upload 、 voice 、send分别替换上传文件、语音、发送按钮图标

---

## en-US

You can customize the toolbar button icons by using the named slots upload, voice, and send to replace the upload file, voice, and send button icons respectively.
---

```vue
<template>
  <div class="demo-ai-toolbar-basic">
    <a-aiToolbar
      v-model="text"
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
      <template #upload>
          <icon-upload :size="24" />
      </template>
        <template #send>
            <icon-play-arrow-fill :size="30" />
        </template>
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