# Tab 键进入表格焦点修复说明

## 问题描述

之前的实现中存在一个用户体验问题：当用户通过鼠标点击移动焦点到表格外部，然后再通过 Tab 键重新进入表格时，焦点会恢复到上次离开表格时的位置，而不是从表头开始。这违反了键盘导航的预期行为。

## 预期行为

当用户通过 Tab 键从表格外部进入表格时，焦点应该始终从表头开始：
1. 如果有表头复选框 → 焦点应该先到表头复选框
2. 如果没有表头复选框 → 焦点应该先到表头行

## 解决方案

### 1. 添加表格焦点状态跟踪

```typescript
const hasTableFocus = ref(false); // 跟踪表格是否拥有焦点
```

### 2. 重置表头焦点功能

```typescript
const resetToHeaderFocus = () => {
  const initialFocusType = hasHeaderCheckbox?.value 
    ? FOCUS_TYPES.HEADER_CHECKBOX 
    : FOCUS_TYPES.HEADER_ROW;
  updateFocusState(-1, initialFocusType);
};
```

### 3. 焦点事件监听

添加了 `focusin` 和 `focusout` 事件监听器：

- **`focusin`**: 检测焦点进入表格，如果之前表格没有焦点，重置到表头
- **`focusout`**: 检测焦点离开表格，更新表格焦点状态

### 4. 优化 tabIndex 计算

修改了各个计算属性，确保当表格失去焦点时，正确的元素可以接收来自外部的 Tab 焦点：

- **表头复选框**: 当表格没有焦点且有表头复选框时，tabIndex = 0
- **表头行**: 当表格没有焦点且没有表头复选框时，tabIndex = 0  
- **第一行**: 当表格没有焦点且没有表头元素时，tabIndex = 0

## 修复后的行为流程

1. **用户在表格内部操作** → `hasTableFocus = true`
2. **鼠标点击表格外部** → 触发 `focusout` → `hasTableFocus = false`
3. **Tab 键进入表格** → 触发 `focusin` → 检测到 `hasTableFocus = false` → 重置到表头 → 导航到正确位置

## 兼容性说明

- 保持了所有原有功能和 API
- 内部表格导航逻辑不受影响
- 只改善了从外部进入表格时的行为

## 测试场景

1. ✅ Tab 键从表格外部进入 → 始终从表头开始
2. ✅ 表格内部 Tab 导航 → 按原有逻辑工作
3. ✅ 鼠标点击表格内元素后 Tab → 从点击位置继续导航
4. ✅ 方向键导航 → 不受影响
5. ✅ 快捷键导航（Home/End） → 不受影响

这个修复确保了表格的键盘导航行为更符合用户预期和可访问性标准。
