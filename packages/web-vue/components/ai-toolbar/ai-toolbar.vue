<template>
  <div
    ref="root"
    class="ai-toolbar-container"
    :style="{ alignItems: alignValue, width: containerWidth }"
    :class="`ai-toolbar-${contentAlign}`"
  >
    <div
      class="ai-toolbar-main"
      :class="{ listening: isListening }"
      tabindex="0"
    >
      <div class="ai-toolbar-inner" :class="`ai-toolbar-inner-${contentAlign}`">
        <div class="ai-toolbar-content" :style="{ alignItems: alignValue }">
          <div class="ai-toolbar-left">
            <a-button type="text" shape="circle" @click="openFilePicker">
              <slot name="upload"><icon-plus :size="24" /></slot>
            </a-button>

            <input
              ref="fileInput"
              type="file"
              style="display: none"
              :accept="accept"
              :multiple="multiple"
              @change="onFilesSelected"
            />
            />
          </div>
          <div class="ai-toolbar-center">
            <slot name="input">
              <a-textarea
                v-model="internalValue"
                :placeholder="isListening ? listeningPlaceholder : placeholder"
                :auto-size="autoSize"
              />
            </slot>
          </div>
          <div v-if="showVoice" class="ai-toolbar-right">
            <a-button
              type="text"
              shape="circle"
              :class="{ 'voice-active': isListening }"
              @click="toggleVoice"
            >
              >
              <span v-if="!isListening">
                <slot name="voice"><icon-voice :size="24" /></slot>
              </span>
              <span v-else>
                <slot name="voice-close"><icon-close :size="24" /></slot>
              </span>
            </a-button>
          </div>
        </div>

        <div v-if="files.length" class="ai-toolbar-upload">
          <template v-for="(f, idx) in files" :key="f.id">
            <div class="file-pill">
              <div class="file-icon-wrapper">
                <template v-if="isComponent(getIcon(f))">
                  <component :is="getIcon(f)" class="file-icon" />
                </template>
                <template v-else>
                  <img class="file-img-icon" :src="getIcon(f)" alt="icon" />
                </template>
              </div>

              <div class="file-name" :title="f.name">{{ f.name }}</div>
              <a-button
                type="text"
                size="mini"
                shape="circle"
                @click="removeFile(idx)"
                ><icon-close :size="16"
              /></a-button>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div
      class="ai-toolbar-send"
      :class="{
        'send--hasText': hasText,
        'send--listening': isListening,
        'send--active': isSending,
      }"
    >
      <a-button
        type="text"
        shape="circle"
        :disabled="!hasText && !isSending"
        @click="handleAction"
      >
        <span v-if="isSending">
          <slot name="pause"> <icon-ai-gene-pause :size="48" /></slot>
        </span>
        <div v-else class="send-icon-box">
          <span v-if="isListening">
            <slot name="check"> <icon-check :size="24" /></slot>
          </span>
          <span v-else>
            <slot name="send"> <icon-arrow-right :size="24" /></slot>
          </span>
        </div>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch, nextTick } from 'vue';
import IconPlus from '../icon/icon-plus';
import IconVoice from '../icon/icon-voice';
import IconArrowRight from '../icon/icon-arrow-right';
import IconClose from '../icon/icon-close';
import IconCheck from '../icon/icon-check';
import IconAiGenePause from '../icon/icon-ai-gene-pause';
import word from '../icon/icon-format-word';
import excel from '../icon/icon-format-excel';
import pdf from '../icon/icon-format-pdf';
import ppt from '../icon/icon-format-ppt';
import txt from '../icon/icon-format-txt';
import zip from '../icon/icon-format-zip';
import unknown from '../icon/icon-format-unknown';
import apk from '../icon/icon-format-apk';
import audio from '../icon/icon-format-audio';
import folders from '../icon/icon-format-folders';

