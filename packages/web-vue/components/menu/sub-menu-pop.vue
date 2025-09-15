<template>
  <Trigger trigger="hover" :class="triggerClassNames" :position="needPopOnBottom ? 'bl' : 'rt'" show-arrow
    animation-class="fade-in" :mouse-enter-delay="50" :mouse-leave-delay="50" :popup-offset="4"
    :auto-fit-popup-min-width="true" :duration="100" v-bind="triggerProps" :unmount-on-close="false"
    :popup-visible="popVisible" @popupVisibleChange="onVisibleChange">
    <div ref="triggerRef" :class="[
      classNames,
      {
        [`${menuPrefixCls}-has-icon`]: $slots.icon,
      },
    ]" tabindex="0" role="menuitem" aria-haspopup="true" :aria-expanded="popVisible" :aria-selected="isSelected"
      v-bind="$attrs" @click="onClick" @keydown="onKeydown">
      <!-- header -->
      <MenuIndent :level="level" />
      <template v-if="$slots.icon">
        <span :class="`${menuPrefixCls}-icon`">
          <slot name="icon"></slot>
        </span>
        <span :class="`${menuPrefixCls}-title`">
          <slot name="title">{{ title }}</slot>
        </span>
      </template>
      <template v-else>
        <slot name="title">{{ title }}</slot>
      </template>
      <!-- suffix -->
      <span :class="`${menuPrefixCls}-icon-suffix`">
        <slot v-if="needPopOnBottom" name="expand-icon-down" />
        <slot v-else name="expand-icon-right" />
      </span>
      <div v-if="isSelected && mode === 'horizontal'" :class="`${menuPrefixCls}-selected-label`" />
    </div>
    <!-- content -->
    <template #content>
      <Menu in-trigger :prefix-cls="`${triggerPrefixCls}-menu`" :selected-keys="selectedKeys" :theme="menuContext.theme"
        :trigger-props="menuContext.triggerProps" :style="popupMenuStyles" @menuItemClick="onMenuItemClick"
        @keydown="onPopupKeydown">
        <slot />
        <template v-if="menuContext.expandIconDown" #expand-icon-down>
          <RenderFunction :render-func="menuContext.expandIconDown" />
        </template>
        <template v-if="menuContext.expandIconRight" #expand-icon-right>
          <RenderFunction :render-func="menuContext.expandIconRight" />
        </template>
      </Menu>
    </template>
  </Trigger>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue';
import Trigger from '../trigger';
import { SubMenuPopProps } from './interface';
import Menu from './base-menu.vue';
import useMenu from './hooks/use-menu';
import useLevel from './hooks/use-level';
import { omit } from '../_utils/omit';
import { getPrefixCls } from '../_utils/global-config';
import MenuIndent from './indent.vue';
import useMenuContext from './hooks/use-menu-context';
import RenderFunction from '../_components/render-function';
import { isNumber } from '../_utils/is';

