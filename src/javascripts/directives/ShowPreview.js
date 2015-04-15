'use strict';

module.exports = function(){
	return function($scope,element,attrs) {
		element.bind('mouseover',function($event){
			$event.preventDefault();
			$scope.setHoverProject($scope.getJobById(attrs['showpreview']));
		});
		element.bind('mouseout',function($event){
			$event.preventDefault();
			$scope.unsetHoverProject();
		})
	}
}