'use strict';

module.exports = function($scope,$http,$filter,hoverProject) {
	$scope.workMenuClass = "hidden";
	$http
		.get("./bin/data/projects.json")
		.then(function(res){ $scope.projects = res.data; });
	$scope.setHoverProject = function(obj){
		hoverProject.setHoverProject(obj);
	}
	$scope.unsetHoverProject = function(){
		hoverProject.unsetHoverProject();
	}
	$scope.getWorkMenuClass = function(){ 
		return $scope.workMenuClass;
	}
	$scope.getJobById = function(id){
		return $filter('filter')($scope.projects, {projectId:id})[0];
	}
	$scope.getProjectsByType = function(type){
		return $filter('filter')($scope.projects, {type:type});
	}
};
 