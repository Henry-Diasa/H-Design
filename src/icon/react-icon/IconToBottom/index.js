import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

import React, { useContext } from 'react';
import { IconContext } from '../context';

function IconToBottomComponent(iconProps, ref) {
  var _useContext = useContext(IconContext),
    _useContext$prefixCls = _useContext.prefixCls,
    prefixCls = _useContext$prefixCls === void 0 ? 'arco' : _useContext$prefixCls;

  var spin = iconProps.spin,
    className = iconProps.className;

  var props = _objectSpread(
    _objectSpread(
      {
        'aria-hidden': true,
        focusable: false,
        ref: ref,
      },
      iconProps,
    ),
    {},
    {
      className: ''
        .concat(className ? className + ' ' : '')
        .concat(prefixCls, '-icon ')
        .concat(prefixCls, '-icon-to-bottom'),
    },
  );

  if (spin) {
    props.className = ''.concat(props.className, ' ').concat(prefixCls, '-icon-loading');
  }

  delete props.spin;
  delete props.isIcon;
  return /*#__PURE__*/ React.createElement(
    'svg',
    _extends(
      {
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '4',
        viewBox: '0 0 48 48',
      },
      props,
    ),
    /*#__PURE__*/ React.createElement('path', {
      d: 'M5 41h38M24 28V5M24 34.04 17.547 27h12.907L24 34.04Zm-.736.803v.001Z',
    }),
    /*#__PURE__*/ React.createElement('path', {
      fill: 'currentColor',
      stroke: 'none',
      d: 'm24 34 6-7H18l6 7Z',
    }),
  );
}

var IconToBottom = /*#__PURE__*/ React.forwardRef(IconToBottomComponent);
IconToBottom.defaultProps = {
  isIcon: true,
};
IconToBottom.displayName = 'IconToBottom';
export default IconToBottom;
