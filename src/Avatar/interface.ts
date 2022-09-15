import { CSSProperties, ReactNode } from 'react';
import { TriggerProps } from '../Trigger';

export interface AvatarProps {
  style?: CSSProperties;
  className?: string | string[];
  shape?: 'circle' | 'square';
  size?: number;
  autoFixFontSize?: boolean;
  triggerIcon?: ReactNode;
  triggerIconStyle?: CSSProperties;
  triggerType?: 'mask' | 'button';
  onClick?: (e: EventTarget) => void;
}

export interface AvatarGroupProps {
  style?: CSSProperties;
  className?: string | string[];
  shape?: 'circle' | 'square';
  size?: number;
  autoFixFontSize?: boolean;
  zIndexAscend?: boolean;
  maxCount?: number;
  maxStyle?: CSSProperties;
  maxPopoverTriggerProps?: TriggerProps;
}
