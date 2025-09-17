import { InjectionKey } from 'vue';

export interface DropdownContext {
  popupMaxHeight: boolean | number;
  onOptionClick: (
    value: string | number | Record<string, unknown> | undefined,
    ev: Event
  ) => void;
  onClose?: () => void;
}

export const dropdownInjectionKey: InjectionKey<DropdownContext> =
  Symbol('ArcoDropdown');
