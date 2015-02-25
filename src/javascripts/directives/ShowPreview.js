'use strict';

module.exports = function(){
	return function($scope,element,attrs) {
		element.bind('mouseover',function($event){
			$event.preventDefault();
			$scope.hoverProject = $scope.getJobById(attrs['showpreview']);
			// console.log($scope.hoverProject);
			
		})
	}
}