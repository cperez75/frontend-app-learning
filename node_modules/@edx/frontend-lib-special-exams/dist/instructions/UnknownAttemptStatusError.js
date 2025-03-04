"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var UnknownAttemptStatusError = function UnknownAttemptStatusError() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert, {
    variant: "danger",
    "data-testid": "unknown-status-error",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Heading, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.defaultError",
        defaultMessage: "A system error has occurred with your exam. Please reach out to support for assistance."
      })
    })
  });
};
var _default = UnknownAttemptStatusError;
exports["default"] = _default;
//# sourceMappingURL=UnknownAttemptStatusError.js.map