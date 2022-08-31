import { ReactNode } from 'react';
import { ButtonProps } from '../Button';

export type ComponentConfig = {
  Button?: ButtonProps;
};
export interface Locale {
  locale: string;
}
export interface PaginationProps {}
export type ThemeConfig = Record<string, any>;
export interface ConfigProviderProps {
  autoInsertSpaceInButton?: boolean;
  componentConfig?: ComponentConfig;
  locale?: Locale;
  theme?: ThemeConfig;
  size?: 'mini' | 'small' | 'default' | 'large';
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
  getPopupContainer?: (node: HTMLElement) => Element;
  loadingElement?: ReactNode;
  tablePagination?: PaginationProps;
  renderEmpty?: (componentName?: string) => ReactNode;
  focusLock?: {
    modal?: boolean | { autoFocus?: boolean };
    drawer?: boolean | { autoFocus?: boolean };
  };
  rtl?: boolean; // direction: rtl
  zIndex?: number;
  children?: ReactNode;
}
