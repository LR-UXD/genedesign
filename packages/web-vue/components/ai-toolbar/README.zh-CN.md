```yaml
meta:
  type: 组件
  category: 其它
title: ai工具栏
description: 用于ai对话的工具栏
```

@import ./__demo__/basic.md
@import ./__demo__/end.md
@import ./__demo__/showVoice.md
@import ./__demo__/icon.md
@import ./__demo__/multiple.md

## API

### `AITable` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|`modelValue`|输入框的内容，支持 `v-model` 双向绑定。|`string`|`''`|
|`placeholder`|默认占位文本。|`string`|`Ask anything or search...`|
|`listeningPlaceholder`|语音识别中显示的占位文本。|`string`|`I'm listening...`|
|`autoSize`|textarea 的自动高度设置，支持 `boolean` 或 `{ minRows, maxRows }`。|`boolean \/ object`|`{ minRows: 1, maxRows: 4 }`|
|`accept`|文件选择器接受的扩展名字符串|`string`|`'.png,.jpg,.jpeg,.pdf,.svg,.xlsx,.xls,.ppt,.pptx,.txt,.zip,.rar,.7z,.apk,.mp3,.wav,.doc,.docx'`|
|`multiple`|是否允许多文件选择。|`boolean`|`true`|
|`limit`|允许上传的最大文件数量，`0` 表示不限制。|`number`|`0`|
|`contentAlign`|控制 `.ai-toolbar-content` 的垂直对齐或上传栏与内容的顺序（可传 `start` / `end`）。|`string`|`start`|
|`width`|容器宽度，支持 `number`（视为 px）或 `string`（例如 `400px`、`50%`）。|`number \/ string`|`468`|
|`showVoice`|是否显示语音按钮（显示默认的语音/关闭按钮|`boolean`|`true`|

### `AiToolbar` Events (emits)

|事件名|描述|参数|
|---|---|---|
|`update:modelValue`|输入内容变化时触发（用于 `v-model`）。|`value: string`|
|`send`|点击发送（或开始请求）时触发。|`{ text: string; files: Array }`|
|`voice-toggle`|切换语音识别状态时触发。|`listening: boolean`|
|`files-change`|选中文件列表变化时触发（新增/删除）。|`files: Array`|
|`file-remove`|单个文件被移除时触发。|`file: Object` (被移除的文件对象)|
|`end-voice`|结束语音识别（保留语音文本）时触发。|`listening: boolean`|
|`pause`|在发送过程中点击暂停时触发|`none`|


> 注：组件内部维护 `isListening`、`isSending` 等状态，但 `isSending` 当前为内部控制；父组件可通过接收 `send` / `pause` 事件来协调请求流程并在需要时重置状态

