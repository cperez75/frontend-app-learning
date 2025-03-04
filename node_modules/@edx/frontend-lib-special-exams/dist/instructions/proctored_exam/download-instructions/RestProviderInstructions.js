"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var RestProviderInstructions = function RestProviderInstructions(_ref) {
  var providerName = _ref.providerName,
    supportEmail = _ref.supportEmail,
    supportPhone = _ref.supportPhone,
    instructions = _ref.instructions;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DownloadSoftwareProctoredExamInstructions.text1",
        defaultMessage: 'Note: As part of the proctored exam setup, you ' + 'will be asked to verify your identity. Before you begin, make ' + 'sure you are on a computer with a webcam, and that you have a ' + 'valid form of photo identification such as a driver’s license or passport.'
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ol", {
      children: instructions.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: item
        }, "".concat(index.toString()));
      })
    }), supportEmail && supportPhone && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.DownloadSoftwareProctoredExamInstructions.supportText",
        defaultMessage: 'If you have issues relating to proctoring, you can contact ' + '{providerName} technical support by emailing {supportEmail} or by calling {supportPhone}.',
        values: {
          providerName: providerName,
          supportEmail: supportEmail,
          supportPhone: supportPhone
        }
      })
    })]
  });
};
RestProviderInstructions.propTypes = {
  providerName: _propTypes["default"].string,
  supportEmail: _propTypes["default"].string,
  supportPhone: _propTypes["default"].string,
  instructions: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired
};
RestProviderInstructions.defaultProps = {
  providerName: '',
  supportEmail: '',
  supportPhone: ''
};
var _default = RestProviderInstructions;
exports["default"] = _default;
//# sourceMappingURL=RestProviderInstructions.js.map