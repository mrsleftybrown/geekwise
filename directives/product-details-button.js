(function(angular) {
    "use strict";

    var app = angular.module('MyStore');

    // msProductDetailsButton in html is ms-product-details-button
    app.directive('msProductDetailsButton', function() {

        return {
            // E for Element
            // A for Attribute
            // C for Class
            scope: {
                // 3 types of bindings for scope properties
                // @ which is a string
                // & which is a one-way binding
                // = which is two-way binding
                productId: '@' // product-id
            }, // Isolated scope
            restrict: 'E',
            replace: true,
            templateUrl: 'templates/product-details-button.html',
            link: function(scope, elem, attr) {
                scope.productId = attr.productId;
                // elem = angular.element('ms-product-details-button');
                // elem = jquery $('ms-product-details-button');
                // elem[0] = document.getElementByTagName('ms-product-details-button')
                //attr = getElementByTagName('ms-product-details-button').getAttribute('product-id');
                console.log('elem', elem);
                console.log('elem[0]', elem[0])
            }

        };
    });

})(window.angular);

