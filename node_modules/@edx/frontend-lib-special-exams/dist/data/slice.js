"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setReviewPolicy = exports.setProctoringSettings = exports.setIsLoading = exports.setExamState = exports.setExamAccessToken = exports.setApiError = exports.setAllowProctoringOptOut = exports.setActiveAttempt = exports.expireExamAttempt = exports.examSlice = exports["default"] = void 0;
var _toolkit = require("@reduxjs/toolkit");
/* eslint-disable no-param-reassign */
var examSlice = (0, _toolkit.createSlice)({
  name: 'exam',
  initialState: {
    isLoading: true,
    timeIsOver: false,
    activeAttempt: null,
    // has the same structure as attempt in exam object
    allowProctoringOptOut: false,
    proctoringSettings: {
      exam_proctoring_backend: {
        download_url: '',
        instructions: [],
        name: '',
        rules: {}
      },
      provider_tech_support_email: '',
      provider_tech_support_phone: '',
      provider_name: '',
      learner_notification_from_email: '',
      integration_specific_email: ''
    },
    exam: {
      id: null,
      course_id: '',
      content_id: '',
      external_id: '',
      exam_name: '',
      time_limit_mins: null,
      is_proctored: false,
      is_practice_exam: false,
      is_active: true,
      due_date: null,
      hide_after_due: false,
      backend: '',
      prerequisite_status: {
        are_prerequisites_satisifed: true,
        satisfied_prerequisites: [],
        failed_prerequisites: [],
        pending_prerequisites: [],
        declined_prerequisites: []
      },
      attempt: {
        in_timed_exam: true,
        taking_as_proctored: true,
        exam_type: '',
        exam_display_name: '',
        exam_url_path: '',
        time_remaining_seconds: null,
        course_id: '',
        attempt_id: null,
        attempt_status: '',
        exam_started_poll_url: '',
        desktop_application_js_url: '',
        ping_interval: null,
        attempt_code: '',
        external_id: '',
        use_legacy_attempt_api: true
      },
      type: ''
    },
    apiErrorMsg: '',
    examAccessToken: {
      exam_access_token: '',
      exam_access_token_expiration: ''
    }
  },
  reducers: {
    setAllowProctoringOptOut: function setAllowProctoringOptOut(state, _ref) {
      var payload = _ref.payload;
      state.allowProctoringOptOut = payload.allowProctoringOptOut;
    },
    setIsLoading: function setIsLoading(state, _ref2) {
      var payload = _ref2.payload;
      state.isLoading = payload.isLoading;
    },
    setExamState: function setExamState(state, _ref3) {
      var payload = _ref3.payload;
      state.exam = payload.exam;
      state.activeAttempt = payload.activeAttempt;
    },
    setActiveAttempt: function setActiveAttempt(state, _ref4) {
      var payload = _ref4.payload;
      state.activeAttempt = payload.activeAttempt;
      state.apiErrorMsg = '';
    },
    setProctoringSettings: function setProctoringSettings(state, _ref5) {
      var payload = _ref5.payload;
      state.proctoringSettings = payload.proctoringSettings;
    },
    setExamAccessToken: function setExamAccessToken(state, _ref6) {
      var payload = _ref6.payload;
      state.examAccessToken = payload.examAccessToken;
    },
    expireExamAttempt: function expireExamAttempt(state) {
      state.timeIsOver = true;
    },
    setReviewPolicy: function setReviewPolicy(state, _ref7) {
      var payload = _ref7.payload;
      state.exam.reviewPolicy = payload.policy;
    },
    setApiError: function setApiError(state, _ref8) {
      var payload = _ref8.payload;
      state.apiErrorMsg = payload.errorMsg;
    }
  }
});
exports.examSlice = examSlice;
var _examSlice$actions = examSlice.actions,
  setIsLoading = _examSlice$actions.setIsLoading,
  setExamState = _examSlice$actions.setExamState,
  expireExamAttempt = _examSlice$actions.expireExamAttempt,
  setActiveAttempt = _examSlice$actions.setActiveAttempt,
  setProctoringSettings = _examSlice$actions.setProctoringSettings,
  setExamAccessToken = _examSlice$actions.setExamAccessToken,
  setReviewPolicy = _examSlice$actions.setReviewPolicy,
  setApiError = _examSlice$actions.setApiError,
  setAllowProctoringOptOut = _examSlice$actions.setAllowProctoringOptOut;
exports.setAllowProctoringOptOut = setAllowProctoringOptOut;
exports.setApiError = setApiError;
exports.setReviewPolicy = setReviewPolicy;
exports.setExamAccessToken = setExamAccessToken;
exports.setProctoringSettings = setProctoringSettings;
exports.setActiveAttempt = setActiveAttempt;
exports.expireExamAttempt = expireExamAttempt;
exports.setExamState = setExamState;
exports.setIsLoading = setIsLoading;
var _default = examSlice.reducer;
exports["default"] = _default;
//# sourceMappingURL=slice.js.map