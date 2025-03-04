"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _frontendPlatform = require("@edx/frontend-platform");
var _paragon = require("@edx/paragon");
var _icons = require("@edx/paragon/icons");
var _i18n = require("@edx/frontend-platform/i18n");
var _context = _interopRequireDefault(require("../context"));
var _messages = _interopRequireDefault(require("./messages"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ExamAPIError = function ExamAPIError(_ref) {
  var intl = _ref.intl;
  var state = (0, _react.useContext)(_context["default"]);
  var _getConfig = (0, _frontendPlatform.getConfig)(),
    SITE_NAME = _getConfig.SITE_NAME,
    SUPPORT_URL = _getConfig.SUPPORT_URL;
  var apiErrorMsg = state.apiErrorMsg;
  var shouldShowApiErrorMsg = !!apiErrorMsg && !apiErrorMsg.includes('<');
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Alert, {
    variant: "danger",
    "data-testid": "exam-api-error-component",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Icon, {
      src: _icons.Info,
      className: "alert-icon"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Alert.Heading, {
      "data-testid": "error-details",
      children: shouldShowApiErrorMsg ? apiErrorMsg : intl.formatMessage(_messages["default"].apiErrorDefault)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: SITE_NAME && SUPPORT_URL ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.apiError.supportText.withLink",
        defaultMessage: 'If the issue persists, please reach out to {supportLink} for assistance, ' + 'and return to the exam once you receive further instructions.',
        values: {
          supportLink: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Hyperlink, {
            "data-testid": "support-link",
            destination: SUPPORT_URL,
            target: "_blank",
            children: [SITE_NAME, " Support"]
          })
        }
      }) : intl.formatMessage(_messages["default"].supportTextWithoutLink)
    })]
  });
};
ExamAPIError.propTypes = {
  intl: _i18n.intlShape.isRequired
};
var _default = (0, _i18n.injectIntl)(ExamAPIError);
exports["default"] = _default;
//# sourceMappingURL=ExamAPIError.js.map