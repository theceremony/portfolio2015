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
	.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/work/:projectId',{
			controller:'WorkCtrl',
			templateUrl: '/partials/work.html'
		})
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
	.directive('showproject',ShowProject);