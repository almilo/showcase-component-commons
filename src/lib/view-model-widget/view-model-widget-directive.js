var viewModelWidgetTemplate = require('./view-model-widget.tpl.html'),
    viewModelWidgetController = require('./view-model-widget-controller');

module.exports = function () {
    return {
        restrict: 'E',
        scope: {
            viewModel: '='
        },
        template: viewModelWidgetTemplate,
        controller: viewModelWidgetController
    };
};
