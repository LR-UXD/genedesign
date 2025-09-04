import { computed, defineComponent, inject, PropType, VNode, ref, onMounted, nextTick, watch } from 'vue';
import { TableDataWithRaw, TableOperationColumn } from './interface';
import { getPrefixCls } from '../_utils/global-config';
import {
  getLeafKeys,
  getOperationFixedCls,
  getOperationStyle,
  getSelectionStatus,
} from './utils';
import Checkbox from '../checkbox';
import Radio from '../radio';
import IconPlus from '../icon/icon-plus';
import IconMinus from '../icon/icon-minus';
import IconDragDotVertical from '../icon/icon-drag-dot-vertical';
import { TableContext, tableInjectionKey } from './context';
import { BaseType } from '../_utils/types';

export default defineComponent({
  name: 'OperationTd',
  components: {
    Checkbox,
    Radio,
    IconPlus,
    IconMinus,
  },
  props: {
    operationColumn: {
      type: Object as PropType<TableOperationColumn>,
      required: true,
    },
    operations: {
      type: Array as PropType<TableOperationColumn[]>,
      required: true,
    },
    record: {
      type: Object as PropType<TableDataWithRaw>,
      required: true,
    },
    hasExpand: {
      type: Boolean,
      default: false,
    },
    selectedRowKeys: {
      type: Array as PropType<BaseType[]>,
    },
    renderExpandBtn: {
      type: Function as PropType<
        (record: TableDataWithRaw, stopPropagation?: boolean) => VNode
      >,
    },
    colSpan: {
      type: Number,
      default: 1,
    },
    rowSpan: {
      type: Number,
      default: 1,
    },
    summary: {
      type: Boolean,
      default: false,
    },
    rowIndex: {
      type: Number,
    },
    checkboxTabIndex: {
      type: Function as PropType<(index: number) => number | undefined>,
    },
  },
  emits: ['select'],
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls('table');
    const tableCtx = inject<Partial<TableContext>>(tableInjectionKey, {});
    const checkboxRef = ref();
    const radioRef = ref();

    const style = computed(() =>
      getOperationStyle(props.operationColumn, props.operations)
    );

    // 设置tabindex
    const updateTabIndex = () => {
      if (props.checkboxTabIndex && props.rowIndex !== undefined) {
        const tabIndex = props.checkboxTabIndex(props.rowIndex);

        if (checkboxRef.value) {
          const input = checkboxRef.value.$el?.querySelector('input');
          if (input) {
            input.tabIndex = tabIndex ?? -1;
          }
        }

        if (radioRef.value) {
          const input = radioRef.value.$el?.querySelector('input');
          if (input) {
            input.tabIndex = tabIndex ?? -1;
          }
        }
      }
    };

    onMounted(() => {
      nextTick(updateTabIndex);
    });

    // 监听 checkboxTabIndex 变化
    watch(
      () => props.checkboxTabIndex && props.rowIndex !== undefined ? props.checkboxTabIndex(props.rowIndex) : undefined,
      () => {
        nextTick(updateTabIndex);
      }
    );

    const cls = computed(() => [
      `${prefixCls}-td`,
      `${prefixCls}-operation`,
      {
        [`${prefixCls}-checkbox`]:
          props.operationColumn.name === 'selection-checkbox',
        [`${prefixCls}-radio`]:
          props.operationColumn.name === 'selection-radio',
        [`${prefixCls}-expand`]: props.operationColumn.name === 'expand',
        [`${prefixCls}-drag-handle`]:
          props.operationColumn.name === 'drag-handle',
      },
      ...getOperationFixedCls(prefixCls, props.operationColumn),
    ]);

    const leafKeys = computed(() => getLeafKeys(props.record));

    const selectionStatus = computed(() =>
      getSelectionStatus(tableCtx.currentSelectedRowKeys ?? [], leafKeys.value)
    );

    const renderContent = () => {
      if (props.summary) {
        return null;
      }
      if (props.operationColumn.render) {
        return props.operationColumn.render(props.record.raw);
      }
      if (props.operationColumn.name === 'selection-checkbox') {
        const value = props.record.key;

        if (!tableCtx.checkStrictly && !props.record.isLeaf) {
          return (
            <Checkbox
              ref={checkboxRef}
              modelValue={selectionStatus.value.checked}
              indeterminate={selectionStatus.value.indeterminate}
              disabled={Boolean(props.record.disabled)}
              uninjectGroupContext
              onChange={(checked) =>
                tableCtx.onSelectAllLeafs?.(props.record, checked as boolean)
              }
              // @ts-ignore
              onClick={(ev: Event) => ev.stopPropagation()}
            />
          );
        }

        return (
          <Checkbox
            ref={checkboxRef}
            modelValue={props.selectedRowKeys?.includes(value) ?? false}
            disabled={Boolean(props.record.disabled)}
            uninjectGroupContext
            onChange={(checked) =>
              tableCtx.onSelect?.(checked as boolean, props.record)
            }
            // @ts-ignore
            onClick={(ev: Event) => ev.stopPropagation()}
          />
        );
      }
      if (props.operationColumn.name === 'selection-radio') {
        const value = props.record.key;
        return (
          <Radio
            ref={radioRef}
            modelValue={props.selectedRowKeys?.includes(value) ?? false}
            disabled={Boolean(props.record.disabled)}
            uninjectGroupContext
            onChange={(checked) =>
              tableCtx.onSelect?.(checked as boolean, props.record)
            }
            // @ts-ignore
            onClick={(ev: Event) => ev.stopPropagation()}
          />
        );
      }
      if (props.operationColumn.name === 'expand') {
        if (props.hasExpand && props.renderExpandBtn) {
          return props.renderExpandBtn(props.record);
        }
        return null;
      }
      if (props.operationColumn.name === 'drag-handle') {
        return slots['drag-handle-icon']?.() ?? <IconDragDotVertical />;
      }
      return null;
    };

    return () => (
      <td
        class={cls.value}
        style={style.value}
        rowspan={props.rowSpan > 1 ? props.rowSpan : undefined}
        colspan={props.colSpan > 1 ? props.colSpan : undefined}
      >
        <span class={`${prefixCls}-cell`}>{renderContent()}</span>
      </td>
    );
  },
});
