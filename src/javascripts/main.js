'use strict';

// ------------------------------------------------------------
var createjs			= require('easel'),
	MenuCtrl 			= require('./controllers/MenuCtrl'),
	WorkCtrl 			= require('./controllers/WorkCtrl'),
	CanvasCtrl			= require('./controllers/CanvasCtrl'),
	ToggleVisible 		= require('./directives/ToggleVisible'),
	ShowPreview 		= require('./directives/ShowPreview'),
	ShowProject 		= require('./directives/ShowProject'),
	DisplayBackground 	= require('./directives/DisplayBackground'),
	ResizeBackground 	= require('./directives/ResizeBackground');
 // ------------------------------------------------------------


var app = angular.module('ngAppStrict',['ngRoute'])
	.config(['$routeProvider','$sceDelegateProvider',function($routeProvider,$sceDelegateProvider){
		$routeProvider
			.when('/work/:projectId',{
				controller:'WorkCtrl',
				templateUrl: '/partials/work.html'
			})
			.when('/welcome',{
				controller:'WelcomeCtrl'
			})
			.otherwise({
				redirectTo: '/welcome'
			});
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'https://player.vimeo.com/**'
		]);
	}])
	// Canvas Controller ------------------------------
	.controller('CanvasCtrl', CanvasCtrl)
	.directive('displaybackground',['$window',DisplayBackground])
	.directive('resizebackground',['$window',ResizeBackground])
	// Work Controller ------------------------------
	.controller('WorkCtrl',['$scope','$routeParams','$filter', WorkCtrl])
	// Menu Controller -------------------------------
	.controller('MenuCtrl', ['$scope','$http','$filter', MenuCtrl])
	.directive('togglevisible',ToggleVisible)
	.directive('showpreview',ShowPreview)
	.directive('showproject',ShowProject)
	.controller('WelcomeCtrl',function($scope){
		console.log('hello');
		$("body").removeClass('work-visible');
		$("section.header").removeClass('collapsed');
	});