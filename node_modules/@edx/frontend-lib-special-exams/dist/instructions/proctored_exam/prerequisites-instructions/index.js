"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@edx/paragon");
var _i18n = require("@edx/frontend-platform/i18n");
var _context = _interopRequireDefault(require("../../../context"));
var _Pending = _interopRequireDefault(require("./Pending"));
var _Failed = _interopRequireDefault(require("./Failed"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PrerequisitesProctoredExamInstructions = function PrerequisitesProctoredExamInstructions(_ref) {
  var skipProctoredExam = _ref.skipProctoredExam;
  var state = (0, _react.useContext)(_context["default"]);
  var exam = state.exam,
    allowProctoringOptOut = state.allowProctoringOptOut;
  var prerequisitesData = exam.prerequisite_status;
  var pending = prerequisitesData.pending_prerequisites,
    failed = prerequisitesData.failed_prerequisites;
  var child = null;
  if (failed && failed.length > 0) {
    child = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Failed["default"], {
      prerequisites: failed,
      allowProctoringOptOut: allowProctoringOptOut,
      skipProctoredExam: skipProctoredExam
    });
  } else if (pending && pending.length > 0) {
    child = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pending["default"], {
      prerequisites: pending,
      allowProctoringOptOut: allowProctoringOptOut,
      skipProctoredExam: skipProctoredExam
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        "data-testid": "exam-instructions-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.EntranceProctoredExamInstructions.title",
          defaultMessage: "This exam is proctored"
        })
      }), child]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
PrerequisitesProctoredExamInstructions.propTypes = {
  skipProctoredExam: _propTypes["default"].func.isRequired
};
var _default = PrerequisitesProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=index.js.map