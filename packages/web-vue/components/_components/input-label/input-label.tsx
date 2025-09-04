import { computed, defineComponent, PropType, toRefs } from 'vue';
import { omit } from '../../_utils/omit';
import { INPUT_EVENTS, Size } from '../../_utils/constant';
import pick from '../../_utils/pick';
import { getPrefixCls } from '../../_utils/global-config';
import { useInput } from '../../_hooks/use-input';
import { SelectViewValue } from '../select-view/interface';
import { useFormItem } from '../../_hooks/use-form-item';
import { useSize } from '../../_hooks/use-size';

export default defineComponent({
  name: 'InputLabel',
  inheritAttrs: false,
  props: {
    modelValue: Object as PropType<SelectViewValue>,
    inputValue: {
      type: String,
      default: '',
    },
    enabledInput: Boolean,
    formatLabel: Function as PropType<(data?: SelectViewValue) => string>,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String as PropType<Size>,
    error: Boolean,
    // used for outer focused
    focused: Boolean,
    opened: Boolean,
    uninjectFormItemContext: Boolean,
    activeKey: String,
  },
  emits: ['update:inputValue', 'inputValueChange', 'focus', 'blur'],
  setup(props, { attrs, emit, slots }) {
    const { size, disabled, error, inputValue, uninjectFormItemContext } =
      toRefs(props);
    const prefixCls = props.baseCls ?? getPrefixCls('input-label');
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers,
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext?.value,
    });
    const { mergedSize } = useSize(_mergedSize);

    const {
      inputRef,
      _focused,
      computedValue: computedInputValue,
      handleInput,
      handleComposition,
      handleFocus,
      handleBlur,
      handleMousedown,
    } = useInput({
      modelValue: inputValue,
      emit,
      eventName: 'inputValueChange',
      updateEventName: 'update:inputValue',
      eventHandlers,
    });

    const mergedFocused = computed(() => props.focused ?? _focused.value);

    const showInput = computed(
      () => (props.enabledInput && _focused.value) || !props.modelValue
    );

    const formatLabel = () => {
      if (props.modelValue) {
        return props.formatLabel?.(props.modelValue) ?? props.modelValue.label;
      }
      return '';
    };

    const mergedPlaceholder = computed(() => {
      if (props.enabledInput && props.modelValue) {
        return formatLabel();
      }

      return props.placeholder;
    });

    const renderLabel = () => {
      if (props.modelValue) {
        return slots.default?.({ data: props.modelValue }) ?? formatLabel();
      }
      return null;
    };

    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-search`]: props.enabledInput,
        [`${prefixCls}-focus`]: mergedFocused.value,
        [`${prefixCls}-disabled`]: mergedDisabled.value,
        [`${prefixCls}-error`]: mergedError.value,
      },
    ]);

    const wrapperAttrs = computed(() => {
      const wrapper = omit(attrs, INPUT_EVENTS) as any;
      // Add keyboard events to wrapper since it's now focusable
      if (attrs.onKeydown) wrapper.onKeydown = attrs.onKeydown;
      if (attrs.onKeypress) wrapper.onKeypress = attrs.onKeypress;
      if (attrs.onKeyup) wrapper.onKeyup = attrs.onKeyup;
      return wrapper;
    });
    const inputAttrs = computed(() => omit(pick(attrs, INPUT_EVENTS), ['onKeydown', 'onKeypress', 'onKeyup', 'onFocus', 'onBlur']));

    const render = () => (
      <span
        {...wrapperAttrs.value}
        class={cls.value}
        title={formatLabel()}
        role="combobox"
        tabindex={mergedDisabled.value ? -1 : 0}
        aria-expanded={mergedFocused.value}
        aria-haspopup="listbox"
        aria-owns="arco-select-listbox"
        aria-activedescendant={props.activeKey ? `arco-option-${props.activeKey}` : undefined}
        aria-readonly={!props.enabledInput}
        aria-disabled={mergedDisabled.value}
        onMousedown={handleMousedown}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {slots.prefix && (
          <span class={`${prefixCls}-prefix`}>{slots.prefix()}</span>
        )}
        <input
          {...inputAttrs.value}
          ref={inputRef}
          class={[
            `${prefixCls}-input`,
            {
              [`${prefixCls}-input-hidden`]: !showInput.value,
            },
          ]}
          value={computedInputValue.value}
          readonly={!props.enabledInput}
          placeholder={mergedPlaceholder.value}
          disabled={mergedDisabled.value}
          role="combobox"
          aria-expanded={props.opened ? "true" : "false"}
          aria-haspopup="listbox"
          aria-activedescendant={props.activeKey ? `arco-select-option-${props.activeKey}` : undefined}
          tabindex={-1}
          onInput={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCompositionstart={handleComposition}
          onCompositionupdate={handleComposition}
          onCompositionend={handleComposition}
        />
        <span
          class={[
            `${prefixCls}-value`,
            {
              [`${prefixCls}-value-hidden`]: showInput.value,
            },
          ]}
        >
          {renderLabel()}
        </span>
        {slots.suffix && (
          <span class={`${prefixCls}-suffix`}>{slots.suffix()}</span>
        )}
      </span>
    );

    return {
      inputRef,
      render,
    };
  },
  methods: {
    focus() {
      (this.inputRef as HTMLInputElement)?.focus();
    },
    blur() {
      (this.inputRef as HTMLInputElement)?.blur();
    },
  },
  render() {
    return this.render();
  },
});
