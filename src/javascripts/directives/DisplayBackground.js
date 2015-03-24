'use strict';

module.exports = function($window){
	return function(scope,element,attrs) {
		scope.stage = new createjs.Stage(element.id);
		console.log('scope.stage',scope.stage);
		var circle = new createjs.Shape();
		circle.graphics.beginFill("red").drawCircle(0, 0, 50);
		circle.x = 100;
		circle.y = 100;
		scope.stage.addChild(circle);
		scope.stage.update();

		var win = $(angular.element($window));
		
		scope.getWindowDimensions = function(){
			return{'h':win.height(),'w':win.width() };
		};

		scope.$watch(scope.getWindowDimensions, function(newValue,oldValue){
			scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
            console.log(newValue);
		},true);

		win.bind('resize',function(){ scope.$apply(); });
	}
}