"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _context = _interopRequireDefault(require("../../context"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RejectedOnboardingExamInstructions = function RejectedOnboardingExamInstructions() {
  var state = (0, _react.useContext)(_context["default"]);
  var proctoringSettings = state.proctoringSettings,
    resetExam = state.resetExam;
  var _ref = proctoringSettings || {},
    integrationSpecificEmail = _ref.integration_specific_email;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "rejected-onboarding-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.RejectedOnboardingExamInstructions.title",
        defaultMessage: "Your onboarding session was reviewed, but did not pass all requirements"
      })
    }), integrationSpecificEmail && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      "data-testid": "integration-email-contact",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.RejectedOnboardingExamInstructions.text1",
        defaultMessage: "Please contact "
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.MailtoLink, {
        to: integrationSpecificEmail,
        children: integrationSpecificEmail
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.RejectedOnboardingExamInstructions.text2",
        defaultMessage: " if you have questions. You may retake this onboarding exam by clicking \"Retry my exam\"."
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      "data-testid": "reset-exam-button",
      variant: "primary",
      onClick: resetExam,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.RejectedOnboardingExamInstructions.resetExamButton",
        defaultMessage: "Retry my exam"
      })
    })]
  });
};
var _default = RejectedOnboardingExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=RejectedOnboardingExamInstructions.js.map