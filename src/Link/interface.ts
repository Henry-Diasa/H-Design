import { ReactNode, CSSProperties, AnchorHTMLAttributes } from 'react';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  className?: string | string[];
  style?: CSSProperties;
  icon?: ReactNode | boolean;
  status?: 'error' | 'success' | 'warning';
  disabled?: boolean;
  hoverable?: boolean;
}
