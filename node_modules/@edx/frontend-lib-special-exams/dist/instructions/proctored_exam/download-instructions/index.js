"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _frontendPlatform = require("@edx/frontend-platform");
var _i18n = require("@edx/frontend-platform/i18n");
var _paragon = require("@edx/paragon");
var _context = _interopRequireDefault(require("../../../context"));
var _constants = require("../../../constants");
var _WarningModal = _interopRequireDefault(require("../WarningModal"));
var _api = require("../../../data/api");
var _messages = _interopRequireDefault(require("../messages"));
var _LtiProviderInstructions = _interopRequireDefault(require("./LtiProviderInstructions"));
var _RestProviderInstructions = _interopRequireDefault(require("./RestProviderInstructions"));
var _RPNowInstructions = _interopRequireDefault(require("./RPNowInstructions"));
var _DownloadButtons = _interopRequireDefault(require("./DownloadButtons"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _SkipProctoredExamButton = _interopRequireDefault(require("../SkipProctoredExamButton"));
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
var DownloadSoftwareProctoredExamInstructions = function DownloadSoftwareProctoredExamInstructions(_ref) {
  var intl = _ref.intl,
    skipProctoredExam = _ref.skipProctoredExam;
  var state = (0, _react.useContext)(_context["default"]);
  var proctoringSettings = state.proctoringSettings,
    exam = state.exam,
    getExamAttemptsData = state.getExamAttemptsData,
    allowProctoringOptOut = state.allowProctoringOptOut;
  var attempt = exam.attempt,
    courseId = exam.course_id,
    sequenceId = exam.content_id;
  var pollUrl = attempt.exam_started_poll_url,
    examCode = attempt.attempt_code,
    attemptId = attempt.attempt_id,
    downloadUrl = attempt.software_download_url,
    useLegacyAttemptApi = attempt.use_legacy_attempt_api;
  var providerName = proctoringSettings.provider_name,
    supportEmail = proctoringSettings.provider_tech_support_email,
    supportPhone = proctoringSettings.provider_tech_support_phone,
    proctoringBackend = proctoringSettings.exam_proctoring_backend;
  var examHasLtiProvider = !useLegacyAttemptApi;
  var _ref2 = proctoringBackend || {},
    instructions = _ref2.instructions;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    systemCheckStatus = _useState2[0],
    setSystemCheckStatus = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    downloadClicked = _useState4[0],
    setDownloadClicked = _useState4[1];
  var withProviderInstructions = instructions && instructions.length > 0;
  var launchSoftwareUrl = examHasLtiProvider ? "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/lti/start_proctoring/").concat(attemptId) : downloadUrl;
  var handleDownloadClick = function handleDownloadClick() {
    (0, _api.pollExamAttempt)(pollUrl, sequenceId).then(function (data) {
      if (data.status === _constants.ExamStatus.READY_TO_START) {
        setSystemCheckStatus('success');
      } else {
        // TODO: This call circumvents the thunk for startProctoringSoftwareDownload
        // which is a bit odd and would handle useLegacyAttempt for us.
        // There's an opportunity to refactor and clean this up a bit.
        (0, _api.softwareDownloadAttempt)(attemptId, useLegacyAttemptApi);
        window.location.assign(launchSoftwareUrl);
      }
    });
    setDownloadClicked(true);
  };
  var handleStartExamClick = function handleStartExamClick() {
    (0, _api.pollExamAttempt)(pollUrl, sequenceId).then(function (data) {
      return data.status === _constants.ExamStatus.READY_TO_START ? getExamAttemptsData(courseId, sequenceId) : setSystemCheckStatus('failure');
    });
  };
  function providerInstructions() {
    if (examHasLtiProvider) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_LtiProviderInstructions["default"], {
        providerName: providerName,
        supportEmail: supportEmail,
        supportPhone: supportPhone
      });
    }
    if (withProviderInstructions) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RestProviderInstructions["default"], {
        providerName: providerName,
        supportEmail: supportEmail,
        supportPhone: supportPhone,
        instructions: instructions
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RPNowInstructions["default"], {
      code: examCode
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Container, {
      className: "border py-5 mb-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WarningModal["default"], {
        isOpen: Boolean(systemCheckStatus),
        title: systemCheckStatus === 'success' ? intl.formatMessage(_messages["default"].softwareLoadedModalTitle) : intl.formatMessage(_messages["default"].cannotStartModalTitle),
        body: systemCheckStatus === 'success' ? intl.formatMessage(_messages["default"].softwareLoadedModalBody) : intl.formatMessage(_messages["default"].cannotStartModalBody),
        handleClose: function handleClose() {
          return setSystemCheckStatus('');
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "h3",
        "data-testid": "exam-instructions-title",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
          id: "exam.DownloadSoftwareProctoredExamInstructions.title",
          defaultMessage: "Set up and start your proctored exam."
        })
      }), providerInstructions(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DownloadButtons["default"], {
        downloadUrl: launchSoftwareUrl,
        onDownloadClick: handleDownloadClick,
        onStartExamClick: handleStartExamClick,
        downloadClicked: downloadClicked
      }), !examHasLtiProvider && !withProviderInstructions && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "pt-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "h4",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.title",
            defaultMessage: "Step 3."
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
            id: "exam.DefaultDownloadSoftwareProctoredExamInstructions.step3.body",
            defaultMessage: 'For security and exam integrity reasons, ' + 'we ask you to sign in to your edX account. Then we will ' + 'direct you to the RPNow proctoring experience.'
          })
        })]
      })]
    }), allowProctoringOptOut && /*#__PURE__*/(0, _jsxRuntime.jsx)(_SkipProctoredExamButton["default"], {
      handleClick: skipProctoredExam
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Footer["default"], {})]
  });
};
DownloadSoftwareProctoredExamInstructions.propTypes = {
  intl: _i18n.intlShape.isRequired,
  skipProctoredExam: _propTypes["default"].func.isRequired
};
var _default = (0, _i18n.injectIntl)(DownloadSoftwareProctoredExamInstructions);
exports["default"] = _default;
//# sourceMappingURL=index.js.map