require('./index.css');

var angular = require('angular'),
    CodeMirror = require('codemirror');
window.CodeMirror = CodeMirror;
require('codemirror/mode/javascript/javascript');

var angularUiCodemirror = require('angular-ui-codemirror'),
    viewModelWidgetDirective = require('./view-model-widget-directive');

module.exports = angular.module('showcase-component-commons.view-model-widget',
    [
        'ui.codemirror'
    ])
    .directive('viewModelWidget', viewModelWidgetDirective);
