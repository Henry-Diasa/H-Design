'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

var _react = _interopRequireWildcard(require('react'));

var _context = require('../context');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

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
          (0, _defineProperty2['default'])(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function IconNotificationCloseComponent(iconProps, ref) {
  var _useContext = (0, _react.useContext)(_context.IconContext),
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
        .concat(prefixCls, '-icon-notification-close'),
    },
  );

  if (spin) {
    props.className = ''.concat(props.className, ' ').concat(prefixCls, '-icon-loading');
  }

  delete props.spin;
  delete props.isIcon;
  return /*#__PURE__*/ _react['default'].createElement(
    'svg',
    (0, _extends2['default'])(
      {
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '4',
        viewBox: '0 0 48 48',
      },
      props,
    ),
    /*#__PURE__*/ _react['default'].createElement('path', {
      d: 'M11 35V22c0-1.835.38-3.58 1.066-5.163M11 35H6m5 0h15.5M24 9c7.18 0 13 5.82 13 13v7.5M24 9V4m0 5a12.94 12.94 0 0 0-6.5 1.74M17 42h14M6 4l36 40',
    }),
  );
}

var IconNotificationClose = /*#__PURE__*/ _react['default'].forwardRef(
  IconNotificationCloseComponent,
);

IconNotificationClose.defaultProps = {
  isIcon: true,
};
IconNotificationClose.displayName = 'IconNotificationClose';
var _default = IconNotificationClose;
exports['default'] = _default;
