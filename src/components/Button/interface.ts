import React, { CSSProperties, HTMLProps, ReactNode } from 'react';

export interface BaseButtonProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
  type?: 'default' | 'primary' | 'secondary' | 'dashed' | 'text' | 'outline';
  status?: 'warning' | 'danger' | 'success' | 'default';
  size?: 'mini' | 'small' | 'default' | 'large';
  shape?: 'circle' | 'round' | 'square';
  href?: string;
  target?: string;
  anchorProps?: HTMLProps<HTMLAnchorElement>;
  disabled?: boolean;
  loading?: boolean;
  loadingFixedWidth?: boolean;
  icon?: ReactNode;
  iconOnly?: boolean;
  long?: boolean;
  onClick?: (e: Event) => void;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  anchorProps?: HTMLProps<HTMLAnchorElement>;
} & BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type FinalButtonProps = {
  htmlType?: 'button' | 'submit' | 'reset';
} & BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick' | 'className'>;

export type ButtonProps = Partial<AnchorButtonProps & FinalButtonProps>;

export interface ButtonGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  children?: ReactNode;
}
