var jsondiffpatch = require('jsondiffpatch').create();

module.exports = function ($scope) {
    var selectedTab = 'data', containsExample = false;

    $scope.propertiesToEdit = [
        {id: 'data', label: 'Data'},
        {id: 'definition', label: 'Definition'},
        {id: 'metadata', label: 'Metadata'}
    ];

    $scope.getSelectedTab = function () {
        return selectedTab;
    };

    $scope.setSelectedTab = function (newSelectedTab) {
        selectedTab = newSelectedTab;
    };

    $scope.containsExample = function () {
        return containsExample;
    };

    this.setContainsExample = function (newContainsExample) {
        containsExample = newContainsExample;
    };

    $scope.editorOptions = {
        lineNumbers: true,
        lineWrapping: true,
        matchBrackets: true,
        mode: 'application/json',
        viewportMargin: Infinity
    };

    $scope.$watch('viewModel', updateEditorModel, true);
    $scope.$watch('editorModel', updateViewModel, true);

    function updateEditorModel(viewModel) {
        if (!viewModel) {
            return;
        }

        $scope.editorModel = {
            definition: JSON.stringify(viewModel.definition, null, '    '),
            data: JSON.stringify(viewModel.data, null, '    '),
            metadata: JSON.stringify(viewModel.metadata, null, '    ')
        };
    }

    function updateViewModel(editorModel) {
        if (!editorModel) {
            return;
        }

        safeUpdateWith($scope.viewModel, function () {
            return {
                definition: safeParse(editorModel.definition),
                data: safeParse(editorModel.data),
                metadata: safeParse(editorModel.metadata)
            }
        });
    }

    function safeParse(target) {
        return target ? JSON.parse(target) : {};
    }

    function safeUpdateWith(target, sourceProvider) {
        try {
            updateWith(target, sourceProvider());
        } catch (e) {
            if (!e instanceof SyntaxError) {
                throw e;
            }
        }
    }

    function updateWith(target, source) {
        var delta = jsondiffpatch.diff(target, source);

        jsondiffpatch.patch(target, delta);
    }
};
