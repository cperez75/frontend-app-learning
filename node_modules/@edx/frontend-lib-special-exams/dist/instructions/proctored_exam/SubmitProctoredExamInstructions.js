"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _frontendPlatform = require("@edx/frontend-platform");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _context = _interopRequireDefault(require("../../context"));
var _constants = require("../../constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SubmitProctoredExamInstructions = function SubmitProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context["default"]);
  var submitExam = state.submitExam,
    exam = state.exam,
    activeAttempt = state.activeAttempt;
  var _ref = exam || {},
    examType = _ref.type,
    attempt = _ref.attempt;
  var examName = activeAttempt.exam_display_name;
  var examHasLtiProvider = !attempt.use_legacy_attempt_api;
  var submitLtiAttemptUrl = "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/lti/end_assessment/").concat(attempt.attempt_id);
  var handleSubmitClick = function handleSubmitClick() {
    if (examHasLtiProvider) {
      window.location.assign(submitLtiAttemptUrl);
    }
    submitExam();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
      className: "h3",
      "data-testid": "proctored-exam-instructions-title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmitProctoredExamInstructions.title",
        defaultMessage: "Are you sure you want to end your proctored exam?"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.SubmitProctoredExamInstructions.warningText1",
          defaultMessage: "Make sure that you have selected \"Submit\" for each answer before you submit your exam."
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.SubmitProctoredExamInstructions.warningText2",
          defaultMessage: 'Once you click "Yes, end my proctored exam", the exam will' + ' be closed, and your proctoring session will be submitted for review.'
        })
      })]
    }), examType === _constants.ExamType.ONBOARDING && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      "data-testid": "submit-onboarding-exam",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmitOnboardingExamInstructions.text",
        defaultMessage: 'You are taking "{examName}" as an ' + 'onboarding exam. You must click “Yes, end my proctored exam” ' + 'and submit your proctoring session to complete onboarding.',
        values: {
          examName: examName
        }
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
      variant: "primary",
      onClick: handleSubmitClick,
      className: "mr-2",
      "data-testid": "end-exam-button",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.SubmitProctoredExamInstructions.submit",
        defaultMessage: "Yes, end my proctored exam"
      })
    })]
  });
};
var _default = SubmitProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=SubmitProctoredExamInstructions.js.map