define([
    'angular',
    'angular-route',
    'constants',
    './controllers/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (angular, routes, con) {
    'use strict';
    // try {
    //     return angular.module(con.namespace);
    // } catch (e) {


    return angular.module(con.namespace, [con.namespace + '.directives', con.namespace + '.filters', con.namespace + '.services', con.namespace + '.controllers', 'ngRoute']);
    // }
});