export default defineComponent({
  name: 'SubMenuPop',
  components: {
    Menu,
    Trigger,
    MenuIndent,
    RenderFunction,
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
    },
    selectable: {
      type: Boolean,
    },
    isChildrenSelected: {
      type: Boolean,
    },
    popupMaxHeight: {
      type: [Boolean, Number],
      default: undefined,
    },
  },
  setup(props) {
    const { key } = useMenu();
    const { level } = useLevel();
    const { selectable, isChildrenSelected, popupMaxHeight } = toRefs(props);
    const menuContext = useMenuContext();
    const { onSubMenuClick, onMenuItemClick } = menuContext;

    const triggerRef = ref<HTMLDivElement>();

    const menuPrefixCls = computed(() => menuContext.prefixCls);
    const mode = computed(() => menuContext.mode);
    const selectedKeys = computed(() => menuContext.selectedKeys || []);

    const prefixCls = computed(() => `${menuPrefixCls.value}-pop`);
    const isSelected = computed(
      () =>
        (selectable.value && selectedKeys.value.includes(key.value)) ||
        isChildrenSelected.value
    );
    const classNames = computed(() => [
      `${prefixCls.value}`,
      `${prefixCls.value}-header`,
      {
        [`${menuPrefixCls.value}-selected`]: isSelected.value,
      },
    ]);
    const needPopOnBottom = computed(
      () => mode.value === 'horizontal' && !menuContext.inTrigger
    );
    const popVisible = ref(false);
    const setPopVisible = (val: boolean) => {
      popVisible.value = val;
    };
    const triggerPrefixCls = getPrefixCls('trigger');
    const triggerClassNames = computed(() => [
      `${prefixCls.value}-trigger`,
      {
        [`${prefixCls.value}-trigger-dark`]: menuContext.theme === 'dark',
      },
      // @ts-ignore
      menuContext.triggerProps?.class,
    ]);
    const triggerProps = computed(() =>
      omit(menuContext.triggerProps || {}, ['class'])
    );

    // 判断元素是否可聚焦
    const isFocusable = (item: HTMLElement): boolean => {
      return !item.hasAttribute('disabled') &&
        !item.classList.contains('arco-menu-disabled') &&
        item.getAttribute('tabindex') !== '-1';
    };

    // 获取可见弹窗
    const getVisiblePopup = () => {
      return document.querySelector(`.${triggerPrefixCls}-popup .${triggerPrefixCls}-popup-wrapper:not([style*="display: none"])`);
    };

    // 找到第一个可聚焦的菜单项并聚焦
    const focusFirstFocusableMenuItem = (): boolean => {
      const visiblePopup = getVisiblePopup();
      if (!visiblePopup) return false;

      const menuItems = visiblePopup.querySelectorAll(`.${triggerPrefixCls}-menu [role="menuitem"]`);
      for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i] as HTMLElement;
        if (isFocusable(item)) {
          item.focus();
          return true;
        }
      }
      return false;
    };

    // 找到最后一个可聚焦的菜单项
    const findLastFocusableMenuItem = (): HTMLElement | null => {
      const visiblePopup = getVisiblePopup();
      if (!visiblePopup) return null;

      const menuItems = visiblePopup.querySelectorAll(`[role="menuitem"]`);
      for (let i = menuItems.length - 1; i >= 0; i--) {
        const item = menuItems[i] as HTMLElement;
        if (isFocusable(item)) {
          return item;
        }
      }
      return null;
    };

    // 找到第一个可聚焦的菜单项
    const findFirstFocusableMenuItem = (): HTMLElement | null => {
      const visiblePopup = getVisiblePopup();
      if (!visiblePopup) return null;

      const menuItems = visiblePopup.querySelectorAll(`[role="menuitem"]`);
      for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i] as HTMLElement;
        if (isFocusable(item)) {
          return item;
        }
      }
      return null;
    };

    // 关闭弹窗并返回焦点到触发器
    const closePopupAndFocusTrigger = () => {
      setPopVisible(false);
      setTimeout(() => {
        triggerRef.value?.focus();
      }, 10);
    };

    // 打开弹窗并聚焦第一个菜单项
    const openPopupAndFocusFirst = () => {
      setPopVisible(true);
      setTimeout(() => {
        if (!focusFirstFocusableMenuItem()) {
          setTimeout(focusFirstFocusableMenuItem, 50);
        }
      }, 50);
    };

    return {
      triggerRef,
      menuPrefixCls,
      mode,
      level,
      classNames,
      isSelected,
      selectedKeys,
      needPopOnBottom,
      popVisible,
      triggerPrefixCls,
      triggerClassNames,
      triggerProps,
      menuContext,
      popupMenuStyles: computed(() => {
        const maxHeight = popupMaxHeight.value ?? menuContext.popupMaxHeight;
        if (isNumber(maxHeight)) return { maxHeight: `${maxHeight}px` };
        return maxHeight ? {} : { maxHeight: 'unset' };
      }),
      onClick: () => {
        onSubMenuClick && onSubMenuClick(key.value, level.value);
        selectable.value && onMenuItemClick && onMenuItemClick(key.value);
      },
      onMenuItemClick: (key: string) => {
        onMenuItemClick && onMenuItemClick(key);
        closePopupAndFocusTrigger();
      },
      onVisibleChange: (visible: boolean) => {
        setPopVisible(visible);
        // 当弹窗关闭时，将焦点返回到触发器
        if (!visible) {
          setTimeout(() => {
            triggerRef.value?.focus();
          }, 10);
        }
      },
      onPopupKeydown: (e: KeyboardEvent) => {
        // 处理Tab键导航
        if (e.key === 'Tab') {
          const targetMenuItem = e.shiftKey
            ? findFirstFocusableMenuItem()
            : findLastFocusableMenuItem();

          if (targetMenuItem && document.activeElement === targetMenuItem) {
            e.preventDefault();
            closePopupAndFocusTrigger();
          }
        }
        // 处理Escape键
        else if (e.key === 'Escape') {
          e.preventDefault();
          closePopupAndFocusTrigger();
        }
      },
      onKeydown: (e: KeyboardEvent) => {
        // 处理Enter/Space键打开子菜单
        if (e.code === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          setPopVisible(true);
          setTimeout(() => {
            if (!focusFirstFocusableMenuItem()) {
              setTimeout(focusFirstFocusableMenuItem, 50);
            }
          }, 0);
          onSubMenuClick && onSubMenuClick(key.value, level.value);
          selectable.value && onMenuItemClick && onMenuItemClick(key.value);
        }
        // 处理箭头键打开子菜单
        else if (
          e.key === 'ArrowDown' ||
          (e.key === 'ArrowRight' && needPopOnBottom.value)
        ) {
          if (!popVisible.value) {
            e.preventDefault();
            openPopupAndFocusFirst();
          }
        }
      },
    };
  },
});
</script>
