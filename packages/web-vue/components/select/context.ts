import type { InjectionKey } from 'vue';
import type { FilterOption, SelectOptionInfo } from './interface';

export type ActiveType = 'hover' | 'keyboard' | 'focus' | undefined;

export interface SelectContext {
  multiple?: boolean;
  valueKey?: string;
  inputValue?: string;
  filterOption?: FilterOption;
  component?: string;
  valueKeys: string[];
  activeKey: string | undefined;
  activeType: ActiveType;
  isKeyboardNavigation?: boolean;
  onSelect: (key: string, ev: Event) => void;
  setActiveKey: (key?: string, type?: ActiveType) => void;
  getNextSlotOptionIndex: () => number;
  addSlotOptionInfo: (id: number, optionInfo: SelectOptionInfo) => void;
  removeSlotOptionInfo: (id: number) => void;
}

export const selectInjectionKey: InjectionKey<SelectContext> =
  Symbol('ArcoSelectContext');

