<template>
  <li :class="cls" :style="mergedStyle" :tabindex="disabled ? -1 : 0" :aria-label="`第 ${pageNumber} 页`"
    :aria-current="isActive ? 'page' : false" role="button" @click="handleClick" @keydown="handleKeydown">
    <slot :page="pageNumber">
      {{ pageNumber }}
    </slot>
  </li>
</template>

<script lang="ts">
import type { PropType, CSSProperties } from 'vue';
import { computed, defineComponent } from 'vue';
import { getPrefixCls } from '../_utils/global-config';

export default defineComponent({
  name: 'Pager',
  props: {
    pageNumber: {
      type: Number,
    },
    current: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    style: {
      type: Object as PropType<CSSProperties>,
    },
    activeStyle: {
      type: Object as PropType<CSSProperties>,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('pagination-item');
    const isActive = computed(() => props.current === props.pageNumber);

    const handleClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', props.pageNumber, e);
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(e as any);
      }
    };

    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-active`]: isActive.value,
      },
    ]);

    const mergedStyle = computed(() => {
      return isActive.value ? props.activeStyle : props.style;
    });

    return {
      prefixCls,
      cls,
      mergedStyle,
      isActive,
      handleClick,
      handleKeydown,
    };
  },
});
</script>
