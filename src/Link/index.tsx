import React, { forwardRef, useContext, PropsWithChildren } from 'react';
// import IconLink from '../../icon/react-icon/IconLink';
// 处理css
import cs from '../_util/classNames';
import { ConfigContext } from '../ConfigProvider';
import type { LinkProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';

import './style';
const defaultProps: LinkProps = {
  hoverable: true,
};
function Link(baseProps: PropsWithChildren<LinkProps>, ref: any) {
  const { getPrefixCls, componentConfig, rtl } = useContext(ConfigContext);
  const props = useMergeProps<LinkProps>(baseProps, defaultProps, componentConfig?.Link!);
  const { className, style, children, icon, status, disabled, hoverable, ...rest } = props;

  const prefixCls = getPrefixCls!('link');

  const TagWrapper = 'href' in props ? 'a' : 'span';

  return (
    <TagWrapper
      className={cs(
        prefixCls,
        {
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-is-${status}`]: status,
          [`${prefixCls}-with-icon`]: icon,
          [`${prefixCls}-hoverless`]: !hoverable,
          [`${prefixCls}-rtl`]: rtl,
        },
        className,
      )}
      ref={ref}
      {...rest}
      style={style}
      tabIndex={disabled ? -1 : undefined} // 表示元素是可聚焦的，但是不能通过键盘导航来访问到该元素
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          e.stopPropagation();
        } else {
          props.onClick && props.onClick(e);
        }
      }}
    >
      {icon ? (
        // <span className={`${prefixCls}-icon`}>{icon === true ? <IconLink /> : icon}</span>
        <span className={`${prefixCls}-icon`}>{icon === true ? icon : icon}</span>
      ) : null}
      {children}
    </TagWrapper>
  );
}

const LinkRef = forwardRef(Link);
LinkRef.displayName = 'Link';

export default LinkRef;

export { LinkProps };
