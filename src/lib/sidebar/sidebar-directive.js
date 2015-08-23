var sidebarTemplate = require('./sidebar.tpl.html');

module.exports = function () {
    return {
        restrict: 'AE',
        replace: true,
        scope: {},
        template: sidebarTemplate,
        controllerAs: 'sidebar',
        controller: function (sidebarService) {
            this.items = sidebarService.getItems();
            this.isActive = sidebarService.isActive;
        }
    };
};
