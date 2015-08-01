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
        var transcludedContent, transclusionScope;

        viewModelWidgetController.setRenderCallback(render);

        render();

        function render() {
            if (transcludedContent) {
                transcludedContent.remove();
                transclusionScope.$destroy();
            }

            $transclude(function (clone, scope) {
                viewModelWidgetController.setContainsExample(clone.length > 0);

                iElement.find('#view-model-widget-example-container').append(clone);

                transcludedContent = clone;
                transclusionScope = scope;
            });
        }
    }
};
