(function(angular) {
    "use strict";

    var app = angular.module('MyStore');

    app.factory('ProductService', function($http) {

        return {

            get: function() {
                return $http.get('assets/json/products.json');
            },

            filters: function() {
                return $http.get('assets/json/product-filters.json');
            }

        };

    });

})(window.angular);