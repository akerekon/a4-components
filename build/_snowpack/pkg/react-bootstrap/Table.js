import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault, T as ThemeProvider_1 } from '../common/ThemeProvider-7344c673.js';
import { c as classnames, j as jsxRuntime } from '../common/jsx-runtime-c629b82b.js';
import { r as react } from '../common/index-04edb6a1.js';

var Table_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = void 0;

var _classnames = interopRequireDefault(classnames);

var React = _interopRequireWildcard(react);





function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Table = /*#__PURE__*/React.forwardRef(({
  bsPrefix,
  className,
  striped,
  bordered,
  borderless,
  hover,
  size,
  variant,
  responsive,
  ...props
}, ref) => {
  const decoratedBsPrefix = (0, ThemeProvider_1.useBootstrapPrefix)(bsPrefix, 'table');
  const classes = (0, _classnames.default)(className, decoratedBsPrefix, variant && `${decoratedBsPrefix}-${variant}`, size && `${decoratedBsPrefix}-${size}`, striped && `${decoratedBsPrefix}-striped`, bordered && `${decoratedBsPrefix}-bordered`, borderless && `${decoratedBsPrefix}-borderless`, hover && `${decoratedBsPrefix}-hover`);
  const table = /*#__PURE__*/(0, jsxRuntime.jsx)("table", { ...props,
    className: classes,
    ref: ref
  });

  if (responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;

    if (typeof responsive === 'string') {
      responsiveClass = `${responsiveClass}-${responsive}`;
    }

    return /*#__PURE__*/(0, jsxRuntime.jsx)("div", {
      className: responsiveClass,
      children: table
    });
  }

  return table;
});
var _default = Table;
exports.default = _default;
module.exports = exports.default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Table_1);

export default __pika_web_default_export_for_treeshaking__;
