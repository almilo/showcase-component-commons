var angular = require('angular');

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
        mode: 'application/json'
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

        angular.copy(JSON.parse(editorModel.definition), $scope.viewModel.definition);
        angular.copy(JSON.parse(editorModel.data), $scope.viewModel.data);
        angular.copy(JSON.parse(editorModel.metadata), $scope.viewModel.metadata);
    }
};
