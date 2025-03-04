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
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ErrorProctoredExamInstructions = function ErrorProctoredExamInstructions() {
  var state = (0, _react.useContext)(_context["default"]);
  var _ref = state.proctoringSettings || {},
    proctoringEscalationEmail = _ref.proctoring_escalation_email;
  var platformName = (0, _frontendPlatform.getConfig)().SITE_NAME;
  var contactUsUrl = (0, _frontendPlatform.getConfig)().CONTACT_URL;
  var renderBody = function renderBody() {
    if (proctoringEscalationEmail) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorProctoredExamInstructions.text1",
        defaultMessage: 'A system error has occurred with your proctored exam. ' + 'Please reach out to your course team at {supportLink} for assistance, ' + 'and return to the exam once you receive further instructions.',
        values: {
          supportLink: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.MailtoLink, {
            to: proctoringEscalationEmail,
            children: proctoringEscalationEmail
          })
        }
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
      id: "exam.ErrorProctoredExamInstructions.text2",
      defaultMessage: 'A system error has occurred with your proctored exam. ' + 'Please reach out to {supportLink} for assistance, and return to ' + 'the exam once you receive further instructions.',
      values: {
        supportLink: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Hyperlink, {
          href: contactUsUrl,
          target: "_blank",
          children: [platformName, " Support"]
        })
      }
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "h3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.ErrorProctoredExamInstructions.title",
        defaultMessage: "Error with proctored exam"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "mb-0",
      children: renderBody()
    })]
  });
};
var _default = ErrorProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=ErrorProctoredExamInstructions.js.map