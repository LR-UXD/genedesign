<template>
  <div :class="cls" @keydown="handleKeydown" tabindex="-1">
    <div v-if="isEmpty" :class="`${prefixCls}-empty`">
      <slot name="empty">
        <empty />
      </slot>
    </div>
    <Scrollbar ref="wrapperRef" :class="`${prefixCls}-list-wrapper`" :style="style" @scroll="handleScroll">
      <ul :class="`${prefixCls}-list`" role="listbox">
        <slot />
      </ul>
    </Scrollbar>
    <div v-if="$slots.footer && !isEmpty" :class="`${prefixCls}-footer`">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent,
  inject,
  PropType,
  ref,
} from 'vue';
import { getPrefixCls } from '../_utils/global-config';
import Empty from '../empty';
import { EmitType } from '../_utils/types';
import { DropdownContext, dropdownInjectionKey } from './context';
import { isNumber } from '../_utils/is';
import Scrollbar from '../scrollbar';

export default defineComponent({
  name: 'DropdownPanel',
  components: {
    Scrollbar,
    Empty,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    isEmpty: {
      type: Boolean,
      default: false,
    },
    bottomOffset: {
      type: Number,
      default: 0,
    },
    onScroll: {
      type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>,
    },
    onReachBottom: {
      type: [Function, Array] as PropType<EmitType<(ev: Event) => void>>,
    },
  },
  emits: ['scroll', 'reachBottom'],
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('dropdown');
    const dropdownCtx = inject<Partial<DropdownContext>>(
      dropdownInjectionKey,
      {}
    );
    const wrapperRef = ref<HTMLElement>();

    const handleScroll = (e: Event) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target as HTMLElement;
      const bottom = scrollHeight - (scrollTop + offsetHeight);
      if (bottom <= props.bottomOffset) {
        emit('reachBottom', e);
      }
      emit('scroll', e);
    };

    const handleKeydown = (e: KeyboardEvent) => {
      // 直接在当前组件内查找选项，不依赖event target
      const currentElement = e.currentTarget as HTMLElement;
      const listElement = currentElement.querySelector(`.${prefixCls}-list`);

      if (!listElement) return;

      const options = Array.from(
        listElement.querySelectorAll(
          `.${prefixCls}-option:not(.${prefixCls}-option-disabled)`
        )
      ) as HTMLElement[];

      if (options.length === 0) return;

      const currentIndex = options.findIndex(
        (option) => option === document.activeElement
      );

      let nextIndex: number;
      let prevIndex: number;

      // 如果当前没有焦点在任何选项上
      const noCurrentFocus = currentIndex === -1;

      switch (e.key) {
        case 'Tab': {
          e.preventDefault();
          if (noCurrentFocus) {
            options[0]?.focus();
          } else if (e.shiftKey) {
            // Shift+Tab - 向上
            prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
            options[prevIndex]?.focus();
          } else {
            // Tab - 向下
            nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            options[nextIndex]?.focus();
          }
          break;
        }
        case 'ArrowDown': {
          e.preventDefault();
          if (noCurrentFocus) {
            options[0]?.focus();
          } else {
            nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
            options[nextIndex]?.focus();
          }
          break;
        }
        case 'ArrowUp': {
          e.preventDefault();
          if (noCurrentFocus) {
            options[options.length - 1]?.focus();
          } else {
            prevIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
            options[prevIndex]?.focus();
          }
          break;
        }
        case 'Home':
          e.preventDefault();
          options[0]?.focus();
          break;
        case 'End':
          e.preventDefault();
          options[options.length - 1]?.focus();
          break;
        case 'Escape':
          e.preventDefault();
          dropdownCtx.onClose?.();
          break;
        default:
          break;
      }
    };

    const style = computed<CSSProperties | undefined>(() => {
      if (isNumber(dropdownCtx.popupMaxHeight)) {
        return {
          maxHeight: `${dropdownCtx.popupMaxHeight}px`,
        };
      }
      if (!dropdownCtx.popupMaxHeight) {
        return {
          maxHeight: 'none',
          overflowY: 'hidden',
        };
      }
      return undefined;
    });

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-footer`]: Boolean(slots.footer),
      },
    ]);

    return {
      prefixCls,
      cls,
      style,
      wrapperRef,
      handleScroll,
      handleKeydown,
    };
  },
});
</script>
