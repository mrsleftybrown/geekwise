(function(angular) {
	"use strict";
 
	var app = angular.module('MyStore', ['ngCookies', 'ngMessages', 'ui.router']);

	//app.constant('APPNAME', {})

	app.value('config', {
		paypal: {
			merchantID: 'aaronaroberson@gmail.com'

		}
	});

})(window.angular);