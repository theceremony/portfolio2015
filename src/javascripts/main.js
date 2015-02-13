'use strict';
var angular 	= require('angular'),
	MenuCtrl 	= require('./controllers/MenuCtrl');
 

angular.module('ngAppStrict', []).controller('MenuCtrl', ['$scope','$http', MenuCtrl]);






