var sidebarTemplate = require('./sidebar.tpl.html');

module.exports = function () {
    return {
        restrict: 'AE',
        replace: true,
        template: sidebarTemplate,
        controller: function ($location, sidebarService) {
            this.items = sidebarService.getItems();

            this.active = $location.path();

            this.setAsActive = function (item) {
                this.active = item.url;
            };
        },
        controllerAs: 'sidebar'
    };
};
