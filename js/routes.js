define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        // // use the HTML5 History API
        // $locationProvider.html5Mode(true);
    }]);
});