"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _i18n = require("@edx/frontend-platform/i18n");
var _frontendPlatform = require("@edx/frontend-platform");
var _SkipProctoredExamButton = _interopRequireDefault(require("../SkipProctoredExamButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FailedPrerequisitesProctoredExamInstructions = function FailedPrerequisitesProctoredExamInstructions(props) {
  var allowProctoringOptOut = props.allowProctoringOptOut,
    prerequisites = props.prerequisites,
    skipProctoredExam = props.skipProctoredExam;
  var platformName = (0, _frontendPlatform.getConfig)().SITE_NAME;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "pb-2",
      "data-testid": "failed-prerequisites",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.FailedPrerequisitesProctoredExamInstructions.text1",
        defaultMessage: "You did not satisfy the requirements for taking this exam with proctoring."
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.FailedPrerequisitesProctoredExamInstructions.text2",
        defaultMessage: "You did not satisfy the following prerequisites:"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("ol", {
      style: {
        listStyleType: 'disc'
      },
      children: prerequisites.map(function (item, index) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("li", {
          children: item.jumpto_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: item.jumpto_url,
            children: item.display_name
          }) : item.display_name
        }, "".concat(index.toString()));
      })
    }), allowProctoringOptOut && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.startExamInstructions.skipExamText",
          defaultMessage: "Due to unsatisfied prerequisites, you can only take this exam without proctoring."
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SkipProctoredExamButton["default"], {
        handleClick: skipProctoredExam
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
        id: "exam.FailedPrerequisitesProctoredExamInstructions.text3",
        defaultMessage: "If you have questions about the status of your requirements, contact {platformName} Support.",
        values: {
          platformName: platformName
        }
      })
    })]
  });
};
FailedPrerequisitesProctoredExamInstructions.propTypes = {
  allowProctoringOptOut: _propTypes["default"].bool.isRequired,
  prerequisites: _propTypes["default"].arrayOf(_propTypes["default"].shape({})).isRequired,
  skipProctoredExam: _propTypes["default"].func.isRequired
};
var _default = FailedPrerequisitesProctoredExamInstructions;
exports["default"] = _default;
//# sourceMappingURL=Failed.js.map