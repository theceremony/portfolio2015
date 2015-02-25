'use strict';
window.$			= require('jquery');

var angular 		= require('angular'),
	createjs		= require('easel'),
	MenuCtrl 		= require('./controllers/MenuCtrl'),
	ToggleVisible 	= require('./directives/ToggleVisible'),
	ShowPreview 	= require('./directives/ShowPreview');
 

console.log(createjs);

angular 
	.module('ngAppStrict', [])
	.controller('MenuCtrl', ['$scope','$http','$filter', MenuCtrl])
	.directive('togglevisible',ToggleVisible)
	.directive('showpreview',ShowPreview);




