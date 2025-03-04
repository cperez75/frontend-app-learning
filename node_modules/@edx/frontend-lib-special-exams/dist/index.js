"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "OuterExamTimer", {
  enumerable: true,
  get: function get() {
    return _OuterExamTimer["default"];
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _SequenceExamWrapper["default"];
  }
});
Object.defineProperty(exports, "fetchExamAccess", {
  enumerable: true,
  get: function get() {
    return _api.fetchExamAccess;
  }
});
Object.defineProperty(exports, "getExamAccess", {
  enumerable: true,
  get: function get() {
    return _api.getExamAccess;
  }
});
Object.defineProperty(exports, "isExam", {
  enumerable: true,
  get: function get() {
    return _api.isExam;
  }
});
Object.defineProperty(exports, "store", {
  enumerable: true,
  get: function get() {
    return _data.store;
  }
});
var _SequenceExamWrapper = _interopRequireDefault(require("./core/SequenceExamWrapper"));
var _OuterExamTimer = _interopRequireDefault(require("./core/OuterExamTimer"));
var _api = require("./api");
var _data = require("./data");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//# sourceMappingURL=index.js.map