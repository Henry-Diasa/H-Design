import { ReactNode, CSSProperties, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import Omit from '../_util/omit';

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLElement>,
    'onChange' | 'prefix' | 'className' | 'size' | 'height' | 'maxLength'
  > {
  style?: CSSProperties;
  className?: string | string[];
  allowClear?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
  placeholder?: string;
  error?: boolean;
  onChange?: (value: string, e: Event) => void;
  onClear?: () => void;
  onPressEnter?: (e: KeyboardEvent) => void;
  addBefore?: ReactNode;
  addAfter?: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  value?: string;
  beforeStyle?: object;
  afterStyle?: object;
  size?: 'mini' | 'small' | 'default' | 'large';
  height?: number | string;
  maxLength?: number | { length: number; errorOnly?: boolean };
  showWordLimit?: boolean;
}

export interface TextAreaProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'onChange' | 'className' | 'maxLength'
  > {
  style?: CSSProperties;
  wrapperStyle?: CSSProperties;
  className?: string | string[];
  disabled?: boolean;
  defaultValue?: string;
  value?: string;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  error?: boolean;
  placeholder?: string;
  onChange?: (value: string, e: InputEvent) => void;
  onPressEnter?: (e: KeyboardEvent) => void;
  maxLength?: number | { length: number; errorOnly?: boolean };
  showWordLimit?: boolean;
  allowClear?: boolean;
  onClear?: () => void;
}

export interface InputGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  compact?: boolean;
}

export interface InputSearchProps extends InputProps {
  loading?: boolean;
  onSearch?: (value: string) => void;
  searchButton?: boolean | ReactNode;
}
export interface InputPasswordProps extends InputProps {
  visibilityToggle?: boolean;
  defaultVisibility?: boolean;
  visibility?: boolean;
  onVisibilityChange?: (visibility: boolean) => void;
}
export interface InputComponentProps extends InputProps {
  prefixCls?: string;
  hasParent?: boolean;
  // input 随输入文本的宽度变化
  autoFitWidth?: boolean | { delay: number | ((width: number, prevWidth: number) => number) };
}

export type RefInputType = {
  /** 使输入框失去焦点 */
  blur: () => void;
  /** 使输入框获取焦点 */
  focus: () => void;
  /** input dom元素 */
  dom: HTMLInputElement;
};
