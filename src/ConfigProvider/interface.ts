import { ReactNode } from 'react';
import { AvatarGroupProps, AvatarProps } from '../Avatar';
import { ButtonProps } from '../Button';
import { LinkProps } from '../Link';

export type ComponentConfig = {
  Button?: ButtonProps;
  Link?: LinkProps;
  Avatar?: AvatarProps;
  'Avatar.Group'?: AvatarGroupProps;
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
