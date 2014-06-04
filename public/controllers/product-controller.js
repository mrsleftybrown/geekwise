(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.controller('ProductDetail', function($scope, $stateParams, ProductService) {

        ProductService.get().then(function(response) {

            var products = response.data;

            angular.forEach(products, function(product) {

                if(product.guid === $stateParams.id) {

                    $scope.product = product;
                }
            });
        });

	});

})(window.angular);

