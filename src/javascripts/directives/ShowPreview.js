'use strict';

module.exports = function(){
	return function($scope,element,attrs) {
		element.bind('mouseover',function($event){
			$event.preventDefault();
			console.log(attrs['showpreview']);
			console.log($scope.projects);
		})
	}
}