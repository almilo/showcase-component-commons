var assert = require('js-commons').assert;

module.exports = function () {
    var navigationBarItems;

    this.setItems = function (items) {
        assert.isArray(items);

        navigationBarItems = items;
    };

    this.$get = function navigationbarFactory() {
        return {
            getItems: function () {
                return navigationBarItems;
            }
        };
    };
};
