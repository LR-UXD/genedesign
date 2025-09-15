import { computed, ComputedRef, Ref, ref } from 'vue';
import { CascaderOptionInfo } from '../interface';

export const useSelectedPath = (
  options: Ref<CascaderOptionInfo[]>,
  {
    optionMap,
    filteredLeafOptions,
    showSearchPanel,
    expandChild,
  }: {
    optionMap: Map<string, CascaderOptionInfo>;
    filteredLeafOptions: ComputedRef<CascaderOptionInfo[]>;
    showSearchPanel?: ComputedRef<boolean>;
    expandChild: Ref<boolean>;
  }
) => {
  // active node key
  const activeKey = ref<string>();
  const activeOption = computed(() => {
    if (activeKey.value) return optionMap.get(activeKey.value);
    return undefined;
  });

  // selected nodes key
  const selectedPath = ref<string[]>([]);

  const displayColumns = computed(() => {
    const columns: CascaderOptionInfo[][] = [options.value];
    for (const key of selectedPath.value) {
      const option = optionMap.get(key);
      if (option?.children) {
        columns.push(option.children);
      }
    }
    return columns;
  });

  const setSelectedPath = (key?: string) => {
    const option = getTargetOption(key);
    selectedPath.value = option?.path.map((item) => item.key) ?? [];
  };

  const setActiveKey = (key?: string) => {
    activeKey.value = key;
  };

  // 当前激活的列级别
  const currentLevel = computed(() => {
    if (!activeOption.value) return 0;
    return activeOption.value.level;
  });

  // 当前级别的选项
  const currentLevelOptions = computed(() => {
    const columns = displayColumns.value;
    const level = currentLevel.value;
    return columns[level] || [];
  });

  const enabledOptions = computed(() => {
    if (showSearchPanel?.value) {
      return filteredLeafOptions.value.filter((item) => !item.disabled);
    }
    return currentLevelOptions.value.filter((item) => !item.disabled);
  });

  const getTargetOption = (key?: string) => {
    let target = key ? optionMap.get(key) : undefined;
    if (expandChild.value) {
      while (target && target.children && target.children.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        target = target.children[0];
      }
    }
    return target;
  };

  const getNextActiveNode = (direction: 'next' | 'preview') => {
    const _length = enabledOptions.value?.length ?? 0;

    if (activeKey.value) {
      const enabledIndex =
        enabledOptions.value?.findIndex(
          (item) => item.key === activeKey.value
        ) ?? 0;
      if (direction === 'next') {
        return enabledOptions.value?.[(_length + enabledIndex + 1) % _length];
      }
      return enabledOptions.value?.[(_length + enabledIndex - 1) % _length];
    }

    return enabledOptions.value?.[0];
  };

  // 进入下一级的函数
  const enterNextLevel = () => {
    if (activeOption.value && activeOption.value.children && activeOption.value.children.length > 0) {
      setSelectedPath(activeOption.value.key);
      const firstChildOption = activeOption.value.children.find(child => !child.disabled);
      if (firstChildOption) {
        setActiveKey(firstChildOption.key);
        return true;
      }
    }
    return false;
  };

  // 返回上一级的函数
  const backToPreviousLevel = () => {
    if (activeOption.value && activeOption.value.parent) {
      const parentKey = activeOption.value.parent.parent?.key;
      setSelectedPath(parentKey);
      setActiveKey(activeOption.value.parent.key);
      return true;
    }

    if (selectedPath.value.length > 0) {
      const newPath = [...selectedPath.value];
      newPath.pop();
      selectedPath.value = newPath;
      const lastKey = newPath[newPath.length - 1];
      if (lastKey) {
        setActiveKey(lastKey);
      } else {
        const firstOption = options.value.find(option => !option.disabled);
        setActiveKey(firstOption?.key);
      }
      return true;
    }

    return false;
  };

  return {
    activeKey,
    activeOption,
    selectedPath,
    displayColumns,
    currentLevel,
    currentLevelOptions,
    setActiveKey,
    setSelectedPath,
    getNextActiveNode,
    enterNextLevel,
    backToPreviousLevel,
  };
};
