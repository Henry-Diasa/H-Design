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

function IconDiceComponent(iconProps, ref) {
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
        .concat(prefixCls, '-icon-dice'),
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
    /*#__PURE__*/ _react['default'].createElement('rect', {
      width: '34',
      height: '34',
      x: '6.998',
      y: '7',
      rx: '1.5',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '16',
      cy: '16',
      r: '2',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '24',
      cy: '24',
      r: '2',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '16',
      cy: '32',
      r: '2',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '32',
      cy: '16',
      r: '2',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '32',
      cy: '32',
      r: '2',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '16',
      cy: '16',
      r: '2',
      fill: 'currentColor',
      stroke: 'none',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '24',
      cy: '24',
      r: '2',
      fill: 'currentColor',
      stroke: 'none',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '16',
      cy: '32',
      r: '2',
      fill: 'currentColor',
      stroke: 'none',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '32',
      cy: '16',
      r: '2',
      fill: 'currentColor',
      stroke: 'none',
    }),
    /*#__PURE__*/ _react['default'].createElement('circle', {
      cx: '32',
      cy: '32',
      r: '2',
      fill: 'currentColor',
      stroke: 'none',
    }),
  );
}

var IconDice = /*#__PURE__*/ _react['default'].forwardRef(IconDiceComponent);

IconDice.defaultProps = {
  isIcon: true,
};
IconDice.displayName = 'IconDice';
var _default = IconDice;
exports['default'] = _default;
