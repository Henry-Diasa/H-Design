import React, { createContext } from 'react';
import Empty from '../Empty';
import { ConfigProviderProps } from './interface';
import defaultLocale from '../locale/default';
function renderEmpty(componentName?: string) {
  switch (componentName) {
    default:
      return <Empty />;
  }
}
const defaultProps: ConfigProviderProps = {
  locale: defaultLocale,
  prefixCls: 'H',
  getPopupContainer: () => document.body,
  size: 'default',
  renderEmpty,
  focusLock: {
    modal: { autoFocus: true },
    drawer: { autoFocus: true },
  },
};
export const ConfigContext = createContext<ConfigProviderProps>({
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 'H'}-${componentName}`,
  ...defaultProps,
});

export { ConfigProviderProps };
