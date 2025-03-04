"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldRenderExpiredPage = exports.isEmpty = exports.getDisplayName = exports.generateHumanizedTime = void 0;
var _constants = require("./constants");
var isEmpty = function isEmpty(obj) {
  if (!obj) {
    return true;
  }
  return Object.keys(obj).length === 0;
};
exports.isEmpty = isEmpty;
var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};
exports.getDisplayName = getDisplayName;
var shouldRenderExpiredPage = function shouldRenderExpiredPage(exam) {
  var examType = exam.type,
    passedDueDate = exam.passed_due_date,
    attempt = exam.attempt;
  if (!passedDueDate || examType === _constants.ExamType.PRACTICE) {
    return false;
  }
  return isEmpty(attempt) || !attempt.attempt_id || (0, _constants.IS_INCOMPLETE_STATUS)(attempt.attempt_status);
};
exports.shouldRenderExpiredPage = shouldRenderExpiredPage;
var generateHumanizedTime = function generateHumanizedTime(timeRemainingSeconds) {
  var hours = 0;
  var minutes = 0;
  var remainingTime = '';
  hours = Math.floor(timeRemainingSeconds / 60 / 60);
  minutes = Math.floor(timeRemainingSeconds / 60) % 60;
  if (hours !== 0) {
    remainingTime += "".concat(hours, " hour");
    if (hours >= 2) {
      remainingTime += 's';
    }
    remainingTime += ' and ';
  }
  remainingTime += "".concat(minutes, " minute");
  if (minutes !== 1) {
    remainingTime += 's';
  }
  return remainingTime;
};
exports.generateHumanizedTime = generateHumanizedTime;
//# sourceMappingURL=helpers.js.map