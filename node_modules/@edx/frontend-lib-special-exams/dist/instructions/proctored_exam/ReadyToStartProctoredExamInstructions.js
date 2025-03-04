"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
var _paragon = require("@edx/paragon");
var _context = _interopRequireDefault(require("../../context"));
var _Footer = _interopRequireDefault(require("./Footer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ReadyToStartProctoredExamInstructions = function ReadyToStartProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context["default"]);
  var exam = state.exam,
    getExamReviewPolicy = state.getExamReviewPolicy,
    startProctoredExam = state.startProctoredExam;
  var attempt = exam.attempt,
    reviewPolicy = exam.reviewPolicy;
  var examDuration = attempt.total_time ? attempt.total_time : exam.total_time;
  var platformName = (0, _frontendPlatform.getConfig)().SITE_NAME;
  var rulesUrl = (0, _frontendPlatform.getConfig)().PROCTORED_EXAM_RULES_URL;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    beginExamClicked = _useState2[0],
    setBeginExamClicked = _useState2[1];
  (0, _react.useEffect)(function () {
    getExamReviewPolicy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var handleStart = function handleStart() {
    setBeginExamClicked(true);
    startProctoredExam();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        "data-testid": "exam-instructions-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.ReadyToStartProctoredExamInstructions.title1",
          defaultMessage: "Important"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("ul", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          "data-testid": "duration-text",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.text1",
            defaultMessage: "You have {examDuration} to complete this exam.",
            values: {
              examDuration: examDuration
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.text2",
            defaultMessage: "Once you start the exam, you cannot stop the timer."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.text3",
            defaultMessage: "For all question types, you must click \"submit\" to complete your answer."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.text4",
            defaultMessage: "If time expires before you click \"End My Exam\", only your submitted answers will be graded."
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.ReadyToStartProctoredExamInstructions.title2",
          defaultMessage: "Proctored Exam Rules"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.ReadyToStartProctoredExamInstructions.text5",
          defaultMessage: "You must adhere to the following rules while you complete this exam."
        }), "\xA0", /*#__PURE__*/(0, _jsxRuntime.jsx)("strong", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.text6",
            defaultMessage: 'If you violate these rules, you will receive a score of 0 ' + 'on the exam, and you will not be eligible for academic course credit.'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
          variant: "link",
          target: "_blank",
          href: rulesUrl,
          "data-testid": "proctored-exam-instructions-rulesLink",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.rulesLink",
            defaultMessage: "{platformName} Rules for Online Proctored Exams",
            values: {
              platformName: platformName
            }
          })
        })]
      }), reviewPolicy && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h3",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.title3",
            defaultMessage: "Additional Exam Rules"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.ReadyToStartProctoredExamInstructions.text7",
            defaultMessage: 'The following additional rules apply to this exam. ' + 'These rules take precedence over the Rules for Online Proctored Exams.'
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: reviewPolicy
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Button, {
        "data-testid": "start-exam-button",
        variant: "primary",
        onClick: handleStart,
        disabled: beginExamClicked,
        children: [beginExamClicked && /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Spinner, {
          "data-testid": "exam-loading-spinner",
          animation: "border"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.startExamInstructions.startExamButtonText",
          defaultMessage: "Start exam"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
var _default = ReadyToStartProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=ReadyToStartProctoredExamInstructions.js.map