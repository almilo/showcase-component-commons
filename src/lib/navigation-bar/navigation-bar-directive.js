var navigationbarTemplate = require('./navigation-bar.tpl.html');

module.exports = function (navigationBarService) {
    return {
        restrict: 'AE',
        replace: true,
        scope: {},
        template: navigationbarTemplate,
        link: function (scope) {
            scope.items = navigationBarService.getItems();
            scope.isActive = navigationBarService.isActive;
        }
    }
};
