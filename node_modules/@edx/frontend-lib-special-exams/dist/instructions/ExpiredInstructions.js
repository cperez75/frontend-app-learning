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
var ExpiredExamInstructions = function ExpiredExamInstructions() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
    className: "border py-5 mb-4 bg-warning-100",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "expired-exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ExpiredExamInstructions.title",
        defaultMessage: "The due date for this exam has passed"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ExpiredExamInstructions.body",
        defaultMessage: "Because the due date has passed, you are no longer able to take this exam."
      })
    })]
  });
};
var _default = ExpiredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=ExpiredInstructions.js.map