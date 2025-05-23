import { InjectionKey, Slots } from 'vue';
import { GeneLang } from '../locale/interface';
import { Size } from '../_utils/constant';

export interface ConfigProvider {
  slots: Slots;
  prefixCls?: string;
  locale?: GeneLang;
  size?: Size;
  updateAtScroll?: boolean;
  scrollToClose?: boolean;
  exchangeTime?: boolean;
  rtl?: boolean;
}

export const configProviderInjectionKey: InjectionKey<ConfigProvider> =
  Symbol('ArcoConfigProvider');
