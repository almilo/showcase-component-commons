require('./index.css');

var angular = require('angular'),
    navigationBarDirective = require('./navigation-bar-directive'),
    navigationBarService = require('./navigation-bar-service');

module.exports = angular.module('showcase-component-commons.navigation-bar', [])
    .directive('navigationBar', navigationBarDirective)
    .provider('navigationBarService', navigationBarService);
