'use strict';
window.$			= require('jquery');

var angular 		= require('angular'),
	createjs		= require('easel'),
	MenuCtrl 		= require('./controllers/MenuCtrl'),
	ToggleVisible 	= require('./directives/ToggleVisible'),
	ShowPreview 	= require('./directives/ShowPreview');
 

angular 
	.module('ngAppStrict', ['ngRoute'])
	.controller('MenuCtrl', ['$scope','$http','$filter', MenuCtrl])
	.directive('togglevisible',ToggleVisible)
	.directive('showpreview',ShowPreview);




