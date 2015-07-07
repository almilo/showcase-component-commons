var angular = require('angular');
var sidebarDirective = require('./sidebar-directive');
var sidebarService = require('./sidebar-service');

module.exports = angular.module('showcase-component-commons.sidebar', [])
    .directive('sidebar', sidebarDirective)
    .factory('sidebarService', sidebarService);
