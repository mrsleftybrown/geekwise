(function(angular) {

    var app = angular.module('MyStore');

	// Inject in the ProductService
    app.controller('CartController', function($scope) {

	    // Set the items on the scope to the items in the ProductService
	    $scope.items;

	    $scope.addItem = function(item) {
		    // Add the item using the ProductService

	    };

	    $scope.removeItem = function(item) {
		    // Remove the item using the ProductService

	    };

	    $scope.cartSubtotal = function() {
		    // Returns the cartSubtotal from the ProductService

	    };

	    $scope.cartTotal = function() {
		    // Returns the cartTotal from the ProductService
	    }

    });

})(window.angular);
