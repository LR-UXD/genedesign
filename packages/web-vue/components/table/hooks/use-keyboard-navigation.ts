import {
  computed,
  ref,
  Ref,
  onMounted,
  onUnmounted,
  nextTick,
  watchEffect,
} from 'vue';
import { TableDataWithRaw } from '../interface';

const FOCUSABLE_SELECTOR =
  'button, [href], input:not(.arco-checkbox-target):not(.arco-radio-target), select, textarea, [tabindex]:not([tabindex="-1"])';

const elementCache = new Map<HTMLElement, Element[]>();

const filterVisibleElements = (elements: NodeListOf<Element>): Element[] => {
  return Array.from(elements).filter((element) => {
    const el = element as HTMLElement;
    if (el.tagName === 'INPUT' && el.closest('.arco-select')) {
      return false;
    }

    return (
      el.offsetParent !== null &&
      getComputedStyle(el).visibility !== 'hidden' &&
      getComputedStyle(el).display !== 'none'
    );
  });
};

const getVisibleFocusableElements = (
  rowElement: Element | null | undefined
): Element[] => {
  if (!rowElement) return [];

  const htmlElement = rowElement as HTMLElement;
  if (elementCache.has(htmlElement)) {
    return elementCache.get(htmlElement) || [];
  }

  const elements = rowElement.querySelectorAll(FOCUSABLE_SELECTOR);
  const filteredElements = filterVisibleElements(elements);

  elementCache.set(htmlElement, filteredElements);

  setTimeout(() => elementCache.delete(htmlElement), 5000);

  return filteredElements;
};

interface KeyboardNavigationOptions {
  flattenData: Ref<TableDataWithRaw[]>;
  tableRef: Ref<HTMLElement | undefined>;
  enableKeyboardNavigation?: boolean;
  dataColumns?: Ref<any[]>;
  hasRowSelection?: Ref<boolean>;
  hasHeaderCheckbox?: Ref<boolean>;
}

