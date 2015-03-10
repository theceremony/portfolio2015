'use strict';
window.$			= require('jquery');
// ------------------------------------------------------------
var angular 			= require('angular'),
	createjs			= require('easel'),
	MenuCtrl 			= require('./controllers/MenuCtrl'),
	CanvasCtrl			= require('./controllers/CanvasCtrl'),
	ToggleVisible 		= require('./directives/ToggleVisible'),
	ShowPreview 		= require('./directives/ShowPreview'),
	DisplayBackground 	= require('./directives/DisplayBackground');
 // ------------------------------------------------------------

angular 
	.module('ngAppStrict', [])
	.controller('CanvasCtrl', ['$scope', CanvasCtrl])
	.directive('displaybackground',DisplayBackground)
	.controller('MenuCtrl', ['$scope','$http','$filter', MenuCtrl])
	.directive('togglevisible',ToggleVisible)
	.directive('showpreview',ShowPreview);




