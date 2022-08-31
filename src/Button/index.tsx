import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
  RefObject,
} from 'react';
// icon还没实现 后续加上
// import IconLoading from '../../icon/react-icon/IconLoading';
import type { ButtonProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import cs from '../_util/classNames';
import { ConfigContext } from '../ConfigProvider';
import Group from './group';
import './style';
// 验证中文字符
const regexTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;

function processChildren(children?: ReactNode) {
  const childrenList: any = [];
  let isPrevChildPure = false;
  React.Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number';
    if (isCurrentChildPure && isPrevChildPure) {
      // 多个相连的放到一个位置上
      const lastIndex = childrenList.length - 1;
      const lastChild = childrenList[lastIndex];
      childrenList[lastIndex] = `${lastChild}${child}`;
    } else {
      childrenList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return React.Children.map(childrenList, (child) =>
    // 字符串用span包裹
    typeof child === 'string' ? <span>{child}</span> : child,
  );
}
const defaultProps: ButtonProps = {
  htmlType: 'button',
  type: 'default',
  shape: 'square',
};
function Button(baseProps: ButtonProps, ref: any) {
  const {
    getPrefixCls,
    size: ctxSize,
    autoInsertSpaceInButton,
    componentConfig,
    rtl,
  } = useContext(ConfigContext);
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, componentConfig?.Button!);
  const {
    style,
    className,
    children,
    htmlType,
    type,
    status,
    size,
    shape,
    href,
    anchorProps,
    disabled,
    loading,
    loadingFixedWidth,
    icon,
    iconOnly,
    onClick,
    long,
    ...rest
  } = props;
  // const iconNode = loading ? <IconLoading /> : icon;
  const iconNode = loading ? icon : icon;
  // 为了控制中文字符的时候 添加一个样式
  const [isTwoCNChar, setIsTwoCNChar] = useState(false);
  const innerButtonRef = useRef();
  const buttonRef = ref || innerButtonRef;

  useEffect(() => {
    if (autoInsertSpaceInButton && buttonRef && buttonRef.current) {
      const textContent = buttonRef.current.textContent!;
      if (regexTwoCNChar.test(textContent)) {
        if (!isTwoCNChar) {
          setIsTwoCNChar(true);
        }
      } else if (isTwoCNChar) {
        setIsTwoCNChar(false);
      }
    }
  }, [buttonRef.current, autoInsertSpaceInButton]);
  // arco-btn
  const prefixCls = getPrefixCls!('btn');
  const _type = type === 'default' ? 'secondary' : type;
  // 处理所有的样式列表
  const classNames = cs(
    prefixCls,
    `${prefixCls}-${_type}`,
    `${prefixCls}-size-${size || ctxSize}`,
    `${prefixCls}-shape-${shape}`,
    {
      [`${prefixCls}-long`]: long,
      [`${prefixCls}-status-${status}`]: status,
      [`${prefixCls}-loading-fixed-width`]: loadingFixedWidth,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-link`]: href,
      [`${prefixCls}-icon-only`]: iconOnly || (!children && children !== 0 && iconNode),
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-two-chinese-chars`]: isTwoCNChar,
      [`${prefixCls}-rtl`]: rtl,
    },
    className,
  );
  // 处理点击事件
  const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
    if (loading) {
      typeof event?.preventDefault === 'function' && event.preventDefault();
      return;
    }
    onClick && onClick(event);
  };
  const InnerContent = (
    <>
      {iconNode}
      {processChildren(children)}
    </>
  );
  if (href) {
    const _anchorProps = { ...anchorProps };
    if (disabled) {
      delete _anchorProps.href;
    } else {
      _anchorProps.href = href;
    }
    return (
      <a
        ref={buttonRef}
        {...rest}
        {..._anchorProps}
        style={style}
        className={classNames}
        onClick={handleClick}
      >
        {InnerContent}
      </a>
    );
  }
  return (
    <button
      ref={buttonRef}
      {...rest}
      style={style}
      className={classNames}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
    >
      {InnerContent}
    </button>
  );
}
const ForwardRefButton = forwardRef<RefObject<any>, ButtonProps>(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
  __H_BUTTON: boolean;
  Group: typeof Group;
};
ButtonComponent.__H_BUTTON = true;
ButtonComponent.Group = Group;
ButtonComponent.displayName = 'Button';

export { ButtonProps };
export default ButtonComponent;
