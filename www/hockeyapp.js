var exec = require('cordova/exec');

var hockeyapp = {
    start: function(success, failure, token) {
        exec(success, failure, "HockeyApp", "start", [ token ]);
    },
    feedback: function(name, email, success, failure) {
        exec(success, failure, "HockeyApp", "feedback", [ name, email ]);
    },
    forceCrash: function(success, failure) {
        exec(success, failure, "HockeyApp", "forceCrash", []);
    },
    checkForUpdate: function(success, failure) {
        exec(function () {}, function () {}, "HockeyApp", "checkForUpdate", []);
    }
};

module.exports = hockeyapp;
