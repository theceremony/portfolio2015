'use strict';
window.$		= require('jquery');

var angular 		= require('angular'),
	MenuCtrl 		= require('./controllers/MenuCtrl'),
	ToggleVisible 	= require('./directives/ToggleVisible');
 

angular // Work Menu Module
.module('ngAppStrict', [])
	.controller('MenuCtrl', ['$scope','$http', MenuCtrl])
	.directive('togglevisible',ToggleVisible)
	.directive('show-project-preview', ['', function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			// scope: {}, // {} = isolate, true = child, false/undefined = no change
			// controller: function($scope, $element, $attrs, $transclude) {},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				console.log(iElm);
				iElm.bind('mouseover',function($event){
					console.log(iAtters['show-project-preview']);
				})
			}
		};
	}]);




