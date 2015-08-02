require('./index.css');

var angular = require('angular'),
    angularRoute = require('angular-route'),
    navigationBarDirective = require('./navigation-bar-directive'),
    navigationBarService = require('./navigation-bar-service');

module.exports = angular.module('showcase-component-commons.navigation-bar',
    [
        angularRoute
    ])
    .directive('navigationBar', navigationBarDirective)
    .provider('navigationBarService', navigationBarService);
