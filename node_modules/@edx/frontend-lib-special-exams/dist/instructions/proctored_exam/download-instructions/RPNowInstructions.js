"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _ExamCode = _interopRequireDefault(require("./ExamCode"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RPNowInstructions = function RPNowInstructions(_ref) {
  var code = _ref.code;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step1.title",
        defaultMessage: "Step 1."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExamCode["default"], {
        code: code
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step1.body",
        defaultMessage: "Select the exam code, then copy it using Control + C (Windows) or Command + C (Mac)."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.title",
        defaultMessage: "Step 2."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body1",
        defaultMessage: "Start your system check now. A new window will open for this step and you will verify your identity."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body2",
        defaultMessage: "Make sure you:"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body3",
          defaultMessage: "Have a computer with a functioning webcam"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step2.body4",
          defaultMessage: "Have your valid photo ID (e.g. driver's license or passport) ready"
        })
      })]
    })]
  });
};
RPNowInstructions.propTypes = {
  code: _propTypes["default"].string.isRequired
};
var _default = RPNowInstructions;
exports["default"] = _default;
//# sourceMappingURL=RPNowInstructions.js.map