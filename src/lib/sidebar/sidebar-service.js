var angular = require('angular');

module.exports = function () {
    var items = [];

    return {
        getItems: function () {
            return items;
        },
        setItems: function (newItems) {
            angular.copy(newItems, items);
        }
    };
};
