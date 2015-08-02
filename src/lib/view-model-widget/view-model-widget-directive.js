var viewModelWidgetTemplate = require('./view-model-widget.tpl.html'),
    viewModelWidgetController = require('./view-model-widget-controller');

module.exports = function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            viewModel: '=',
            description: '='
        },
        template: viewModelWidgetTemplate,
        controller: viewModelWidgetController,
        link: link
    };

    function link(scope, iElement, iAttributes, viewModelWidgetController, $transclude) {
        var transcludedContent, transclusionScope;

        scope.render = render;

        render();

        function render() {
            if (transcludedContent) {
                transcludedContent.remove();
                transclusionScope.$destroy();
            }

            $transclude(function (content, contentScope) {
                if (content.length === 0) {
                    return;
                }

                viewModelWidgetController.setContainsExample(true);

                iElement.find('#view-model-widget-example-container').append(content);

                transcludedContent = content;
                transclusionScope = contentScope;
            });
        }
    }
};
