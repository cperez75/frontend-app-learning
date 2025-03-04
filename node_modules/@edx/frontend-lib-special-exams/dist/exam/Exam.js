"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _timer = require("../timer");
var _instructions = _interopRequireDefault(require("../instructions"));
var _context = _interopRequireDefault(require("../context"));
var _ExamAPIError = _interopRequireDefault(require("./ExamAPIError"));
var _constants = require("../constants");
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable react-hooks/exhaustive-deps */ /**
                                                                                                                        * Exam component is intended to render exam instructions before and after exam.
                                                                                                                        * It is also responsible for rendering exam timer block/component during the exam.
                                                                                                                        * If children do not relate to exam sequence, render them directly.
                                                                                                                        * @param isTimeLimited - boolean used to identify if we need to process sequence as an exam
                                                                                                                        * @param children - sequence content
                                                                                                                        * @returns {JSX.Element}
                                                                                                                        * @constructor
                                                                                                                        */
var Exam = function Exam(_ref) {
  var isGated = _ref.isGated,
    isTimeLimited = _ref.isTimeLimited,
    originalUserIsStaff = _ref.originalUserIsStaff,
    canAccessProctoredExams = _ref.canAccessProctoredExams,
    children = _ref.children,
    intl = _ref.intl;
  var state = (0, _react.useContext)(_context["default"]);
  var isLoading = state.isLoading,
    activeAttempt = state.activeAttempt,
    showTimer = state.showTimer,
    stopExam = state.stopExam,
    exam = state.exam,
    expireExam = state.expireExam,
    pollAttempt = state.pollAttempt,
    apiErrorMsg = state.apiErrorMsg,
    pingAttempt = state.pingAttempt,
    getProctoringSettings = state.getProctoringSettings,
    submitExam = state.submitExam;
  var _ref2 = exam || {},
    attempt = _ref2.attempt,
    examType = _ref2.type,
    examId = _ref2.id,
    passedDueDate = _ref2.passed_due_date,
    hideAfterDue = _ref2.hide_after_due;
  var _ref3 = attempt || {},
    attemptStatus = _ref3.attempt_status;
  var shouldShowMasqueradeAlert = function shouldShowMasqueradeAlert() {
    // if course staff is masquerading as a specific learner, they should be able
    // to view the exam content regardless of the learner's current state
    if (originalUserIsStaff && isTimeLimited) {
      if (examType === _constants.ExamType.TIMED && passedDueDate && !hideAfterDue) {
        // if the learner is able to view exam content after the due date is passed,
        // don't show this alert
        return false;
      }
      return attemptStatus !== _constants.ExamStatus.STARTED;
    }
    return false;
  };
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    hasProctoredExamAccess = _useState2[0],
    setHasProctoredExamAccess = _useState2[1];
  var proctoredExamTypes = [_constants.ExamType.ONBOARDING, _constants.ExamType.PRACTICE, _constants.ExamType.PROCTORED];
  (0, _react.useEffect)(function () {
    if (proctoredExamTypes.includes(examType)) {
      // only fetch proctoring settings for a proctored exam
      if (examId) {
        getProctoringSettings();
      }

      // Only exclude Timed Exam when restricting access to exams
      setHasProctoredExamAccess(canAccessProctoredExams);
    }
    // this makes sure useEffect gets called only one time after the exam has been fetched
    // we can't leave this empty since initially exam is just an empty object, so
    // API calls above would not get triggered
  }, [examId]);
  if (isLoading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "spinner",
      className: "d-flex justify-content-center align-items-center flex-column my-5 py-5",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
        animation: "border",
        variant: "primary"
      })
    });
  }
  if (!hasProctoredExamAccess) {
    // If the user cannot acces proctoring exam, and the current exam is a proctoring exam,
    // we want to display a message box to let learner know they have no access.
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "no-access",
      className: "d-flex justify-content-center align-items-center flex-column",
      children: intl.formatMessage(_messages["default"].proctoredExamAccessDenied)
    });
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  var sequenceContent = /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: children
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "d-flex flex-column justify-content-center",
    children: [shouldShowMasqueradeAlert() && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert, {
      variant: "info",
      icon: _icons.Info,
      "data-testid": "masquerade-alert",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.hiddenContent",
        defaultMessage: "This exam is hidden from the learner."
      })
    }), showTimer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_timer.ExamTimerBlock, {
      attempt: activeAttempt,
      stopExamAttempt: stopExam,
      submitExam: submitExam,
      expireExamAttempt: expireExam,
      pollExamAttempt: pollAttempt,
      pingAttempt: pingAttempt
    }),
    // show the error message only if you are in the exam sequence
    isTimeLimited && apiErrorMsg && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExamAPIError["default"], {}), isTimeLimited && !originalUserIsStaff && !isGated ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_instructions["default"], {
      children: sequenceContent
    }) : sequenceContent]
  });
};
Exam.propTypes = {
  isTimeLimited: _propTypes["default"].bool.isRequired,
  isGated: _propTypes["default"].bool.isRequired,
  originalUserIsStaff: _propTypes["default"].bool.isRequired,
  canAccessProctoredExams: _propTypes["default"].bool,
  children: _propTypes["default"].element.isRequired,
  intl: _i18n.intlShape.isRequired
};
Exam.defaultProps = {
  canAccessProctoredExams: true
};
var _default = (0, _i18n.injectIntl)(Exam);
exports["default"] = _default;
//# sourceMappingURL=Exam.js.map