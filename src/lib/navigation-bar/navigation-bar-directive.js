var navigationbarTemplate = require('./navigation-bar.tpl.html');

module.exports = function (navigationBarService, $location) {
    return {
        restrict: 'AE',
        replace: true,
        scope: {},
        template: navigationbarTemplate,
        link: function (scope) {
            scope.items = navigationBarService.getItems();

            scope.isActive = function (item) {
                return $location.path() === item.url;
            };
        }
    }
};
