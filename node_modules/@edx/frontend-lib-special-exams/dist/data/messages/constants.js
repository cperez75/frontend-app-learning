"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var SUBMIT_MAP = Object.freeze({
  promptEventName: 'endExamAttempt',
  successEventName: 'examAttemptEnded',
  failureEventName: 'examAttemptEndFailed'
});
var START_MAP = Object.freeze({
  promptEventName: 'startExamAttempt',
  successEventName: 'examAttemptStarted',
  failureEventName: 'examAttemptStartFailed'
});
var PING_MAP = Object.freeze({
  promptEventName: 'ping',
  successEventName: 'echo',
  failureEventName: 'pingFailed'
});
var actionToMessageTypesMap = Object.freeze({
  submit: SUBMIT_MAP,
  start: START_MAP,
  ping: PING_MAP
});
var _default = actionToMessageTypesMap;
exports["default"] = _default;
//# sourceMappingURL=constants.js.map