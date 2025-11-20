```yaml
meta:
  type: Component
  category: Other
title: AI Toolbar
description: A toolbar designed for AI conversation scenarios
```


@import ./__demo__/basic.md
@import ./__demo__/end.md
@import ./__demo__/showVoice.md
@import ./__demo__/icon.md
@import ./__demo__/multiple.md

## API

### `AiToolbar` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|`modelValue`|Content of the input area, supports `v-model` two-way binding.|`string`|`''`|
|`placeholder`|Default placeholder text.|`string`|`Ask anything or search...`|
|`listeningPlaceholder`|Placeholder text shown while voice recognition is active.|`string`|`I'm listening...`|
|`autoSize`|Auto-size configuration for the textarea. Accepts `boolean` or `{ minRows, maxRows }`.|`boolean \/ object`|`{ minRows: 1, maxRows: 4 }`|
|`accept`|Accepted extensions for the file input |`string`|`'.png,.jpg,.jpeg,.pdf,.svg,.xlsx,.xls,.ppt,.pptx,.txt,.zip,.rar,.7z,.apk,.mp3,.wav,.doc,.docx'`|
|`multiple`|Whether multiple file selection is allowed.|`boolean`|`true`|
|`limit`|Maximum number of files allowed to upload; `0` means unlimited.|`number`|`0`|
|`contentAlign`|Controls vertical alignment for `.ai-toolbar-content` and ordering of upload vs content (`start` / `end`).|`string`|`start`|
|`width`|Container width. Accepts `number` (treated as `px`) or `string` (e.g. `400px`, `50%`).|`number \/ string`|`468`|
|`showVoice`|Whether to show the voice button (shows default voice/close button |`boolean`|`true`|

### `AiToolbar` Events (emits)

|Event|Description|Payload|
|---|---|---|
|`update:modelValue`|Emitted when the input value changes (used for `v-model`).|`value: string`|
|`send`|Emitted when the user triggers send/start request.|`{ text: string; files: Array }`|
|`voice-toggle`|Emitted when voice recognition state toggles.|`listening: boolean`|
|`files-change`|Emitted when the selected files list changes (add/remove).|`files: Array`|
|`file-remove`|Emitted when a single file is removed.|`file: Object` (removed file)|
|`end-voice`|Emitted when voice recognition ends (keeps voice text).|`listening: boolean`|
|`pause`|Emitted when the ongoing send is paused by the user.|`none`|

>Note: The component internally manages states like `isListening` and `isSending`, but `isSending` is currently controlled internally; parent components can coordinate the request flow by handling the `send` / `pause` events and reset the state as needed.
