var assert = require('js-commons').assert;

module.exports = function () {
    var hierarchicalMode = false, navigationBarItems = {};

    this.setHierarchicalMode = function (newHierarchicalMode) {
        hierarchicalMode = newHierarchicalMode;
    };

    this.setItem = function (url, title) {
        navigationBarItems[url] = title;
    };

    this.$get = function ($route, $location) {
        if (Object.keys(navigationBarItems).length === 0) {
            navigationBarItems = extractNavigationBarItemsFromRoutes($route.routes);
        }

        return {
            getItems: function () {
                return navigationBarItems;
            },
            isActive: function (url) {
                var matches = hierarchicalMode ? startsWith : isSame;

                return matches($location.path(), url);

                function startsWith(path, url) {
                    return path.indexOf(url) === 0;
                }

                function isSame(path, url) {
                    return path === url;
                }
            }
        };
    };

    function extractNavigationBarItemsFromRoutes(routes) {
        return extractRoutes(routes)
            .filter(hasTitleProperty)
            .sort(sortByOrderProperty)
            .reduce(toNavigationBarItem, {});

        function extractRoutes(routes) {
            return Object.keys(routes).map(function (routeKey) {
                return routes[routeKey]
            });
        }

        function hasTitleProperty(route) {
            return !!route.title;
        }

        function sortByOrderProperty(route1, route2) {
            return route1.order > route2.order;
        }

        function toNavigationBarItem(currentNaviationBarItems, route) {
            const url = route.path || route.originalPath;

            currentNaviationBarItems[url] = route.title;

            return currentNaviationBarItems;
        }
    }
};
