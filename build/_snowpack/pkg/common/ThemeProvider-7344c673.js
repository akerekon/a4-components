import { c as createCommonjsModule } from './_commonjsHelpers-8c19dec8.js';
import { r as react } from './index-04edb6a1.js';
import { j as jsxRuntime } from './jsx-runtime-c629b82b.js';

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var ThemeProvider_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.useIsRTL = useIsRTL;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var React = _interopRequireWildcard(react);



function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ThemeContext = /*#__PURE__*/React.createContext({
  prefixes: {}
});
const {
  Consumer,
  Provider
} = ThemeContext;
exports.ThemeConsumer = Consumer;

function ThemeProvider({
  prefixes = {},
  dir,
  children
}) {
  const contextValue = (0, React.useMemo)(() => ({
    prefixes: { ...prefixes
    },
    dir
  }), [prefixes, dir]);
  return /*#__PURE__*/(0, jsxRuntime.jsx)(Provider, {
    value: contextValue,
    children: children
  });
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = (0, React.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function useIsRTL() {
  const {
    dir
  } = (0, React.useContext)(ThemeContext);
  return dir === 'rtl';
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  const isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  const {
    prefix,
    forwardRefAs = isClassy ? 'ref' : 'innerRef'
  } = opts;
  const Wrapped = /*#__PURE__*/React.forwardRef(({ ...props
  }, ref) => {
    props[forwardRefAs] = ref;
    const bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/(0, jsxRuntime.jsx)(Component, { ...props,
      bsPrefix: bsPrefix
    });
  });
  Wrapped.displayName = `Bootstrap(${Component.displayName || Component.name})`;
  return Wrapped;
}

var _default = ThemeProvider;
exports.default = _default;
});

export { ThemeProvider_1 as T, interopRequireDefault as i };
