var angular = require('angular');

module.exports = function ($location) {
    var items = [];

    return {
        getItems: function () {
            return items;
        },
        setItems: function (newItems) {
            angular.copy(newItems, items);
        },
        isActive: function (item) {
            var currentPath = $location.path();

            return (currentPath === item.url) || (items.indexOf(item) === 0 && item.url.indexOf(currentPath) === 0);
        }
    };
};
