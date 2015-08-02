var assert = require('js-commons').assert;

module.exports = function () {
    var navigationBarItems = [];

    this.setItems = function (items) {
        assert.isArray(items);

        navigationBarItems = items;
    };

    this.$get = function ($route) {
        if (navigationBarItems.length === 0) {
            navigationBarItems = extractNavigationBarItemsFromRoutes($route.routes);
        }

        return {
            getItems: function () {
                return navigationBarItems;
            }
        };
    };

    function extractNavigationBarItemsFromRoutes(routes) {
        return extractRoutes(routes)
            .filter(hasTitleProperty)
            .sort(sortByOrderProperty)
            .map(toNavigationBarItem);

        function extractRoutes(routesObject) {
            return Object.keys(routesObject).map(function (routeKey) {
                return routesObject[routeKey]
            });
        }

        function hasTitleProperty(route) {
            return !!route.title;
        }

        function sortByOrderProperty(route1, route2) {
            return route1.order > route2.order;
        }

        function toNavigationBarItem(route) {
            return {
                title: route.title,
                url: route.path || route.originalPath
            };
        }
    }
};
