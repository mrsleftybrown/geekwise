(function(angular) {

    var app = angular.module('MyStore');

    app.controller('HomeController', function($scope, ProductService) {
        // Initialize featuredProducts array literal
        // Alternatively could use new Array();
        $scope.featuredProducts = [];

        // The .then() function takes a callback function and gets the AJAX response
        // passed into it

        // The response has a data property with the resultant AJAX data
        // In the case of getProducts() it is the array of products from products.json
        ProductService.getProducts().then(function(response) {
            var productsArray = response.data;

            // Angular.forEach takes an array for the first parameter and a function for
            // the second parameter. During ach iteration over the array, the element is
            // passed into the function parameter
            angular.forEach(productsArray, function(item) {

                if(item.isFeatured) {
                    $scope.featuredProducts.push(item);
                }

            });
        });


    });

})(window.angular);
