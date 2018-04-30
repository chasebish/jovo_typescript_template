'use strict';
// =================================================================================
// App Configuration
// =================================================================================
var App = require('jovo-framework').App;
var handlerConfig = require('./handlers/handlerConfig').handlerConfig;
var config = {
    // logging: false,
    // requestLogging: false,
    // responseLogging: false,
    // saveUserOnResponseEnabled: false,
    intentMap: {
        'AMAZON.HelpIntent': 'HelpIntent',
        'AMAZON.StopIntent': 'END',
        'AMAZON.CancelIntent': 'END',
        'AMAZON.YesIntent': 'YesIntent',
        'AMAZON.NoIntent': 'NoIntent',
    },
};
var app = new App(config);
app.setHandler(handlerConfig);
module.exports.app = app;
