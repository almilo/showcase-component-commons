var viewModelWidgetTemplate = require('./view-model-widget.tpl.html'),
    viewModelWidgetController = require('./view-model-widget-controller');

module.exports = function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            viewModel: '='
        },
        template: viewModelWidgetTemplate,
        controller: viewModelWidgetController,
        link: link
    };

    function link(scope, iElement, iAttributes, viewModelWidgetController, $transclude) {
        $transclude(function (clone) {
            viewModelWidgetController.setHasExample(clone.length > 0);

            iElement.find('#view-model-widget-example-container').append(clone);
        });
    }
};
