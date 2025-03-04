"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _eventemitter = _interopRequireDefault(require("eventemitter3"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var eventEmitter = new _eventemitter["default"]();

/**
 * Event emitter service.
 */
var Emitter = {
  on: function on(event, fn) {
    return eventEmitter.on(event, fn);
  },
  once: function once(event, fn) {
    return eventEmitter.once(event, fn);
  },
  off: function off(event, fn) {
    return eventEmitter.off(event, fn);
  },
  emit: function emit(event, payload) {
    return eventEmitter.emit(event, payload);
  }
};
Object.freeze(Emitter);
var _default = Emitter;
exports["default"] = _default;
//# sourceMappingURL=emitter.js.map