"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _constants = require("../constants");
var _onboarding_exam = require("./onboarding_exam");
var _proctored_exam = require("./proctored_exam");
var _Footer = _interopRequireDefault(require("./proctored_exam/Footer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RejectedExamInstructions = function RejectedExamInstructions(_ref) {
  var examType = _ref.examType;
  var renderInstructions = function renderInstructions() {
    switch (examType) {
      case _constants.ExamType.PROCTORED:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_proctored_exam.RejectedProctoredExamInstructions, {});
      case _constants.ExamType.ONBOARDING:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_onboarding_exam.RejectedOnboardingExamInstructions, {});
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
      className: "border py-5 mb-4 bg-danger-100",
      children: renderInstructions()
    }), examType === _constants.ExamType.PROCTORED && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "footer-sequence",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "ml-3 mb-3 text-gray-500",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.RejectedProctoredExamInstructions.note",
          defaultMessage: "If you have concerns about your proctoring session results, contact your course team."
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
RejectedExamInstructions.propTypes = {
  examType: _propTypes["default"].string.isRequired
};
var _default = RejectedExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=RejectedInstructions.js.map