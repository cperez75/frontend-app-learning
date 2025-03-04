"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var SubmittedProctoredExamInstructions = function SubmittedProctoredExamInstructions() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "proctored-exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmittedProctoredExamInstructions.title",
        defaultMessage: "You have submitted this proctored exam for review"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.SubmittedProctoredExamInstructions.list1",
          defaultMessage: "Your recorded data should now be uploaded for review."
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "exam.SubmittedProctoredExamInstructions.list2",
              defaultMessage: 'If the proctoring software window is still open, close it now and ' + 'confirm that you want to quit the application.'
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.SubmittedProctoredExamInstructions.list3",
          defaultMessage: 'Proctoring results are usually available within 5 business days ' + 'after you submit your exam.'
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "mb-0",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmittedProctoredExamInstructions.text",
        defaultMessage: 'If you have questions about the status of your proctored exam results, ' + 'contact platform Support.'
      })
    })]
  });
};
var _default = SubmittedProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=SubmittedProctoredExamInstructions.js.map