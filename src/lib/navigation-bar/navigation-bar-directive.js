var navigationbarTemplate = require('./navigation-bar.tpl.html');

module.exports = function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {},
        template: navigationbarTemplate,
        controllerAs: 'navigationBar',
        controller: function (navigationBarService) {
            this.items = navigationBarService.getItems();
            this.isActive = navigationBarService.isActive;
        }
    }
};
