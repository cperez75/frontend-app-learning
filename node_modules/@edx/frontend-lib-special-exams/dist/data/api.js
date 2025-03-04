"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.continueAttempt = continueAttempt;
exports.createExamAttempt = createExamAttempt;
exports.declineAttempt = declineAttempt;
exports.endExamWithFailure = endExamWithFailure;
exports.fetchExamAccessToken = fetchExamAccessToken;
exports.fetchExamAttemptsData = fetchExamAttemptsData;
exports.fetchExamReviewPolicy = fetchExamReviewPolicy;
exports.fetchLatestAttempt = fetchLatestAttempt;
exports.fetchProctoringSettings = fetchProctoringSettings;
exports.pollExamAttempt = pollExamAttempt;
exports.resetAttempt = resetAttempt;
exports.softwareDownloadAttempt = softwareDownloadAttempt;
exports.stopAttempt = stopAttempt;
exports.submitAttempt = submitAttempt;
exports.updateAttemptStatus = updateAttemptStatus;
var _frontendPlatform = require("@edx/frontend-platform");
var _auth = require("@edx/frontend-platform/auth");
var _logging = require("@edx/frontend-platform/logging");
var _constants = require("../constants");
var _helpers = require("../helpers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var BASE_API_URL = '/api/edx_proctoring/v1/proctored_exam/attempt';
function fetchActiveAttempt() {
  return _fetchActiveAttempt.apply(this, arguments);
}
function _fetchActiveAttempt() {
  _fetchActiveAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var activeAttemptUrl, activeAttemptResponse;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // fetch 'active' (timer is running) attempt if it exists
          activeAttemptUrl = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt/latest"));
          _context.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(activeAttemptUrl.href);
        case 3:
          activeAttemptResponse = _context.sent;
          return _context.abrupt("return", activeAttemptResponse.data);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchActiveAttempt.apply(this, arguments);
}
function fetchLatestExamAttempt(_x) {
  return _fetchLatestExamAttempt.apply(this, arguments);
}
function _fetchLatestExamAttempt() {
  _fetchLatestExamAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(sequenceId) {
    var attemptUrl, response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // the calls the same endpoint as fetchActiveAttempt but it behaves slightly different
          // with an exam's section specified. The attempt for that requested exam is always returned
          // even if it is not 'active' (timer is not running)
          attemptUrl = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt/latest"));
          attemptUrl.searchParams.append('content_id', sequenceId);
          _context2.next = 4;
          return (0, _auth.getAuthenticatedHttpClient)().get(attemptUrl.href);
        case 4:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetchLatestExamAttempt.apply(this, arguments);
}
function fetchExamAttemptsData(_x2, _x3) {
  return _fetchExamAttemptsData.apply(this, arguments);
}
function _fetchExamAttemptsData() {
  _fetchExamAttemptsData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(courseId, sequenceId) {
    var data, url, urlResponse, examUrl, examResponse, attemptData;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if ((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL) {
            _context3.next = 10;
            break;
          }
          url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/course_id/").concat(courseId));
          url.searchParams.append('content_id', sequenceId);
          url.searchParams.append('is_learning_mfe', true);
          _context3.next = 6;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 6:
          urlResponse = _context3.sent;
          data = urlResponse.data;
          _context3.next = 20;
          break;
        case 10:
          examUrl = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/student/exam/attempt/course_id/").concat(courseId, "/content_id/").concat(sequenceId));
          _context3.next = 13;
          return (0, _auth.getAuthenticatedHttpClient)().get(examUrl.href);
        case 13:
          examResponse = _context3.sent;
          data = examResponse.data;

          // humanize total time if response is from edx-exams
          data.exam.total_time = Number.isInteger(data.exam.total_time) ? (0, _helpers.generateHumanizedTime)(data.exam.total_time * 60) : data.exam.total_time;
          _context3.next = 18;
          return fetchActiveAttempt();
        case 18:
          attemptData = _context3.sent;
          data.active_attempt = attemptData;
        case 20:
          return _context3.abrupt("return", data);
        case 21:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _fetchExamAttemptsData.apply(this, arguments);
}
function fetchLatestAttempt(_x4) {
  return _fetchLatestAttempt.apply(this, arguments);
}
function _fetchLatestAttempt() {
  _fetchLatestAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(courseId) {
    var data, url, urlResponse, attemptData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if ((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL) {
            _context4.next = 9;
            break;
          }
          url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/course_id/").concat(courseId));
          url.searchParams.append('is_learning_mfe', true);
          _context4.next = 5;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 5:
          urlResponse = _context4.sent;
          data = urlResponse.data;
          _context4.next = 14;
          break;
        case 9:
          // initialize data dictionary to be similar to what edx-proctoring returns
          data = {
            exam: {}
          };
          _context4.next = 12;
          return fetchActiveAttempt();
        case 12:
          attemptData = _context4.sent;
          data.active_attempt = attemptData;
        case 14:
          return _context4.abrupt("return", data);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _fetchLatestAttempt.apply(this, arguments);
}
function pollExamAttempt(_x5, _x6) {
  return _pollExamAttempt.apply(this, arguments);
}
function _pollExamAttempt() {
  _pollExamAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(pollUrl, sequenceId) {
    var data, edxProctoringURL, urlResponse;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!pollUrl) {
            _context5.next = 8;
            break;
          }
          edxProctoringURL = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(pollUrl));
          _context5.next = 4;
          return (0, _auth.getAuthenticatedHttpClient)().get(edxProctoringURL.href);
        case 4:
          urlResponse = _context5.sent;
          data = urlResponse.data;
          _context5.next = 16;
          break;
        case 8:
          if (!(sequenceId && (0, _frontendPlatform.getConfig)().EXAMS_BASE_URL)) {
            _context5.next = 15;
            break;
          }
          _context5.next = 11;
          return fetchLatestExamAttempt(sequenceId);
        case 11:
          data = _context5.sent;
          // Update dictionaries returned by edx-exams to have correct status key for legacy compatibility
          if (data.attempt_status) {
            data.status = data.attempt_status;
            delete data.attempt_status;
          }
          _context5.next = 16;
          break;
        case 15:
          // sites configured with only edx-proctoring must have pollUrl set
          // sites configured with edx-exams expect sequenceId if pollUrl is not set
          (0, _logging.logError)("pollExamAttempt recieved unexpected parameters pollUrl=".concat(pollUrl, " sequenceId=").concat(sequenceId));
        case 16:
          return _context5.abrupt("return", data);
        case 17:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _pollExamAttempt.apply(this, arguments);
}
function createExamAttempt(_x7, _x8) {
  return _createExamAttempt.apply(this, arguments);
}
function _createExamAttempt() {
  _createExamAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(examId, legacyAttempt) {
    var startClock,
      attemptProctored,
      urlString,
      url,
      payload,
      _yield$getAuthenticat,
      data,
      _args6 = arguments;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          startClock = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;
          attemptProctored = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : false;
          if (!(0, _frontendPlatform.getConfig)().EXAMS_BASE_URL || legacyAttempt) {
            urlString = "".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL);
          } else {
            urlString = "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt");
          }
          url = new URL(urlString);
          payload = {
            exam_id: examId,
            start_clock: startClock.toString(),
            attempt_proctored: attemptProctored.toString()
          };
          _context6.next = 7;
          return (0, _auth.getAuthenticatedHttpClient)().post(url.href, payload);
        case 7:
          _yield$getAuthenticat = _context6.sent;
          data = _yield$getAuthenticat.data;
          return _context6.abrupt("return", data);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _createExamAttempt.apply(this, arguments);
}
function updateAttemptStatus(_x9, _x10, _x11) {
  return _updateAttemptStatus.apply(this, arguments);
}
function _updateAttemptStatus() {
  _updateAttemptStatus = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(attemptId, action, legacyAttempt) {
    var detail,
      urlString,
      url,
      payload,
      _yield$getAuthenticat2,
      data,
      _args7 = arguments;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          detail = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : null;
          if (!(0, _frontendPlatform.getConfig)().EXAMS_BASE_URL || legacyAttempt) {
            urlString = "".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL).concat(BASE_API_URL, "/").concat(attemptId);
          } else {
            urlString = "".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exams/attempt/").concat(attemptId);
          }
          url = new URL(urlString);
          payload = {
            action: action
          };
          if (detail) {
            payload.detail = detail;
          }
          _context7.next = 7;
          return (0, _auth.getAuthenticatedHttpClient)().put(url.href, payload);
        case 7:
          _yield$getAuthenticat2 = _context7.sent;
          data = _yield$getAuthenticat2.data;
          return _context7.abrupt("return", data);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _updateAttemptStatus.apply(this, arguments);
}
function stopAttempt(_x12) {
  return _stopAttempt.apply(this, arguments);
}
function _stopAttempt() {
  _stopAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(attemptId) {
    var legacyAttempt,
      _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          legacyAttempt = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : false;
          return _context8.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.STOP, legacyAttempt));
        case 2:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _stopAttempt.apply(this, arguments);
}
function continueAttempt(_x13) {
  return _continueAttempt.apply(this, arguments);
}
function _continueAttempt() {
  _continueAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(attemptId) {
    var legacyAttempt,
      _args9 = arguments;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          legacyAttempt = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : false;
          return _context9.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.START, legacyAttempt));
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _continueAttempt.apply(this, arguments);
}
function submitAttempt(_x14) {
  return _submitAttempt.apply(this, arguments);
}
function _submitAttempt() {
  _submitAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(attemptId) {
    var legacyAttempt,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          legacyAttempt = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : false;
          return _context10.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.SUBMIT, legacyAttempt));
        case 2:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return _submitAttempt.apply(this, arguments);
}
function resetAttempt(_x15) {
  return _resetAttempt.apply(this, arguments);
}
function _resetAttempt() {
  _resetAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(attemptId) {
    var legacyAttempt,
      _args11 = arguments;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          legacyAttempt = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
          return _context11.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.RESET, legacyAttempt));
        case 2:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _resetAttempt.apply(this, arguments);
}
function endExamWithFailure(_x16, _x17) {
  return _endExamWithFailure.apply(this, arguments);
}
function _endExamWithFailure() {
  _endExamWithFailure = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(attemptId, error) {
    var legacyAttempt,
      _args12 = arguments;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          legacyAttempt = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : false;
          return _context12.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.ERROR, legacyAttempt, error));
        case 2:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _endExamWithFailure.apply(this, arguments);
}
function softwareDownloadAttempt(_x18) {
  return _softwareDownloadAttempt.apply(this, arguments);
}
function _softwareDownloadAttempt() {
  _softwareDownloadAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(attemptId) {
    var legacyAttempt,
      _args13 = arguments;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          legacyAttempt = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : false;
          return _context13.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.CLICK_DOWNLOAD_SOFTWARE, legacyAttempt));
        case 2:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return _softwareDownloadAttempt.apply(this, arguments);
}
function declineAttempt(_x19) {
  return _declineAttempt.apply(this, arguments);
}
function _declineAttempt() {
  _declineAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(attemptId) {
    var legacyAttempt,
      _args14 = arguments;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          legacyAttempt = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : false;
          return _context14.abrupt("return", updateAttemptStatus(attemptId, _constants.ExamAction.DECLINE, legacyAttempt));
        case 2:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return _declineAttempt.apply(this, arguments);
}
function fetchExamReviewPolicy(_x20) {
  return _fetchExamReviewPolicy.apply(this, arguments);
}
function _fetchExamReviewPolicy() {
  _fetchExamReviewPolicy = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(examId) {
    var url, _yield$getAuthenticat3, data;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL, "/api/edx_proctoring/v1/proctored_exam/review_policy/exam_id/").concat(examId, "/"));
          _context15.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 3:
          _yield$getAuthenticat3 = _context15.sent;
          data = _yield$getAuthenticat3.data;
          return _context15.abrupt("return", data);
        case 6:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return _fetchExamReviewPolicy.apply(this, arguments);
}
function fetchProctoringSettings(_x21, _x22) {
  return _fetchProctoringSettings.apply(this, arguments);
}
function _fetchProctoringSettings() {
  _fetchProctoringSettings = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(courseId, examId) {
    var url, _yield$getAuthenticat4, data;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          if (!(0, _frontendPlatform.getConfig)().EXAMS_BASE_URL) {
            url = new URL("".concat((0, _frontendPlatform.getConfig)().LMS_BASE_URL, "/api/edx_proctoring/v1/proctored_exam/settings/exam_id/").concat(examId, "/"));
          } else {
            url = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/exam/provider_settings/course_id/").concat(courseId, "/exam_id/").concat(examId));
          }
          _context16.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 3:
          _yield$getAuthenticat4 = _context16.sent;
          data = _yield$getAuthenticat4.data;
          return _context16.abrupt("return", data);
        case 6:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return _fetchProctoringSettings.apply(this, arguments);
}
function fetchExamAccessToken(_x23) {
  return _fetchExamAccessToken.apply(this, arguments);
}
function _fetchExamAccessToken() {
  _fetchExamAccessToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(examId) {
    var url, _yield$getAuthenticat5, data;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          url = new URL("".concat((0, _frontendPlatform.getConfig)().EXAMS_BASE_URL, "/api/v1/access_tokens/exam_id/").concat(examId, "/"));
          _context17.next = 3;
          return (0, _auth.getAuthenticatedHttpClient)().get(url.href);
        case 3:
          _yield$getAuthenticat5 = _context17.sent;
          data = _yield$getAuthenticat5.data;
          return _context17.abrupt("return", data);
        case 6:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return _fetchExamAccessToken.apply(this, arguments);
}
//# sourceMappingURL=api.js.map