export default defineComponent({
  name: 'AiToolbar',
  components: {
    IconPlus,
    IconVoice,
    IconArrowRight,
    IconClose,
    IconCheck,
    IconAiGenePause,
  },

  props: {
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: 'Ask anything or search...' },
    listeningPlaceholder: { type: String, default: "I'm listening..." },
    autoSize: {
      type: [Boolean, Object],
      default: () => ({ minRows: 1, maxRows: 4 }),
    },
    accept: { type: String, default: '' },
    multiple: { type: Boolean, default: true },
    /** 最大允许上传文件数量，0 表示不限制 */
    limit: { type: Number, default: 0 },
    contentAlign: { type: String, default: 'flex-start' },
    /** 是否显示语音按钮 */
    showVoice: { type: Boolean, default: true },
    /**
     * 容器宽度，支持数字（会被视为 px）或字符串（例如 '400px'、'50%'）
     */
    width: { type: [String, Number], default: 468 },
  },
  emits: [
    'update:modelValue',
    'send',
    'voice-toggle',
    'files-change',
    'file-remove',
    'end-voice',
    'pause',
  ],
  setup(props, { emit }) {
    const root = ref<HTMLElement | null>(null);
    const internalValue = ref(props.modelValue || '');
    const hasText = ref((props.modelValue || '').trim().length > 0);
    const isListening = ref(false);
    const isSending = ref(false);
    const files = ref<
      Array<{
        id: string;
        name: string;
        size: number;
        url?: string;
        file: File;
      }>
    >([]);
    const fileInput = ref<HTMLInputElement | null>(null);

    watch(
      () => props.modelValue,
      (v) => {
        internalValue.value = v || '';
        hasText.value = (internalValue.value || '').trim().length > 0;
      }
    );

    watch(internalValue, (v) => {
      emit('update:modelValue', v);
      hasText.value = (v || '').trim().length > 0;
    });

    const openFilePicker = () => {
      if (!fileInput.value) return;
      fileInput.value.value = '';
      fileInput.value.click();
    };

    const onFilesSelected = (e: Event) => {
      const target = e.target as HTMLInputElement | null;
      const list = target?.files;
      if (!list || list.length === 0) return;

      const limit = props.limit || 0; // 0 表示不限制

      const releaseAll = () => {
        files.value.forEach((ff) => {
          if (ff && ff.url) {
            try {
              URL.revokeObjectURL(ff.url);
            } catch (e) {}
          }
        });
      };

      if (limit > 0 && files.value.length >= limit) return;
      // 无 limit
      if (limit === 0) {
        if (!props.multiple) {
          const f = list[0];
          const id = `${Date.now()}-0-${Math.round(Math.random() * 1000)}`;
          const url = URL.createObjectURL(f);
          releaseAll();
          files.value = [{ id, name: f.name, size: f.size, url, file: f }];
          emit('files-change', files.value.slice());
          return;
        }

        // 多选：累加全部
        for (let i = 0; i < list.length; i++) {
          const f = list[i];
          const id = `${Date.now()}-${i}-${Math.round(Math.random() * 1000)}`;
          const url = URL.createObjectURL(f);
          files.value.push({ id, name: f.name, size: f.size, url, file: f });
        }
        emit('files-change', files.value.slice());
        return;
      }

      // 有 limit
      const remaining = limit - files.value.length;
      if (remaining <= 0) return;

      // 如果不允许一次选多且 limit 为 1，则替换
      if (!props.multiple && limit === 1) {
        const f = list[0];
        const id = `${Date.now()}-0-${Math.round(Math.random() * 1000)}`;
        const url = URL.createObjectURL(f);
        releaseAll();
        files.value = [{ id, name: f.name, size: f.size, url, file: f }];
        emit('files-change', files.value.slice());
        return;
      }

      // 剩余数量累加
      const take = Math.min(list.length, remaining);
      for (let i = 0; i < take; i++) {
        const f = list[i];
        const id = `${Date.now()}-${i}-${Math.round(Math.random() * 1000)}`;
        const url = URL.createObjectURL(f);
        files.value.push({ id, name: f.name, size: f.size, url, file: f });
      }
      emit('files-change', files.value.slice());
    };

    const removeFile = (index: number) => {
      const f = files.value[index];
      if (f && f.url) {
        try {
          URL.revokeObjectURL(f.url);
        } catch (e) {}
      }
      const removed = files.value.splice(index, 1);
      emit('file-remove', removed[0]);
      emit('files-change', files.value.slice());
    };

    const toggleVoice = () => {
      isListening.value = !isListening.value;
      emit('voice-toggle', isListening.value);
    };

    const send = () => {
      isSending.value = true;
      emit('send', { text: internalValue.value, files: files.value.slice() });
      nextTick(() => {
        internalValue.value = '';
        files.value = [];
        if (fileInput.value) fileInput.value.value = '';
      });
    };

    const pauseSending = () => {
      isSending.value = false;
      emit('pause');
    };

    const handleAction = () => {
      if (isListening.value) {
        endVoice();
        return;
      }
      if (isSending.value) {
        pauseSending();
        return;
      }
      send();
    };

    const endVoice = () => {
      isListening.value = false;
      emit('end-voice', isListening.value);
    };

    const getIcon = (fileObj: { name: string; url?: string; file?: File }) => {
      if (!fileObj) return unknown;
      const file = fileObj.file as File | undefined;
      if (file && file.type && file.type.startsWith('image/')) {
        return fileObj.url || unknown;
      }
      const name = fileObj.name || '';
      const ext = name.split('.').pop()?.toLowerCase() || '';
      let iconVar: any = unknown;
      switch (ext) {
        case 'doc':
        case 'docx':
          iconVar = word;
          break;
        case 'xls':
        case 'xlsx':
          iconVar = excel;
          break;
        case 'pdf':
          iconVar = pdf;
          break;
        case 'ppt':
        case 'pptx':
          iconVar = ppt;
          break;
        case 'txt':
          iconVar = txt;
          break;
        case 'zip':
        case 'rar':
        case '7z':
          iconVar = zip;
          break;
        case 'apk':
          iconVar = apk;
          break;
        case 'mp3':
        case 'wav':
        case 'm4a':
          iconVar = audio;
          break;
        default:
          iconVar = unknown;
      }
      if (iconVar && typeof iconVar === 'object') {
        if (typeof iconVar.default === 'string') return iconVar.default;
        return iconVar.default || iconVar;
      }
      return iconVar;
    };

    const isComponent = (val: any) => {
      // string -> URL, object/function -> component
      return val && typeof val !== 'string';
    };
    const alignValue = ((): string => {
      const v = (props.contentAlign || '').toString();
      if (v === 'start') return 'flex-start';
      if (v === 'end') return 'flex-end';
      return v || 'flex-start';
    })();

    const containerWidth = ((): string => {
      const w = props.width as string | number | undefined;
      if (typeof w === 'number') return `${w}px`;
      if (!w) return '468px';
      return w.toString();
    })();

    return {
      root,
      internalValue,
      hasText,
      isListening,
      isSending,
      toggleVoice,
      endVoice,
      files,
      fileInput,
      openFilePicker,
      onFilesSelected,
      removeFile,
      getIcon,
      isComponent,
      send,
      pauseSending,
      handleAction,
      alignValue,
      containerWidth,
    };
  },
});
</script>

<style lang="less" scoped></style>
