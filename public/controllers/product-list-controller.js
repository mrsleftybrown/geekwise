(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.controller('ProductListController', function($scope, ProductService) {

		function errorCallback(reason) {
			$scope.errorMessage = reason.statusText;
		}

		ProductService.getProducts().then(
			function(response) {
				$scope.products = response.data;

			}, errorCallback
		);


		ProductService.getProductFilters().then(
			function(response) {
				$scope.filters = response.data;
			},

			errorCallback

		);

	});

})(window.angular);

