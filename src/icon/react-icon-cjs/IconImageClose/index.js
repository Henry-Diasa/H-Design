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

function IconImageCloseComponent(iconProps, ref) {
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
        .concat(prefixCls, '-icon-image-close'),
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
      d: 'M41 26V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h17',
    }),
    /*#__PURE__*/ _react['default'].createElement('path', {
      d: 'm24 33 9-8.5V27s-2 1-3.5 2.5C27.841 31.159 27 33 27 33h-3Zm0 0-3.5-4.5L17 33h7Z',
    }),
    /*#__PURE__*/ _react['default'].createElement('path', {
      fill: 'currentColor',
      stroke: 'none',
      d: 'M20.5 28.5 17 33h7l-3.5-4.5ZM33 24.5 24 33h3s.841-1.841 2.5-3.5C31 28 33 27 33 27v-2.5Z',
    }),
    /*#__PURE__*/ _react['default'].createElement('path', {
      fill: 'currentColor',
      fillRule: 'evenodd',
      stroke: 'none',
      d: 'M46 38a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-4.95-4.782 1.74 1.74-3.045 3.046 3.046 3.046-1.74 1.74-3.047-3.045-3.046 3.046-1.74-1.74 3.046-3.047-3.046-3.046 1.74-1.74 3.046 3.046 3.046-3.046Z',
      clipRule: 'evenodd',
    }),
    /*#__PURE__*/ _react['default'].createElement('path', {
      d: 'M17 15h-2v2h2v-2Z',
    }),
  );
}

var IconImageClose = /*#__PURE__*/ _react['default'].forwardRef(IconImageCloseComponent);

IconImageClose.defaultProps = {
  isIcon: true,
};
IconImageClose.displayName = 'IconImageClose';
var _default = IconImageClose;
exports['default'] = _default;
