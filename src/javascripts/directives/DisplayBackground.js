'use strict';

module.exports = function($window){
	return function(scope,element,attrs) {
		scope.stage = new createjs.Stage(element[0]);
		
		var circle = new createjs.Shape();
		circle.graphics.beginFill("red").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;
		scope.stage.addChild(circle);
		scope.stage.update();
		console.log('scope.stage',scope.stage);

		var win = $(angular.element($window));
		win.on('resize',function(e){
			scope.stage.width = win.width();
			scope.stage.height = win.height();
			scope.stage.update();
			console.log('scope.stage',scope.stage);
		});

	}
}