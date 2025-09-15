import {
  computed,
  defineComponent,
  PropType,
  ref,
  toRefs,
  Slots,
  nextTick,
} from 'vue';
import Tree from '../tree';
import { TreeProps, TreeNodeKey } from '../tree/interface';
import { useScrollbar } from '../_hooks/use-scrollbar';
import { ScrollbarProps } from '../scrollbar';
import { Scrollbar } from '../index';
import { getPrefixCls } from '../_utils/global-config';

export default defineComponent({
  name: 'TreeSelectPanel',
  components: {
    Tree,
  },
  props: {
    treeProps: {
      type: Object as PropType<Partial<TreeProps>>,
      default: () => ({}),
    },
    selectedKeys: {
      type: Array as PropType<TreeNodeKey[]>,
    },
    showCheckable: {
      type: Boolean,
    },
    treeSlots: {
      type: Object as PropType<Slots>,
      default: () => ({}),
    },
    scrollbar: {
      type: [Boolean, Object] as PropType<boolean | ScrollbarProps>,
      default: true,
    },
  },
  emits: ['change'],
  setup(props, { emit }) {
    const { showCheckable, selectedKeys, treeProps, scrollbar } = toRefs(props);
    const { displayScrollbar, scrollbarProps } = useScrollbar(scrollbar);
    const prefixCls = getPrefixCls('tree-select');
    const refTree = ref();

    const computedTreeProps = computed(() => {
      return {
        ...treeProps.value,
        disableSelectActionOnly: true,
        checkedKeys: showCheckable.value ? selectedKeys.value : [],
        selectedKeys: showCheckable.value ? [] : selectedKeys.value,
      };
    });

    const onSelect = (newVal: TreeNodeKey[], e: Event) => {
      if (showCheckable.value) {
        refTree.value?.toggleCheck?.(newVal[0], e);
      } else {
        emit('change', newVal);
      }
    };

    const onCheck = (newVal: TreeNodeKey[]) => {
      emit('change', newVal);
    };

    // 添加焦点管理方法
    const focusToTree = () => {
      nextTick(() => {
        if (refTree.value?.$el) {
          // 尝试多种方式找到可聚焦的元素
          let focusableElement = null;

          // 方法1：尝试找到树节点
          focusableElement = refTree.value.$el.querySelector('[role="treeitem"]');

          // 方法2：尝试找到有 tabindex 的元素
          if (!focusableElement) {
            focusableElement = refTree.value.$el.querySelector('[tabindex="0"], [tabindex="-1"]');
          }

          // 方法3：尝试找到树的根节点
          if (!focusableElement) {
            focusableElement = refTree.value.$el.querySelector('.arco-tree');
          }

          // 方法4：尝试找到任何可聚焦的元素
          if (!focusableElement) {
            focusableElement = refTree.value.$el.querySelector('div, span, ul, li');
            // eslint-disable-next-line no-console
            console.log('Method 4 - any element:', focusableElement);
          }

          if (focusableElement) {
            // 确保元素有 tabindex
            if (!focusableElement.getAttribute('tabindex')) {
              focusableElement.setAttribute('tabindex', '0');
            }
            focusableElement.focus();
          } else {
            // 最后的备选方案：聚焦到整个树容器
            refTree.value.$el.setAttribute('tabindex', '0');
            refTree.value.$el.focus();
          }
        }
      });
    };

    const renderTree = () => {
      return (
        <Tree
          ref={refTree}
          {...computedTreeProps.value}
          // @ts-ignore
          onSelect={onSelect}
          onCheck={onCheck}
          v-slots={props.treeSlots}
        />
      );
    };

    return {
      focusToTree,
      render: () => {
        if (displayScrollbar.value) {
          return (
            <Scrollbar
              class={`${prefixCls}-tree-wrapper`}
              {...scrollbarProps.value}
            >
              {renderTree()}
            </Scrollbar>
          );
        }
        return <div class={`${prefixCls}-tree-wrapper`}>{renderTree()}</div>;
      },
    };
  },
  methods: {
    focus() {
      // @ts-ignore
      this.focusToTree?.();
    },
  },
  render() {
    // @ts-ignore
    return this.render();
  },
});
