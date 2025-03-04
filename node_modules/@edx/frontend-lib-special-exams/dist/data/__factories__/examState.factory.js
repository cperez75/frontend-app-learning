"use strict";

var _rosie = require("rosie");
require("./exam.factory");
require("./proctoringSettings.factory");
require("./examAccessToken.factory");
// eslint-disable-line import/no-extraneous-dependencies

_rosie.Factory.define('examState').attr('proctoringSettings', _rosie.Factory.build('proctoringSettings')).attr('exam', _rosie.Factory.build('exam')).attr('examAccessToken', _rosie.Factory.build('examAccessToken')).attrs({
  isLoading: false,
  activeAttempt: null,
  verification: {
    status: 'none',
    can_verify: true
  },
  timeIsOver: false,
  apiErrorMsg: '',
  allowProctoringOptOut: false
});
//# sourceMappingURL=examState.factory.js.map