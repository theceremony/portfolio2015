'use strict';

module.exports = function(){
	return function($scope,$window,element,attrs) {
		$scope.stage = new createjs.Stage(element[0]);
		var circle = new createjs.Shape();
		circle.graphics.beginFill("red").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;
		$scope.stage.addChild(circle);
		$scope.stage.update();

		$window.bind('resize',function($event){
			console.log($event);
		});
	}
}