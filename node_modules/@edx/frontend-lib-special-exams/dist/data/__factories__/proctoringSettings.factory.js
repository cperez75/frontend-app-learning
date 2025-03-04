"use strict";

var _rosie = require("rosie");
// eslint-disable-line import/no-extraneous-dependencies

_rosie.Factory.define('proctoringSettings').attrs({
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
});
//# sourceMappingURL=proctoringSettings.factory.js.map