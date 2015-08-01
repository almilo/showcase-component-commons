require('./index.css');

var angular = require('angular'),
    sidebarDirective = require('./sidebar-directive'),
    sidebarService = require('./sidebar-service');

module.exports = angular.module('showcase-component-commons.sidebar', [])
    .directive('sidebar', sidebarDirective)
    .factory('sidebarService', sidebarService);