export function useKeyboardNavigation({
  flattenData,
  tableRef,
  enableKeyboardNavigation = true,
  dataColumns,
  hasRowSelection,
  hasHeaderCheckbox,
}: KeyboardNavigationOptions) {
  const FOCUS_TYPES = {
    HEADER_CHECKBOX: 'header-checkbox',
    HEADER_ROW: 'header-row',
    CHECKBOX: 'checkbox',
    ROW: 'row',
    CELL: 'cell',
  } as const;

  type FocusType = (typeof FOCUS_TYPES)[keyof typeof FOCUS_TYPES];

  const currentRowIndex = ref(-1);
  const currentFocusType = ref<FocusType>(FOCUS_TYPES.ROW);
  const isInHeader = ref(false);
  const hasTableFocus = ref(false); // 跟踪表格是否拥有焦点

  const updateFocusState = (rowIndex: number, focusType: FocusType) => {
    currentRowIndex.value = rowIndex;
    currentFocusType.value = focusType;
    isInHeader.value =
      focusType === FOCUS_TYPES.HEADER_CHECKBOX ||
      focusType === FOCUS_TYPES.HEADER_ROW;
    hasTableFocus.value = true; // 表格获得焦点
  };

  const resetToHeaderFocus = () => {
    const initialFocusType = hasHeaderCheckbox?.value
      ? FOCUS_TYPES.HEADER_CHECKBOX
      : FOCUS_TYPES.HEADER_ROW;
    updateFocusState(-1, initialFocusType);
  };

  const canNavigateToFocusType = (
    rowIndex: number,
    focusType: FocusType
  ): boolean => {
    if (
      focusType === FOCUS_TYPES.HEADER_CHECKBOX &&
      !hasHeaderCheckbox?.value
    ) {
      return false;
    }

    if (focusType === FOCUS_TYPES.CHECKBOX && !hasRowSelection?.value) {
      return false;
    }

    if (rowIndex >= 0 && rowIndex >= flattenData.value.length) {
      return false;
    }

    return true;
  };

  const getRowFocusableElements = (rowIndex: number): Element[] => {
    if (rowIndex < 0) return [];

    const rowElement = tableRef.value?.querySelector(
      `[data-row-index="${rowIndex}"]`
    );
    return getVisibleFocusableElements(rowElement);
  };

  const generateRowDescription = (
    rowData: TableDataWithRaw,
    rowIndex: number
  ): string => {
    if (!rowData?.raw || !dataColumns?.value) {
      return `第 ${rowIndex + 1} 行`;
    }

    const cellContents: string[] = [];
    const maxFields = 3; // 限制描述字段数量，避免过长的描述

    for (let i = 0; i < Math.min(dataColumns.value.length, maxFields); i++) {
      const column = dataColumns.value[i];
      if (column.dataIndex) {
        const value = getValueByPath(rowData.raw, column.dataIndex);
        if (value !== null && value !== undefined && value !== '') {
          const title = column.title || column.dataIndex;
          cellContents.push(`${title}: ${String(value)}`);
        }
      }
    }

    const description =
      cellContents.length > 0 ? cellContents.join(', ') : '空行';

    return `第 ${rowIndex + 1} 行, ${description}`;
  };

  const getValueByPath = (obj: any, path: string): any => {
    if (!path || !obj) return obj;
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
      result = result?.[key];
    }
    return result;
  };

  const navigateToRow = (
    index: number,
    focusType: FocusType = FOCUS_TYPES.ROW,
    focusLast = false
  ): boolean => {
    if (!enableKeyboardNavigation) {
      return false;
    }

    if (!canNavigateToFocusType(index, focusType)) {
      return false;
    }

    if (
      focusType === FOCUS_TYPES.HEADER_CHECKBOX ||
      focusType === FOCUS_TYPES.HEADER_ROW
    ) {
      updateFocusState(-1, focusType);

      if (!tableRef.value) return false;

      let targetElement: HTMLElement | null = null;

      if (focusType === FOCUS_TYPES.HEADER_CHECKBOX) {
        targetElement = tableRef.value.querySelector(
          'thead .arco-checkbox input, thead .arco-radio input'
        ) as HTMLElement;
      } else {
        const headerRow = tableRef.value.querySelector(
          'thead tr'
        ) as HTMLElement;
        if (headerRow) {
          headerRow.setAttribute('tabindex', '0');
          targetElement = headerRow;
        }
      }

      if (targetElement) {
        targetElement.focus();
        return true;
      }
      return false;
    }

    const maxIndex = flattenData.value.length - 1;
    if (index < 0 || index > maxIndex) {
      return false;
    }

    updateFocusState(index, focusType);

    if (!tableRef.value) return false;

    let targetElement: HTMLElement | null = null;

    if (focusType === FOCUS_TYPES.CHECKBOX) {
      targetElement = tableRef.value.querySelector(
        `[data-row-index="${index}"] .arco-checkbox input, [data-row-index="${index}"] .arco-radio input`
      ) as HTMLElement;
    }

    if (!targetElement) {
      const rowElement = tableRef.value.querySelector(
        `[data-row-index="${index}"]`
      ) as HTMLElement;

      if (!rowElement) return false;

      const focusableElements = getRowFocusableElements(index);

      if (focusType === FOCUS_TYPES.CELL && focusableElements.length > 0) {
        const elementIndex = focusLast ? focusableElements.length - 1 : 0;
        targetElement = focusableElements[elementIndex] as HTMLElement;
      } else {
        targetElement = rowElement;
        updateFocusState(index, FOCUS_TYPES.ROW);
      }
    }

    if (targetElement) {
      targetElement.focus();
      if (currentFocusType.value === FOCUS_TYPES.ROW) {
        const rowData = flattenData.value[index];
        const description = generateRowDescription(rowData, index);
        targetElement.setAttribute('aria-label', description);
      }
    }

    return true;
  };

  const handleCellTabNavigation = (isShiftTab: boolean): boolean => {
    const rowElement = tableRef.value?.querySelector(
      `[data-row-index="${currentRowIndex.value}"]`
    );
    const focusableElements = getVisibleFocusableElements(rowElement);

    if (!focusableElements || focusableElements.length <= 1) {
      return false;
    }

    const currentElement = document.activeElement as HTMLElement;
    const currentIndex = focusableElements.findIndex(
      (el) => el === currentElement
    );

    if (currentIndex === -1) return false;

    if (isShiftTab && currentIndex > 0) {
      (focusableElements[currentIndex - 1] as HTMLElement).focus();
      return true;
    }
    if (!isShiftTab && currentIndex < focusableElements.length - 1) {
      (focusableElements[currentIndex + 1] as HTMLElement).focus();
      return true;
    }

    return false;
  };

  const getNextTabTarget = (
    isShiftTab: boolean
  ): { type: FocusType; index: number; focusLast?: boolean } | null => {
    if (isInHeader.value) {
      if (isShiftTab) {
        if (
          currentFocusType.value === FOCUS_TYPES.HEADER_ROW &&
          hasHeaderCheckbox?.value
        ) {
          return { type: FOCUS_TYPES.HEADER_CHECKBOX, index: -1 };
        }
        return null; // 离开表格
      }
      if (currentFocusType.value === FOCUS_TYPES.HEADER_CHECKBOX) {
        return { type: FOCUS_TYPES.HEADER_ROW, index: -1 };
      }
      if (currentFocusType.value === FOCUS_TYPES.HEADER_ROW) {
        const firstRowElement = tableRef.value?.querySelector(
          '[data-row-index="0"]'
        );
        const firstRowFocusableElements =
          getVisibleFocusableElements(firstRowElement);

        if (firstRowFocusableElements.length > 0) {
          return { type: FOCUS_TYPES.CELL, index: 0 };
        }
        if (hasRowSelection?.value) {
          return { type: FOCUS_TYPES.CHECKBOX, index: 0 };
        }
        return { type: FOCUS_TYPES.ROW, index: 0 };
      }
    }
    if (isShiftTab) {
      if (currentFocusType.value === FOCUS_TYPES.CHECKBOX) {
        if (currentRowIndex.value > 0) {
          return { type: FOCUS_TYPES.ROW, index: currentRowIndex.value - 1 };
        }
        return { type: FOCUS_TYPES.HEADER_ROW, index: -1 };
      }
      if (currentFocusType.value === FOCUS_TYPES.CELL) {
        if (hasRowSelection?.value) {
          return { type: FOCUS_TYPES.CHECKBOX, index: currentRowIndex.value };
        }
        if (currentRowIndex.value > 0) {
          return { type: FOCUS_TYPES.ROW, index: currentRowIndex.value - 1 };
        }
        return { type: FOCUS_TYPES.HEADER_ROW, index: -1 };
      }
      if (currentFocusType.value === FOCUS_TYPES.ROW) {
        const currentRowElement = tableRef.value?.querySelector(
          `[data-row-index="${currentRowIndex.value}"]`
        );
        const currentRowFocusableElements =
          getVisibleFocusableElements(currentRowElement);

        if (currentRowFocusableElements.length > 0) {
          return {
            type: FOCUS_TYPES.CELL,
            index: currentRowIndex.value,
            focusLast: true,
          };
        }
        if (hasRowSelection?.value) {
          return { type: FOCUS_TYPES.CHECKBOX, index: currentRowIndex.value };
        }
        if (currentRowIndex.value > 0) {
          return { type: FOCUS_TYPES.ROW, index: currentRowIndex.value - 1 };
        }
        return { type: FOCUS_TYPES.HEADER_ROW, index: -1 };
      }
    } else {
      if (currentFocusType.value === FOCUS_TYPES.CHECKBOX) {
        const currentRowElement = tableRef.value?.querySelector(
          `[data-row-index="${currentRowIndex.value}"]`
        );
        const currentRowFocusableElements =
          getVisibleFocusableElements(currentRowElement);

        if (currentRowFocusableElements.length > 0) {
          return { type: FOCUS_TYPES.CELL, index: currentRowIndex.value };
        }
        return { type: FOCUS_TYPES.ROW, index: currentRowIndex.value };
      }
      if (currentFocusType.value === FOCUS_TYPES.CELL) {
        return { type: FOCUS_TYPES.ROW, index: currentRowIndex.value };
      }
      if (currentFocusType.value === FOCUS_TYPES.ROW) {
        if (currentRowIndex.value < flattenData.value.length - 1) {
          const nextRowIndex = currentRowIndex.value + 1;
          const nextRowElement = tableRef.value?.querySelector(
            `[data-row-index="${nextRowIndex}"]`
          );
          const nextRowFocusableElements =
            getVisibleFocusableElements(nextRowElement);
          if (nextRowFocusableElements.length > 0) {
            return { type: FOCUS_TYPES.CELL, index: nextRowIndex };
          }
          if (hasRowSelection?.value) {
            return { type: FOCUS_TYPES.CHECKBOX, index: nextRowIndex };
          }
          return { type: FOCUS_TYPES.ROW, index: nextRowIndex };
        }
        return null; // 离开表格
      }
    }

    return null;
  };

  let keydownTimer: ReturnType<typeof setTimeout> | null = null;

  const getRowIndexFromElement = (element: HTMLElement): number | null => {
    const row = element.closest('[data-row-index]') as HTMLElement;
    if (row) {
      const index = row.getAttribute('data-row-index');
      return index !== null ? parseInt(index, 10) : null;
    }
    return null;
  };

  const handleFocusIn = (event: FocusEvent) => {
    if (!enableKeyboardNavigation) return;

    const target = event.target as HTMLElement;
    if (!tableRef.value?.contains(target)) return;

    if (!hasTableFocus.value) {
      const rowIndex = getRowIndexFromElement(target);

      if (rowIndex !== null && rowIndex === flattenData.value.length - 1) {
        const lastRowElement = tableRef.value?.querySelector(
          `[data-row-index="${rowIndex}"]`
        );
        const focusableElements = getVisibleFocusableElements(lastRowElement);

        if (focusableElements.length > 0) {
          const lastFocusableElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;
          updateFocusState(rowIndex, FOCUS_TYPES.CELL);
          lastFocusableElement.focus();
          return;
        }
        updateFocusState(rowIndex, FOCUS_TYPES.ROW);
        return;
      }

      resetToHeaderFocus();
      const targetType = hasHeaderCheckbox?.value
        ? FOCUS_TYPES.HEADER_CHECKBOX
        : FOCUS_TYPES.HEADER_ROW;
      navigateToRow(-1, targetType);
    }
  };

  const handleFocusOut = (event: FocusEvent) => {
    if (!enableKeyboardNavigation) return;

    const target = event.relatedTarget as HTMLElement | null;
    if (!target || !tableRef.value?.contains(target)) {
      hasTableFocus.value = false;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) {
      return;
    }

    if (keydownTimer) {
      clearTimeout(keydownTimer);
    }

    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)
    ) {
      keydownTimer = setTimeout(() => {
        processKeyDown(event);
      }, 10);
    } else {
      processKeyDown(event);
    }
  };

  const hasOpenDropdownOrPopup = (): boolean => {
    const activeElement = document.activeElement as HTMLElement;

    const popupSelectors = [
      '.arco-select-popup',
      '.arco-select-dropdown',
      '.arco-select-popup-inner',
      '.arco-select-option',
      '.arco-picker-panel-container',
      '.arco-picker-panel',
      '.arco-dropdown',
      '.arco-cascader-panel',
      '.arco-popover',
      '.arco-trigger-popup',
      '.arco-select-option-list',
    ];

    for (const selector of popupSelectors) {
      if (activeElement?.closest(selector)) {
        return true;
      }
    }

    const visiblePopupSelectors = [
      '.arco-select-popup',
      '.arco-select-dropdown',
      '.arco-picker-panel-container',
      '.arco-dropdown',
      '.arco-cascader-panel',
      '.arco-popover',
      '.arco-trigger-popup',
    ];

    for (const selector of visiblePopupSelectors) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        const htmlElement = element as HTMLElement;
        const rect = htmlElement.getBoundingClientRect();
        const style = getComputedStyle(htmlElement);

        const isVisible =
          style.display !== 'none' &&
          style.visibility !== 'hidden' &&
          style.opacity !== '0' &&
          rect.width > 0 &&
          rect.height > 0;

        if (isVisible) {
          return true;
        }
      }
    }

    const expandedElements = document.querySelectorAll(
      '[aria-expanded="true"]'
    );
    for (const element of expandedElements) {
      const htmlElement = element as HTMLElement;
      if (
        htmlElement.classList.contains('arco-select') ||
        htmlElement.classList.contains('arco-select-view') ||
        htmlElement.closest('.arco-select')
      ) {
        return true;
      }
    }

    return false;
  };

  const processKeyDown = (event: KeyboardEvent) => {
    if (!enableKeyboardNavigation || flattenData.value.length === 0) return;

    const target = event.target as HTMLElement;
    if (!tableRef.value?.contains(target)) {
      return;
    }

    if (hasOpenDropdownOrPopup()) {
      return;
    }

    switch (event.key) {
      case 'Tab': {
        const isShiftTab = event.shiftKey;

        const shouldHandleTabNavigation = (() => {
          const isTableRow = target.tagName === 'TR';

          if (isTableRow) {
            return true;
          }

          if (currentFocusType.value === FOCUS_TYPES.CELL) {
            const isInCell = target.closest('[data-row-index]');
            const isFocusableElement =
              target.matches('input, select, button, textarea, [tabindex]') ||
              target.closest('.arco-select, .arco-input');
            return isInCell && isFocusableElement;
          }

          if (currentFocusType.value === FOCUS_TYPES.ROW) {
            return isTableRow;
          }

          return true;
        })();

        if (!shouldHandleTabNavigation) {
          return;
        }

        if (
          currentFocusType.value === FOCUS_TYPES.CELL &&
          handleCellTabNavigation(isShiftTab)
        ) {
          event.preventDefault();
          return;
        }

        const nextTarget = getNextTabTarget(isShiftTab);

        if (nextTarget) {
          const success = navigateToRow(
            nextTarget.index,
            nextTarget.type,
            nextTarget.focusLast || false
          );
          if (success) {
            event.preventDefault();
          }
        } else if (
          currentRowIndex.value === flattenData.value.length - 1 &&
          currentFocusType.value === FOCUS_TYPES.ROW
        ) {
          const allFocusableElements = document.querySelectorAll(
            'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
          );

          const tableElement = tableRef.value;
          if (tableElement && allFocusableElements.length > 0) {
            const focusableArray = Array.from(allFocusableElements);
            const currentRowElement = tableElement.querySelector(
              `[data-row-index="${currentRowIndex.value}"]`
            ) as HTMLElement;

            let tableIndex = -1;
            for (let i = 0; i < focusableArray.length; i++) {
              if (
                tableElement.contains(focusableArray[i]) ||
                focusableArray[i] === currentRowElement
              ) {
                tableIndex = i;
              }
            }
            const nextFocusableIndex = tableIndex + 1;
            if (nextFocusableIndex < focusableArray.length) {
              const nextElement = focusableArray[
                nextFocusableIndex
              ] as HTMLElement;
              if (!tableElement.contains(nextElement)) {
                hasTableFocus.value = false;
                currentRowIndex.value = -1;
                currentFocusType.value = FOCUS_TYPES.NONE;

                nextElement.focus();
                event.preventDefault();
              }
            }
          }
        }

        break;
      }
      case 'ArrowDown': {
        event.preventDefault();

        if (isInHeader.value) {
          const targetFocusType =
            hasRowSelection?.value &&
              currentFocusType.value === FOCUS_TYPES.HEADER_CHECKBOX
              ? FOCUS_TYPES.CHECKBOX
              : FOCUS_TYPES.ROW;

          navigateToRow(0, targetFocusType);
        } else {
          const nextIndex = Math.min(
            currentRowIndex.value + 1,
            flattenData.value.length - 1
          );
          if (nextIndex !== currentRowIndex.value) {
            navigateToRow(nextIndex, currentFocusType.value);
          }
        }
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();

        if (isInHeader.value) {
          return; // 在表头不能向上
        }

        if (currentRowIndex.value === 0) {
          const targetFocusType =
            hasRowSelection?.value &&
              currentFocusType.value === FOCUS_TYPES.CHECKBOX
              ? FOCUS_TYPES.HEADER_CHECKBOX
              : FOCUS_TYPES.HEADER_ROW;

          navigateToRow(-1, targetFocusType);
        } else {
          const prevIndex = Math.max(currentRowIndex.value - 1, 0);
          navigateToRow(prevIndex, currentFocusType.value);
        }
        break;
      }
      case 'Home': {
        event.preventDefault();
        const targetType = hasHeaderCheckbox?.value
          ? FOCUS_TYPES.HEADER_CHECKBOX
          : FOCUS_TYPES.HEADER_ROW;
        navigateToRow(-1, targetType);
        break;
      }
      case 'End': {
        event.preventDefault();
        navigateToRow(flattenData.value.length - 1, FOCUS_TYPES.ROW);
        break;
      }
      case 'Enter':
      case ' ': {
        const activeElement = document.activeElement as HTMLElement;
        if (
          activeElement &&
          (activeElement.tagName === 'INPUT' ||
            activeElement.tagName === 'BUTTON' ||
            activeElement.role === 'button')
        ) {
          return;
        }

        if (currentFocusType.value === FOCUS_TYPES.ROW) {
          const rowElement = tableRef.value?.querySelector(
            `[data-row-index="${currentRowIndex.value}"]`
          ) as HTMLElement;

          if (rowElement) {
            const event = new CustomEvent('rowActivate', {
              detail: {
                rowIndex: currentRowIndex.value,
                rowData: flattenData.value[currentRowIndex.value]?.raw,
              },
            });
            rowElement.dispatchEvent(event);
          }
        }
        break;
      }
      default:
        break;
    }
  };

  const rowTabIndex = computed(() => (index: number) => {
    if (!enableKeyboardNavigation) return undefined;

    if (!hasTableFocus.value) {
      if (index === 0 || index === flattenData.value.length - 1) {
        return 0;
      }
      return -1;
    }

    if (isInHeader.value) return -1;
    return index === currentRowIndex.value &&
      currentFocusType.value === FOCUS_TYPES.ROW
      ? 0
      : -1;
  });

  const checkboxTabIndex = computed(() => (index: number) => {
    if (!enableKeyboardNavigation || !hasRowSelection?.value) return undefined;

    if (!hasTableFocus.value && !hasHeaderCheckbox?.value && index === 0) {
      return 0;
    }

    if (isInHeader.value) return -1;

    if (currentRowIndex.value === -1 && index === 0 && hasTableFocus.value) {
      return 0;
    }

    return index === currentRowIndex.value &&
      (currentFocusType.value === FOCUS_TYPES.CHECKBOX ||
        currentFocusType.value === FOCUS_TYPES.CELL)
      ? 0
      : -1;
  });

  const headerCheckboxTabIndex = computed(() => {
    if (!enableKeyboardNavigation || !hasHeaderCheckbox?.value)
      return undefined;

    if (!hasTableFocus.value) {
      return 0;
    }

    if (
      (isInHeader.value &&
        currentFocusType.value === FOCUS_TYPES.HEADER_CHECKBOX) ||
      (currentRowIndex.value === -1 && !isInHeader.value && hasTableFocus.value)
    ) {
      return 0;
    }

    return -1;
  });

  const headerRowTabIndex = computed(() => {
    if (!enableKeyboardNavigation) return undefined;

    if (!hasTableFocus.value && !hasHeaderCheckbox?.value) {
      return 0;
    }

    if (
      (isInHeader.value && currentFocusType.value === FOCUS_TYPES.HEADER_ROW) ||
      (currentRowIndex.value === -1 &&
        !isInHeader.value &&
        !hasHeaderCheckbox?.value &&
        hasTableFocus.value)
    ) {
      return 0;
    }

    return -1;
  });
  const cleanup = () => {
    if (keydownTimer) {
      clearTimeout(keydownTimer);
    }
    elementCache.clear(); // 清理缓存
  };

  onMounted(() => {
    if (enableKeyboardNavigation && tableRef.value) {
      tableRef.value.addEventListener('keydown', handleKeyDown, {
        capture: true,
      });
      tableRef.value.addEventListener('focusin', handleFocusIn);
      tableRef.value.addEventListener('focusout', handleFocusOut);
    }
  });

  onUnmounted(() => {
    cleanup();
    if (tableRef.value) {
      tableRef.value.removeEventListener('keydown', handleKeyDown, {
        capture: true,
      });
      tableRef.value.removeEventListener('focusin', handleFocusIn);
      tableRef.value.removeEventListener('focusout', handleFocusOut);
    }
  });

  watchEffect(() => {
    if (flattenData.value) {
      elementCache.clear();
    }
  });

  return {
    currentRowIndex,
    currentFocusType,
    isInHeader,
    rowTabIndex,
    checkboxTabIndex,
    headerCheckboxTabIndex,
    headerRowTabIndex,
    navigateToRow,
    handleKeyDown,
  };
}
