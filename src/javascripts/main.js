'use strict';
window.$			= require('jquery');

var angular 		= require('angular'),
	MenuCtrl 		= require('./controllers/MenuCtrl'),
	ToggleVisible 	= require('./directives/ToggleVisible'),
	ShowPreview 	= require('./directives/ShowPreview');
 

angular 
	.module('ngAppStrict', [])
	.controller('MenuCtrl', ['$scope','$http','$filter', MenuCtrl])
	.directive('togglevisible',ToggleVisible)
	.directive('showpreview',ShowPreview);




