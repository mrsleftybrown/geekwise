(function(angular){
	"use strict";

	var app = angular.module('MyStore');

	app.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})
			.state('products', {
				url: '/products',
				template: '<h1>Products</h1>'
			})
			.state('about', {
				url: '/about',
				template: '<h1>About</h1>'
			})
			.state('contact', {
				url: '/contact',
				template: '<h1>Contact</h1>'
			});

	});

})(window.angular);