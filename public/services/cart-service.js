(function(angular) {
	"use strict";

	var app = angular.module('MyStore');

	app.factory('CartService', function() {

		// Private items variable
		var items = {};

		// Angular factories return service objects
		return {

			getItems: function() {
				// Returns items object
                return items;
			},

			addItem: function(item) {
				// Checks if item already exists
				// If it exists, updates the quantity
				// If it doesn't exist, adds quantity property with value of 1 then
				// pushes the item onto the items array
                if(!items[item.guid]) {
                    item.quantity = 1;
                    items[item.guid] = item;
                } else {
                    items[item.guid].quantity += 1;
                    //items[item.guid].quantity = items[item.guid].quantity + 1
                }
			},

			removeItem: function(guid) {
				// Removes an item from the items array
				// Can use angular.forEach(array, function(item, index) to splice
                delete items[guid];
                // var myArr = new Array();
                // delete myArr.splice // returns false
                // delete myArr.length // return false
                // var x = 10;
                // delete x; // return false
                // y = 10;
                // delete y; // return true
			},

			emptyCart: function() {
				// Sets items array to empty array
                items = {};
			},

			getItemCount: function() {
				// returns number of items, including item quantity
                var total = 0;
                angular.forEach(items, function(item) {
                    total += item.quantity;
                });
                return total;
			},

			getCartSubtotal: function() {
				// Return the item quantity times item price for each item in the array
                var total = 0;
                angular.forEach(items, function(item) {
                    var s = parseInt(item.quantity);
                    var q = isNaN(s) ? 0 : s;
                    var p = parseFloat(item.isSpecial ? item.specialPrice : item.price);
                   total += q * p;
                });
                return total;
            },

			getCartTotal: function() {
				// Return the cartSubtotal plus shipping and handling
                // Return the item quantity times item price for each item in the array
                var total = 0;
                angular.forEach(items, function(item) {
                    var s = parseInt(item.quantity);
                    var q = isNaN(s) ? 0 : s;
                    var p = parseFloat(item.isSpecial ? item.specialPrice : item.price);
                    total += q * p;
                });
                return total;
			}
		};

	});

})(window.angular);
