'use strict';

module.exports = function($window){
	return function(scope,element,attrs) {
		var win = $(angular.element($window));
		scope.getWindowDimensions = function(){ return{'h':win.height(),'w':win.width() }; };
		scope.$watch(scope.getWindowDimensions, function(newValue,oldValue){
			scope.windowHeight 	= newValue.h;
			scope.windowWidth 	= newValue.w;
			$(element[0]).css({
				width:scope.windowWidth + 'px',
				height:scope.windowHeight + 'px'
			});
		},true);
		win.bind('resize',function(){ scope.$apply(); });
	}
}