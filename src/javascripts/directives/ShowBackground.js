'use strict';

module.exports = function(){
	return function($scope,element,attrs) {
		var backgroundStage = new createjs.Stage('canvas-bg');
		
		var circle = new createjs.Shape();
		circle.graphics.beginFill("red").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;
		backgroundStage.addChild(circle);
		

		console.log(backgroundStage.update);
		
	}
}