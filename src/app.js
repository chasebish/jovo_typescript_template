'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const { App } = require('jovo-framework');

const { handlerConfig } = require('./handlers/handlerConfig')

const config = {
    // logging: false,
    // requestLogging: false,
    // responseLogging: false,
    // saveUserOnResponseEnabled: false,
    intentMap : {
        'AMAZON.HelpIntent' : 'HelpIntent',
        'AMAZON.StopIntent' : 'END',
        'AMAZON.CancelIntent' : 'END',
        'AMAZON.YesIntent' : 'YesIntent',
        'AMAZON.NoIntent' : 'NoIntent',
    },
}

const app = new App(config)

app.setHandler(handlerConfig)

module.exports.app = app;
