import React, { forwardRef, useContext, useRef } from 'react';
// icon还没实现 后续加上
// import IconLoading from '../../icon/react-icon/IconLoading';
import { ButtonProps } from './interface';
import useMergeProps from '../_util/hooks/useMergeProps';
import { ConfigContext } from '../ConfigProvider';
import Group from './group';

const defaultProps: ButtonProps = {
  htmlType: 'button',
  type: 'default',
  shape: 'square',
};
const InnerContent = (
  <>
    {/* {iconNode}
    {processChildren(children)} */}
    按钮
  </>
);
function Button(baseProps: ButtonProps, ref: any) {
  const {
    getPrefixCls,
    size: ctxSize,
    autoInsertSpaceInButton,
    componentConfig,
    rtl,
  } = useContext(ConfigContext);
  const props = useMergeProps<ButtonProps>(baseProps, defaultProps, componentConfig?.Button);
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
  const innerButtonRef = useRef();
  const buttonRef = ref || innerButtonRef;
  return (
    <button ref={buttonRef} {...rest}>
      {InnerContent}
    </button>
  );
}
const ForwardRefButton = forwardRef<unknown, ButtonProps>(Button);

const ButtonComponent = ForwardRefButton as typeof ForwardRefButton & {
  __H_BUTTON: boolean;
  Group: typeof Group;
};
ButtonComponent.__H_BUTTON = true;
ButtonComponent.Group = Group;
ButtonComponent.displayName = 'Button';

export default ButtonComponent;
export { ButtonProps };
