'use strict';

// ------------------------------------------------------------
var createjs			= require('easel'),
	MenuCtrl 			= require('./controllers/MenuCtrl'),
	WorkCtrl 			= require('./controllers/WorkCtrl'),
	AboutCtrl 			= require('./controllers/AboutCtrl'),
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
			.when('/about',{
				controller:'AboutCtrl',
				templateUrl: '/partials/about.html'
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
	.factory('hoverProject', ['$rootScope', function($rootScope){
		var project = undefined;
		return {
			getHoverProject : function(){ return project; },
			setHoverProject : function(obj){ 
				project = obj; 
				$rootScope.$broadcast('hoverProject:updated',project);
			},
			unsetHoverProject : function(){
				project = undefined;
				$rootScope.$broadcast('hoverProject:unset');
				console.log('oh hi mark')	
			}
		}
	}])
	// Canvas Controller ------------------------------
	.controller('CanvasCtrl', ['$scope','$window','$filter','hoverProject', CanvasCtrl])
	.directive('displaybackground',['$window',DisplayBackground])
	// .directive('resizebackground',['$window',ResizeBackground])
	// Work Controller ------------------------------
	.controller('WorkCtrl',['$scope','$routeParams','$filter', WorkCtrl])
	.controller('AboutCtrl',['$scope','$routeParams','$filter', AboutCtrl])
	// Menu Controller -------------------------------
	.controller('MenuCtrl', ['$scope','$http','$filter','hoverProject', MenuCtrl])
	.directive('togglevisible',ToggleVisible)
	.directive('showpreview',ShowPreview)
	.directive('showproject',ShowProject)
	.controller('WelcomeCtrl',function($scope){
		$("body").removeClass('work-visible');
		$("section.header").removeClass('collapsed');
	});