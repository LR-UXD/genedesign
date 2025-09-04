<template>
  <li :class="cls" :tabindex="0" :aria-label="`跳转到第 ${nextPage} 页`" role="button" @click="handleClick"
    @keydown="handleKeydown">
    <slot>
      <icon-more />
    </slot>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { getPrefixCls } from '../_utils/global-config';
import IconMore from '../icon/icon-more';
import { getLegalPage } from './utils';

export default defineComponent({
  name: 'EllipsisPager',
  components: {
    IconMore,
  },
  props: {
    current: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      default: 5,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls('pagination-item');

    const nextPage = computed(() =>
      getLegalPage(props.current + props.step, {
        min: 1,
        max: props.pages,
      })
    );

    const handleClick = (e: MouseEvent) => {
      emit('click', nextPage.value);
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick(e as any);
      }
    };

    const cls = computed(() => [prefixCls, `${prefixCls}-ellipsis`]);

    return {
      prefixCls,
      cls,
      nextPage,
      handleClick,
      handleKeydown,
    };
  },
});
</script>
