'use strict';

module.exports = function($window){
	return function($scope,element,attrs) {
		$scope.stage = new createjs.Stage(element[0]);
		$scope.stage.update();
		var win = $(angular.element($window));
		$scope.stage.width = win.width();
		$scope.stage.height = win.height();
		$('#main-background-display').attr({
			width: win.width(),
			height: win.height()
		});
		win.on('resize',function(e){
			$scope.stage.width = win.width();
			$scope.stage.height = win.height();
			$('#main-background-display').attr({
				width: win.width(),
				height: win.height()
			});
			$scope.stage.update();
		});
	}
}