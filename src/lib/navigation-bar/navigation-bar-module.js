var angular = require('angular');
var navigationBarDirective = require('./navigation-bar-directive');
var navigationBarService = require('./navigation-bar-service');

module.exports = angular.module('showcase-component-commons.navigation-bar', [])
    .directive('navigationBar', navigationBarDirective)
    .provider('navigationBarService', navigationBarService);
